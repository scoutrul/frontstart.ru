import { useState, useMemo, useRef } from 'react';
import { getKnowledgeBaseByCategory } from '../../../core/constants';
import { Topic, Category } from '../../../core/types';
import { MetaCategoryId } from '../../../core/metaCategories';

export interface TopicWithMeta {
  topic: Topic;
  metaCategoryId: MetaCategoryId;
  category: Category;
}

export const useContentSearch = (currentTopicId: string | undefined) => {
  const [contentSearchQuery, setContentSearchQuery] = useState<string | null>(null);
  const searchAreaRef = useRef<HTMLDivElement | null>(null);

  // Получаем все темы из всех категорий с информацией о метакатегории и категории
  const allTopicsWithMeta = useMemo(() => {
    const allCategories: MetaCategoryId[] = [
      'javascript',
      'markup',
      'frameworks',
      'typescript',
      'architecture',
      'security',
      'tools',
      'network',
      'optimization'
    ];
    
    const result: TopicWithMeta[] = [];
    
    allCategories.forEach(metaCategoryId => {
      const categories = getKnowledgeBaseByCategory(metaCategoryId);
      categories.forEach(category => {
        category.topics.forEach(topic => {
          result.push({
            topic,
            metaCategoryId,
            category
          });
        });
      });
    });
    
    return result;
  }, []);

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

    // Ищем темы, где хотя бы одно слово найдено в контенте
    return allTopicsWithMeta.filter(({ topic }) => {
      const searchText = [
        topic.title,
        topic.description,
        ...topic.keyPoints,
        ...(topic.examples?.map(ex => `${ex.title} ${ex.code}`) || []),
        ...topic.tags
      ].join(' ').toLowerCase();

      return searchWords.some(word => searchText.includes(word));
    });
  }, [contentSearchQuery, allTopicsWithMeta, currentTopicId]);

  return {
    contentSearchQuery,
    setContentSearchQuery,
    searchResults,
    searchAreaRef
  };
};

