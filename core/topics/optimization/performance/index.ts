import { Topic } from '../../../types';

export const OPTIMIZATION_TOPICS: Topic[] = [
  {
    id: 'performance-basics',
    title: 'Основы производительности',
    description: 'Метрики производительности: время загрузки, First Contentful Paint (FCP), Time to Interactive (TTI). Профилирование: анализ времени выполнения кода. Бенчмарки: измерение производительности перед и после оптимизации.',
    difficulty: 'beginner',
    tags: ['performance', 'metrics', 'profiling'],
    keyPoints: [
      'FCP измеряет время до первого контента.',
      'TTI измеряет время до интерактивности.',
      'Профилирование показывает узкие места.',
      'Бенчмарки помогают измерить улучшения.',
      'Lighthouse автоматически аудирует производительность.'
    ],
    examples: [
      {
        title: 'Измерение производительности',
        code: `// Performance API
const start = performance.now();
// ... код ...
const end = performance.now();
console.log(\`Время выполнения: \${end - start}ms\`);

// Lighthouse метрики
// FCP, LCP, TTI, TBT, CLS`
      }
    ],
    relatedTopics: ['code-optimization']
  },
  {
    id: 'code-optimization',
    title: 'Оптимизация кода',
    description: 'Алгоритмы: выбор правильной структуры данных и алгоритма. Структуры данных: массивы vs объекты, Set vs Array для уникальности. Оптимизация циклов: избегать вложенных циклов, использовать эффективные методы массивов.',
    difficulty: 'intermediate',
    tags: ['optimization', 'algorithms', 'performance'],
    keyPoints: [
      'Выбор правильного алгоритма критичен для производительности.',
      'Set быстрее Array для проверки наличия элемента.',
      'Map быстрее Object для частых добавлений/удалений.',
      'Избегать вложенных циклов когда возможно.',
      'Использовать эффективные методы массивов (map, filter, reduce).'
    ],
    examples: [
      {
        title: 'Оптимизация структур данных',
        code: `// Медленно
const array = [1, 2, 3, 4, 5];
if (array.includes(3)) { }  // O(n)

// Быстро
const set = new Set([1, 2, 3, 4, 5]);
if (set.has(3)) { }  // O(1)`
      },
      {
        title: 'Оптимизация циклов',
        code: `// Медленно - O(n²)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // ...
  }
}

// Быстро - O(n)
arr.forEach(item => {
  // ...
});`
      }
    ],
    relatedTopics: ['performance-basics', 'bundle-optimization']
  },
  {
    id: 'bundle-optimization',
    title: 'Оптимизация бандла',
    description: 'Code splitting: разделение кода на чанки, загрузка по требованию. Tree shaking: удаление неиспользуемого кода. Lazy loading: загрузка компонентов и модулей только когда они нужны.',
    difficulty: 'intermediate',
    tags: ['bundling', 'webpack', 'optimization'],
    keyPoints: [
      'Code splitting уменьшает размер начального бандла.',
      'Tree shaking удаляет неиспользуемый код.',
      'Lazy loading загружает код по требованию.',
      'Динамические импорты создают отдельные чанки.',
      'Анализ бандла помогает найти большие зависимости.'
    ],
    examples: [
      {
        title: 'Code splitting',
        code: `// Динамический импорт
const Component = lazy(() => import('./Component'));

// React lazy loading
<Suspense fallback={<div>Loading...</div>}>
  <Component />
</Suspense>`
      },
      {
        title: 'Tree shaking',
        code: `// Импортировать только нужное
import { debounce } from 'lodash-es';  // ✅
import _ from 'lodash';  // ❌ (весь lodash)`
      }
    ],
    relatedTopics: ['code-optimization', 'runtime-optimization']
  },
  {
    id: 'runtime-optimization',
    title: 'Оптимизация рантайма',
    description: 'Мемоизация: кэширование результатов функций. Дебаунс и троттлинг: ограничение частоты вызовов функций. Виртуализация: рендеринг только видимых элементов в больших списках.',
    difficulty: 'advanced',
    tags: ['performance', 'optimization', 'runtime'],
    keyPoints: [
      'Мемоизация кэширует результаты для одинаковых входных данных.',
      'Дебаунс откладывает выполнение до паузы в вызовах.',
      'Троттлинг ограничивает частоту вызовов.',
      'Виртуализация рендерит только видимые элементы.',
      'React.memo предотвращает ненужные ре-рендеры.'
    ],
    examples: [
      {
        title: 'Мемоизация',
        code: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    return cache[key] = fn(...args);
  };
}

const expensiveFn = memoize((n) => {
  // дорогие вычисления
  return n * 2;
});`
      },
      {
        title: 'Дебаунс и троттлинг',
        code: `function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`
      }
    ],
    relatedTopics: ['bundle-optimization']
  }
];

