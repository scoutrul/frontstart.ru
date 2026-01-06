import { Topic } from '../../../types';

export const BFF_BACKEND_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-bff-backend-advanced',
    title: 'Проектирование BFF и GraphQL-шлюзов',
    difficulty: 'advanced',
    description: 'Проектирование BFF требует понимания потребностей клиента, оптимизации запросов, кэширования, обработки ошибок. GraphQL-шлюзы объединяют несколько источников данных в единый GraphQL API. Senior должен уметь проектировать BFF и GraphQL-шлюзы для масштабируемых систем.',
    keyPoints: [
      'Проектирование BFF: понимание потребностей клиента, оптимизация, кэширование.',
      'GraphQL-шлюзы: объединение источников данных в единый GraphQL API.',
      'Оптимизация: батчинг запросов, кэширование, предзагрузка данных.',
      'Масштабирование: горизонтальное масштабирование, балансировка нагрузки.'
    ],
    tags: ['architecture', 'bff', 'graphql', 'gateway', 'advanced'],
    examples: [
      {
        title: 'GraphQL-шлюз',
        code: `// GraphQL-шлюз объединяет несколько источников
const resolvers = {
  Query: {
    user: async (_, { id }) => {
      // Запрос к микросервису пользователей
      return userService.get(id);
    },
    orders: async (_, { userId }) => {
      // Запрос к микросервису заказов
      return orderService.getByUser(userId);
    }
  }
};

// Единый GraphQL endpoint для всех данных`
      }
    ],
    relatedTopics: ['architecture-bff-backend-intermediate'],
    funFact: 'GraphQL-шлюзы стали популярными с ростом микросервисной архитектуры. Они позволяют объединить множество микросервисов в единый GraphQL API, упрощая работу фронтенда. Apollo Gateway — один из самых популярных решений.'
  }
];
