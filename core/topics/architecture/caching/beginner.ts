import { Topic } from '../../../types';

export const CACHING_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-caching-basics',
    title: 'useEffect и базовое кэширование',
    difficulty: 'beginner',
    description: 'useEffect — хук React для побочных эффектов (загрузка данных, подписки). Базовое кэширование через useState: сохранять данные в состоянии, не загружать повторно. Это простой подход для небольших приложений, но не масштабируется.\n\nДля Junior важно понимать: useEffect для загрузки данных, зависимости для контроля перезагрузки, очистка эффектов. Базовое кэширование через состояние — начало, но для сложных случаев нужны специализированные решения.',
    keyPoints: [
      'useEffect: хук для побочных эффектов (загрузка данных, подписки).',
      'Зависимости: массив зависимостей контролирует, когда эффект выполняется.',
      'Очистка: возврат функции из useEffect для очистки (отписки, таймеры).',
      'Базовое кэширование: сохранять данные в useState, не загружать повторно.',
      'Ограничения: нет автоматической инвалидации, нет синхронизации, не масштабируется.'
    ],
    tags: ['architecture', 'caching', 'useEffect', 'basics'],
    examples: [
      {
        title: 'useEffect для загрузки данных',
        code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]); // Загружать при изменении userId
  
  return <div>{user?.name}</div>;
}`
      }
    ],
    relatedTopics: ['architecture-caching-react-query'],
    funFact: 'useEffect был добавлен в React 16.8 вместе с хуками в 2018 году. Он заменил lifecycle методы (componentDidMount, componentDidUpdate) и сделал работу с побочными эффектами проще и понятнее.',
    isFrontendEssential: true
  }
];
