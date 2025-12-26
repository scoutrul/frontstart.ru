import { Topic } from '../../../types';

export const DEVTOOLS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'devtools-intermediate',
    title: 'DevTools средний уровень',
    description: 'Sources: отладка JavaScript с breakpoints, step through код, watch переменные. Performance: профилирование производительности, анализ времени выполнения, FPS метрики. Application: просмотр и управление Storage (LocalStorage, SessionStorage), Cookies, IndexedDB. Network throttling для тестирования на медленных соединениях.',
    difficulty: 'intermediate',
    tags: ['devtools', 'debugging', 'browser', 'performance', 'profiling', 'tools', 'productivity'],
    keyPoints: [
      'Breakpoints останавливают выполнение кода для отладки.',
      'Performance показывает время выполнения функций и рендеринга.',
      'Application управляет браузерным хранилищем данных.',
      'Network throttling симулирует медленные соединения.',
      'Watch expressions отслеживают значения переменных.'
    ],
    examples: [
      {
        title: 'Отладка с breakpoints',
        code: `# В Sources панели:
# 1. Найти файл .js
# 2. Кликнуть на номер строки для breakpoint
# 3. Выполнить код
# 4. Использовать:
#    - F8: продолжить
#    - F10: step over
#    - F11: step into
#    - Shift+F11: step out`
      },
      {
        title: 'Performance профилирование',
        code: `# 1. Открыть Performance панель
# 2. Нажать Record
# 3. Выполнить действия на странице
# 4. Остановить запись
# 5. Анализировать:
#    - Время выполнения функций
#    - FPS график
#    - Memory usage`
      },
      {
        title: 'Application Storage',
        code: `# В Application панели:
# LocalStorage:
localStorage.setItem('key', 'value');
localStorage.getItem('key');

# SessionStorage:
sessionStorage.setItem('key', 'value');

# Cookies:
# Просмотр и редактирование cookies
# IndexedDB:
# Просмотр структуры базы данных`
      }
    ],
    relatedTopics: ['devtools-basics', 'devtools-advanced']
  }
];

