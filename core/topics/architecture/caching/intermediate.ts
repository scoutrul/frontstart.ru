import { Topic } from '../../../types';

export const CACHING_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-caching-react-query',
    title: 'React Query и SWR',
    difficulty: 'intermediate',
    description: 'React Query и SWR — библиотеки для кэширования данных с сервера. Они автоматически кэшируют ответы, инвалидируют кэш, делают refetch при фокусе, обрабатывают ошибки. Это упрощает работу с серверными данными и улучшает UX.\n\nReact Query более мощный, SWR проще. Обе библиотеки решают проблемы: дублирование запросов, устаревшие данные, сложная логика обновления. Middle-разработчик должен уметь использовать эти библиотеки для эффективного кэширования.',
    keyPoints: [
      'React Query/SWR: автоматическое кэширование, инвалидация, refetch, обработка ошибок.',
      'Кэширование: автоматическое сохранение ответов, использование кэша при повторных запросах.',
      'Инвалидация: обновление кэша после мутаций, ручная и автоматическая инвалидация.',
      'Prefetching: предзагрузка данных до того, как они понадобятся.',
      'Преимущества: меньше запросов, актуальные данные, простота использования.'
    ],
    tags: ['architecture', 'caching', 'react-query', 'swr', 'intermediate'],
    examples: [
      {
        title: 'React Query: кэширование и инвалидация',
        code: `import { useQuery, useQueryClient } from 'react-query';

function UserProfile({ userId }) {
  const queryClient = useQueryClient();
  
  const { data: user } = useQuery(
    ['user', userId],
    () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    { staleTime: 5 * 60 * 1000 } // 5 минут
  );
  
  const updateUser = async (newData) => {
    await fetch(\`/api/users/\${userId}\`, {
      method: 'PUT',
      body: JSON.stringify(newData)
    });
    
    // Инвалидировать кэш
    queryClient.invalidateQueries(['user', userId]);
  };
  
  return <div>{user?.name}</div>;
}`
      }
    ],
    relatedTopics: ['architecture-caching-basics', 'architecture-caching-advanced'],
    funFact: 'React Query был создан Таннером Линсли в 2019 году. Он решил проблему, с которой сталкивался в каждом проекте: кэширование данных с сервера. React Query стал одним из самых популярных решений для работы с серверными данными в React.'
  }
];
