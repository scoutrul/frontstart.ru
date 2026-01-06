import { Topic } from '../../../types';

export const BFF_BACKEND_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-bff-backend-intermediate',
    title: 'BFF как переводчик API',
    difficulty: 'intermediate',
    description: 'BFF (Backend for Frontend) — промежуточный слой между фронтендом и микросервисами, который адаптирует API под нужды клиента. BFF агрегирует данные из нескольких микросервисов, адаптирует формат, кэширует ответы. Это упрощает работу фронтенда и улучшает производительность.',
    keyPoints: [
      'BFF: промежуточный слой, адаптирует API под нужды клиента.',
      'Функции: агрегация данных, адаптация формата, кэширование, оптимизация запросов.',
      'Преимущества: упрощение фронтенда, оптимизация запросов, адаптация под клиента.',
      'Реализация: отдельный сервис между фронтендом и микросервисами.'
    ],
    tags: ['architecture', 'bff', 'api', 'intermediate'],
    examples: [
      {
        title: 'BFF: агрегация данных',
        code: `// BFF endpoint
app.get('/bff/profile/:id', async (req, res) => {
  const [user, orders, reviews] = await Promise.all([
    userService.get(req.params.id),
    orderService.getByUser(req.params.id),
    reviewService.getByUser(req.params.id)
  ]);
  
  res.json({ user, orders, reviews });
});

// Фронтенд делает один запрос вместо трёх`
      }
    ],
    relatedTopics: ['architecture-bff-backend-basics'],
    funFact: 'Концепцию BFF (Backend for Frontend) придумали в SoundCloud в 2015 году, когда у них было 5 разных клиентов (веб, iOS, Android и т.д.) и один бэкенд, который всех обслуживал плохо. BFF решил проблему, создав отдельный слой для каждого клиента.'
  }
];
