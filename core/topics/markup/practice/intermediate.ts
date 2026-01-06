import { Topic } from '../../../types';

export const PRACTICE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'practice-grid-layout',
    title: 'Grid-макет страницы',
    difficulty: 'intermediate',
    description: 'Практическое задание: создать сложный, семантичный макет страницы с использованием CSS Grid. Требования: header, sidebar, main content, footer. Адаптивность с перестройкой сетки. Закрепление Grid и семантики.',
    keyPoints: [
      'Структура: семантичные теги (header, nav, main, aside, footer), правильная иерархия.',
      'Grid: использование grid-template-areas для визуального описания макета, адаптивные колонки.',
      'Адаптивность: перестройка сетки на мобильных (одна колонка), планшетах (две колонки), десктопе (три колонки).',
      'Именованные области: grid-template-areas для понятной структуры, grid-area для размещения.',
      'Проверка: работа на всех размерах экрана, правильная семантика, доступность.'
    ],
    tags: ['practice', 'grid', 'layout', 'responsive', 'intermediate'],
    examples: [
      {
        title: 'Grid макет',
        code: `/* Десктоп */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
}

/* Мобильные */
@media (max-width: 768px) {
  .page {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}
`
      }
    ],
    relatedTopics: ['practice-adaptive-card', 'practice-complex-component'],
    funFact: 'Именованные области Grid (grid-template-areas) делают код визуально понятным: структура макета видна прямо в CSS. Это один из самых элегантных способов создания layout. Интересно, что точки (.) в grid-template-areas обозначают пустые ячейки, что позволяет создавать сложные макеты с пропусками.'
  }
];
