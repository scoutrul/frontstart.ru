import { useMemo } from 'react';
import { getKnowledgeBaseByCategory } from '../../../core/constants';
import { Difficulty } from '../../../core/types';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';

export const useTags = () => {
  const { selectedDifficulty, selectedMetaCategory } = useKnowledgeBaseStore();

  const availableTags = useMemo(() => {
    const knowledgeBase = getKnowledgeBaseByCategory(selectedMetaCategory);
    const topicsByDifficulty = knowledgeBase
      .flatMap(cat => cat.topics)
      .filter(t => selectedDifficulty === 'all' || t.difficulty === selectedDifficulty);
    
    const tagCounts = new Map<string, number>();
    topicsByDifficulty.forEach(topic => {
      topic.tags.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    
    return Array.from(tagCounts.entries())
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
      })
      .map(([tag]) => tag);
  }, [selectedDifficulty, selectedMetaCategory]);

  return { availableTags };
};

