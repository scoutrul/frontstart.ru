import { Topic } from '../../../types';

export const BFF_BACKEND_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-bff-backend-basics',
    title: 'REST и GraphQL API',
    difficulty: 'beginner',
    description: 'REST API — стандартный подход к созданию API: ресурсы доступны через URL, HTTP-методы (GET, POST, PUT, DELETE) для операций. GraphQL — язык запросов: клиент запрашивает только нужные данные одним запросом. Оба подхода решают разные задачи.\n\nДля Junior важно понимать: REST для простых случаев, GraphQL для гибких запросов. Базовые концепции: endpoints, методы, заголовки, обработка ошибок. Это основа работы с бэкендом.',
    keyPoints: [
      'REST API: ресурсы через URL, HTTP-методы для операций, стандартный подход.',
      'GraphQL: язык запросов, клиент запрашивает только нужные данные, гибкость.',
      'REST применение: простые CRUD операции, стандартные endpoints.',
      'GraphQL применение: сложные запросы, избежание over-fetching, единый endpoint.',
      'Выбор: REST для простоты, GraphQL для гибкости.'
    ],
    tags: ['architecture', 'api', 'rest', 'graphql', 'basics'],
    examples: [
      {
        title: 'REST vs GraphQL',
        code: `// REST: множественные запросы
const user = await fetch('/api/users/1');
const orders = await fetch('/api/users/1/orders');

// GraphQL: один запрос
const { data } = await graphql(\`
  query {
    user(id: 1) {
      name
      orders {
        id
        total
      }
    }
  }
\`);`
      }
    ],
    relatedTopics: ['architecture-bff-backend-intermediate'],
    funFact: 'GraphQL создали в Facebook в 2012 году для мобильных приложений, и только в 2015 открыли для всех. Первая публичная версия сломала GitHub на день из-за наплыва запросов. GraphQL стал популярным решением для гибких API.'
  }
];
