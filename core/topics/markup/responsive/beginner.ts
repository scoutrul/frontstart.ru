import { Topic } from '../../../types';

export const RESPONSIVE_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'responsive-media-queries',
    title: 'Медиазапросы',
    difficulty: 'beginner',
    description: 'Медиазапросы (@media) позволяют применять стили в зависимости от характеристик устройства. Синтаксис @media с условиями min-width/max-width адаптирует блоки под разные размеры экранов. Основа адаптивного дизайна.',
    keyPoints: [
      'Синтаксис: @media (условие) { стили }, условие проверяет характеристики устройства.',
      'min-width/max-width: минимальная/максимальная ширина экрана, наиболее используемые условия.',
      'Применение: адаптация layout, изменение размеров, скрытие/показ элементов.',
      'Breakpoints: точки перелома (768px, 1024px), где меняется layout.',
      'Практика: адаптация контейнеров, изменение grid/flex, адаптивная типографика.'
    ],
    tags: ['css', 'responsive', 'media-queries', 'basics'],
    examples: [
      {
        title: 'Базовые медиазапросы',
        code: `/* Мобильные */
.container {
  width: 100%;
}

/* Планшеты и больше */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Десктоп */
@media (min-width: 1024px) {
  .container {
    width: 1200px;
  }
}
`
      }
    ],
    relatedTopics: ['responsive-viewport'],
    funFact: 'Медиазапросы были добавлены в CSS3 в 2012 году и стали основой адаптивного дизайна. До этого верстальщики создавали отдельные версии сайта для мобильных и десктопа. Breakpoints (768px, 1024px) стали стандартом, хотя изначально были выбраны произвольно под популярные размеры экранов того времени.',
    isFrontendEssential: true
  },
  {
    id: 'responsive-viewport',
    title: 'Viewport',
    difficulty: 'beginner',
    description: 'Мета-тег viewport настраивает отображение страницы на мобильных устройствах. Без него браузеры могут масштабировать страницу, делая её нечитаемой. Правильная настройка обеспечивает корректную работу адаптивной вёрстки.',
    keyPoints: [
      'Назначение: указывает браузеру, как масштабировать страницу на мобильных.',
      'Базовые значения: width=device-width, initial-scale=1.0.',
      'Без viewport: страница может отображаться в уменьшенном виде.',
      'С viewport: страница в натуральном размере, адаптивная вёрстка работает.'
    ],
    tags: ['html', 'viewport', 'mobile', 'responsive', 'basics'],
    examples: [
      {
        title: 'Базовый viewport',
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      }
    ],
    relatedTopics: ['responsive-media-queries'],
    funFact: 'Viewport был введён Apple для iPhone в 2007 году, когда мобильные браузеры показывали страницы в уменьшенном виде. Без viewport страница шириной 980px на экране 320px отображалась в масштабе 1:3, требуя постоянного масштабирования. Viewport решил эту проблему и стал стандартом.',
    isFrontendEssential: true
  }
];
