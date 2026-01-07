import { Topic } from '../../../types';

export const DATA_LAYER_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-data-layer-facade',
    title: 'Паттерн Фасад для API',
    difficulty: 'advanced',
    description: 'Паттерн Фасад для API — создание простого интерфейса для сложной работы с API. Вместо того чтобы компонент делал множество запросов к разным endpoints, он вызывает методы фасада, который внутри делает нужные запросы и агрегирует данные. Это упрощает компоненты и централизует логику работы с API.\n\nФасад скрывает сложность: множественные запросы, агрегация данных, обработка ошибок, кэширование. Компонент получает простой интерфейс и не знает деталей реализации. Senior-разработчик должен понимать, когда и как применять паттерн Фасад для упрощения работы с API.',
    keyPoints: [
      'Фасад для API: простой интерфейс для сложной работы с API.',
      'Применение: агрегация данных из нескольких endpoints, скрытие сложности, централизация логики.',
      'Преимущества: упрощение компонентов, переиспользование логики, легко тестировать.',
      'Реализация: класс или модуль с методами, которые внутри делают запросы и агрегируют данные.',
      'Не путать с BFF: Фасад на фронтенде, BFF на бэкенде (адаптирует API под нужды клиента).'
    ],
    tags: ['architecture', 'api', 'facade', 'patterns', 'advanced'],
    examples: [
      {
        title: 'Фасад для пользовательского профиля',
        code: `class UserProfileService {
  async getUserProfile(userId: string) {
    // Агрегирует данные из нескольких endpoints
    const [user, orders, reviews] = await Promise.all([
      apiClient.get(\`/users/\${userId}\`),
      apiClient.get(\`/users/\${userId}/orders\`),
      apiClient.get(\`/users/\${userId}/reviews\`)
    ]);
    
    // Адаптирует данные под нужды фронтенда
    return {
      user: user.data,
      orders: orders.data.map(o => ({ id: o.id, total: o.total })),
      reviews: reviews.data.slice(0, 5) // Только последние 5
    };
  }
}

// Компонент использует простой интерфейс
function UserProfile({ userId }) {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    const service = new UserProfileService();
    service.getUserProfile(userId).then(setProfile);
  }, [userId]);
  
  // Не нужно знать про множественные запросы`
      }
    ],
    relatedTopics: ['architecture-component-facade', 'architecture-bff-backend-basics'],
    funFact: 'Паттерн Фасад для API часто используется в крупных приложениях, где один экран требует данных из множества endpoints. Без фасада компоненты становятся сложными и трудно поддерживаемыми. Фасад решает эту проблему, предоставляя простой интерфейс.',
    isFrontendEssential: true
  },
  {
    id: 'architecture-data-layer-bff-graphql',
    title: 'BFF и GraphQL',
    difficulty: 'advanced',
    description: 'BFF (Backend for Frontend) — промежуточный слой между фронтендом и микросервисами, который адаптирует API под нужды клиента. GraphQL — язык запросов, который позволяет клиенту запрашивать только нужные данные. Оба подхода решают проблему избыточности данных и множественных запросов.\n\nBFF агрегирует данные из микросервисов, адаптирует формат, кэширует ответы. GraphQL позволяет клиенту запрашивать точные данные одним запросом. Выбор зависит от архитектуры: BFF для микросервисов, GraphQL для гибких запросов. Senior-разработчик должен понимать оба подхода и выбирать подходящий.',
    keyPoints: [
      'BFF (Backend for Frontend): промежуточный слой, адаптирует API под нужды клиента.',
      'GraphQL: язык запросов, клиент запрашивает только нужные данные.',
      'BFF применение: агрегация данных из микросервисов, адаптация формата, кэширование.',
      'GraphQL применение: гибкие запросы, избежание over-fetching, единый endpoint.',
      'Выбор: BFF для микросервисов, GraphQL для гибких запросов, можно комбинировать.',
      'Инструменты: Apollo Client для GraphQL, Next.js API routes для BFF.'
    ],
    tags: ['architecture', 'api', 'bff', 'graphql', 'advanced'],
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
  
  // Адаптация под нужды фронтенда
  res.json({
    user,
    orders: orders.map(o => ({ id: o.id, total: o.total })),
    reviews: reviews.slice(0, 5)
  });
});

// Фронтенд делает один запрос
const profile = await fetch('/bff/profile/123');`
      },
      {
        title: 'GraphQL: гибкие запросы',
        code: `// GraphQL запрос
query GetUserProfile($userId: ID!) {
  user(id: $userId) {
    name
    email
    orders {
      id
      total
    }
    reviews(limit: 5) {
      text
      rating
    }
  }
}

// Клиент запрашивает только нужные поля
// Один запрос вместо множественных`
      }
    ],
    relatedTopics: ['architecture-bff-backend-basics'],
    funFact: ['Концепцию BFF (Backend for Frontend) придумали в SoundCloud в 2015 году, когда у них было 5 разных клиентов (веб, iOS, Android и т.д.) и один бэкенд, который всех обслуживал плохо. BFF решил проблему, создав отдельный слой для каждого клиента.', 'GraphQL создали в Facebook в 2012 году для мобильных приложений, и только в 2015 открыли для всех. Первая публичная версия сломала GitHub на день из-за наплыва запросов. GraphQL стал популярным решением для гибких API.'],
    isFrontendEssential: true
  }
];
