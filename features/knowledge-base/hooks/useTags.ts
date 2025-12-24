import { useMemo } from 'react';
import { KNOWLEDGE_BASE } from '../../../core/constants';
import { Difficulty } from '../../../core/types';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';

export const useTags = () => {
  const { selectedDifficulty } = useKnowledgeBaseStore();

  const availableTags = useMemo(() => {
    const topicsByDifficulty = KNOWLEDGE_BASE
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
  }, [selectedDifficulty]);

  return { availableTags };
};

