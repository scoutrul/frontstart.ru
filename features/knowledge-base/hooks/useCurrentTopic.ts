import { useMemo } from 'react';
import { Topic } from '../../../core/types';
import { useTopicsFilter } from './useTopicsFilter';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { findRelatedTopicsByTags } from '../utils/findRelatedTopicsByTags';
import { useMetaCategoryData } from '../../../contexts/MetaCategoryDataContext';

export const useCurrentTopic = () => {
  const { selectedTopicId } = useKnowledgeBaseStore();
  const { flatTopics } = useTopicsFilter();
  const { categories } = useMetaCategoryData();

  const currentTopic = useMemo(() => {
    const topic = flatTopics.find(t => t.id === selectedTopicId) || flatTopics[0];
    if (!topic) {
      console.error('No topics found in KNOWLEDGE_BASE');
    }
    return topic;
  }, [selectedTopicId, flatTopics]);

  const relatedTopics = useMemo(() => {
    if (!currentTopic) return { topics: [], explicitTopicIds: new Set<string>() };

    // Существующие связанные темы из темы (явные связи)
    const existingRelatedTopicIds = new Set(currentTopic.relatedTopics);

    // Автоматически находим связанные темы по тегам (только в текущей метакатегории)
    const autoRelatedTopicIds = findRelatedTopicsByTags(currentTopic, categories);

    // Объединяем и убираем дубликаты
    const allRelatedTopicIds = Array.from(
      new Set([...existingRelatedTopicIds, ...autoRelatedTopicIds])
    );

    // Преобразуем id в объекты тем
    const topics = allRelatedTopicIds
      .map(id => flatTopics.find(t => t.id === id))
      .filter(Boolean) as Topic[];

    return { topics, explicitTopicIds: existingRelatedTopicIds };
  }, [currentTopic, flatTopics, categories]);

  return { currentTopic, relatedTopics: relatedTopics.topics, explicitRelatedTopicIds: relatedTopics.explicitTopicIds };
};

