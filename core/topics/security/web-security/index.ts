import { Topic } from '../../../types';

export const SECURITY_TOPICS: Topic[] = [
  {
    id: 'xss-protection',
    title: 'Защита от XSS',
    description: 'XSS (Cross-Site Scripting) — внедрение вредоносного JavaScript. Санитизация: очистка пользовательского ввода от опасных символов. CSP (Content Security Policy): ограничение источников скриптов и стилей. Экранирование: преобразование HTML символов в сущности.',
    difficulty: 'intermediate',
    tags: ['security', 'xss', 'csp'],
    keyPoints: [
      'XSS позволяет выполнить вредоносный код в браузере пользователя.',
      'Санитизация удаляет опасные символы из ввода.',
      'CSP ограничивает источники выполняемого кода.',
      'Экранирование преобразует < в &lt; и т.д.',
      'Никогда не доверяйте пользовательскому вводу.'
    ],
    examples: [
      {
        title: 'Санитизация',
        code: `function sanitize(input) {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Или использовать библиотеку
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(dirty);`
      },
      {
        title: 'CSP',
        code: `<!-- В HTML -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline';">`
      }
    ],
    relatedTopics: ['csrf-protection']
  },
  {
    id: 'csrf-protection',
    title: 'Защита от CSRF',
    description: 'CSRF (Cross-Site Request Forgery) — выполнение действий от имени пользователя. Токены: уникальные токены для каждого запроса. SameSite cookies: ограничение отправки cookies только с того же сайта. Проверка origin/referer заголовков.',
    difficulty: 'intermediate',
    tags: ['security', 'csrf', 'cookies'],
    keyPoints: [
      'CSRF заставляет пользователя выполнить действия без его ведома.',
      'CSRF токены должны быть уникальными для каждой сессии.',
      'SameSite=Strict предотвращает отправку cookies с других сайтов.',
      'Проверка origin/referer дополнительная защита.',
      'GET запросы не должны изменять состояние.'
    ],
    examples: [
      {
        title: 'CSRF токены',
        code: `// Сервер генерирует токен
const token = generateCSRFToken();
session.set('csrfToken', token);

// Клиент отправляет токен
fetch('/api/transfer', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': token
  }
});

// Сервер проверяет токен
if (req.headers['x-csrf-token'] !== session.get('csrfToken')) {
  return res.status(403).send('Invalid CSRF token');
}`
      },
      {
        title: 'SameSite cookies',
        code: `Set-Cookie: sessionId=abc123; SameSite=Strict; Secure; HttpOnly`
      }
    ],
    relatedTopics: ['xss-protection', 'cors-basics']
  },
  {
    id: 'cors-basics',
    title: 'CORS',
    description: 'CORS (Cross-Origin Resource Sharing) — механизм для запросов с других доменов. Preflight запросы: OPTIONS запрос перед основным для проверки разрешений. Credentials: отправка cookies и авторизации через withCredentials. Заголовки: Access-Control-Allow-Origin, Access-Control-Allow-Methods.',
    difficulty: 'intermediate',
    tags: ['security', 'cors', 'http'],
    keyPoints: [
      'CORS позволяет запросы с других доменов.',
      'Preflight запросы проверяют разрешения перед основным запросом.',
      'Access-Control-Allow-Origin определяет разрешённые домены.',
      'withCredentials позволяет отправлять cookies.',
      '* для origin разрешает все домены (небезопасно для credentials).'
    ],
    examples: [
      {
        title: 'CORS настройка',
        code: `// Сервер
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Клиент
fetch('https://api.example.com/data', {
  credentials: 'include'
});`
      }
    ],
    relatedTopics: ['csrf-protection', 'data-protection']
  },
  {
    id: 'data-protection',
    title: 'Защита данных',
    description: 'Хеширование паролей: bcrypt, argon2 для безопасного хранения. Шифрование: AES для шифрования чувствительных данных. Безопасное хранение: никогда не хранить пароли в открытом виде, использовать environment variables для секретов.',
    difficulty: 'advanced',
    tags: ['security', 'encryption', 'hashing'],
    keyPoints: [
      'Пароли должны хешироваться, никогда не хранить в открытом виде.',
      'bcrypt и argon2 подходят для хеширования паролей.',
      'Шифрование защищает данные при передаче и хранении.',
      'Секреты должны быть в environment variables.',
      'Использовать HTTPS для передачи данных.'
    ],
    examples: [
      {
        title: 'Хеширование паролей',
        code: `import bcrypt from 'bcrypt';

// Хеширование
const hash = await bcrypt.hash(password, 10);

// Проверка
const isValid = await bcrypt.compare(password, hash);`
      },
      {
        title: 'Environment variables',
        code: `// .env
DATABASE_URL=postgres://...
SECRET_KEY=your-secret-key

// Использование
const secret = process.env.SECRET_KEY;`
      }
    ],
    relatedTopics: ['cors-basics']
  }
];

