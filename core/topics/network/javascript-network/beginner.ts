import { Topic } from '../../../types';

export const NETWORK_JAVASCRIPT_NETWORK_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'fetch-api',
    title: 'Fetch API',
    difficulty: 'beginner',
    description: 'Fetch API — современный JavaScript API для выполнения HTTP-запросов. Предоставляет простой интерфейс на основе Promise для работы с сетью. Поддерживает все HTTP-методы, заголовки, тело запроса и обработку ответов. Является заменой XMLHttpRequest, более удобен и функционален. Понимание Fetch API необходимо для работы с REST API и асинхронными запросами.',
    keyPoints: [
      'Promise-based: возвращает Promise, можно использовать async/await или .then().',
      'Методы: GET (по умолчанию), POST, PUT, DELETE, PATCH через параметр method.',
      'Заголовки: настройка через объект headers, автоматическая установка Content-Type для JSON.',
      'Тело запроса: JSON.stringify() для объектов, FormData для форм, строки для текста.',
      'Обработка ответа: response.json(), response.text(), response.blob() для разных форматов.',
      'Ошибки: fetch не отклоняет Promise при HTTP-ошибках (4xx, 5xx), нужно проверять response.ok.'
    ],
    tags: ['networks', 'javascript', 'fetch', 'api', 'async', 'basics'],
    examples: [
      {
        title: 'Базовое использование Fetch',
        code: `// GET-запрос (по умолчанию):
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// С async/await:
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`
      },
      {
        title: 'POST-запрос с JSON',
        code: `// POST-запрос с JSON:
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com'
  })
})
  .then(response => response.json())
  .then(data => console.log('Created:', data))
  .catch(error => console.error('Error:', error));

// С async/await:
async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  return await response.json();
}`
      },
      {
        title: 'Работа с заголовками',
        code: `// УСТАНОВКА ЗАГОЛОВКОВ:
fetch('https://api.example.com/users', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
    'X-Custom-Header': 'value'
  }
});

// ЧТЕНИЕ ЗАГОЛОВКОВ ОТВЕТА:
fetch('https://api.example.com/users')
  .then(response => {
    console.log(response.headers.get('Content-Type'));
    console.log(response.headers.get('X-RateLimit-Remaining'));
    return response.json();
  });

// ПРОВЕРКА СТАТУСА:
fetch('https://api.example.com/users')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(\`HTTP error! status: \${response.status}\`);
  });`
      },
      {
        title: 'Разные форматы ответа',
        code: `// JSON:
const jsonData = await response.json();

// Текст:
const textData = await response.text();

// Blob (бинарные данные):
const blob = await response.blob();
const imageUrl = URL.createObjectURL(blob);

// ArrayBuffer (сырые байты):
const buffer = await response.arrayBuffer();

// FormData:
const formData = await response.formData();

// ПРИМЕР С ИЗОБРАЖЕНИЕМ:
fetch('https://example.com/image.jpg')
  .then(response => response.blob())
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);
    document.getElementById('img').src = imageUrl;
  });`
      }
    ],
    relatedTopics: ['fetch-error-handling', 'abort-controller', 'xhr-vs-fetch'],
    isFrontendEssential: true
  },
  {
    id: 'fetch-error-handling',
    title: 'Обработка ошибок в fetch',
    difficulty: 'beginner',
    description: 'Обработка ошибок в Fetch API имеет особенности: fetch не отклоняет Promise при HTTP-ошибках (4xx, 5xx), только при сетевых ошибках. Нужно проверять response.ok или response.status для определения успешности запроса. Правильная обработка ошибок важна для стабильности приложения и хорошего UX.',
    keyPoints: [
      'HTTP-ошибки: fetch не отклоняет Promise при 4xx/5xx, нужно проверять response.ok.',
      'Сетевые ошибки: fetch отклоняет Promise при проблемах сети (нет интернета, таймаут).',
      'Проверка статуса: response.ok (true для 200-299) или response.status для точного кода.',
      'Обработка: проверять response.ok перед парсингом, выбрасывать ошибку для обработки в catch.',
      'Типы ошибок: TypeError (сеть), HTTPError (4xx/5xx), ParseError (неверный формат ответа).',
      'Практика: создавать функции-обёртки для единообразной обработки ошибок.'
    ],
    tags: ['networks', 'javascript', 'fetch', 'error-handling', 'basics'],
    examples: [
      {
        title: 'Проблема: fetch не отклоняет при HTTP-ошибках',
        code: `// ❌ НЕПРАВИЛЬНО:
fetch('https://api.example.com/users/999')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Если сервер вернёт 404:
// - fetch НЕ отклонит Promise
// - response.json() выполнится
// - data будет undefined или ошибка парсинга
// - catch НЕ сработает

// ✅ ПРАВИЛЬНО:
fetch('https://api.example.com/users/999')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \\\${response.status}\`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
      },
      {
        title: 'Обработка разных типов ошибок',
        code: `// СЕТЕВЫЕ ОШИБКИ (fetch отклоняет Promise):
fetch('https://api.example.com/users')
  .catch(error => {
    // TypeError: Failed to fetch
    // Причины: нет интернета, CORS, таймаут
    console.error('Network error:', error);
  });

// HTTP-ОШИБКИ (нужно проверять вручную):
fetch('https://api.example.com/users/999')
  .then(response => {
    if (!response.ok) {
      // 404, 500, и т.д.
      throw new Error(\`HTTP \\\${response.status}: \\\${response.statusText}\`);
    }
    return response.json();
  })
  .catch(error => {
    console.error('HTTP error:', error);
  });

// ОШИБКИ ПАРСИНГА:
fetch('https://api.example.com/users')
  .then(response => response.json())
  .catch(error => {
    // SyntaxError: Unexpected token
    // Причина: ответ не JSON
    console.error('Parse error:', error);
  });`
      },
      {
        title: 'Универсальная обработка ошибок',
        code: `// ФУНКЦИЯ-ОБЁРТКА:
async function fetchJSON(url, options = {}) {
  try {
    const response = await fetch(url, options);
    
    // Проверка HTTP-ошибок
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        \`HTTP \\\${response.status}: \\\${response.statusText}\\n\\\${errorText}\`
      );
    }
    
    // Парсинг JSON
    return await response.json();
  } catch (error) {
    // Обработка всех типов ошибок
    if (error instanceof TypeError) {
      console.error('Network error:', error.message);
    } else {
      console.error('Request failed:', error.message);
    }
    throw error;
  }
}

// ИСПОЛЬЗОВАНИЕ:
try {
  const users = await fetchJSON('https://api.example.com/users');
  console.log(users);
} catch (error) {
  // Обработка ошибки
}`
      },
      {
        title: 'Обработка специфичных статус-кодов',
        code: `// ОБРАБОТКА РАЗНЫХ СТАТУС-КОДОВ:
fetch('https://api.example.com/users')
  .then(response => {
    if (response.status === 401) {
      // Не авторизован
      throw new Error('Unauthorized - please login');
    }
    if (response.status === 403) {
      // Доступ запрещён
      throw new Error('Forbidden - insufficient permissions');
    }
    if (response.status === 404) {
      // Не найдено
      throw new Error('Resource not found');
    }
    if (response.status === 429) {
      // Слишком много запросов
      throw new Error('Rate limit exceeded');
    }
    if (response.status >= 500) {
      // Ошибка сервера
      throw new Error('Server error - please try later');
    }
    if (!response.ok) {
      throw new Error(\`HTTP \\\${response.status}\`);
    }
    return response.json();
  })
  .catch(error => {
    // Показывать пользователю понятное сообщение
    alert(error.message);
  });`
      }
    ],
    relatedTopics: ['fetch-api', 'abort-controller'],
    isFrontendEssential: true
  }
];
