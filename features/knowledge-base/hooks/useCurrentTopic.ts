import { useMemo } from 'react';
import { Topic } from '../../../core/types';
import { useTopicsFilter } from './useTopicsFilter';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { META_CATEGORIES_DATA } from '../../../core/metaCategoriesData';
import { findRelatedTopicsByTags } from '../utils/findRelatedTopicsByTags';

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

  // Получаем все категории из всех мета-категорий
  const allCategories = useMemo(() => {
    return Object.values(META_CATEGORIES_DATA).flat();
  }, []);

  const relatedTopics = useMemo(() => {
    if (!currentTopic) return { topics: [], explicitTopicIds: new Set<string>() };

    // Существующие связанные темы из темы (явные связи)
    const existingRelatedTopicIds = new Set(currentTopic.relatedTopics);

    // Автоматически находим связанные темы по тегам
    const autoRelatedTopicIds = findRelatedTopicsByTags(currentTopic, allCategories);

    // Объединяем и убираем дубликаты
    const allRelatedTopicIds = Array.from(
      new Set([...existingRelatedTopicIds, ...autoRelatedTopicIds])
    );

    // Преобразуем id в объекты тем
    const topics = allRelatedTopicIds
      .map(id => flatTopics.find(t => t.id === id))
      .filter(Boolean) as Topic[];

    return { topics, explicitTopicIds: existingRelatedTopicIds };
  }, [currentTopic, flatTopics, allCategories]);

  return { currentTopic, relatedTopics: relatedTopics.topics, explicitRelatedTopicIds: relatedTopics.explicitTopicIds };
};

