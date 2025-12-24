import { useMemo } from 'react';
import { KNOWLEDGE_BASE } from '../../../core/constants';
import { Category, Difficulty } from '../../../core/types';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';

export const useTopicsFilter = () => {
  const { searchQuery, selectedDifficulty, selectedTags } = useKnowledgeBaseStore();

  const flatTopics = useMemo(
    () => KNOWLEDGE_BASE.flatMap(c => c.topics),
    []
  );

  const { isLearned } = useKnowledgeBaseStore();

  const filteredCategories = useMemo(() => {
    // Разбиваем запрос на слова (минимум 3 символа)
    // Разбиваем по пробелам, фильтруем слова >= 3 символов
    const searchWords = searchQuery
      .toLowerCase()
      .split(/\s+/)
      .map(word => word.trim())
      .filter(word => word.length >= 3);
    
    return KNOWLEDGE_BASE.map(cat => ({
      ...cat,
      topics: cat.topics
        .filter(t => {
          // Поиск по словам: хотя бы одно слово должно быть найдено в title, description или tags
          const matchesSearch = !searchQuery || searchWords.length === 0 || 
            searchWords.some(word => {
              const titleMatch = t.title.toLowerCase().includes(word);
              const descriptionMatch = t.description.toLowerCase().includes(word);
              const tagsMatch = t.tags.some(tag => tag.toLowerCase().includes(word));
              return titleMatch || descriptionMatch || tagsMatch;
            });
          const matchesDifficulty = selectedDifficulty === 'all' || 
            t.difficulty === selectedDifficulty;
          const matchesTags = selectedTags.length === 0 || 
            selectedTags.some(tag => t.tags.includes(tag));
          return matchesSearch && matchesDifficulty && matchesTags;
        })
        .sort((a, b) => {
          const aLearned = isLearned(a.id);
          const bLearned = isLearned(b.id);
          // Изученные темы в конец списка
          if (aLearned && !bLearned) return 1;
          if (!aLearned && bLearned) return -1;
          return 0; // Сохраняем исходный порядок для тем с одинаковым статусом
        })
    })).filter(cat => cat.topics.length > 0);
  }, [searchQuery, selectedDifficulty, selectedTags, isLearned]);

  return { flatTopics, filteredCategories };
};

