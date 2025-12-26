import { Topic } from '../../../types';

export const NETWORK_TOPICS: Topic[] = [
  {
    id: 'http-basics',
    title: 'Основы HTTP',
    description: 'HTTP (HyperText Transfer Protocol) — протокол для передачи данных. Методы: GET для получения, POST для создания, PUT для обновления, DELETE для удаления. Статус коды: 200 OK, 404 Not Found, 500 Server Error. Заголовки: Content-Type, Authorization, Cache-Control.',
    difficulty: 'beginner',
    tags: ['http', 'network', 'protocol'],
    keyPoints: [
      'GET для получения данных (идемпотентный).',
      'POST для создания ресурсов.',
      'PUT для полного обновления.',
      'PATCH для частичного обновления.',
      'DELETE для удаления ресурсов.'
    ],
    examples: [
      {
        title: 'HTTP методы',
        code: `// GET
fetch('/api/users');

// POST
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});

// PUT
fetch('/api/users/1', {
  method: 'PUT',
  body: JSON.stringify({ name: 'Jane' })
});`
      },
      {
        title: 'Статус коды',
        code: `200 OK - успешно
201 Created - создано
400 Bad Request - ошибка запроса
401 Unauthorized - не авторизован
404 Not Found - не найдено
500 Internal Server Error - ошибка сервера`
      }
    ],
    relatedTopics: ['rest-api']
  },
  {
    id: 'rest-api',
    title: 'REST API',
    description: 'REST (Representational State Transfer) — архитектурный стиль для API. Принципы: ресурсы через URL, HTTP методы для действий, статус коды для результатов. Ресурсы: идентифицируются через URL. Методы: соответствие HTTP методов операциям CRUD.',
    difficulty: 'intermediate',
    tags: ['rest', 'api', 'http'],
    keyPoints: [
      'Ресурсы идентифицируются через URL.',
      'GET для чтения, POST для создания, PUT для обновления, DELETE для удаления.',
      'Статус коды передают результат операции.',
      'RESTful API должны быть stateless.',
      'Использовать правильные HTTP методы для операций.'
    ],
    examples: [
      {
        title: 'RESTful endpoints',
        code: `GET    /api/users          # Список пользователей
GET    /api/users/1        # Пользователь с id=1
POST   /api/users          # Создать пользователя
PUT    /api/users/1        # Обновить пользователя
DELETE /api/users/1        # Удалить пользователя`
      }
    ],
    relatedTopics: ['http-basics', 'graphql-basics']
  },
  {
    id: 'graphql-basics',
    title: 'GraphQL',
    description: 'GraphQL — язык запросов для API. Запросы: клиент запрашивает только нужные поля. Мутации: изменение данных через mutations. Схемы: определение типов данных. Резолверы: функции для получения данных.',
    difficulty: 'intermediate',
    tags: ['graphql', 'api', 'queries'],
    keyPoints: [
      'Клиент запрашивает только нужные поля.',
      'Один запрос может получить данные из нескольких источников.',
      'Мутации изменяют данные.',
      'Схемы определяют структуру данных.',
      'Резолверы выполняют запросы.'
    ],
    examples: [
      {
        title: 'GraphQL запрос',
        code: `query {
  user(id: 1) {
    name
    email
    posts {
      title
    }
  }
}`
      },
      {
        title: 'Мутация',
        code: `mutation {
  createUser(name: "John", email: "john@example.com") {
    id
    name
  }
}`
      }
    ],
    relatedTopics: ['rest-api', 'websocket']
  },
  {
    id: 'websocket',
    title: 'WebSocket',
    description: 'WebSocket — протокол для двусторонней связи. События: открытие соединения, получение сообщений, закрытие. Переподключение: автоматическое переподключение при разрыве соединения. Использование: чаты, real-time обновления, игры.',
    difficulty: 'intermediate',
    tags: ['websocket', 'realtime', 'network'],
    keyPoints: [
      'WebSocket обеспечивает двустороннюю связь.',
      'Соединение остаётся открытым для обмена сообщениями.',
      'Автоматическое переподключение при разрыве.',
      'Используется для real-time приложений.',
      'Меньше overhead чем HTTP polling.'
    ],
    examples: [
      {
        title: 'WebSocket клиент',
        code: `const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
  console.log('Connected');
  ws.send('Hello Server');
};

ws.onmessage = (event) => {
  console.log('Received:', event.data);
};

ws.onclose = () => {
  console.log('Disconnected');
};`
      }
    ],
    relatedTopics: ['graphql-basics']
  }
];

