import { useMemo } from 'react';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { useMetaCategoryData } from '../../../contexts/MetaCategoryDataContext';

export const useTags = () => {
  const { selectedMetaCategory } = useKnowledgeBaseStore();
  const { categories: knowledgeBase } = useMetaCategoryData();

  const availableTags = useMemo(() => {
    const allTopics = knowledgeBase.flatMap(cat => cat.topics);
    
    const tagCounts = new Map<string, number>();
    allTopics.forEach(topic => {
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
  }, [knowledgeBase]);

  return { availableTags };
};

