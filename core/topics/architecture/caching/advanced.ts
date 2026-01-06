import { Topic } from '../../../types';

export const CACHING_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-caching-advanced',
    title: 'Стратегии кэширования',
    difficulty: 'advanced',
    description: 'Продвинутые стратегии кэширования: stale-while-revalidate (показывать устаревшие данные, обновлять в фоне), синхронизация между вкладками (BroadcastChannel), оптимистичные обновления, кэширование на уровне CDN. Senior должен понимать эти стратегии и применять их для оптимизации производительности.',
    keyPoints: [
      'stale-while-revalidate: показывать устаревшие данные сразу, обновлять в фоне.',
      'Синхронизация вкладок: BroadcastChannel для синхронизации кэша между вкладками.',
      'Оптимистичные обновления: показывать изменения сразу, синхронизировать потом.',
      'CDN кэширование: кэширование статических ресурсов на CDN, уменьшение нагрузки на сервер.',
      'Стратегии: выбор стратегии зависит от типа данных и требований к актуальности.'
    ],
    tags: ['architecture', 'caching', 'strategies', 'performance', 'advanced'],
    examples: [
      {
        title: 'stale-while-revalidate',
        code: `// Показывать устаревшие данные сразу, обновлять в фоне
const { data } = useQuery(
  ['users'],
  fetchUsers,
  {
    staleTime: 5 * 60 * 1000, // 5 минут
    cacheTime: 10 * 60 * 1000, // 10 минут
    refetchOnWindowFocus: true // Обновлять при фокусе
  }
);

// Пользователь видит данные сразу (из кэша)
// Обновление происходит в фоне`
      }
    ],
    relatedTopics: ['architecture-caching-react-query'],
    funFact: 'Стратегия stale-while-revalidate была популяризирована HTTP Cache-Control заголовком и стала стандартом в веб-разработке. Она обеспечивает баланс между производительностью (показывать данные сразу) и актуальностью (обновлять в фоне).'
  }
];
