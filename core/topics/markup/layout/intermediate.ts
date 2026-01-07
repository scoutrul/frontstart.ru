import { Topic } from '../../../types';

export const LAYOUT_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'layout-flexbox-deep',
    title: 'Flexbox: глубоко',
    difficulty: 'intermediate',
    description: 'Глубокое понимание Flexbox требует знания всех свойств контейнера и элементов. Свойства контейнера управляют направлением, выравниванием и переносом. Свойства элементов контролируют размеры, порядок и выравнивание отдельных элементов.',
    keyPoints: [
      'Свойства контейнера: flex-direction (направление), justify-content (главная ось), align-items (поперечная ось), flex-wrap (перенос).',
      'Свойства элементов: flex-grow (рост), flex-shrink (сжатие), flex-basis (базовый размер), order (порядок).',
      'justify-content: выравнивание по главной оси (flex-start, center, space-between, space-around).',
      'align-items: выравнивание по поперечной оси (stretch, center, flex-start, flex-end).',
      'flex: сокращённая запись flex-grow flex-shrink flex-basis, flex: 1 означает равномерное распределение.',
      'Практика: центрирование, липкий футер, раскладка карточек.'
    ],
    tags: ['css', 'flexbox', 'layout', 'intermediate'],
    examples: [
      {
        title: 'Свойства контейнера',
        code: `/* Направление и перенос */
.container {
  display: flex;
  flex-direction: row; /* или column */
  flex-wrap: wrap; /* перенос при нехватке места */
}

/* Выравнивание по главной оси */
.container {
  justify-content: center; /* center, space-between, space-around */
}

/* Выравнивание по поперечной оси */
.container {
  align-items: center; /* center, stretch, flex-start */
}
`
      },
      {
        title: 'Свойства элементов',
        code: `/* Рост и сжатие */
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  /* Равномерно распределяется */
}

.item-large {
  flex: 2; /* занимает в 2 раза больше места */
}

.item-fixed {
  flex: 0 0 200px; /* не растёт, не сжимается, базовая ширина 200px */
}

/* Порядок */
.item-first {
  order: -1; /* отображается первым */
}
`
      }
    ],
    relatedTopics: ['layout-grid-deep'],
    funFact: 'Flexbox свойство flex: 1 — это сокращение для flex-grow: 1, flex-shrink: 1, flex-basis: 0%. Интересно, что flex-basis: 0% означает, что базовый размер игнорируется, и элементы распределяются пропорционально flex-grow. Это позволяет создавать равномерные колонки без указания точных размеров.',
    isFrontendEssential: true
  },
  {
    id: 'layout-grid-deep',
    title: 'Grid: глубоко',
    difficulty: 'intermediate',
    description: 'Глубокое понимание Grid включает работу с шаблонами, размещением элементов, именованными областями. Grid предоставляет мощные инструменты для создания сложных, адаптивных макетов с минимальным кодом.',
    keyPoints: [
      'Шаблоны: grid-template-columns/rows определяют размеры колонок/строк, можно использовать fr, auto, minmax().',
      'Размещение: grid-column/row определяют позицию элемента, grid-area для именованных областей.',
      'gap: отступы между ячейками (grid-gap устарел, используй gap).',
      'grid-auto-rows/columns: автоматические размеры для неявных строк/колонок.',
      'grid-template-areas: именованные области для визуального описания макета.',
      'Практика: сложные сетки, masonry-раскладка, адаптивные макеты.'
    ],
    tags: ['css', 'grid', 'layout', 'intermediate'],
    examples: [
      {
        title: 'Шаблоны Grid',
        code: `/* Колонки */
.grid {
  grid-template-columns: repeat(3, 1fr);
  /* 3 колонки равной ширины */
}

.grid {
  grid-template-columns: 200px 1fr 200px;
  /* Фиксированная, гибкая, фиксированная */
}

.grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Адаптивные колонки */
}

/* Отступы */
.grid {
  gap: 20px; /* отступы между ячейками */
}
`
      },
      {
        title: 'Размещение элементов',
        code: `/* Позиционирование */
.item {
  grid-column: 1 / 3; /* с 1 по 3 колонку */
  grid-row: 1 / 2; /* 1 строка */
}

/* Именованные области */
.grid {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
`
      }
    ],
    relatedTopics: ['layout-flexbox-deep', 'layout-combining'],
    funFact: 'Grid функция repeat() была создана для упрощения повторяющихся паттернов. repeat(auto-fit, minmax(200px, 1fr)) создаёт адаптивную сетку: элементы автоматически переносятся, когда не помещаются, и занимают равное пространство. Это избавляет от необходимости media queries для простых сеток.',
    isFrontendEssential: true
  },
  {
    id: 'layout-combining',
    title: 'Осознанный выбор',
    difficulty: 'intermediate',
    description: 'Выбор между Flexbox и Grid зависит от задачи. Flexbox для компонентов и одномерных раскладок, Grid для сложных макетов страниц. Понимание критериев выбора помогает использовать правильный инструмент.',
    keyPoints: [
      'Flexbox: компоненты (кнопки, карточки), одномерные раскладки, выравнивание, навигация.',
      'Grid: макеты страниц, сложные сетки, двумерные раскладки, именованные области.',
      'Комбинирование: Grid для общего каркаса, Flexbox для внутренних компонентов.',
      'Критерии: нужна ли двумерность? Сложность макета? Компонент или страница?'
    ],
    tags: ['css', 'flexbox', 'grid', 'layout', 'intermediate'],
    examples: [
      {
        title: 'Комбинирование',
        code: `/* Grid для общего каркаса */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

/* Flexbox для компонентов */
.card {
  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  justify-content: space-between;
}
`
      }
    ],
    relatedTopics: ['layout-flexbox-deep', 'layout-grid-deep'],
    funFact: 'Единица в Grid называется fr (fraction — доля), потому что она представляет долю доступного пространства. История появления gap в Grid интересна: сначала gap был только в Grid, потом его "задним числом" добавили и в Flexbox, что значительно упростило создание отступов.',
    isFrontendEssential: true
  },
  {
    id: 'layout-flexbox-deep',
    title: 'Flexbox: глубоко',
    difficulty: 'intermediate',
    description: 'Глубокое понимание Flexbox требует знания всех свойств контейнера и элементов. Свойства контейнера управляют направлением, выравниванием и переносом. Свойства элементов контролируют размеры, порядок и выравнивание отдельных элементов.',
    keyPoints: [
      'Свойства контейнера: flex-direction (направление), justify-content (главная ось), align-items (поперечная ось), flex-wrap (перенос).',
      'Свойства элементов: flex-grow (рост), flex-shrink (сжатие), flex-basis (базовый размер), order (порядок).',
      'justify-content: выравнивание по главной оси (flex-start, center, space-between, space-around).',
      'align-items: выравнивание по поперечной оси (stretch, center, flex-start, flex-end).',
      'flex: сокращённая запись flex-grow flex-shrink flex-basis, flex: 1 означает равномерное распределение.',
      'Практика: центрирование, липкий футер, раскладка карточек.'
    ],
    tags: ['css', 'flexbox', 'layout', 'intermediate'],
    examples: [
      {
        title: 'Свойства контейнера',
        code: `/* Направление и перенос */
.container {
  display: flex;
  flex-direction: row; /* или column */
  flex-wrap: wrap; /* перенос при нехватке места */
}

/* Выравнивание по главной оси */
.container {
  justify-content: center; /* center, space-between, space-around */
}

/* Выравнивание по поперечной оси */
.container {
  align-items: center; /* center, stretch, flex-start */
}
`
      },
      {
        title: 'Свойства элементов',
        code: `/* Рост и сжатие */
.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  /* Равномерно распределяется */
}

.item-large {
  flex: 2; /* занимает в 2 раза больше места */
}

.item-fixed {
  flex: 0 0 200px; /* не растёт, не сжимается, базовая ширина 200px */
}

/* Порядок */
.item-first {
  order: -1; /* отображается первым */
}
`
      }
    ],
    relatedTopics: ['layout-grid-deep'],
    funFact: 'Flexbox свойство flex: 1 — это сокращение для flex-grow: 1, flex-shrink: 1, flex-basis: 0%. Интересно, что flex-basis: 0% означает, что базовый размер игнорируется, и элементы распределяются пропорционально flex-grow. Это позволяет создавать равномерные колонки без указания точных размеров.',
    isFrontendEssential: true
  },
  {
    id: 'layout-grid-deep',
    title: 'Grid: глубоко',
    difficulty: 'intermediate',
    description: 'Глубокое понимание Grid включает работу с шаблонами, размещением элементов, именованными областями. Grid предоставляет мощные инструменты для создания сложных, адаптивных макетов с минимальным кодом.',
    keyPoints: [
      'Шаблоны: grid-template-columns/rows определяют размеры колонок/строк, можно использовать fr, auto, minmax().',
      'Размещение: grid-column/row определяют позицию элемента, grid-area для именованных областей.',
      'gap: отступы между ячейками (grid-gap устарел, используй gap).',
      'grid-auto-rows/columns: автоматические размеры для неявных строк/колонок.',
      'grid-template-areas: именованные области для визуального описания макета.',
      'Практика: сложные сетки, masonry-раскладка, адаптивные макеты.'
    ],
    tags: ['css', 'grid', 'layout', 'intermediate'],
    examples: [
      {
        title: 'Шаблоны Grid',
        code: `/* Колонки */
.grid {
  grid-template-columns: repeat(3, 1fr);
  /* 3 колонки равной ширины */
}

.grid {
  grid-template-columns: 200px 1fr 200px;
  /* Фиксированная, гибкая, фиксированная */
}

.grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* Адаптивные колонки */
}

/* Отступы */
.grid {
  gap: 20px; /* отступы между ячейками */
}
`
      },
      {
        title: 'Размещение элементов',
        code: `/* Позиционирование */
.item {
  grid-column: 1 / 3; /* с 1 по 3 колонку */
  grid-row: 1 / 2; /* 1 строка */
}

/* Именованные области */
.grid {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
`
      }
    ],
    relatedTopics: ['layout-flexbox-deep', 'layout-combining'],
    funFact: 'Grid функция repeat() была создана для упрощения повторяющихся паттернов. repeat(auto-fit, minmax(200px, 1fr)) создаёт адаптивную сетку: элементы автоматически переносятся, когда не помещаются, и занимают равное пространство. Это избавляет от необходимости media queries для простых сеток.',
    isFrontendEssential: true
  },
  {
    id: 'layout-combining',
    title: 'Осознанный выбор',
    difficulty: 'intermediate',
    description: 'Выбор между Flexbox и Grid зависит от задачи. Flexbox для компонентов и одномерных раскладок, Grid для сложных макетов страниц. Понимание критериев выбора помогает использовать правильный инструмент.',
    keyPoints: [
      'Flexbox: компоненты (кнопки, карточки), одномерные раскладки, выравнивание, навигация.',
      'Grid: макеты страниц, сложные сетки, двумерные раскладки, именованные области.',
      'Комбинирование: Grid для общего каркаса, Flexbox для внутренних компонентов.',
      'Критерии: нужна ли двумерность? Сложность макета? Компонент или страница?'
    ],
    tags: ['css', 'flexbox', 'grid', 'layout', 'intermediate'],
    examples: [
      {
        title: 'Комбинирование',
        code: `/* Grid для общего каркаса */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

/* Flexbox для компонентов */
.card {
  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  justify-content: space-between;
}
`
      }
    ],
    relatedTopics: ['layout-flexbox-deep', 'layout-grid-deep'],
    funFact: 'Выбор между Flexbox и Grid часто вызывает споры, но на практике они отлично дополняют друг друга. Grid для общего каркаса страницы, Flexbox для компонентов внутри. Это не конкуренция, а синергия: правильное комбинирование создаёт мощные и гибкие макеты.',
    isFrontendEssential: true
  }
];
