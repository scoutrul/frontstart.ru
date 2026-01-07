import { Topic } from '../../../types';

export const RESPONSIVE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'responsive-approaches',
    title: 'Подходы к адаптивности',
    difficulty: 'intermediate',
    description: 'Mobile-first и Desktop-first — два подхода к адаптивной вёрстке. Mobile-first начинается с мобильных стилей и расширяет для больших экранов, Desktop-first наоборот. Mobile-first предпочтительнее для производительности и современной разработки.',
    keyPoints: [
      'Mobile-first: стили для мобильных, затем расширение через min-width, меньше CSS для мобильных.',
      'Desktop-first: стили для десктопа, затем адаптация через max-width, больше CSS для мобильных.',
      'Fluid Layouts: резиновая вёрстка с %, fr, minmax(), элементы плавно масштабируются.',
      'Относительные единицы: системный подход с rem для типографики и отступов, масштабируется с размером шрифта.',
      'Адаптивная графика: srcset и <picture> для разных размеров и плотности экранов.'
    ],
    tags: ['css', 'responsive', 'mobile-first', 'intermediate'],
    examples: [
      {
        title: 'Mobile-first',
        code: `/* Мобильные (базовые стили) */
.container {
  width: 100%;
  padding: 10px;
}

/* Планшеты и больше */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}
`
      }
    ],
    relatedTopics: ['responsive-media-queries'],
    funFact: 'Концепция "Container Queries" (@container) — это "мечта верстальщика", которая стала реальностью. В отличие от media queries, которые реагируют на размер экрана, container queries реагируют на размер родительского контейнера, что кардинально меняет подход к компонентам и их переиспользованию.',
    isFrontendEssential: true
  }
];
