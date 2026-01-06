import { Topic } from '../../../types';

export const CSS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'css-box-model',
    title: 'Блочная модель',
    difficulty: 'beginner',
    description: 'Блочная модель (Box Model) описывает, как браузер вычисляет размеры элементов. Элемент состоит из content (содержимое), padding (внутренние отступы), border (граница) и margin (внешние отступы). Свойство box-sizing определяет, включаются ли padding и border в общую ширину и высоту элемента.',
    keyPoints: [
      'Компоненты: content (ширина/высота), padding (внутренние отступы), border (граница), margin (внешние отступы).',
      'box-sizing: content-box (по умолчанию) — width/height относятся только к content, padding и border добавляются.',
      'box-sizing: border-box — width/height включают padding и border, проще контролировать размеры.',
      'Расчёт размеров: content-box: общая ширина = width + padding-left + padding-right + border-left + border-right + margin-left + margin-right.',
      'Расчёт размеров: border-box: общая ширина = width (уже включает padding и border) + margin-left + margin-right.',
      'Рекомендация: использовать * { box-sizing: border-box; } для предсказуемости размеров.'
    ],
    tags: ['css', 'box-model', 'basics', 'layout', 'fundamentals'],
    examples: [
      {
        title: 'Блочная модель: content-box',
        code: `/* По умолчанию: box-sizing: content-box */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}

/* Реальная ширина элемента:
   width: 200px (content)
   + padding: 20px + 20px = 40px
   + border: 5px + 5px = 10px
   + margin: 10px + 10px = 20px
   = 270px общая ширина

   Только content = 200px */
`
      },
      {
        title: 'Блочная модель: border-box',
        code: `/* box-sizing: border-box */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}

/* Реальная ширина элемента:
   width: 200px (включает padding и border)
   + margin: 10px + 10px = 20px
   = 220px общая ширина

   content = 200px - 40px (padding) - 10px (border) = 150px */
`
      },
      {
        title: 'Универсальный border-box',
        code: `/* Рекомендуемый подход */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Теперь все элементы используют border-box,
   размеры предсказуемы и проще контролировать */
`
      }
    ],
    relatedTopics: ['css-positioning', 'css-display-types'],
    funFact: 'До появления CSS верстальщики использовали таблицы (<table>) для layout и прозрачные GIF-изображения (spacer.gif) для создания отступов. Свойство z-index назвали так, а не depth или layer, потому что оно работает по оси Z (глубина) в трёхмерном пространстве рендеринга.'
  },
  {
    id: 'css-positioning',
    title: 'Позиционирование',
    difficulty: 'beginner',
    description: 'CSS позиционирование определяет, как элемент размещается на странице. static — обычный поток, relative — относительно обычной позиции, absolute — относительно ближайшего positioned родителя, fixed — относительно viewport, sticky — комбинация relative и fixed. Понятие контекста позиционирования важно для absolute и fixed.',
    keyPoints: [
      'static: значение по умолчанию, элемент в обычном потоке документа.',
      'relative: элемент смещается относительно своей обычной позиции, место в потоке сохраняется.',
      'absolute: элемент выходит из потока, позиционируется относительно ближайшего positioned родителя (relative, absolute, fixed).',
      'fixed: элемент выходит из потока, позиционируется относительно viewport, остаётся на месте при прокрутке.',
      'sticky: элемент ведёт себя как relative до достижения порога, затем как fixed.',
      'Контекст позиционирования: для absolute и fixed нужен positioned родитель (position не static).'
    ],
    tags: ['css', 'positioning', 'layout', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Типы позиционирования',
        code: `/* static: обычный поток */
.element {
  position: static; /* по умолчанию */
}

/* relative: относительно обычной позиции */
.element {
  position: relative;
  top: 10px;
  left: 20px;
  /* Смещается на 10px вниз, 20px вправо
     Место в потоке сохраняется */
}

/* absolute: относительно positioned родителя */
.parent {
  position: relative; /* создаёт контекст */
}

.child {
  position: absolute;
  top: 0;
  right: 0;
  /* Позиционируется относительно .parent */
}

/* fixed: относительно viewport */
.element {
  position: fixed;
  top: 0;
  left: 0;
  /* Остаётся на месте при прокрутке */
}

/* sticky: комбинация relative и fixed */
.element {
  position: sticky;
  top: 0;
  /* До прокрутки: relative
     После достижения top: 0: fixed */
}
`
      },
      {
        title: 'Контекст позиционирования',
        code: `/* БЕЗ контекста: absolute относительно body */
<div class="container">
  <div class="absolute-child">Текст</div>
</div>

.container {
  /* position не указан = static */
}

.absolute-child {
  position: absolute;
  top: 0;
  right: 0;
  /* Позиционируется относительно body,
     не относительно .container */
}


/* С контекстом: absolute относительно родителя */
.container {
  position: relative; /* создаёт контекст */
}

.absolute-child {
  position: absolute;
  top: 0;
  right: 0;
  /* Позиционируется относительно .container */
}
`
      }
    ],
    relatedTopics: ['css-box-model', 'css-display-types'],
    additionalDescription: 'Исторически позиционирование было одной из самых сложных частей CSS. До появления Flexbox и Grid верстальщики использовали float для создания колонок, что приводило к проблемам с очисткой потока и требовало хаков вроде clearfix.',
    funFact: 'Position: sticky был предложен в 2012 году, но долго не поддерживался браузерами. Он работает как комбинация relative и fixed: элемент ведёт себя как relative до достижения порога прокрутки, затем "прилипает" как fixed. Это избавило от необходимости JavaScript для создания липких заголовков.'
  },
  {
    id: 'css-display-types',
    title: 'Типы боксов',
    difficulty: 'beginner',
    description: 'Свойство display определяет тип бокса элемента и как он отображается. block — блочный элемент, занимает всю ширину, inline — строчный, занимает только необходимое место, inline-block — комбинация, none — скрывает элемент. Понимание типов боксов важно для контроля layout.',
    keyPoints: [
      'block: блочный элемент, занимает всю доступную ширину, начинается с новой строки (div, p, h1-h6).',
      'inline: строчный элемент, занимает только необходимое место, не начинается с новой строки (span, a, strong).',
      'inline-block: как inline, но можно задать width/height и вертикальные margin/padding (img, button).',
      'none: элемент полностью скрыт, не занимает место в потоке, не рендерится.',
      'Особенности: block элементы можно центрировать через margin: auto, inline элементы игнорируют width/height.',
      'Изменение типа: можно изменить display любого элемента (например, сделать div inline).'
    ],
    tags: ['css', 'display', 'basics', 'layout', 'fundamentals'],
    examples: [
      {
        title: 'Типы display',
        code: `/* block: занимает всю ширину */
.block {
  display: block;
  width: 100%; /* по умолчанию */
  /* Начинается с новой строки */
}

/* inline: только необходимое место */
.inline {
  display: inline;
  /* width и height не работают */
  /* margin-top и margin-bottom не работают */
  /* Начинается в той же строке */
}

/* inline-block: комбинация */
.inline-block {
  display: inline-block;
  width: 200px; /* работает */
  height: 100px; /* работает */
  /* Но остаётся в строке */
}

/* none: скрыт */
.hidden {
  display: none;
  /* Элемент не рендерится,
     не занимает место */
}
`
      },
      {
        title: 'Практическое использование',
        code: `/* Список в строку */
ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-right: 20px;
}

/* Кнопки в строку с размерами */
.button {
  display: inline-block;
  width: 150px;
  height: 40px;
  text-align: center;
}

/* Скрытие элементов */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}
`
      }
    ],
    relatedTopics: ['css-box-model', 'css-selectors'],
    funFact: 'Display: inline-block был добавлен в CSS2.1 как компромисс между inline и block. Интересно, что изначально он работал нестабильно в разных браузерах, и верстальщики использовали хаки вроде *display: inline; zoom: 1; для IE6. Сейчас это один из самых используемых значений display.'
  },
  {
    id: 'css-selectors',
    title: 'Селекторы',
    difficulty: 'beginner',
    description: 'CSS селекторы определяют, к каким элементам применяются стили. Базовые селекторы: по тегу, классу, id, атрибутам. Комбинаторы (пробел, >, +, ~) позволяют выбирать элементы по их положению в DOM. Понимание селекторов — основа работы с CSS.',
    keyPoints: [
      'По тегу: селектор тега применяется ко всем элементам этого типа (div, p, a).',
      'По классу: .class-name выбирает элементы с классом, можно использовать несколько раз.',
      'По id: #id-name выбирает элемент с id, должен быть уникальным на странице.',
      'Группировка: запятая объединяет селекторы (div, p применяет стили к div и p).',
      'Комбинатор потомков (пробел): div p выбирает все p внутри div на любом уровне вложенности.',
      'Комбинатор дочерних (>): div > p выбирает только прямые дочерние p внутри div.',
      'Комбинатор соседей (+): div + p выбирает p, который сразу следует за div.',
      'Комбинатор братьев (~): div ~ p выбирает все p, которые следуют за div.'
    ],
    tags: ['css', 'selectors', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Базовые селекторы',
        code: `/* По тегу */
p {
  color: blue;
}

/* По классу */
.button {
  background: red;
}

/* По id */
#header {
  height: 100px;
}

/* По атрибуту */
[type="text"] {
  border: 1px solid;
}

/* Группировка */
h1, h2, h3 {
  font-weight: bold;
}
`
      },
      {
        title: 'Комбинаторы',
        code: `/* Потомки (пробел): все p внутри div */
div p {
  color: blue;
}

/* Дочерние (>): только прямые дочерние */
div > p {
  color: red;
}

/* Соседи (+): следующий элемент */
div + p {
  margin-top: 20px;
}

/* Братья (~): все следующие элементы */
div ~ p {
  color: green;
}

/* Пример HTML */
<div>
  <p>Прямой дочерний</p> <!-- div > p, div p -->
  <section>
    <p>Вложенный</p> <!-- только div p -->
  </section>
</div>
<p>Сосед</p> <!-- div + p, div ~ p -->
<p>Ещё сосед</p> <!-- только div ~ p -->
`
      }
    ],
    relatedTopics: ['css-specificity', 'css-display-types'],
    funFact: 'Комбинатор ~ (тильда) называется "general sibling combinator" и выбирает все элементы-братья, следующие за указанным элементом. Он был добавлен в CSS3 и менее известен, чем + (adjacent sibling), но очень полезен для стилизации списков и последовательностей элементов.'
  },
  {
    id: 'css-specificity',
    title: 'Специфичность',
    difficulty: 'beginner',
    description: 'Специфичность определяет приоритет CSS правил при конфликтах. Более специфичный селектор имеет больший приоритет. Базовая модель: inline стили > id > класс > тег. Понимание специфичности помогает разрешать конфликты стилей без использования !important.',
    keyPoints: [
      'Расчёт специфичности: inline (1000), id (100), класс/атрибут/псевдокласс (10), тег/псевдоэлемент (1).',
      'Приоритет: inline стили > id > класс > тег, при равной специфичности — последнее правило.',
      '!important: переопределяет все правила, но злоупотребление усложняет поддержку.',
      'Разрешение конфликтов: увеличить специфичность селектора вместо !important.',
      'Каскадность: при равной специфичности применяется последнее правило в CSS.',
      'Лучшие практики: избегать inline стилей, минимизировать использование id в CSS, использовать классы.'
    ],
    tags: ['css', 'specificity', 'cascade', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Расчёт специфичности',
        code: `/* Специфичность: 0,0,0,1 (тег) */
div {
  color: blue;
}

/* Специфичность: 0,0,1,0 (класс) */
.container {
  color: red; /* Применяется */
}

/* Специфичность: 0,1,0,0 (id) */
#header {
  color: green; /* Применяется */
}

/* Специфичность: 1,0,0,0 (inline) */
<div style="color: purple;">Текст</div> /* Применяется */

/* Порядок приоритета:
   inline > id > класс > тег */
`
      },
      {
        title: 'Комбинирование селекторов',
        code: `/* Специфичность: 0,0,0,2 (два тега) */
div p {
  color: blue;
}

/* Специфичность: 0,0,1,1 (класс + тег) */
.container p {
  color: red; /* Применяется */
}

/* Специфичность: 0,0,2,0 (два класса) */
.container .text {
  color: green; /* Применяется */
}

/* Специфичность: 0,1,1,0 (id + класс) */
#header .title {
  color: purple; /* Применяется */
}
`
      },
      {
        title: 'Избегание !important',
        code: `/* ПЛОХО: использование !important */
.text {
  color: blue !important;
}

/* Лучше увеличить специфичность */
.container .text {
  color: blue;
}

/* Или использовать более специфичный селектор */
#main .container .text {
  color: blue;
}

/* !important только в крайних случаях,
   когда нужно переопределить сторонние стили */
`
      }
    ],
    relatedTopics: ['css-selectors', 'css-units'],
    funFact: 'Специфичность была введена для разрешения конфликтов стилей, но !important нарушает всю систему. Интересно, что специфичность можно обойти даже без !important: используя селектор с большим количеством классов или id. Однако это создаёт проблемы с поддерживаемостью кода.'
  },
  {
    id: 'css-units',
    title: 'Единицы измерения',
    difficulty: 'beginner',
    description: 'CSS поддерживает различные единицы измерения для размеров элементов. px — пиксели, фиксированный размер. % — проценты от родителя. em — относительно размера шрифта родителя. rem — относительно размера шрифта корневого элемента. vh/vw — проценты от высоты/ширины viewport. Выбор единиц влияет на адаптивность и масштабируемость.',
    keyPoints: [
      'px: пиксели, фиксированный размер, не масштабируется при изменении размера шрифта браузера.',
      '%: проценты от размера родителя, width: 50% = половина ширины родителя.',
      'em: относительно размера шрифта родителя, 1em = размер шрифта родителя, наследуется.',
      'rem: относительно размера шрифта корневого элемента (html), 1rem = размер шрифта html, не наследуется.',
      'vh/vw: проценты от высоты/ширины viewport, 100vh = высота экрана, 50vw = половина ширины экрана.',
      'Рекомендации: rem для типографики и отступов, % для ширины, vh/vw для полноэкранных элементов.'
    ],
    tags: ['css', 'units', 'responsive', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Типы единиц',
        code: `/* px: фиксированный размер */
.element {
  width: 200px;
  font-size: 16px;
}

/* %: от родителя */
.container {
  width: 100%;
}

.child {
  width: 50%; /* половина ширины .container */
}

/* em: от размера шрифта родителя */
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em; /* 30px (20px * 1.5) */
  margin: 1em; /* 20px (от размера шрифта родителя) */
}

/* rem: от размера шрифта html */
html {
  font-size: 16px;
}

.element {
  font-size: 1.5rem; /* 24px (16px * 1.5) */
  margin: 2rem; /* 32px (16px * 2) */
}

/* vh/vw: от viewport */
.fullscreen {
  height: 100vh; /* высота экрана */
  width: 50vw; /* половина ширины экрана */
}
`
      },
      {
        title: 'Проблема с em',
        code: `/* em наследуется, может накапливаться */
.parent {
  font-size: 20px;
}

.child {
  font-size: 1.5em; /* 30px */
}

.grandchild {
  font-size: 1.5em; /* 45px (30px * 1.5), не 30px! */
}

/* rem не наследуется, всегда от html */
html {
  font-size: 16px;
}

.child {
  font-size: 1.5rem; /* 24px */
}

.grandchild {
  font-size: 1.5rem; /* 24px, не накапливается */
}
`
      }
    ],
    relatedTopics: ['css-specificity', 'css-text'],
    funFact: 'Единица rem (root em) была добавлена в CSS3 и решает проблему накопления размеров в em. Если родитель имеет font-size: 1.5em, а дочерний элемент тоже 1.5em, то реальный размер будет 1.5 × 1.5 = 2.25 от базового. Rem всегда относительно корневого элемента, что делает размеры предсказуемыми.'
  },
  {
    id: 'css-text',
    title: 'Работа с текстом',
    difficulty: 'beginner',
    description: 'CSS предоставляет множество свойств для работы с текстом. font-size определяет размер шрифта, font-weight — толщину, line-height — высоту строки, white-space — обработку пробелов. Понимание этих свойств важно для типографики и читаемости.',
    keyPoints: [
      'font-size: размер шрифта, лучше использовать rem для масштабируемости.',
      'font-weight: толщина шрифта (normal=400, bold=700, или 100-900), зависит от доступных начертаний шрифта.',
      'line-height: высота строки, влияет на читаемость, обычно 1.4-1.6 для текста, можно без единиц (1.5 = 1.5em).',
      'white-space: nowrap предотвращает перенос строк, pre сохраняет пробелы, normal — обычное поведение.',
      'text-align: выравнивание текста (left, center, right, justify).',
      'text-decoration: подчёркивание, зачёркивание (underline, line-through, none).'
    ],
    tags: ['css', 'typography', 'text', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Основные свойства текста',
        code: `/* Размер шрифта */
.text {
  font-size: 1rem; /* 16px при font-size html = 16px */
}

/* Толщина */
.bold {
  font-weight: bold; /* или 700 */
}

.light {
  font-weight: 300;
}

/* Высота строки */
.text {
  line-height: 1.5; /* 1.5 от font-size */
  /* или */
  line-height: 24px; /* фиксированная */
}

/* Выравнивание */
.text {
  text-align: center;
}

/* Подчёркивание */
.link {
  text-decoration: underline;
}

.no-decoration {
  text-decoration: none;
}
`
      },
      {
        title: 'white-space',
        code: `/* normal: обычное поведение */
.text {
  white-space: normal;
  /* Переносы строк, пробелы схлопываются */
}

/* nowrap: без переносов */
.nowrap {
  white-space: nowrap;
  /* Текст в одну строку */
}

/* pre: сохраняет пробелы */
.pre {
  white-space: pre;
  /* Сохраняет все пробелы и переносы */
}
`
      }
    ],
    relatedTopics: ['css-units', 'css-selectors'],
    funFact: 'Свойство white-space: pre сохраняет все пробелы и переносы строк, как в теге <pre>. Это полезно для отображения кода или сохранения форматирования текста. Однако white-space: pre-wrap позволяет перенос строк, а pre-line схлопывает пробелы, но сохраняет переносы — каждая опция решает свою задачу.'
  }
];
