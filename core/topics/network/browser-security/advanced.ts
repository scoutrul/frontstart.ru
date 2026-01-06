import { Topic } from '../../../types';

export const NETWORK_BROWSER_SECURITY_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'csp-basics',
    title: 'Content Security Policy',
    difficulty: 'advanced',
    description: 'Content Security Policy (CSP) — механизм безопасности браузера, ограничивающий источники загружаемых ресурсов и выполнение кода. Предотвращает XSS-атаки, блокируя выполнение inline-скриптов и ограничивая источники внешних ресурсов. Настраивается через заголовок Content-Security-Policy или meta-тег. Понимание CSP важно для защиты от инъекций и контроля ресурсов.',
    keyPoints: [
      'Назначение: предотвращение XSS-атак через ограничение источников скриптов, стилей, изображений.',
      'Директивы: script-src, style-src, img-src, connect-src, font-src, default-src.',
      'Источники: \'self\', \'unsafe-inline\', \'unsafe-eval\', конкретные домены, \'none\'.',
      'Nonce и hash: альтернативы unsafe-inline для разрешения конкретных inline-скриптов.',
      'Report-Only: режим мониторинга без блокировки, отправляет отчёты о нарушениях.',
      'Стратегия: начинать с строгой политики, постепенно ослаблять для легитимных случаев.'
    ],
    tags: ['networks', 'security', 'csp', 'xss', 'browser', 'advanced'],
    examples: [
      {
        title: 'Базовая CSP политика',
        code: `// ЗАГОЛОВОК СЕРВЕРА:
Content-Security-Policy: default-src 'self'

// ИЛИ META-ТЕГ:
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'">

// ЗНАЧЕНИЕ:
// - default-src 'self' - разрешает ресурсы только с того же домена
// - Блокирует все внешние скрипты, стили, изображения
// - Блокирует inline-скрипты и стили

// РЕЗУЛЬТАТ:
// ✅ <script src="/local.js"></script> - работает
// ❌ <script src="https://cdn.com/lib.js"></script> - блокируется
// ❌ <script>alert('XSS')</script> - блокируется`
      },
      {
        title: 'Детальная CSP политика',
        code: `// ПОЛИТИКА С ДЕТАЛЬНЫМИ ДИРЕКТИВАМИ:
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://images.example.com data:;
  connect-src 'self' https://api.example.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self'

// ЗНАЧЕНИЕ:
// - script-src: скрипты только с 'self' и cdn.example.com
// - style-src: стили с 'self' + inline (unsafe-inline)
// - img-src: изображения с 'self', images.example.com, data: URLs
// - connect-src: fetch/XHR только на 'self' и api.example.com
// - object-src 'none': блокирует <object>, <embed>, <applet>
// - base-uri: ограничивает <base> тег
// - form-action: куда можно отправлять формы`
      },
      {
        title: 'Nonce для inline-скриптов',
        code: `// ПРОБЛЕМА: CSP блокирует inline-скрипты
// РЕШЕНИЕ: использовать nonce

// СЕРВЕР генерирует nonce:
const nonce = crypto.randomBytes(16).toString('base64');

// Отправляет в CSP:
Content-Security-Policy: script-src 'nonce-\${nonce}'

// И в HTML:
<script nonce="\${nonce}">
  console.log('Этот скрипт выполнится');
</script>

<script>
  console.log('Этот скрипт заблокирован');
</script>

// БРАУЗЕР проверяет nonce:
// - Если совпадает → выполняет скрипт
// - Если нет → блокирует`
      },
      {
        title: 'Hash для inline-скриптов',
        code: `// АЛЬТЕРНАТИВА nonce: hash скрипта

// СЕРВЕР вычисляет hash:
const script = "<script>console.log('Hello');</script>";
const hash = crypto.createHash('sha256')
  .update(script)
  .digest('base64');

// Отправляет в CSP:
Content-Security-Policy: script-src 'sha256-\${hash}'

// HTML:
<script>console.log('Hello');</script> // ✅ выполнится
<script>console.log('World');</script> // ❌ заблокирован

// ПРЕИМУЩЕСТВА:
// - Не нужно генерировать nonce для каждого запроса
// - Hash фиксирован для конкретного скрипта

// НЕДОСТАТКИ:
// - Нужно пересчитывать при изменении скрипта
// - Не подходит для динамических скриптов`
      },
      {
        title: 'Report-Only режим',
        code: `// REPORT-ONLY: мониторинг без блокировки
Content-Security-Policy-Report-Only: 
  default-src 'self';
  report-uri /csp-report

// БРАУЗЕР:
// - НЕ блокирует нарушения
// - Отправляет отчёты на /csp-report

// ОТЧЁТ (JSON):
{
  "csp-report": {
    "document-uri": "https://example.com/page",
    "violated-directive": "script-src",
    "blocked-uri": "https://evil.com/script.js",
    "source-file": "https://example.com/page",
    "line-number": 42
  }
}

// ИСПОЛЬЗОВАНИЕ:
// 1. Настроить строгую политику
// 2. Включить Report-Only
// 3. Собрать отчёты о нарушениях
// 4. Исправить проблемы
// 5. Переключить на обычный режим (блокировка)`
      },
      {
        title: 'Стратегия внедрения CSP',
        code: `// ЭТАП 1: Начать с Report-Only
Content-Security-Policy-Report-Only: default-src 'self'
// Собрать отчёты о реальных нарушениях

// ЭТАП 2: Постепенно ужесточать
Content-Security-Policy-Report-Only: 
  default-src 'self';
  script-src 'self' https://cdn.example.com
// Добавить необходимые источники

// ЭТАП 3: Убрать unsafe-inline
Content-Security-Policy-Report-Only: 
  script-src 'self' https://cdn.example.com 'nonce-...'
// Использовать nonce вместо unsafe-inline

// ЭТАП 4: Включить блокировку
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' https://cdn.example.com 'nonce-...'
// Теперь нарушения блокируются

// ПРАКТИКА:
// - Начинать с мягкой политики
// - Собирать отчёты
// - Постепенно ужесточать
// - Тестировать на разных страницах`
      }
    ],
    relatedTopics: ['csrf-xss', 'same-origin-policy']
  }
];
