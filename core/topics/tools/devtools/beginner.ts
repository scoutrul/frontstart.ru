import { Topic } from '../../../types';

export const DEVTOOLS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'devtools-basics',
    title: 'Основы DevTools',
    description: 'Browser DevTools — инструменты разработчика в браузере. Console: логирование (console.log, console.error), просмотр ошибок. Elements: инспектор DOM, просмотр и редактирование HTML/CSS в реальном времени. Network: мониторинг HTTP запросов, статус коды, время загрузки.',
    difficulty: 'beginner',
    tags: ['devtools', 'debugging', 'browser', 'console', 'basics', 'tools', 'productivity'],
    keyPoints: [
      'Console показывает логи, ошибки и позволяет выполнять JavaScript.',
      'Elements инспектор позволяет просматривать и редактировать DOM.',
      'Network показывает все HTTP запросы и их статусы.',
      'F12 или Ctrl+Shift+I открывает DevTools.',
      'Console.log() выводит информацию для отладки.'
    ],
    examples: [
      {
        title: 'Console команды',
        code: `console.log('Hello');           # Обычный лог
console.error('Error');         # Ошибка
console.warn('Warning');         # Предупреждение
console.table([{a:1, b:2}]);    # Таблица
console.time('timer');          # Засечь время
console.timeEnd('timer');       # Остановить таймер`
      },
      {
        title: 'Elements инспектор',
        code: `# Выделить элемент на странице
# Правый клик → Inspect
# Или выбрать элемент в Elements панели
# Редактировать HTML/CSS в реальном времени`
      },
      {
        title: 'Network мониторинг',
        code: `# Открыть Network вкладку
# Перезагрузить страницу
# Просмотреть все запросы:
# - URL
# - Метод (GET, POST)
# - Статус код (200, 404)
# - Время загрузки
# - Размер ответа`
      }
    ],
    relatedTopics: ['devtools-intermediate']
  }
];

