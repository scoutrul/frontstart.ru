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

  const filteredCategories = useMemo(() => {
    return KNOWLEDGE_BASE.map(cat => ({
      ...cat,
      topics: cat.topics.filter(t => {
        const matchesSearch = !searchQuery || 
          t.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = selectedDifficulty === 'all' || 
          t.difficulty === selectedDifficulty;
        const matchesTags = selectedTags.length === 0 || 
          selectedTags.some(tag => t.tags.includes(tag));
        return matchesSearch && matchesDifficulty && matchesTags;
      })
    })).filter(cat => cat.topics.length > 0);
  }, [searchQuery, selectedDifficulty, selectedTags]);

  return { flatTopics, filteredCategories };
};

