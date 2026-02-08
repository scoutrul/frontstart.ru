import { MetaCategoryId } from './metaCategories';
import { getCachedMetaCategoryData } from './metaCategoriesLoader';

/**
 * Проверяет, является ли ID подразделом (категорией) в данном метаразделе
 */
export function isSubsectionId(metaCategoryId: MetaCategoryId, id: string): boolean {
  const categories = getCachedMetaCategoryData(metaCategoryId);
  if (!categories) return false;
  return categories.some(cat => cat.id === id);
}

/**
 * Получить подраздел по ID
 */
export function getSubsectionById(metaCategoryId: MetaCategoryId, subsectionId: string) {
  const categories = getCachedMetaCategoryData(metaCategoryId);
  if (!categories) return null;
  return categories.find(cat => cat.id === subsectionId) || null;
}
