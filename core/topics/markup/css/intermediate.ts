import { Topic } from '../../../types';

export const CSS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'css-cascade-inheritance',
    title: 'Каскад и наследование',
    difficulty: 'intermediate',
    description: 'Каскадность CSS определяет порядок применения стилей из разных источников. Наследование позволяет дочерним элементам получать значения свойств от родителя. Понимание каскада и наследования помогает управлять стилями без конфликтов и избыточного кода.',
    keyPoints: [
      'Источники стилей: пользовательские стили, авторские стили (CSS файлы), стили браузера (user agent), порядок важен.',
      'Каскад: при конфликте применяется стиль с большей специфичностью, при равной — последний в порядке.',
      'Наследование: некоторые свойства наследуются (color, font-size), другие нет (margin, padding, border).',
      'inherit: явно наследует значение от родителя, полезно для переопределения.',
      'Управление переопределением: увеличение специфичности, использование :not(), избегание !important.',
      'Правила слияния: стили из разных источников объединяются, конфликты разрешаются по специфичности.'
    ],
    tags: ['css', 'cascade', 'inheritance', 'specificity', 'intermediate'],
    examples: [
      {
        title: 'Каскадность',
        code: `/* Браузерные стили (самый низкий приоритет) */
p {
  margin: 1em; /* по умолчанию */
}

/* Авторские стили */
p {
  margin: 0; /* переопределяет браузерные */
  color: blue;
}

/* Inline стили (высокий приоритет) */
<p style="color: red;">Текст</p> /* red применяется */

/* !important (самый высокий) */
p {
  color: green !important; /* применяется всегда */
}
`
      },
      {
        title: 'Наследование',
        code: `/* Наследуемые свойства */
.parent {
  color: blue;
  font-size: 18px;
  line-height: 1.5;
}

.child {
  /* Наследует color, font-size, line-height */
}

/* НЕ наследуемые свойства */
.parent {
  margin: 20px;
  padding: 10px;
  border: 1px solid;
}

.child {
  /* НЕ наследует margin, padding, border */
  /* Нужно задавать явно */
}

/* Явное наследование */
.child {
  color: inherit; /* наследует от родителя */
  margin: inherit; /* наследует margin (обычно не наследуется) */
}
`
      }
    ],
    relatedTopics: ['css-specificity', 'css-bfc'],
    funFact: 'Каскадность CSS была создана для объединения стилей из разных источников: браузерных, пользовательских и авторских. Интересно, что порядок имеет значение только при равной специфичности: последнее правило "выигрывает". Это позволяет переопределять стили, просто добавив правило ниже в коде.',
    isFrontendEssential: true
  },
  {
    id: 'css-bfc',
    title: 'Контекст форматирования',
    difficulty: 'intermediate',
    description: 'BFC (Block Formatting Context) — изолированная область, в которой элементы располагаются независимо от внешнего контекста. Понимание BFC помогает решать проблемы с margin collapse, float и layout. Некоторые CSS свойства создают новый BFC.',
    keyPoints: [
      'Что такое BFC: изолированная область для размещения элементов, внутренние элементы не влияют на внешние.',
      'Свойства, создающие BFC: overflow (не visible), display (flex, grid, inline-block), position (absolute, fixed), float.',
      'Решает margin collapse: margin дочерних элементов не схлопываются с margin родителя.',
      'Изолирует float: элементы внутри BFC не обтекают внешние float элементы.',
      'Практическое применение: создание BFC для изоляции контента, предотвращение margin collapse, работа с float.'
    ],
    tags: ['css', 'bfc', 'layout', 'intermediate'],
    examples: [
      {
        title: 'BFC предотвращает margin collapse',
        code: `/* БЕЗ BFC: margin схлопывается */
.parent {
  margin-top: 20px;
}

.child {
  margin-top: 30px;
}

/* Реальный margin-top = 30px (больший),
   не 50px (20px + 30px) */


/* С BFC: margin не схлопывается */
.parent {
  overflow: hidden; /* создаёт BFC */
  margin-top: 20px;
}

.child {
  margin-top: 30px;
}

/* Реальный margin-top = 50px (20px + 30px) */
`
      },
      {
        title: 'BFC изолирует float',
        code: `/* БЕЗ BFC: контент обтекает float */
.float {
  float: left;
  width: 200px;
}

.content {
  /* Обтекает .float */
}


/* С BFC: контент изолирован */
.container {
  overflow: hidden; /* создаёт BFC */
}

.float {
  float: left;
}

.content {
  /* Не обтекает .float,
     располагается независимо */
}
`
      }
    ],
    relatedTopics: ['css-cascade-inheritance', 'css-modern-units'],
    funFact: 'BFC (Block Formatting Context) — это неочевидная, но мощная концепция CSS. Многие верстальщики используют overflow: hidden для создания BFC, не понимая, что именно происходит. BFC изолирует элементы и предотвращает margin collapse, что критично для предсказуемого layout.',
    isFrontendEssential: true
  },
  {
    id: 'css-modern-units',
    title: 'Современные единицы',
    difficulty: 'intermediate',
    description: 'Современные CSS функции и единицы позволяют создавать гибкие и адаптивные интерфейсы. clamp() ограничивает значение диапазоном, min() и max() выбирают минимальное/максимальное значение. Комбинирование rem и % создаёт гибкие системы размеров.',
    keyPoints: [
      'clamp(min, preferred, max): ограничивает значение диапазоном, предпочтительное значение между min и max.',
      'min() и max(): выбирают минимальное/максимальное значение из списка, полезно для адаптивности.',
      'Комбинирование rem и %: rem для базовых размеров, % для адаптивности, создаёт гибкие системы.',
      'calc(): вычисляет значения, позволяет комбинировать разные единицы (width: calc(100% - 20px)).',
      'Практическое применение: адаптивная типографика, гибкие контейнеры, ограничение размеров.'
    ],
    tags: ['css', 'units', 'responsive', 'clamp', 'intermediate'],
    examples: [
      {
        title: 'clamp для адаптивной типографики',
        code: `/* Адаптивный размер шрифта */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Минимум: 1.5rem (24px)
   Предпочтительно: 4vw (4% ширины экрана)
   Максимум: 3rem (48px)

   На маленьких экранах: 1.5rem
   На больших: до 3rem
   Между: масштабируется с шириной */
`
      },
      {
        title: 'min и max',
        code: `/* Минимальная ширина */
.container {
  width: min(100%, 1200px);
  /* Ширина = меньшее из 100% или 1200px */
}

/* Максимальная высота */
.content {
  height: max(50vh, 400px);
  /* Высота = большее из 50vh или 400px */
}

/* Комбинирование */
.element {
  width: min(calc(100% - 40px), 800px);
  /* Ширина с учётом отступов и максимума */
}
`
      },
      {
        title: 'calc для вычислений',
        code: `/* Комбинирование единиц */
.container {
  width: calc(100% - 40px);
  /* 100% ширины минус 40px */
}

.grid {
  width: calc(100% / 3 - 20px);
  /* Треть ширины минус отступ */
}

/* С разными единицами */
.element {
  margin: calc(1rem + 10px);
  /* rem + px */
}
`
      }
    ],
    relatedTopics: ['css-bfc'],
    funFact: 'Лайфхаки CSS: с помощью outline: 1px solid transparent решали проблемы фокуса без визуального сдвига (outline не влияет на layout). Хак с box-shadow: inset 0 0 0 1px red использовали для дебага, чтобы видеть границы элементов. С помощью border можно рисовать треугольники, используя прозрачные границы.',
    isFrontendEssential: true
  }
];
