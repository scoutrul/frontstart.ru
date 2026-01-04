import { Category } from '../../../core/types';
import { MetaCategoryId } from '../../../core/metaCategories';
import { META_CATEGORIES } from '../../../core/metaCategories';
import { createWordBoundaryRegex } from './wordBoundaryRegex';

/**
 * Проверяет, содержит ли название категории или метакатегории искомые слова
 * 
 * @param category - категория темы
 * @param metaCategoryId - id метакатегории
 * @param highlightQuery - поисковый запрос (приоритет)
 * @param relevanceWords - слова для релевантности (теги текущей темы)
 * @returns true, если в названии категории или метакатегории найдены искомые слова
 */
export const hasCategoryMatch = (
  category: Category | undefined,
  metaCategoryId: MetaCategoryId | undefined,
  highlightQuery: string | null | undefined,
  relevanceWords: string[] | undefined
): boolean => {
  if (!category && !metaCategoryId) {
    return false;
  }

  // Получаем слова для поиска
  let searchWords: string[] = [];
  
  if (highlightQuery && highlightQuery.trim().length >= 3) {
    searchWords = highlightQuery
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.trim())
      .filter(word => word.length >= 3);
  } else if (relevanceWords && relevanceWords.length > 0) {
    searchWords = relevanceWords.map(word => 
      word.toLowerCase().replace(/[^\w\s-]/g, '')
    ).filter(word => word.length >= 3);
  }

  if (searchWords.length === 0) {
    return false;
  }

  // Проверяем название категории
  if (category) {
    // Используем границы слов для точного совпадения (с поддержкой кириллицы)
    if (searchWords.some(word => {
      const regex = createWordBoundaryRegex(word, 'i');
      return regex.test(category.title) || regex.test(category.id);
    })) {
      return true;
    }
  }

  // Проверяем название метакатегории
  if (metaCategoryId) {
    const metaCategory = META_CATEGORIES.find(m => m.id === metaCategoryId);
    if (metaCategory) {
      // Используем границы слов для точного совпадения (с поддержкой кириллицы)
      if (searchWords.some(word => {
        const regex = createWordBoundaryRegex(word, 'i');
        return regex.test(metaCategory.title) || regex.test(metaCategory.id);
      })) {
        return true;
      }
    }
  }

  return false;
};
