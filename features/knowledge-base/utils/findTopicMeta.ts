
import { getKnowledgeBaseByCategory } from '../../../core/constants';
import { Category } from '../../../core/types';
import { MetaCategoryId, META_CATEGORIES } from '../../../core/metaCategories';

export const findTopicMeta = (topicId: string): { metaCategoryId: MetaCategoryId | null; category: Category | null } => {
  const allCategoryIds = META_CATEGORIES.map(m => m.id);

  for (const categoryId of allCategoryIds) {
    const categories = getKnowledgeBaseByCategory(categoryId);
    for (const category of categories) {
      const topic = category.topics.find(t => t.id === topicId);
      if (topic) {
        return {
          metaCategoryId: categoryId,
          category
        };
      }
    }
  }

  return {
    metaCategoryId: null,
    category: null
  };
};




