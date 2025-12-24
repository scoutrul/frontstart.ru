import { useMemo } from 'react';
import { Topic } from '../../../core/types';
import { useTopicsFilter } from './useTopicsFilter';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';

export const useCurrentTopic = () => {
  const { selectedTopicId } = useKnowledgeBaseStore();
  const { flatTopics } = useTopicsFilter();

  const currentTopic = useMemo(() => {
    const topic = flatTopics.find(t => t.id === selectedTopicId) || flatTopics[0];
    if (!topic) {
      console.error('No topics found in KNOWLEDGE_BASE');
    }
    return topic;
  }, [selectedTopicId, flatTopics]);

  const relatedTopics = useMemo(() => {
    if (!currentTopic) return [];
    return currentTopic.relatedTopics
      .map(id => flatTopics.find(t => t.id === id))
      .filter(Boolean) as Topic[];
  }, [currentTopic, flatTopics]);

  return { currentTopic, relatedTopics };
};

