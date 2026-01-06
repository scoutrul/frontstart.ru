import { Topic } from '../../../types';

export const PERFORMANCE_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'performance-factors',
    title: 'Факторы производительности',
    difficulty: 'beginner',
    description: 'Производительность UI зависит от множества факторов. Тяжёлые изображения, большой объём CSS, сложные селекторы замедляют загрузку и отрисовку. Понимание базовых метрик (время загрузки, отрисовки) помогает выявлять проблемы.',
    keyPoints: [
      'Факторы: размер файлов (CSS, изображения), сложность селекторов, количество элементов, анимации.',
      'Метрики: время загрузки страницы, время до первой отрисовки (FCP), время до интерактивности (TTI).',
      'Изображения: самый тяжёлый ресурс, оптимизация критична для производительности.',
      'CSS: большой объём CSS замедляет парсинг и применение стилей.',
      'Браузерные инструменты: DevTools Network и Performance для анализа.'
    ],
    tags: ['performance', 'optimization', 'basics'],
    examples: [
      {
        title: 'Базовые метрики',
        code: `/* Время загрузки: от запроса до полной загрузки
   FCP (First Contentful Paint): первая отрисовка контента
   TTI (Time to Interactive): время до интерактивности

   Измеряется в DevTools Performance */
`
      }
    ],
    relatedTopics: ['performance-rendering'],
    additionalDescription: 'Производительность UI — это не только скорость загрузки, но и плавность взаимодействия. Даже быстрая загрузка не поможет, если интерфейс "тормозит" при скролле или анимациях. Понимание факторов влияния помогает создавать действительно быстрые интерфейсы.'
  },
  {
    id: 'performance-rendering',
    title: 'Critical Rendering Path',
    difficulty: 'intermediate',
    description: 'Critical Rendering Path — последовательность шагов, которые браузер выполняет для отрисовки страницы. HTML → CSSOM → Render Tree → Layout → Paint → Composite. Понимание этого процесса помогает оптимизировать загрузку.',
    keyPoints: [
      'Этапы: парсинг HTML → построение CSSOM → создание Render Tree → Layout (reflow) → Paint → Composite.',
      'Reflow: пересчёт размеров и позиций элементов, вызывается изменением размеров, добавлением элементов.',
      'Repaint: перерисовка элементов, вызывается изменением цветов, фонов, без изменения размеров.',
      'Минимизация: избегать изменений, вызывающих reflow, использовать transform и opacity для анимаций.',
      'Оптимизация: критический CSS inline, отложенная загрузка некритического CSS, минификация.'
    ],
    tags: ['performance', 'rendering', 'reflow', 'repaint', 'intermediate'],
    examples: [
      {
        title: 'Избегание reflow',
        code: `/* ПЛОХО: вызывает reflow */
.element {
  width: 100px;
  height: 100px;
}
.element:hover {
  width: 200px; /* reflow */
}

/* ХОРОШО: использует transform */
.element {
  transform: scaleX(1);
}
.element:hover {
  transform: scaleX(2); /* только composite, нет reflow */
}
`
      }
    ],
    relatedTopics: ['performance-factors', 'performance-optimization'],
    funFact: 'Про reflow: получение значений offsetWidth или getComputedStyle в JavaScript может вызывать синхронный форсированный reflow, убивая FPS. Браузер откладывает reflow для оптимизации, но чтение этих свойств заставляет его выполнить reflow немедленно, что может привести к "layout thrashing".'
  },
  {
    id: 'performance-optimization',
    title: 'Оптимизация ресурсов',
    difficulty: 'intermediate',
    description: 'Оптимизация ресурсов включает сжатие изображений, выбор форматов, ленивую загрузку. Атрибут loading="lazy" для изображений ниже фолда откладывает загрузку до необходимости. Правильная оптимизация значительно улучшает производительность.',
    keyPoints: [
      'Изображения: выбор формата (WebP, AVIF для современных браузеров), сжатие, правильные размеры.',
      'Ленивая загрузка: loading="lazy" для изображений ниже фолда, загружаются при прокрутке.',
      'CSS: удаление неиспользуемого кода, минификация, разделение на критический и некритический.',
      'Критический CSS: стили для контента выше фолда, inline в <head> для быстрой отрисовки.'
    ],
    tags: ['performance', 'optimization', 'images', 'intermediate'],
    examples: [
      {
        title: 'Ленивая загрузка',
        code: `<!-- Изображения ниже фолда -->
<img src="image.jpg" loading="lazy" alt="Описание">

/* Загружается при прокрутке до элемента */
`
      }
    ],
    relatedTopics: ['performance-rendering'],
    funFact: 'Атрибут loading="lazy" для изображений не работает эффективно, если у изображения нет явных width и height. Без размеров браузер не может резервировать место, что приводит к CLS (Cumulative Layout Shift) — сдвигу контента при загрузке изображения.'
  }
];
