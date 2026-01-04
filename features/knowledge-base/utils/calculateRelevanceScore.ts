import { Topic, Category } from '../../../core/types';
import { MetaCategoryId } from '../../../core/metaCategories';
import { hasTitleMatch } from './hasTitleMatch';
import { hasCategoryMatch } from './hasCategoryMatch';
import { hasHighlightedWords } from './hasHighlightedWords';
import { createWordBoundaryRegex } from './wordBoundaryRegex';

/**
 * Подсчитывает балл релевантности темы на основе совокупности совпадений
 * 
 * @param topic - тема для оценки
 * @param category - категория темы
 * @param metaCategoryId - id метакатегории
 * @param highlightQuery - поисковый запрос (приоритет)
 * @param relevanceWords - слова для релевантности (теги текущей темы)
 * @param searchWords - массив слов для поиска (для проверки тегов)
 * @returns балл релевантности (чем выше, тем релевантнее)
 */
export const calculateRelevanceScore = (
  topic: Topic,
  category: Category | undefined,
  metaCategoryId: MetaCategoryId | undefined,
  highlightQuery: string | null | undefined,
  relevanceWords: string[] | undefined,
  searchWords?: string[]
): number => {
  let score = 0;

  // Получаем слова для поиска
  let words: string[] = [];
  if (highlightQuery && highlightQuery.trim().length >= 3) {
    words = highlightQuery
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.trim())
      .filter(word => word.length >= 3);
  } else if (relevanceWords && relevanceWords.length > 0) {
    words = relevanceWords.map(word => 
      word.toLowerCase().replace(/[^\w\s-]/g, '')
    ).filter(word => word.length >= 3);
  }

  if (searchWords) {
    words = searchWords;
  }

  if (words.length === 0) {
    return 0;
  }

  // Приоритет 1: Совпадение в заголовке - 10 баллов
  if (hasTitleMatch(topic.title, highlightQuery, relevanceWords)) {
    score += 10;
  }

  // Приоритет 2: Совпадение в категории/метакатегории - 8 баллов
  if (hasCategoryMatch(category, metaCategoryId, highlightQuery, relevanceWords)) {
    score += 8;
  }

  // Приоритет 3: Совпадение в описании - 6 баллов
  if (hasHighlightedWords(topic, highlightQuery, relevanceWords)) {
    score += 6;
  }

  // Приоритет 4: Совпадение в тегах - 4 балла
  const hasTagMatch = topic.tags.some(tag => 
    words.some(word => {
      const regex = createWordBoundaryRegex(word, 'i');
      return regex.test(tag);
    })
  );
  if (hasTagMatch) {
    score += 4;
  }

  return score;
};
