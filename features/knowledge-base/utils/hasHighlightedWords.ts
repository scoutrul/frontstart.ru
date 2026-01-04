import { Topic } from '../../../core/types';
import { extractRelevantFragment } from './extractRelevantFragment';
import { createWordBoundaryRegex } from './wordBoundaryRegex';

/**
 * Проверяет, содержит ли описание темы искомые слова (для подсветки)
 * 
 * @param topic - тема для проверки
 * @param highlightQuery - поисковый запрос (приоритет)
 * @param relevanceWords - слова для релевантности (теги текущей темы)
 * @returns true, если в описании найдены искомые слова
 */
export const hasHighlightedWords = (
  topic: Topic,
  highlightQuery: string | null | undefined,
  relevanceWords: string[] | undefined
): boolean => {
  if (!topic.description) {
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
      return regex.test(topic.description);
    });
  }

  // Если есть слова для релевантности, проверяем их
  if (relevanceWords && relevanceWords.length > 0) {
    const { foundWord } = extractRelevantFragment(topic.description, relevanceWords);
    return foundWord !== null;
  }

  return false;
};
