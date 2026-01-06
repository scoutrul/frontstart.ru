import { Topic } from '../../../types';

export const NETWORK_JAVASCRIPT_NETWORK_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'abort-controller',
    title: 'AbortController',
    difficulty: 'intermediate',
    description: 'AbortController — API для отмены fetch-запросов и других асинхронных операций. Позволяет прервать запрос до его завершения, что полезно при отмене пользователем действия, таймаутах и очистке при размонтировании компонента. Используется через signal в fetch и вызов abort() для отмены. Понимание AbortController важно для управления жизненным циклом запросов.',
    keyPoints: [
      'Создание: new AbortController() создаёт контроллер с методом abort() и свойством signal.',
      'Использование: передать signal в опции fetch, вызвать abort() для отмены запроса.',
      'Отмена: вызов abort() отклоняет Promise с ошибкой AbortError, запрос прерывается.',
      'Причины отмены: пользователь отменил действие, таймаут, компонент размонтирован, новый запрос заменяет старый.',
      'Таймауты: можно использовать AbortController для реализации таймаутов запросов.',
      'Очистка: важно отменять запросы при размонтировании компонентов для предотвращения утечек памяти.'
    ],
    tags: ['networks', 'javascript', 'fetch', 'abort', 'async', 'intermediate'],
    examples: [
      {
        title: 'Базовое использование AbortController',
        code: `// СОЗДАНИЕ КОНТРОЛЛЕРА:
const controller = new AbortController();
const signal = controller.signal;

// ИСПОЛЬЗОВАНИЕ В FETCH:
fetch('https://api.example.com/users', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    } else {
      console.error('Error:', error);
    }
  });

// ОТМЕНА ЗАПРОСА:
controller.abort();
// Запрос прерывается, Promise отклоняется с AbortError`
      },
      {
        title: 'Отмена при действии пользователя',
        code: `// ОТМЕНА ПРИ НАЖАТИИ КНОПКИ:
let controller;

async function searchUsers(query) {
  // Отменить предыдущий запрос, если есть
  if (controller) {
    controller.abort();
  }
  
  // Создать новый контроллер
  controller = new AbortController();
  
  try {
    const response = await fetch(
      \`https://api.example.com/users?q=\\\${query}\`,
      { signal: controller.signal }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Search cancelled');
    }
  }
}

// КНОПКА ОТМЕНЫ:
document.getElementById('cancel').addEventListener('click', () => {
  if (controller) {
    controller.abort();
  }
});`
      },
      {
        title: 'Таймаут запроса',
        code: `// РЕАЛИЗАЦИЯ ТАЙМАУТА:
function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  return fetch(url, {
    ...options,
    signal: controller.signal
  })
    .then(response => {
      clearTimeout(timeoutId);
      return response;
    })
    .catch(error => {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    });
}

// ИСПОЛЬЗОВАНИЕ:
fetchWithTimeout('https://api.example.com/users', {}, 3000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error.message === 'Request timeout') {
      console.error('Request took too long');
    }
  });`
      },
      {
        title: 'Очистка при размонтировании компонента',
        code: `// REACT ПРИМЕР:
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    
    fetch('https://api.example.com/users', {
      signal: controller.signal
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error:', error);
        }
      });
    
    // Очистка при размонтировании
    return () => {
      controller.abort();
    };
  }, []);
  
  return <div>{/* ... */}</div>;
}

// БЕЗ ОЧИСТКИ:
// Если компонент размонтируется до завершения запроса,
// setUsers вызовется после размонтирования → ошибка`
      },
      {
        title: 'Отмена нескольких запросов',
        code: `// ОТМЕНА ГРУППЫ ЗАПРОСОВ:
const controller = new AbortController();

// Несколько запросов с одним signal:
Promise.all([
  fetch('/api/users', { signal: controller.signal }),
  fetch('/api/posts', { signal: controller.signal }),
  fetch('/api/comments', { signal: controller.signal })
])
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(([users, posts, comments]) => {
    console.log({ users, posts, comments });
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('All requests cancelled');
    }
  });

// ОТМЕНА ВСЕХ:
controller.abort();
// Все три запроса отменяются`
      }
    ],
    relatedTopics: ['fetch-api', 'fetch-error-handling']
  },
  {
    id: 'xhr-vs-fetch',
    title: 'XMLHttpRequest vs fetch',
    difficulty: 'intermediate',
    description: 'XMLHttpRequest и fetch — два способа выполнения HTTP-запросов в JavaScript. XMLHttpRequest — старый API с callback-based интерфейсом и событиями. fetch — современный Promise-based API, более удобный и функциональный. fetch не поддерживает прогресс загрузки и некоторые продвинутые возможности XHR, но в большинстве случаев предпочтительнее. Понимание различий помогает выбрать правильный инструмент.',
    keyPoints: [
      'Интерфейс: XHR использует события и callbacks, fetch использует Promise и async/await.',
      'Поддержка: XHR поддерживается везде, fetch требует полифилл для старых браузеров (IE).',
      'Прогресс: XHR поддерживает отслеживание прогресса загрузки, fetch — нет (можно через Streams API).',
      'Отмена: XHR можно отменить через abort(), fetch через AbortController.',
      'CORS: оба поддерживают CORS, но XHR имеет особенности с credentials.',
      'Рекомендация: использовать fetch для новых проектов, XHR только для специфичных случаев (прогресс, старые браузеры).'
    ],
    tags: ['networks', 'javascript', 'fetch', 'xhr', 'api', 'intermediate'],
    examples: [
      {
        title: 'XMLHttpRequest — старый способ',
        code: `// XHR С CALLBACKS:
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.example.com/users');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Network error');
};
xhr.send();

// ПРОБЛЕМЫ:
// - Callback hell
// - Нет Promise
// - Сложнее обрабатывать ошибки
// - Многословный код`
      },
      {
        title: 'fetch — современный способ',
        code: `// FETCH С PROMISE:
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP \\\${response.status}\`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// С ASYNC/AWAIT:
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) {
      throw new Error(\`HTTP \\\${response.status}\`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// ПРЕИМУЩЕСТВА:
// - Promise-based
// - async/await
// - Проще и чище
// - Лучшая обработка ошибок`
      },
      {
        title: 'Отслеживание прогресса',
        code: `// XHR ПОДДЕРЖИВАЕТ ПРОГРЕСС:
const xhr = new XMLHttpRequest();

xhr.upload.onprogress = function(e) {
  if (e.lengthComputable) {
    const percentComplete = (e.loaded / e.total) * 100;
    console.log(\`Upload: \\\${percentComplete}%\`);
  }
};

xhr.onprogress = function(e) {
  if (e.lengthComputable) {
    const percentComplete = (e.loaded / e.total) * 100;
    console.log(\`Download: \\\${percentComplete}%\`);
  }
};

xhr.open('POST', 'https://api.example.com/upload');
xhr.send(formData);

// FETCH НЕ ПОДДЕРЖИВАЕТ ПРОГРЕСС:
// Нужно использовать Streams API (сложнее)
// Или использовать XHR для загрузки файлов с прогрессом`
      },
      {
        title: 'Отмена запроса',
        code: `// XHR ОТМЕНА:
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/users');
xhr.send();

// Отмена:
xhr.abort();

// FETCH ОТМЕНА:
const controller = new AbortController();
fetch('https://api.example.com/users', {
  signal: controller.signal
});

// Отмена:
controller.abort();

// ОБА РАБОТАЮТ, но AbortController более гибкий`
      },
      {
        title: 'Когда использовать что',
        code: `// ИСПОЛЬЗОВАТЬ FETCH:
// ✅ Новые проекты
// ✅ Promise-based код
// ✅ async/await
// ✅ Простые запросы
// ✅ REST API

// ИСПОЛЬЗОВАТЬ XHR:
// ✅ Отслеживание прогресса загрузки
// ✅ Поддержка старых браузеров (IE)
// ✅ Специфичные случаи (timeout до fetch)

// ПРИМЕР: загрузка файла с прогрессом
function uploadFile(file) {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  formData.append('file', file);
  
  xhr.upload.onprogress = (e) => {
    const percent = (e.loaded / e.total) * 100;
    updateProgressBar(percent);
  };
  
  xhr.open('POST', '/upload');
  xhr.send(formData);
}

// Для остальных случаев → fetch`
      }
    ],
    relatedTopics: ['fetch-api', 'abort-controller']
  }
];
