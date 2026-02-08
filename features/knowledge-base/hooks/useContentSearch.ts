import { useState, useMemo, useRef } from 'react';
import { Topic, Category } from '../../../core/types';
import { MetaCategoryId, META_CATEGORIES } from '../../../core/metaCategories';
import { hasTitleMatch } from '../utils/hasTitleMatch';
import { hasHighlightedWords } from '../utils/hasHighlightedWords';
import { hasCategoryMatch } from '../utils/hasCategoryMatch';
import { calculateRelevanceScore } from '../utils/calculateRelevanceScore';
import { createWordBoundaryRegex } from '../utils/wordBoundaryRegex';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { useMetaCategoryData } from '../../../contexts/MetaCategoryDataContext';

export interface TopicWithMeta {
  topic: Topic;
  metaCategoryId: MetaCategoryId;
  category: Category;
}

export const useContentSearch = (currentTopicId: string | undefined) => {
  const [contentSearchQuery, setContentSearchQuery] = useState<string | null>(null);
  const searchAreaRef = useRef<HTMLDivElement | null>(null);
  const { selectedMetaCategory } = useKnowledgeBaseStore();
  const { categories } = useMetaCategoryData();

  // Получаем темы только из текущей метакатегории (для оптимизации)
  const allTopicsWithMeta = useMemo(() => {
    const result: TopicWithMeta[] = [];
    
    categories.forEach(category => {
      category.topics.forEach(topic => {
        result.push({
          topic,
          metaCategoryId: selectedMetaCategory,
          category
        });
      });
    });
    
    return result;
  }, [categories, selectedMetaCategory]);

  const searchResults = useMemo(() => {
    if (!contentSearchQuery || !contentSearchQuery.trim() || !currentTopicId) {
      return [];
    }

    // Разбиваем запрос на слова (минимум 3 символа)
    const searchWords = contentSearchQuery
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.trim())
      .filter(word => word.length >= 3);

    if (searchWords.length === 0) {
      return [];
    }

    // Ищем темы, где хотя бы одно слово найдено в контенте (с границами слов)
    const filteredResults = allTopicsWithMeta.filter(({ topic, category, metaCategoryId }) => {
      const metaCategory = META_CATEGORIES.find(m => m.id === metaCategoryId);
      const searchText = [
        topic.title,
        topic.description,
        ...topic.keyPoints,
        ...(topic.examples?.map(ex => `${ex.title} ${ex.code}`) || []),
        ...topic.tags,
        category.title,
        metaCategory?.title || ''
      ].join(' ');

      // Используем границы слов для точного совпадения (с поддержкой кириллицы)
      return searchWords.some(word => {
        const regex = createWordBoundaryRegex(word, 'i');
        return regex.test(searchText);
      });
    });

    // Убираем дубликаты по id темы (оставляем первое вхождение)
    const seenTopicIds = new Set<string>();
    const results: TopicWithMeta[] = [];
    for (const item of filteredResults) {
      if (!seenTopicIds.has(item.topic.id)) {
        seenTopicIds.add(item.topic.id);
        results.push(item);
      }
    }

    // Сортируем результаты с учетом совокупности совпадений
    const searchQuery = contentSearchQuery.trim();
    
    return results.sort((a, b) => {
      // Сначала сортируем по общему баллу релевантности (по убыванию)
      const aScore = calculateRelevanceScore(
        a.topic,
        a.category,
        a.metaCategoryId,
        searchQuery,
        undefined,
        searchWords
      );
      const bScore = calculateRelevanceScore(
        b.topic,
        b.category,
        b.metaCategoryId,
        searchQuery,
        undefined,
        searchWords
      );
      
      if (aScore !== bScore) {
        return bScore - aScore; // По убыванию
      }
      
      // Если баллы равны, используем текущую систему приоритетов
      // Приоритет 1: Совпадение в заголовке
      const aHasTitleMatch = hasTitleMatch(a.topic.title, searchQuery, undefined);
      const bHasTitleMatch = hasTitleMatch(b.topic.title, searchQuery, undefined);
      
      if (aHasTitleMatch && !bHasTitleMatch) return -1;
      if (!aHasTitleMatch && bHasTitleMatch) return 1;
      
      // Приоритет 2: Название мета-секции или подсекции содержит искомое слово
      const aHasCategoryMatch = hasCategoryMatch(a.category, a.metaCategoryId, searchQuery, undefined);
      const bHasCategoryMatch = hasCategoryMatch(b.category, b.metaCategoryId, searchQuery, undefined);
      
      if (aHasCategoryMatch && !bHasCategoryMatch) return -1;
      if (!aHasCategoryMatch && bHasCategoryMatch) return 1;
      
      // Приоритет 3: Подсветка в тексте (description)
      const aHasHighlight = hasHighlightedWords(a.topic, searchQuery, undefined);
      const bHasHighlight = hasHighlightedWords(b.topic, searchQuery, undefined);
      
      if (aHasHighlight && !bHasHighlight) return -1;
      if (!aHasHighlight && bHasHighlight) return 1;
      
      // Приоритет 4: По тегам (с границами слов, поддерживающими кириллицу)
      const aHasTagMatch = a.topic.tags.some(tag => 
        searchWords.some(word => {
          const regex = createWordBoundaryRegex(word, 'i');
          return regex.test(tag);
        })
      );
      const bHasTagMatch = b.topic.tags.some(tag => 
        searchWords.some(word => {
          const regex = createWordBoundaryRegex(word, 'i');
          return regex.test(tag);
        })
      );
      
      if (aHasTagMatch && !bHasTagMatch) return -1;
      if (!aHasTagMatch && bHasTagMatch) return 1;
      
      // Если все приоритеты равны, сохраняем исходный порядок
      return 0;
    });
  }, [contentSearchQuery, allTopicsWithMeta, currentTopicId]);

  return {
    contentSearchQuery,
    setContentSearchQuery,
    searchResults,
    searchAreaRef
  };
};

