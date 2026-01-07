import { Topic } from '../../../types';

export const NETWORK_JAVASCRIPT_NETWORK_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'websockets',
    title: 'WebSockets',
    difficulty: 'advanced',
    description: 'WebSockets — протокол для двусторонней связи между клиентом и сервером поверх TCP. Устанавливает постоянное соединение, позволяя отправлять данные в реальном времени в обе стороны. Используется для чатов, уведомлений, онлайн-игр, real-time обновлений. Отличается от HTTP: нет overhead заголовков, низкая задержка, сервер может инициировать отправку данных.',
    keyPoints: [
      'Протокол: WebSocket работает поверх TCP, начинается с HTTP-рукопожатия, затем переключается на WebSocket.',
      'Соединение: постоянное, остаётся открытым для двусторонней связи, закрывается явно или при ошибке.',
      'События: onopen (соединение установлено), onmessage (получено сообщение), onerror (ошибка), onclose (соединение закрыто).',
      'Отправка данных: send() отправляет строки, ArrayBuffer или Blob, сервер получает в реальном времени.',
      'Использование: чаты, уведомления, онлайн-игры, real-time дашборды, collaborative editing.',
      'Альтернативы: Server-Sent Events (SSE) для односторонней связи, HTTP polling для периодических обновлений.'
    ],
    tags: ['networks', 'javascript', 'websocket', 'realtime', 'advanced'],
    examples: [
      {
        title: 'Базовое использование WebSocket',
        code: `// СОЗДАНИЕ СОЕДИНЕНИЯ:
const ws = new WebSocket('wss://example.com/chat');

// СОБЫТИЯ:
ws.onopen = function() {
  console.log('Connected');
  ws.send('Hello Server');
};

ws.onmessage = function(event) {
  console.log('Received:', event.data);
  // event.data - строка или Blob/ArrayBuffer
};

ws.onerror = function(error) {
  console.error('WebSocket error:', error);
};

ws.onclose = function(event) {
  console.log('Disconnected', event.code, event.reason);
  // event.code - код закрытия
  // event.reason - причина закрытия
};

// ОТПРАВКА ДАННЫХ:
ws.send('Hello');
ws.send(JSON.stringify({type: 'message', text: 'Hi'}));

// ЗАКРЫТИЕ:
ws.close();`
      },
      {
        title: 'Обработка JSON сообщений',
        code: `// ОТПРАВКА JSON:
function sendMessage(ws, type, data) {
  ws.send(JSON.stringify({ type, data }));
}

// ПОЛУЧЕНИЕ JSON:
ws.onmessage = function(event) {
  try {
    const message = JSON.parse(event.data);
    
    switch (message.type) {
      case 'chat':
        displayMessage(message.data.text);
        break;
      case 'notification':
        showNotification(message.data);
        break;
      case 'error':
        console.error('Server error:', message.data);
        break;
    }
  } catch (error) {
    console.error('Parse error:', error);
  }
};

// ПРИМЕР ИСПОЛЬЗОВАНИЯ:
const ws = new WebSocket('wss://example.com/chat');
sendMessage(ws, 'join', { room: 'general' });
sendMessage(ws, 'message', { text: 'Hello!' });`
      },
      {
        title: 'Переподключение при разрыве',
        code: `// АВТОМАТИЧЕСКОЕ ПЕРЕПОДКЛЮЧЕНИЕ:
class ReconnectingWebSocket {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this.reconnectInterval = 1000;
    this.maxReconnectInterval = 30000;
    this.reconnectDecay = 1.5;
    this.shouldReconnect = true;
    this.connect();
  }
  
  connect() {
    this.ws = new WebSocket(this.url);
    
    this.ws.onopen = () => {
      console.log('Connected');
      this.reconnectInterval = 1000;
    };
    
    this.ws.onclose = (event) => {
      if (this.shouldReconnect) {
        setTimeout(() => {
          this.reconnectInterval *= this.reconnectDecay;
          this.reconnectInterval = Math.min(
            this.reconnectInterval,
            this.maxReconnectInterval
          );
          console.log('Reconnecting...');
          this.connect();
        }, this.reconnectInterval);
      }
    };
    
    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
  
  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    }
  }
  
  close() {
    this.shouldReconnect = false;
    this.ws.close();
  }
}

// ИСПОЛЬЗОВАНИЕ:
const ws = new ReconnectingWebSocket('wss://example.com/chat');`
      },
      {
        title: 'Когда использовать WebSockets',
        code: `// ✅ ИСПОЛЬЗОВАТЬ WEBSOCKETS:
// - Чат в реальном времени
// - Онлайн-игры
// - Уведомления
// - Real-time дашборды
// - Collaborative editing
// - Торговые платформы (котировки)

// ❌ НЕ ИСПОЛЬЗОВАТЬ:
// - Простые HTTP-запросы (использовать fetch)
// - Односторонняя связь (использовать SSE)
// - Редкие обновления (использовать polling)

// ПРИМЕР: ЧАТ
const ws = new WebSocket('wss://chat.example.com');
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  addMessageToChat(message);
};

// ПРИМЕР: REAL-TIME ДАШБОРД
const ws = new WebSocket('wss://api.example.com/metrics');
ws.onmessage = (event) => {
  const metrics = JSON.parse(event.data);
  updateDashboard(metrics);
};`
      },
      {
        title: 'WebSocket vs HTTP',
        code: `// HTTP (fetch):
// - Запрос-ответ
// - Клиент всегда инициирует
// - Overhead заголовков каждый запрос
// - Закрывается после ответа

fetch('https://api.example.com/data')
  .then(r => r.json())
  .then(data => console.log(data));

// WebSocket:
// - Двусторонняя связь
// - Сервер может отправлять данные
// - Минимальный overhead
// - Постоянное соединение

const ws = new WebSocket('wss://api.example.com');
ws.onmessage = (event) => {
  console.log(event.data); // Сервер отправил данные
};
ws.send('request'); // Клиент отправляет данные

// ВЫБОР:
// HTTP → для обычных запросов
// WebSocket → для real-time коммуникации`
      }
    ],
    relatedTopics: ['sse-vs-websockets', 'fetch-api'],
    isFrontendEssential: true
  },
  {
    id: 'sse-vs-websockets',
    title: 'SSE vs WebSockets',
    difficulty: 'advanced',
    description: 'Server-Sent Events (SSE) и WebSockets — два способа real-time коммуникации с сервером. SSE — односторонняя связь (сервер → клиент) поверх HTTP, проще в использовании, автоматическое переподключение. WebSockets — двусторонняя связь, более гибкий, но сложнее. Выбор зависит от задачи: SSE для уведомлений и потоков данных, WebSockets для интерактивных приложений.',
    keyPoints: [
      'SSE: односторонняя связь (сервер → клиент), работает поверх HTTP, автоматическое переподключение, проще в использовании.',
      'WebSockets: двусторонняя связь (клиент ↔ сервер), работает поверх TCP, больше контроля, сложнее в настройке.',
      'Протокол: SSE использует обычный HTTP с заголовком text/event-stream, WebSocket — специальный протокол.',
      'Overhead: SSE имеет HTTP-заголовки, WebSocket — минимальный overhead после установки соединения.',
      'Использование SSE: уведомления, ленты новостей, дашборды, live-обновления, где клиент только получает данные.',
      'Использование WebSockets: чаты, игры, collaborative editing, где нужна двусторонняя связь.'
    ],
    tags: ['networks', 'javascript', 'sse', 'websocket', 'realtime', 'advanced'],
    examples: [
      {
        title: 'Server-Sent Events (SSE)',
        code: `// SSE - ОДНОСТОРОННЯЯ СВЯЗЬ (сервер → клиент)
const eventSource = new EventSource('https://api.example.com/events');

// СОБЫТИЯ:
eventSource.onmessage = function(event) {
  console.log('Received:', event.data);
  // event.data - строка данных
};

eventSource.addEventListener('custom-event', function(event) {
  console.log('Custom event:', event.data);
});

eventSource.onerror = function(error) {
  console.error('SSE error:', error);
  // Автоматически переподключается
};

// ЗАКРЫТИЕ:
eventSource.close();

// СЕРВЕР ОТПРАВЛЯЕТ:
// Content-Type: text/event-stream
// 
// data: Hello World
// 
// event: custom-event
// data: {"type": "notification", "text": "New message"}
// 
// id: 123
// data: Message with ID`

      },
      {
        title: 'WebSockets — двусторонняя связь',
        code: `// WEBSOCKETS - ДВУСТОРОННЯЯ СВЯЗЬ
const ws = new WebSocket('wss://api.example.com/chat');

ws.onopen = () => {
  // Клиент может отправлять
  ws.send('Hello Server');
};

ws.onmessage = (event) => {
  // Клиент получает
  console.log('Received:', event.data);
};

// ОТЛИЧИЯ ОТ SSE:
// - Клиент может отправлять данные
// - Нет автоматического переподключения (нужно реализовать)
// - Работает поверх TCP (не HTTP)
// - Минимальный overhead`
      },
      {
        title: 'Сравнение SSE и WebSockets',
        code: `// SSE:
// ✅ Проще в использовании
// ✅ Автоматическое переподключение
// ✅ Работает через HTTP (проще для прокси/firewall)
// ✅ Поддержка событий (event types)
// ❌ Только сервер → клиент
// ❌ Только текстовые данные
// ❌ HTTP overhead

// WebSockets:
// ✅ Двусторонняя связь
// ✅ Бинарные данные
// ✅ Минимальный overhead
// ✅ Больше контроля
// ❌ Сложнее в использовании
// ❌ Нет автоматического переподключения
// ❌ Может блокироваться прокси/firewall

// ВЫБОР:
// SSE → уведомления, потоки данных, дашборды
// WebSockets → чаты, игры, интерактивные приложения`
      },
      {
        title: 'Примеры использования SSE',
        code: `// 1. УВЕДОМЛЕНИЯ:
const notifications = new EventSource('/api/notifications');
notifications.onmessage = (event) => {
  const notification = JSON.parse(event.data);
  showNotification(notification);
};

// 2. ЛЕНТА НОВОСТЕЙ:
const newsFeed = new EventSource('/api/news/stream');
newsFeed.onmessage = (event) => {
  const article = JSON.parse(event.data);
  addArticleToFeed(article);
};

// 3. REAL-TIME ДАШБОРД:
const metrics = new EventSource('/api/metrics/stream');
metrics.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateChart(data);
};

// 4. ЛОГИ В РЕАЛЬНОМ ВРЕМЕНИ:
const logs = new EventSource('/api/logs/stream');
logs.addEventListener('error', (event) => {
  addLogToConsole(event.data, 'error');
});
logs.addEventListener('info', (event) => {
  addLogToConsole(event.data, 'info');
});`
      },
      {
        title: 'Примеры использования WebSockets',
        code: `// 1. ЧАТ:
const chat = new WebSocket('wss://chat.example.com');
chat.onmessage = (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
};
document.getElementById('send').onclick = () => {
  chat.send(JSON.stringify({
    text: document.getElementById('input').value
  }));
};

// 2. ОНЛАЙН-ИГРА:
const game = new WebSocket('wss://game.example.com');
game.onmessage = (event) => {
  const update = JSON.parse(event.data);
  updateGameState(update);
};
// Отправка действий игрока
game.send(JSON.stringify({ action: 'move', x: 100, y: 200 }));

// 3. COLLABORATIVE EDITING:
const editor = new WebSocket('wss://editor.example.com');
editor.onmessage = (event) => {
  const change = JSON.parse(event.data);
  applyChange(change);
};
// Отправка изменений
editor.send(JSON.stringify({ type: 'insert', pos: 10, text: 'Hello' }));`
      },
      {
        title: 'Гибридный подход',
        code: `// МОЖНО ИСПОЛЬЗОВАТЬ ОБА:
// SSE для получения данных
// WebSocket для отправки данных

// ПРИМЕР: ЧАТ С УВЕДОМЛЕНИЯМИ
// SSE для получения сообщений:
const messages = new EventSource('/api/messages/stream');
messages.onmessage = (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
};

// WebSocket для отправки сообщений:
const sendWs = new WebSocket('wss://api.example.com/send');
function sendMessage(text) {
  sendWs.send(JSON.stringify({ text }));
}

// ИЛИ:
// SSE для уведомлений
// WebSocket для чата

// ПРАКТИКА:
// Выбрать один протокол для конкретной задачи
// Не смешивать без необходимости`
      }
    ],
    relatedTopics: ['websockets', 'fetch-api'],
    isFrontendEssential: true
  }
];
