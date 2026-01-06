import { Topic } from '../../../types';

export const DATA_LAYER_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-data-layer-basics',
    title: 'fetch и axios',
    difficulty: 'beginner',
    description: 'fetch — встроенный API браузера для HTTP-запросов. Он простой и не требует дополнительных библиотек, но имеет ограничения (нет автоматической отмены запросов, нет interceptors). axios — популярная библиотека с расширенными возможностями: interceptors, автоматическая сериализация JSON, отмена запросов.\n\nДля Junior важно понимать основы работы с API: GET для получения данных, POST для создания, PUT/PATCH для обновления, DELETE для удаления. Обработка ошибок, состояния загрузки, базовые заголовки (Content-Type, Authorization). Начинать с fetch, переходить на axios при необходимости.',
    keyPoints: [
      'fetch: встроенный API браузера, простой, не требует библиотек, но с ограничениями.',
      'axios: библиотека с расширенными возможностями (interceptors, отмена запросов, автоматическая сериализация).',
      'HTTP-методы: GET (получение), POST (создание), PUT/PATCH (обновление), DELETE (удаление).',
      'Обработка ошибок: try/catch для async/await, .catch() для промисов.',
      'Состояния: loading (загрузка), error (ошибка), data (данные).',
      'Заголовки: Content-Type (application/json), Authorization (Bearer token).'
    ],
    tags: ['architecture', 'api', 'fetch', 'axios', 'basics'],
    examples: [
      {
        title: 'fetch: базовое использование',
        code: `// GET запрос
async function getUsers() {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// POST запрос
async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  return response.json();
}`
      },
      {
        title: 'axios: расширенные возможности',
        code: `import axios from 'axios';

// GET запрос
const users = await axios.get('/api/users');

// POST запрос
const newUser = await axios.post('/api/users', {
  name: 'Иван',
  email: 'ivan@example.com'
});

// Автоматическая сериализация JSON
// Автоматическая обработка ошибок
// Interceptors для добавления токенов`
      }
    ],
    relatedTopics: ['architecture-data-layer-api-client'],
    funFact: 'fetch API был добавлен в браузеры в 2015 году, заменив XMLHttpRequest. До этого все использовали jQuery.ajax() или библиотеки вроде axios. fetch сделал HTTP-запросы встроенной возможностью JavaScript, не требуя дополнительных библиотек.'
  }
];
