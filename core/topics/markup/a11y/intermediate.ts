import { Topic } from '../../../types';

export const A11Y_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'a11y-wcag',
    title: 'WCAG принципы',
    difficulty: 'advanced',
    description: 'WCAG (Web Content Accessibility Guidelines) определяет стандарты доступности. Принципы POUR: Perceivable (воспринимаемый), Operable (управляемый), Understandable (понятный), Robust (надёжный). Знание критериев успеха и уровней контрастности.',
    keyPoints: [
      'POUR: Perceivable (контент воспринимаем), Operable (интерфейс управляем), Understandable (понятен), Robust (надёжен).',
      'Уровни: A (минимальный), AA (рекомендуемый), AAA (максимальный).',
      'Контрастность: текст должен иметь достаточный контраст с фоном (минимум 4.5:1 для обычного текста).',
      'Аудит: использование инструментов (axe, Lighthouse) и ручное тестирование.',
      'Сложные компоненты: обеспечение доступности кастомных селектов, модальных окон, аккордеонов.'
    ],
    tags: ['accessibility', 'a11y', 'wcag', 'advanced'],
    examples: [
      {
        title: 'Контрастность',
        code: `/* ХОРОШО: достаточный контраст */
.text {
  color: #000;
  background: #fff;
  /* Контраст: 21:1 */
}

/* ПЛОХО: недостаточный контраст */
.text {
  color: #999;
  background: #fff;
  /* Контраст: 2.5:1, недостаточно */
}
`
      }
    ],
    relatedTopics: ['a11y-aria'],
    funFact: 'Правило "No ARIA is better than Bad ARIA" появилось из реальных случаев, когда избыточный или неправильный ARIA ломал опыт для пользователей скринридеров. Скринридер объявляет нативный <button> как "кнопка", а <div role="button"> — как "кнопка, группа", что может сбивать с толку.'
  }
];
