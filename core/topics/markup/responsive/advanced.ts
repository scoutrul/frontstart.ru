import { Topic } from '../../../types';

export const RESPONSIVE_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'responsive-progressive',
    title: 'Progressive Enhancement',
    difficulty: 'advanced',
    description: 'Progressive Enhancement и Graceful Degradation — подходы к разработке с учётом разного уровня поддержки браузерами. Адаптивность как часть UX: что скрывать, а что трансформировать. Контроль CLS и контейнерные запросы.',
    keyPoints: [
      'Progressive Enhancement: базовая функциональность работает везде, улучшения для современных браузеров.',
      'Graceful Degradation: начинаем с полной функциональности, обеспечиваем работу в старых браузерах.',
      'UX-решения: что скрывать на мобильных, что трансформировать, приоритет контента.',
      'CLS: предотвращение сдвигов контента при загрузке, резервирование места для изображений.',
      'Контейнерные запросы: @container для адаптивности компонентов, не только viewport.'
    ],
    tags: ['css', 'responsive', 'progressive-enhancement', 'advanced'],
    examples: [
      {
        title: 'Предотвращение CLS',
        code: `/* Резервирование места для изображений */
.image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eee;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
      }
    ],
    relatedTopics: ['responsive-approaches'],
    funFact: 'Progressive Enhancement и Graceful Degradation — два философских подхода к разработке. Progressive Enhancement начинается с базовой функциональности и добавляет улучшения, Graceful Degradation начинается с полной функциональности и обеспечивает работу в старых браузерах. Mobile-first — это форма Progressive Enhancement.'
  }
];
