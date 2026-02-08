
import { META_CATEGORIES, MetaCategoryId } from '../../../core/metaCategories';
import { Category } from '../../../core/types';
import { getCachedMetaCategoryData } from '../../../core/metaCategoriesLoader';
import { getTopicMetaCategory, getTopicCategoryId } from '../../../core/topicIndex';

export const findTopicMeta = (topicId: string): { metaCategoryId: MetaCategoryId | null; category: Category | null } => {
  // Используем индекс для поиска метакатегории
  const metaCategoryId = getTopicMetaCategory(topicId);
  
  if (!metaCategoryId) {
    return { metaCategoryId: null, category: null };
  }
  
  // Пытаемся получить категорию из загруженных данных
  const categories = getCachedMetaCategoryData(metaCategoryId);
  
  if (!categories) {
    // Данные ещё не загружены, возвращаем только метакатегорию
    return { metaCategoryId, category: null };
  }

  const categoryId = getTopicCategoryId(topicId);
  const category = categories.find(c => c.id === categoryId) || null;

  return { metaCategoryId, category };
};




