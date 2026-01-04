import { createWordBoundaryRegex } from './wordBoundaryRegex';

/**
 * Проверяет, содержит ли заголовок темы искомые слова
 * 
 * @param topic - тема для проверки
 * @param highlightQuery - поисковый запрос (приоритет)
 * @param relevanceWords - слова для релевантности (теги текущей темы)
 * @returns true, если в заголовке найдены искомые слова
 */
export const hasTitleMatch = (
  topicTitle: string,
  highlightQuery: string | null | undefined,
  relevanceWords: string[] | undefined
): boolean => {
  if (!topicTitle) {
    return false;
  }

  // Если есть поисковый запрос, проверяем его
  if (highlightQuery && highlightQuery.trim().length >= 3) {
    const searchWords = highlightQuery
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.trim())
      .filter(word => word.length >= 3);
    
    // Используем границы слов для точного совпадения (с поддержкой кириллицы)
    return searchWords.some(word => {
      const regex = createWordBoundaryRegex(word, 'i');
      return regex.test(topicTitle);
    });
  }

  // Если есть слова для релевантности, проверяем их
  if (relevanceWords && relevanceWords.length > 0) {
    return relevanceWords.some(word => {
      const normalizedWord = word.toLowerCase().replace(/[^\w\s-]/g, '');
      if (normalizedWord.length < 3) return false;
      // Используем границы слов для точного совпадения (с поддержкой кириллицы)
      const regex = createWordBoundaryRegex(normalizedWord, 'i');
      return regex.test(topicTitle);
    });
  }

  return false;
};
