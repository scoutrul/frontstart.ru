import { Topic } from '../../../types';

export const PERFORMANCE_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'performance-core-web-vitals',
    title: 'Core Web Vitals',
    difficulty: 'advanced',
    description: 'Core Web Vitals — ключевые метрики производительности: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint). Влияние верстки на эти метрики и практические методы улучшения.',
    keyPoints: [
      'LCP: время загрузки самого большого элемента контента, оптимизация изображений и шрифтов критична.',
      'CLS: стабильность layout, предотвращение сдвигов контента при загрузке, резервирование места.',
      'INP: время отклика на взаимодействие, оптимизация JavaScript и CSS, избегание долгих задач.',
      'Методы улучшения: оптимизация изображений, критический CSS, предотвращение layout shift, оптимизация шрифтов.'
    ],
    tags: ['performance', 'core-web-vitals', 'lcp', 'cls', 'advanced'],
    examples: [
      {
        title: 'Предотвращение CLS',
        code: `/* Резервирование места */
.image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eee;
}

/* Избегание вставки контента без размеров */
`
      }
    ],
    relatedTopics: ['performance-optimization'],
    funFact: 'Что will-change — это не оптимизация, а предупреждение браузеру о будущих изменениях. Его неумелое использование (например, will-change: transform на всех элементах) ухудшает производительность, так как браузер создаёт отдельный слой композиции и тратит память впустую.',
    isFrontendEssential: true
  }
];
