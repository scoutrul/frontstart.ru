import { useState, useMemo, useRef } from 'react';
import { KNOWLEDGE_BASE } from '../../../core/constants';
import { Topic } from '../../../core/types';

export const useContentSearch = (currentTopicId: string | undefined) => {
  const [contentSearchQuery, setContentSearchQuery] = useState<string | null>(null);
  const searchAreaRef = useRef<HTMLDivElement | null>(null);

  // Поиск по всему контенту всех тем
  const allTopics = useMemo(
    () => KNOWLEDGE_BASE.flatMap(cat => cat.topics),
    []
  );

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
    return allTopics.filter(t => {
      // Пропускаем текущую тему
      if (t.id === currentTopicId) return false;

      const searchText = [
        t.title,
        t.description,
        ...t.keyPoints,
        ...(t.examples?.map(ex => `${ex.title} ${ex.code}`) || []),
        ...t.tags
      ].join(' ').toLowerCase();

      return searchWords.some(word => searchText.includes(word));
    });
  }, [contentSearchQuery, allTopics, currentTopicId]);

  // Закрытие поиска при клике вне области поиска
  // Обработчик вынесен в компонент для более точного контроля

  return {
    contentSearchQuery,
    setContentSearchQuery,
    searchResults,
    searchAreaRef
  };
};

