import { Topic } from '../../../types';

export const TESTING_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-testing-advanced',
    title: 'Проектирование для тестирования',
    difficulty: 'advanced',
    description: 'Проектирование кода для тестируемости: разделение логики и UI, dependency injection, чистые функции. Наблюдаемость для понимания поведения в тестах. Интеграция в CI/CD для автоматического запуска тестов. Senior должен проектировать код так, чтобы его легко тестировать.',
    keyPoints: [
      'Тестируемость: разделение логики и UI, dependency injection, чистые функции.',
      'Наблюдаемость: логирование, метрики, понимание поведения.',
      'CI/CD интеграция: автоматический запуск тестов при коммитах, блокировка при падении.',
      'Покрытие: метрики покрытия кода тестами, но не гнаться за 100%.'
    ],
    tags: ['architecture', 'testing', 'testability', 'advanced'],
    examples: [
      {
        title: 'Проектирование для тестирования',
        code: `// ❌ Плохо: логика смешана с UI
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`).then(r => r.json()).then(setUser);
  }, [userId]);
  return <div>{user?.name}</div>;
}

// ✅ Хорошо: логика отделена, легко тестировать
function useUserData(userId) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`).then(r => r.json()).then(setUser);
  }, [userId]);
  return user;
}

function UserProfile({ userId }) {
  const user = useUserData(userId);
  return <div>{user?.name}</div>;
}

// Хук можно тестировать отдельно`
      }
    ],
    relatedTopics: ['architecture-testing-integration'],
    funFact: 'Проектирование для тестируемости стало стандартом в современной разработке. Код, который легко тестировать, обычно лучше структурирован и проще поддерживать. Многие компании требуют покрытие тестами перед merge в основную ветку.'
  }
];
