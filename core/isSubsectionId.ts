import { MetaCategoryId } from './metaCategories';
import { META_CATEGORIES_DATA } from './metaCategoriesData';

/**
 * Проверяет, является ли ID подразделом (категорией) в данном метаразделе
 */
export function isSubsectionId(metaCategoryId: MetaCategoryId, id: string): boolean {
  const categories = META_CATEGORIES_DATA[metaCategoryId];
  if (!categories) return false;
  return categories.some(cat => cat.id === id);
}

/**
 * Получить подраздел по ID
 */
export function getSubsectionById(metaCategoryId: MetaCategoryId, subsectionId: string) {
  const categories = META_CATEGORIES_DATA[metaCategoryId];
  if (!categories) return null;
  return categories.find(cat => cat.id === subsectionId) || null;
}
