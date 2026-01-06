import { Topic } from '../../../types';

export const PRACTICE_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'practice-adaptive-card',
    title: 'Адаптивная карточка',
    difficulty: 'beginner',
    description: 'Практическое задание: создать адаптивную карточку товара или поста. Требования: семантичная HTML разметка, адаптивность на Flexbox или Grid, базовые состояния (hover, focus). Закрепление основ HTML, CSS и адаптивности.',
    keyPoints: [
      'Семантика: использование article, header, section, правильная структура заголовков.',
      'Адаптивность: работа на мобильных и десктопе, использование media queries или Grid.',
      'Состояния: hover для интерактивных элементов, focus для доступности.',
      'Стилизация: современный дизайн, правильная типографика, отступы.',
      'Проверка: валидация HTML/CSS, тестирование на разных устройствах, проверка доступности.'
    ],
    tags: ['practice', 'html', 'css', 'responsive', 'beginner'],
    examples: [
      {
        title: 'Структура карточки',
        code: `<!-- Семантичная структура -->
<article class="card">
  <header class="card__header">
    <img src="image.jpg" alt="Описание" class="card__image">
  </header>
  <div class="card__body">
    <h2 class="card__title">Заголовок</h2>
    <p class="card__text">Текст карточки</p>
  </div>
  <footer class="card__footer">
    <button class="card__button">Действие</button>
  </footer>
</article>

/* Адаптивность через Grid или Flexbox */
`
      }
    ],
    relatedTopics: ['practice-grid-layout'],
    funFact: 'Карточки (cards) как паттерн дизайна стали популярны благодаря Material Design от Google в 2014 году. Карточки группируют связанную информацию в визуально отдельные блоки, что улучшает сканируемость контента. Семантический тег <article> идеально подходит для карточек, так как каждая карточка — независимый контент.'
  }
];
