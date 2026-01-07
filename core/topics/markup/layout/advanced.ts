import { Topic } from '../../../types';

export const LAYOUT_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'layout-combining-tech',
    title: 'Комбинирование технологий',
    difficulty: 'advanced',
    description: 'Сложные макеты требуют комбинирования Grid и Flexbox. Grid создаёт общий каркас страницы, Flexbox управляет внутренними компонентами. Создание предсказуемых, масштабируемых раскладок в рамках дизайн-системы.',
    keyPoints: [
      'Архитектура: Grid для структуры страницы, Flexbox для компонентов внутри.',
      'Вложенность: Grid контейнер может содержать Flexbox контейнеры и наоборот.',
      'Предсказуемость: согласованные паттерны, переиспользуемые компоненты, единые правила.',
      'Масштабируемость: структура работает на разных размерах экрана, адаптивные паттерны.',
      'Subgrid: концепция вложенных сеток для согласованных раскладок (поддержка ограничена).'
    ],
    tags: ['css', 'grid', 'flexbox', 'layout', 'architecture', 'advanced'],
    examples: [
      {
        title: 'Сложная структура',
        code: `/* Grid для страницы */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Flexbox для компонентов */
.header {
  display: flex;
  justify-content: space-between;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
}
`
      }
    ],
    relatedTopics: ['layout-combining'],
    funFact: 'Subgrid — это относительно новая фича CSS Grid, которая позволяет вложенной сетке наследовать линии родительской сетки. Это решает проблему выравнивания вложенных Grid контейнеров. Поддержка пока ограничена (Firefox, Safari), но это будущее компонентных систем на Grid.',
    isFrontendEssential: true
  }
];
