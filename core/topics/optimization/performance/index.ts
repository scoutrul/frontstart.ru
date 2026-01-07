import { Topic } from '../../../types';

// Производительность - основы (введение, метрики, измерение)
export const PERFORMANCE_BASICS_TOPICS: Topic[] = [
  {
    id: 'performance-introduction',
    title: 'Введение',
    difficulty: 'beginner',
    description: 'Производительность — это скорость загрузки, отрисовки и отклика веб-приложения, от которой напрямую зависит пользовательский опыт и бизнес-показатели. Быстрая работа сайта повышает вовлечённость пользователей, снижает отказы и улучшает конверсии.\n\nВо фронтенде производительность определяется тем, как браузер загружает ресурсы, выполняет JavaScript и отображает интерфейс, а также тем, насколько эффективно используется сеть, память и процессор.',
    keyPoints: [
      'Влияние на пользователей: скорость первого рендера, плавность интерфейса, быстрота отклика',
      'Влияние на бизнес: bounce rate, retention, конверсии, SEO',
      'Метрики производительности: FCP (первый контент), LCP (крупнейший элемент), TTI (готовность к взаимодействию), CLS (визуальная стабильность)',
      'Роль браузера: парсинг HTML, построение DOM и CSSOM, выполнение JavaScript, отрисовка страницы',
      'Ресурсы страницы: количество файлов, их размер, порядок и момент загрузки',
      'Подходы к оптимизации: уменьшение объёма ресурсов, устранение блокировок рендера, отложенная загрузка (lazy loading)'
    ],
    additionalDescription: 'Производительность во фронтенде — это не одна конкретная оптимизация, а совокупность решений на разных этапах жизненного цикла страницы. Она включает работу с браузерным рендерингом, загрузкой ресурсов по сети, выполнением JavaScript и управлением состоянием интерфейса.\n\nПонимание базовых принципов производительности позволяет осознанно применять инструменты оптимизации, измерять эффект изменений и находить узкие места ещё до того, как они начнут влиять на пользователей.',
    tags: [
      'performance',
      'optimization',
      'metrics',
      'browser',
      'frontend',
      'lighthouse',
      'rendering'
    ],
    relatedTopics: [
      'critical-rendering-path',
      'performance-metrics',
      'browser-rendering',
      'network-performance'
    ],
    funFact: 'Производительность тесно связана с эффективностью сайта и положительным пользовательским опытом, что напрямую влияет на бизнес-показатели. Для интернет-магазинов это критично: медленная загрузка снижает конверсии и продажи. Для обычных сайтов производительность влияет на SEO — поисковые системы (Google, Yandex) предпочитают быстрые сайты и ранжируют их выше в результатах поиска. В общем, производительность — это очень важно.',
    examples: []
  },
  {
    id: 'performance-metrics',
    title: 'Метрики производительности',
    difficulty: 'beginner',
    description: 'Метрики производительности — это измеримые показатели, которые позволяют оценить скорость загрузки, визуальную стабильность и отзывчивость веб-приложения. Они используются для объективной оценки пользовательского опыта и служат основой для принятия решений по оптимизации.\n\nСовременные браузерные метрики ориентированы не на технические детали, а на то, как быстро пользователь видит контент и может начать взаимодействие с интерфейсом.',
    keyPoints: [
      'Зачем нужны метрики: объективная оценка скорости и качества пользовательского опыта',
      'Web Vitals: набор ключевых метрик, рекомендованных Google для оценки UX',
      'FCP (First Contentful Paint): момент появления первого визуального контента',
      'LCP (Largest Contentful Paint): время отображения основного контента страницы',
      'CLS (Cumulative Layout Shift): показатель визуальной стабильности интерфейса',
      'TTI (Time To Interactive): время до полной готовности страницы к взаимодействию',
      'INP (Interaction to Next Paint): отзывчивость интерфейса на действия пользователя'
    ],
    additionalDescription: 'Метрики производительности позволяют связать техническую реализацию фронтенда с реальным пользовательским восприятием скорости. В отличие от субъективных ощущений, они дают количественные значения, по которым можно сравнивать версии приложения и отслеживать регрессии.\n\nБольшинство современных метрик напрямую связано с этапами браузерного рендеринга и Critical Rendering Path, поэтому их улучшение невозможно без понимания того, как браузер загружает ресурсы, выполняет JavaScript и отображает страницу.',
    tags: [
      'performance',
      'metrics',
      'web-vitals',
      'lighthouse',
      'optimization',
      'browser'
    ],
    relatedTopics: [
      'performance-introduction',
      'critical-rendering-path',
      'core-web-vitals',
      'browser-rendering',
      'devtools-performance'
    ],
    funFact: 'Web Vitals как методологию и инструментарий для измерения и оценки производительности Google представил в 2018 году. Цель инициативы — унифицировать управление метриками и упростить измерение производительности, отклика и визуальной стабильности. До этого каждый разработчик измерял производительность по-своему, в основном фокусируясь на скорости загрузки. Web Vitals стандартизировал подход и сделал метрики ориентированными на реальный пользовательский опыт.',
    examples: []
  },
  {
    id: 'performance-measurement',
    title: 'Измерение производительности',
    difficulty: 'beginner',
    description: 'Измерение производительности — это процесс сбора и анализа метрик, которые показывают, насколько быстро загружается и работает веб-страница с точки зрения пользователя. Без измерений невозможно объективно оценить качество производительности и эффективность оптимизаций.\n\nВо фронтенде производительность измеряется с помощью браузерных инструментов и автоматизированных отчётов, которые фиксируют ключевые этапы загрузки, рендера и взаимодействия.',
    keyPoints: [
      'Зачем измерять: выявление узких мест, проверка гипотез и отслеживание регрессий',
      'Lighthouse: автоматизированный аудит производительности и Web Vitals',
      'Chrome DevTools: анализ загрузки, рендера и выполнения JavaScript',
      'Performance Panel: таймлайн загрузки, рендеринга и взаимодействий',
      'Network Panel: время запросов, размер ресурсов и порядок загрузки',
      'Field vs Lab данные: реальные пользовательские данные и синтетические замеры'
    ],
    additionalDescription: 'Инструменты измерения производительности позволяют увидеть, какие ресурсы загружаются дольше всего, какие этапы браузерного рендеринга занимают основное время и как это влияет на пользовательский опыт. Они помогают перейти от субъективных ощущений скорости к конкретным числам.\n\nНа начальном уровне важно научиться читать отчёты, понимать основные показатели и связывать их с этапами загрузки страницы, а не стремиться сразу к глубокой оптимизации или автоматизации мониторинга.',
    tags: [
      'performance',
      'metrics',
      'lighthouse',
      'devtools',
      'profiling',
      'browser'
    ],
    relatedTopics: [
      'performance-metrics',
      'critical-rendering-path',
      'devtools-performance',
      'network-performance'
    ],
    examples: [
      {
        title: 'Измерение производительности',
        code: `// Performance API
const start = performance.now();
// ... код ...
const end = performance.now();
console.log(\`Время выполнения: \${end - start}ms\`);

// Lighthouse метрики
// FCP, LCP, TTI, TBT, CLS`
      }
    ]
  },
  {
    id: 'performance-measurement-advanced',
    title: 'Измерение производительности',
    difficulty: 'intermediate',
    description: 'На начальном уровне мы знакомились с метриками Web Vitals: LCP, CLS, FID и INP. Теперь важно понимать, как их измерять на реальных сайтах, какие инструменты использовать и как получать данные для анализа и оптимизации. Для продвинутого мониторинга стоит сочетать RUM (Real User Monitoring) с лабораторными инструментами (Lighthouse, DevTools, WebPageTest).',
    keyPoints: [
      'NPM-пакет web-vitals: официальный пакет Google для измерения Core Web Vitals на фронтенде, позволяет замерять LCP, CLS, FID и INP в браузере и отправлять данные на сервер, полезно для RUM (Real User Monitoring)',
      'Google Analytics: поддерживает интеграцию Core Web Vitals через Custom Metrics / Events, позволяет анализировать производительность по устройствам, регионам, каналам трафика',
      'Яндекс.Метрика: для русскоязычного сегмента часто критично, умеет измерять скорость загрузки, интерактивность, CLS и другие показатели UX через User Parameters и события',
      'Лабораторные инструменты: Lighthouse (автоматический аудит), Chrome DevTools Performance (Interaction, FPS, Long Tasks), WebPageTest (тестирование скорости загрузки)',
      'RUM vs Lab данные: RUM собирает данные реальных пользователей через JS, Lab данные — синтетические замеры в контролируемых условиях, оба подхода дополняют друг друга'
    ],
    additionalDescription: 'Измерение производительности на реальных сайтах требует комбинации инструментов. NPM-пакет web-vitals отлично подходит для сбора данных с живого трафика и интеграции в аналитические системы. Google Analytics и Яндекс.Метрика позволяют анализировать производительность в контексте бизнес-метрик и сегментировать данные по различным параметрам. Лабораторные инструменты (Lighthouse, DevTools) помогают выявлять проблемы в контролируемых условиях, а RUM показывает реальный опыт пользователей.',
    tags: [
      'performance',
      'metrics',
      'web-vitals',
      'rum',
      'analytics',
      'monitoring',
      'measurement'
    ],
    relatedTopics: [
      'performance-measurement',
      'performance-metrics',
      'lcp-largest-contentful-paint',
      'cls-cumulative-layout-shift',
      'inp-interaction-to-next-paint'
    ],
    examples: [
      {
        title: 'NPM-пакет web-vitals',
        code: `// Установка
// npm install web-vitals

import { getLCP, getCLS, getFID, getINP } from 'web-vitals';

// Базовое использование
getLCP(console.log);
getCLS(console.log);
getFID(console.log);
getINP(console.log);

// Отправка на сервер для RUM
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  navigator.sendBeacon('/analytics', body);
}

getLCP(sendToAnalytics);
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getINP(sendToAnalytics);`
      },
      {
        title: 'Интеграция с Google Analytics 4',
        code: `import { getLCP, getCLS, getFID, getINP } from 'web-vitals';

// Отправка LCP в GA4
getLCP(metric => {
  gtag('event', 'web_vitals', {
    event_category: 'Web Vitals',
    event_label: metric.name,
    value: Math.round(metric.value),
    non_interaction: true,
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta
  });
});

// Отправка всех метрик
function sendToGA(metric) {
  gtag('event', 'web_vitals', {
    event_category: 'Web Vitals',
    event_label: metric.name,
    value: Math.round(metric.value),
    non_interaction: true
  });
}

getLCP(sendToGA);
getCLS(sendToGA);
getFID(sendToGA);
getINP(sendToGA);`
      },
      {
        title: 'Интеграция с Яндекс.Метрикой',
        code: `import { getLCP, getCLS, getFID, getINP } from 'web-vitals';

// Отправка метрик в Яндекс.Метрику
function sendToYandex(metric) {
  if (typeof ym !== 'undefined') {
    ym(YANDEX_METRICA_ID, 'params', {
      [metric.name]: metric.value,
      'metric_id': metric.id,
      'metric_delta': metric.delta
    });
  }
}

getLCP(sendToYandex);
getCLS(sendToYandex);
getFID(sendToYandex);
getINP(sendToYandex);

// Или через события
getLCP(metric => {
  ym(YANDEX_METRICA_ID, 'reachGoal', 'lcp', {
    value: metric.value
  });
});`
      },
      {
        title: 'Комплексный мониторинг',
        code: `import { onCLS, onFID, onLCP, onINP } from 'web-vitals';

// Сбор всех метрик с дополнительной информацией
function collectMetrics() {
  const metrics = {};
  
  onCLS(metric => {
    metrics.cls = {
      value: metric.value,
      rating: metric.rating,
      entries: metric.entries
    };
    sendMetrics(metrics);
  });
  
  onLCP(metric => {
    metrics.lcp = {
      value: metric.value,
      rating: metric.rating,
      element: metric.element?.tagName
    };
    sendMetrics(metrics);
  });
  
  onFID(metric => {
    metrics.fid = {
      value: metric.value,
      rating: metric.rating,
      event: metric.name
    };
    sendMetrics(metrics);
  });
  
  onINP(metric => {
    metrics.inp = {
      value: metric.value,
      rating: metric.rating,
      event: metric.name
    };
    sendMetrics(metrics);
  });
}

function sendMetrics(metrics) {
  // Отправка на сервер
  fetch('/api/metrics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...metrics,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now()
    })
  });
}

collectMetrics();`
      },
      {
        title: 'Chrome DevTools Performance',
        code: `// Использование Performance API для детального анализа
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.renderTime - entry.loadTime);
    }
    if (entry.entryType === 'layout-shift') {
      console.log('CLS:', entry.value);
    }
    if (entry.entryType === 'first-input') {
      console.log('FID:', entry.processingStart - entry.startTime);
    }
  }
});

observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift', 'first-input'] });

// В Chrome DevTools:
// 1. Открыть DevTools → Performance
// 2. Включить "Web Vitals"
// 3. Нажать Record
// 4. Взаимодействовать со страницей
// 5. Остановить запись и проанализировать`
      }
    ]
  }
];

// Web Vitals - метрики и их оптимизация
export const WEB_VITALS_TOPICS: Topic[] = [
  {
    id: 'critical-rendering-path',
    title: 'Critical Rendering Path',
    difficulty: 'beginner',
    description: 'Critical Rendering Path (CRP) — это последовательность шагов, которые браузер выполняет, чтобы превратить HTML, CSS и JavaScript в отображённую страницу. От скорости прохождения этого пути зависит, как быстро пользователь увидит контент и сможет начать взаимодействие с интерфейсом.\n\nCRP является фундаментом веб-производительности, так как именно на этих этапах возникают основные задержки загрузки и рендеринга.',
    keyPoints: [
      'Входные ресурсы: HTML, CSS и JavaScript как исходные данные для рендера',
      'Парсинг HTML: построение DOM-дерева структуры документа',
      'Парсинг CSS: построение CSSOM со стилями страницы',
      'Выполнение JavaScript: влияние скриптов на DOM и процесс рендера',
      'Render Tree: объединение DOM и CSSOM только для видимых элементов',
      'Layout (Reflow): расчёт размеров и позиций элементов',
      'Paint: отрисовка элементов страницы в пиксели'
    ],
    additionalDescription: 'Critical Rendering Path описывает не конкретные оптимизации, а саму модель работы браузера при загрузке страницы. Понимание этой модели позволяет осознанно воспринимать отчёты Lighthouse и DevTools, а также видеть, какие ресурсы и действия блокируют отображение интерфейса.\n\nНа начальном уровне важно понимать порядок этапов CRP и их взаимосвязь, не углубляясь в детали реализации, слои, GPU или внутренние оптимизации браузеров.',
    tags: [
      'performance',
      'optimization',
      'browser',
      'rendering',
      'critical-rendering-path',
      'dom',
      'cssom'
    ],
    relatedTopics: [
      'performance-introduction',
      'performance-metrics',
      'performance-measurement',
      'browser-rendering'
    ],
    examples: []
  },
  {
    id: 'render-blocking-resources',
    title: 'Render-blocking ресурсы',
    difficulty: 'beginner',
    description: 'Render-blocking ресурсы — это ресурсы, загрузка или обработка которых останавливает браузер от продолжения построения Critical Rendering Path и отображения страницы. Пока такие ресурсы не будут загружены и обработаны, браузер не может перейти к следующим этапам рендера.\n\nНа практике render-blocking ресурсы напрямую увеличивают время до первого отображения контента и ухудшают пользовательский опыт.',
    keyPoints: [
      'Что означает «блокировать рендеринг» в контексте браузера',
      'CSS как render-blocking ресурс по умолчанию',
      'JavaScript как parser-blocking и потенциально render-blocking ресурс',
      'Почему браузер останавливает парсинг HTML при выполнении JavaScript',
      'Влияние render-blocking ресурсов на время отображения страницы',
      'Связь render-blocking ресурсов с Critical Rendering Path'
    ],
    additionalDescription: 'Во время построения Critical Rendering Path браузер стремится как можно быстрее построить Render Tree и перейти к этапам layout и paint. Однако некоторые ресурсы требуют полной загрузки и обработки, прежде чем рендер может продолжиться.\n\nCSS считается блокирующим ресурсом, потому что без него невозможно корректно определить стили элементов. JavaScript может блокировать парсинг HTML, так как он способен изменять структуру документа и стили. Из-за этого браузер вынужден приостанавливать рендер до завершения выполнения скриптов.\n\nПонимание того, какие ресурсы являются render-blocking, позволяет осознанно управлять порядком загрузки ресурсов и минимизировать задержки отображения интерфейса.',
    tags: [
      'performance',
      'optimization',
      'render-blocking',
      'critical-rendering-path',
      'css',
      'javascript'
    ],
    relatedTopics: [
      'critical-rendering-path',
      'performance-metrics',
      'performance-measurement',
      'browser-rendering'
    ],
    examples: []
  },
  {
    id: 'lcp-largest-contentful-paint',
    title: 'LCP (Largest Contentful Paint)',
    difficulty: 'beginner',
    description: 'LCP (Largest Contentful Paint) — это метрика Web Vitals, которая показывает, за какое время пользователь видит основной контент страницы. Проще: когда страница выглядит "загруженной" для пользователя, а не просто когда браузер начал что-то рисовать.\n\nLCP фиксирует момент, когда самый крупный видимый элемент в области экрана был отрисован. Это может быть изображение, видео с постером, фоновое изображение или крупный текстовый блок. Учитываются только элементы в первом экране (viewport).',
    keyPoints: [
      'Что измеряет LCP: момент отрисовки самого крупного видимого элемента первого экрана',
      'Типы LCP-элементов: <img>, <video poster>, background-image, крупные текстовые блоки (<h1>, <p>, <div>)',
      'Хорошие значения: ≤ 2.5 сек (✅), 2.5–4 сек (⚠️ нужно улучшить), > 4 сек (❌ плохо)',
      'Почему важен: пользователь перестает ждать именно в этот момент, прямая связь с ощущением скорости, конверсией и SEO',
      'Что чаще всего становится LCP-элементом: hero-картинка, большой баннер, главный заголовок, фон первого экрана',
      'Основные причины плохого LCP: render-blocking CSS, тяжелые изображения, медленный сервер (TTFB), блокирующие веб-шрифты, JS, который мешает рендеру'
    ],
    additionalDescription: 'LCP показывает, когда страница выглядит "загруженной" для пользователя. Можно иметь быстрый JS и маленький бандл, но медленный LCP = ощущение тормозов. При медленном LCP пользователь видит белый экран, потом резко "появляется" контент. При быстром LCP HTML приходит быстро, CSS минимален, LCP-элемент загружается приоритетно, и пользователь почти сразу видит основной контент.\n\nLCP напрямую связан с Critical Rendering Path (определяет, когда браузер вообще может начать рисовать) и render-blocking ресурсами (напрямую тормозят LCP). LCP — это результат всего процесса с точки зрения пользователя.',
    tags: [
      'performance',
      'metrics',
      'web-vitals',
      'lcp',
      'lighthouse',
      'optimization'
    ],
    relatedTopics: [
      'performance-metrics',
      'critical-rendering-path',
      'render-blocking-resources',
      'performance-measurement'
    ],
    examples: [
      {
        title: 'Типичная страница',
        code: `<body>
  <header>
    <img src="hero.jpg" />
  </header>
  <main>
    <h1>Главный заголовок</h1>
    <p>Контент...</p>
  </main>
</body>

// LCP = img hero.jpg, если она самая большая и в viewport`
      },
      {
        title: 'Причины медленного LCP',
        code: `// Картинка грузится поздно
<img src="hero.jpg" /> // без priority

// Большой размер файла
// Блокируется CSS или шрифтами
// JS мешает отрисовке

// Визуально: белый экран → потом резко "появляется" контент`
      },
      {
        title: 'Быстрый LCP',
        code: `// HTML пришел быстро
// CSS минимален
// LCP-элемент загружается приоритетно
<img src="hero.jpg" fetchpriority="high" />
// Пользователь почти сразу видит основной контент`
      }
    ]
  },
  {
    id: 'cls-cumulative-layout-shift',
    title: 'CLS (Cumulative Layout Shift)',
    difficulty: 'beginner',
    description: 'CLS (Cumulative Layout Shift) измеряет визуальную стабильность страницы. То есть, насколько элементы "прыгают" на экране во время загрузки. Высокий CLS раздражает пользователей — кнопки и тексты могут сдвигаться, вызывая случайные клики.',
    keyPoints: [
      'Что считается сдвигом: изображение загружается и толкает текст вниз, реклама или баннер внезапно появляется и смещает контент, шрифты загружаются медленно → текст меняет размеры',
      'Как измеряется CLS: каждый сдвиг имеет score = impact fraction × distance fraction, impact fraction — часть видимой области, которую занимает элемент, distance fraction — насколько сильно элемент сместился, все сдвиги суммируются → получаем Cumulative Layout Shift',
      'Что значит score: 0 — идеально стабильно, < 0.1 — хорошо, > 0.25 — плохо, нужно исправлять',
      'Основные причины плохого CLS: изображения и видео без размеров, динамический контент (реклама, виджеты), шрифты без font-display: swap, вставка блоков в DOM после рендера без резервирования места',
      'Мини-чеклист для улучшения CLS: всегда указывай width и height для изображений и видео, используй aspect-ratio для элементов, которые будут загружаться позже, предварительно резервируй место под рекламу или виджеты, font-display: swap → текст не "прыгает" при подгрузке шрифта, избегай вставки элементов сверху страницы после рендера'
    ],
    additionalDescription: 'CLS показывает, насколько стабильно выглядит страница во время загрузки. Когда элементы "прыгают", пользователь может случайно кликнуть не туда или потерять место, где читал. Это особенно критично для мобильных устройств, где экран меньше и сдвиги более заметны. Браузер вычисляет CLS как сумму всех сдвигов за время жизни страницы, поэтому даже небольшие, но частые сдвиги могут привести к плохому показателю.',
    tags: [
      'performance',
      'metrics',
      'web-vitals',
      'cls',
      'layout-shift',
      'visual-stability'
    ],
    relatedTopics: [
      'performance-metrics',
      'lcp-largest-contentful-paint',
      'performance-measurement'
    ],
    examples: [
      {
        title: 'Неправильно (текст прыгает из-за изображения без размеров)',
        code: `<p>Заголовок</p>
<img src="hero.webp" alt="Баннер">
<p>Описание</p>

// Изображение загружается после текста → контент "подпрыгивает"`
      },
      {
        title: 'Правильно (фиксируем размеры)',
        code: `<p>Заголовок</p>
<img src="hero.webp" width="1200" height="400" alt="Баннер">
<p>Описание</p>

// Браузер заранее знает место для изображения → текст не сдвигается`
      }
    ]
  },
  {
    id: 'fid-first-input-delay',
    title: 'FID (First Input Delay)',
    difficulty: 'beginner',
    description: 'FID — это метрика, которая измеряет задержку между первым взаимодействием пользователя с сайтом (клик, тач, клавиша) и моментом, когда браузер начинает реагировать на это действие. Другими словами: пользователь нажал на кнопку → браузер отвечает через N миллисекунд. Эта задержка и есть FID.\n\nДаже если страница выглядит загруженной (LCP хороший), она может быть неинтерактивной. Пользователь пытается что-то сделать — и если страница "зависает", это создаёт плохой UX и стресс. FID помогает понять, насколько сайт отзывчивый на раннем этапе использования.',
    keyPoints: [
      'Измеряется в миллисекундах (мс): < 100 мс → отлично, 100–300 мс → нормально, но есть потенциал для улучшения, > 300 мс → плохо, нужна оптимизация',
      'Считается только для реальных пользовательских взаимодействий (Real User Metrics): не учитывает JavaScript, который срабатывает автоматически без участия пользователя',
      'Что измеряет: задержка между действием пользователя (клик, тач, нажатие клавиши) и началом обработки этого действия браузером',
      'Почему важно: страница может выглядеть загруженной, но быть неинтерактивной, высокий FID создаёт плохой UX и стресс у пользователей',
      'Связь с другими метриками: FID показывает отзывчивость интерфейса, в то время как LCP показывает скорость отображения контента'
    ],
    additionalDescription: 'FID измеряет реальный пользовательский опыт — время отклика на первое взаимодействие. Это критично, потому что первое впечатление формируется именно в момент, когда пользователь пытается что-то сделать. Если страница "зависает" при первом клике, пользователь может подумать, что сайт сломан или очень медленный, даже если визуально всё выглядит готовым. FID учитывает только реальные взаимодействия пользователей, а не автоматические события, что делает метрику более релевантной для оценки UX.',
    tags: [
      'performance',
      'metrics',
      'web-vitals',
      'fid',
      'interactivity',
      'responsiveness'
    ],
    relatedTopics: [
      'performance-metrics',
      'lcp-largest-contentful-paint',
      'performance-measurement'
    ],
    funFact: 'FID был одной из трёх первоначальных метрик Core Web Vitals (вместе с LCP и CLS), но в 2024 году Google заменил его на INP (Interaction to Next Paint), который измеряет все взаимодействия, а не только первое. Однако понимание FID важно для понимания проблем отзывчивости интерфейса.',
    examples: [
      {
        title: 'Пример высокого FID',
        code: `<!-- Пользователь кликает на кнопку -->
<button onclick="handleClick()">Кликни меня</button>

<script>
  // Тяжёлый синхронный код блокирует основной поток
  function handleClick() {
    // Браузер не может обработать клик сразу,
    // потому что выполняется долгая задача
    heavyComputation(); // блокирует на 500мс
  }
  
  function heavyComputation() {
    // Долгие вычисления блокируют main thread
    for (let i = 0; i < 10000000; i++) {
      Math.sqrt(i);
    }
  }
</script>

// FID = ~500мс (плохо)`
      },
      {
        title: 'Пример низкого FID',
        code: `<!-- Пользователь кликает на кнопку -->
<button onclick="handleClick()">Кликни меня</button>

<script>
  // Лёгкая обработка, не блокирует поток
  function handleClick() {
    // Браузер обрабатывает клик сразу
    console.log('Клик обработан!');
    // Тяжёлые вычисления вынесены в Web Worker
    worker.postMessage({ type: 'compute' });
  }
</script>

// FID = ~10мс (отлично)`
      }
    ]
  },
  {
    id: 'inp-interaction-to-next-paint',
    title: 'INP (Interaction to Next Paint)',
    difficulty: 'beginner',
    description: 'INP — это метрика, которая показывает время отклика страницы на все пользовательские взаимодействия, а не только на первое, как FID. Пользователь кликает, скроллит или взаимодействует с сайтом — INP измеряет, насколько быстро страница реагирует на каждое взаимодействие, и берёт самое худшее значение из всех взаимодействий за сессию.\n\nFID хорошо показывает только первое взаимодействие, но сайт может быть отзывчивым сначала, а потом тормозить при последующих действиях. INP даёт более полную картину реальной интерактивности страницы. Google использует INP для оценки Core Web Vitals с 2024 года как более "правдоподобную" метрику UX.',
    keyPoints: [
      'Измеряется в миллисекундах (мс): < 200 мс → отлично, 200–500 мс → нужно оптимизировать, > 500 мс → плохой UX, страница кажется "тяжёлой"',
      'Фокусируется на всех user interactions: включает клики, нажатия клавиш, скроллы, а не только первое взаимодействие',
      'Показывает плохой опыт даже если LCP и CLS хорошие: страница может быстро загружаться и быть стабильной, но плохо реагировать на действия пользователя',
      'Берёт худшее значение за сессию: если одно взаимодействие было медленным, это влияет на общий INP',
      'Замена FID в Core Web Vitals: с 2024 года Google использует INP вместо FID, так как он лучше отражает реальный пользовательский опыт'
    ],
    additionalDescription: 'INP измеряет полный цикл взаимодействия: от момента действия пользователя (клик, тач, нажатие клавиши) до момента, когда браузер отрисовывает следующий кадр. Это включает обработку события, выполнение JavaScript, обновление DOM и рендеринг. В отличие от FID, который учитывает только первое взаимодействие, INP отслеживает все взаимодействия за сессию и берёт худшее значение, что даёт более реалистичную оценку отзывчивости интерфейса.',
    tags: [
      'performance',
      'metrics',
      'web-vitals',
      'inp',
      'interactivity',
      'responsiveness'
    ],
    relatedTopics: [
      'fid-first-input-delay',
      'fid-optimization',
      'performance-metrics',
      'performance-measurement'
    ],
    funFact: 'INP заменил FID в Core Web Vitals в марте 2024 года. Google объяснил это тем, что FID измеряет только первое взаимодействие, а сайт может быть отзывчивым сначала, но затем замедляться. INP учитывает все взаимодействия за сессию, что даёт более точную картину реального пользовательского опыта. Исследования Google показали, что INP лучше коррелирует с пользовательским восприятием отзывчивости сайта.',
    examples: [
      {
        title: 'Пример высокого INP',
        code: `// Пользователь кликает несколько раз
button1.addEventListener('click', () => {
  // Долгая задача блокирует поток
  heavyComputation(); // 300мс
});

button2.addEventListener('click', () => {
  // Ещё одна долгая задача
  processLargeData(); // 500мс
});

// INP = 500мс (плохо) - худшее значение из всех взаимодействий`
      },
      {
        title: 'Пример низкого INP',
        code: `// Оптимизированные обработчики
button1.addEventListener('click', () => {
  // Быстрая обработка
  updateUI();
  // Тяжёлые вычисления в Web Worker
  worker.postMessage({ type: 'compute' });
});

button2.addEventListener('click', () => {
  // Лёгкая обработка
  showFeedback();
});

// INP = 50мс (отлично) - все взаимодействия быстрые`
      },
      {
        title: 'Измерение INP с Web Vitals API',
        code: `// Установка: npm install web-vitals
import { onINP } from 'web-vitals';

onINP((metric) => {
  console.log('INP:', metric.value, 'мс');
  console.log('Элемент:', metric.target);
  console.log('Тип события:', metric.name);
  console.log('Время события:', metric.eventTime);
  
  // Отправка в аналитику
  sendToAnalytics('inp', metric.value);
});`
      }
    ]
  },
  {
    id: 'lcp-optimization',
    title: 'LCP — практика улучшения',
    difficulty: 'intermediate',
    description: 'LCP (Largest Contentful Paint) показывает, когда пользователь видит основной контент страницы. Чтобы улучшить LCP, нужно ускорить отрисовку самого крупного элемента первого экрана. Это достигается через оптимизацию доставки контента, CSS, изображений и скриптов.',
    keyPoints: [
      'Ускоряем сервер и доставку: TTFB (Time To First Byte) должен быть минимальным, используй быстрый хостинг/CDN, кэширование на сервере, оптимизация базы данных и API',
      'Критический CSS и рендер: inline Critical CSS для первых стилей видимого контента в <head>, асинхронная загрузка остального CSS (media="print" + onload), минимизация CSS-файлов',
      'JS-оптимизация: используй async или defer для внешнего JS, разделяй код (код первого экрана загружается первым), минимизируй и бандли JS',
      'Изображения и видео: lazy-loading для изображений вне viewport (loading="lazy"), оптимизация размера (WebP, AVIF), предварительная загрузка для LCP-элемента (<link rel="preload" as="image">), минимизируй render-blocking шрифты (font-display: swap)',
      'Уменьшаем блокирующие ресурсы: минимизация и отложенная загрузка render-blocking CSS и JS, избегать больших блокирующих библиотек в <head>',
      'Приоритетный контент: hero-изображение и заголовок должны загружаться первым, локальное кеширование, CDN и preload → страница визуально "готова" быстрее'
    ],
    additionalDescription: 'Улучшение LCP требует комплексного подхода: от серверной оптимизации (TTFB) до оптимизации ресурсов на клиенте. Ключевая идея — убрать всё, что блокирует отрисовку LCP-элемента, и приоритизировать его загрузку. CDN доставляет крупные ресурсы ближе к пользователю, что ускоряет LCP. Критический CSS inline позволяет браузеру начать рендер без ожидания внешних CSS-файлов. Preload для LCP-элемента даёт браузеру сигнал загрузить его с высоким приоритетом.',
    tags: [
      'performance',
      'lcp',
      'optimization',
      'web-vitals',
      'critical-css',
      'preload',
      'cdn'
    ],
    relatedTopics: [
      'lcp-largest-contentful-paint',
      'critical-rendering-path',
      'render-blocking-resources',
      'performance-measurement'
    ],
    examples: [
      {
        title: 'HTML с preload и lazy-loading',
        code: `<head>
  <!-- Критический CSS inline -->
  <style>
    h1 { font-size: 3rem; color: #222; }
    .hero { width: 100%; height: 400px; }
  </style>

  <!-- Preload изображения -->
  <link rel="preload" as="image" href="hero.webp">
</head>
<body>
  <header>
    <img src="hero.webp" class="hero" alt="Главный баннер">
  </header>

  <main>
    <img src="feature1.webp" loading="lazy">
    <img src="feature2.webp" loading="lazy">
  </main>

  <!-- JS async/defer -->
  <script src="bundle.js" defer></script>
</body>`
      }
    ]
  },
  {
    id: 'cls-optimization',
    title: 'CLS — практика улучшения',
    difficulty: 'intermediate',
    description: 'CLS отражает визуальную стабильность страницы. Высокий CLS раздражает пользователей и ухудшает UX. На практике задача — снизить суммарное смещение элементов до <0.1, используя техники оптимизации рендеринга и заранее резервируемое место.',
    keyPoints: [
      'Изображения и видео: всегда указывай width и height или используй aspect-ratio, для видео: video { aspect-ratio: 16 / 9; }',
      'Динамический контент (реклама, виджеты): резервируй место заранее (<div style="width:300px; height:250px;"></div>), используй CSS контейнеры с фиксированными размерами для баннеров',
      'Шрифты: используй font-display: swap в @font-face, текст сразу рендерится системой → избегаем "прыжков"',
      'Lazy Loading: элементы, которые грузятся позже (картинки, блоки), должны занимать место заранее (<img src="lazy.jpg" width="600" height="400" loading="lazy">)',
      'Async/Defer скрипты: скрипты, которые вставляют элементы в DOM, лучше загружать с async или defer (<script src="widget.js" async></script>)',
      'Резервирование пространства: для сторонних блоков используй контейнер с min-height или aspect-ratio, чтобы при подгрузке контент не сдвигал остальную страницу',
      'Аналитика CLS: проверка через Chrome DevTools → Performance → Layout Shift regions, Lighthouse / PageSpeed Insights → показывает элементы с высоким CLS'
    ],
    additionalDescription: 'Улучшение CLS требует предварительного планирования размеров элементов. Ключевая идея — браузер должен знать размеры элементов до их загрузки, чтобы зарезервировать место в layout. Это предотвращает сдвиги контента при появлении изображений, рекламы или других динамических элементов. Использование aspect-ratio позволяет задать пропорции без точных размеров, что удобно для адаптивных макетов.',
    tags: [
      'performance',
      'cls',
      'optimization',
      'web-vitals',
      'layout-shift',
      'visual-stability'
    ],
    relatedTopics: [
      'cls-cumulative-layout-shift',
      'performance-metrics',
      'performance-measurement'
    ],
    examples: [
      {
        title: 'Изображения с размерами',
        code: `<!-- Всегда указывай размеры -->
<img src="hero.webp" width="1200" height="400" alt="Баннер">

<!-- Или используй aspect-ratio -->
<img src="hero.webp" style="aspect-ratio: 3/1;" alt="Баннер">

<!-- Для видео -->
<video style="aspect-ratio: 16 / 9;">
  <source src="video.mp4">
</video>`
      },
      {
        title: 'Резервирование места для динамического контента',
        code: `<!-- Было (прыгает текст) -->
<h1>Заголовок</h1>
<div id="ad-container"></div>
<p>Контент</p>

<script>
  // реклама вставляется динамически
  document.getElementById('ad-container').innerHTML = '<iframe src="ad.html"></iframe>';
</script>

<!-- Стало (фиксируем место заранее) -->
<h1>Заголовок</h1>
<div id="ad-container" style="width:300px; height:250px;"></div>
<p>Контент</p>

<script>
  // реклама вставляется динамически, но место уже зарезервировано
  document.getElementById('ad-container').innerHTML = '<iframe src="ad.html"></iframe>';
</script>`
      },
      {
        title: 'Шрифты с font-display: swap',
        code: `@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-display: swap; /* Текст сразу рендерится системой */
}

/* Текст не "прыгает" при подгрузке шрифта */`
      },
      {
        title: 'Lazy Loading с резервированием пространства',
        code: `<!-- Элементы, которые грузятся позже, должны занимать место заранее -->
<img src="lazy.jpg" width="600" height="400" loading="lazy" alt="...">

<!-- Или с aspect-ratio -->
<div style="aspect-ratio: 3/2;">
  <img src="lazy.jpg" loading="lazy" alt="...">
</div>`
      }
    ]
  },
  {
    id: 'fid-optimization',
    title: 'FID — практика улучшения',
    difficulty: 'intermediate',
    description: 'Чтобы уменьшить FID, нужно уменьшить блокировки основного потока (main thread), так как именно они задерживают реакцию на действия пользователя. Большие бандлы JS, долгие задачи и тяжёлые вычисления блокируют основной поток, из-за чего браузер не может сразу обработать клик или другое взаимодействие.',
    keyPoints: [
      'Разделение и оптимизация JS: используй defer для скриптов, которые не нужны сразу, и async для скриптов, которые можно выполнить параллельно, большие бандлы JS блокируют основной поток',
      'Минификация и сжатие скриптов: меньший JS → быстрее загрузка → меньше блокировки → меньше FID',
      'Оптимизация долгих задач (Long Tasks): долгие функции JS делим на маленькие части, чтобы браузер успевал реагировать на события, используй requestIdleCallback или setTimeout для разбиения задач',
      'Использование Web Workers: тяжёлые вычисления можно вынести в фоновый поток → основной поток остаётся отзывчивым',
      'Удаление ненужного JS на старте: виджеты, анимации, сторонние скрипты, которые не критичны для первой интерактивности, можно загружать позже',
      'Инструменты для измерения: Google Chrome DevTools → вкладка Performance (запись интеракций), Web Vitals JS API для реального измерения FID на сайтах пользователей'
    ],
    additionalDescription: 'Основная причина высокого FID — блокировка основного потока браузера. Когда JavaScript выполняет долгую задачу, браузер не может обработать события пользователя (клики, тачи, нажатия клавиш) до завершения этой задачи. Решение — минимизировать время блокировки: разбивать долгие задачи на части, выносить тяжёлые вычисления в Web Workers, откладывать загрузку некритичного JavaScript. Code splitting позволяет загружать только необходимый код для первого экрана, что уменьшает время парсинга и выполнения JavaScript.',
    tags: [
      'performance',
      'fid',
      'optimization',
      'web-vitals',
      'main-thread',
      'code-splitting',
      'web-workers'
    ],
    relatedTopics: [
      'fid-first-input-delay',
      'bundle-optimization',
      'runtime-optimization',
      'performance-measurement'
    ],
    examples: [
      {
        title: 'Code Splitting и Async/Defer',
        code: `<!-- Критичный JS загружается сразу -->
<script src="critical.js"></script>

<!-- Некритичный JS с defer (выполнится после парсинга HTML) -->
<script src="analytics.js" defer></script>

<!-- Независимый JS с async (выполнится параллельно) -->
<script src="widget.js" async></script>

<!-- Динамический импорт для ленивой загрузки -->
<script>
  button.addEventListener('click', async () => {
    const module = await import('./heavy-module.js');
    module.doSomething();
  });
</script>`
      },
      {
        title: 'Разбиение долгих задач',
        code: `// Плохо: долгая задача блокирует поток
function processLargeArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Тяжёлые вычисления
    heavyComputation(arr[i]);
  }
}

// Хорошо: разбиваем на части
function processLargeArray(arr) {
  let index = 0;
  
  function processChunk() {
    const end = Math.min(index + 100, arr.length);
    for (let i = index; i < end; i++) {
      heavyComputation(arr[i]);
    }
    index = end;
    
    if (index < arr.length) {
      // Даём браузеру время обработать события
      setTimeout(processChunk, 0);
    }
  }
  
  processChunk();
}`
      },
      {
        title: 'Web Workers для тяжёлых вычислений',
        code: `// main.js - основной поток
const worker = new Worker('worker.js');

button.addEventListener('click', () => {
  // Отправляем данные в worker
  worker.postMessage({ data: largeArray });
  
  // Основной поток остаётся отзывчивым
  console.log('Клик обработан сразу!');
});

worker.onmessage = (e) => {
  // Получаем результат из worker
  console.log('Результат:', e.data);
};

// worker.js - фоновый поток
self.onmessage = (e) => {
  const { data } = e.data;
  // Тяжёлые вычисления в фоне
  const result = data.map(item => heavyComputation(item));
  self.postMessage(result);
};`
      },
      {
        title: 'Отложенная загрузка некритичного JS',
        code: `// Загружаем виджеты только после первого взаимодействия
let widgetsLoaded = false;

document.addEventListener('click', () => {
  if (!widgetsLoaded) {
    widgetsLoaded = true;
    // Загружаем виджеты после первого клика
    import('./widgets.js').then(module => {
      module.initWidgets();
    });
  }
}, { once: true });

// Или через requestIdleCallback
requestIdleCallback(() => {
  import('./analytics.js').then(module => {
    module.initAnalytics();
  });
});`
      },
      {
        title: 'Измерение FID с Web Vitals API',
        code: `// Установка: npm install web-vitals
import { onFID } from 'web-vitals';

onFID((metric) => {
  console.log('FID:', metric.value, 'мс');
  console.log('Элемент:', metric.target);
  console.log('Время события:', metric.eventTime);
  
  // Отправка в аналитику
  sendToAnalytics('fid', metric.value);
});`
      }
    ]
  },
  {
    id: 'inp-optimization',
    title: 'INP — практика улучшения',
    difficulty: 'intermediate',
    description: 'Улучшение INP похоже на улучшение FID, но с упором на все интерактивные события, а не только первое. Основная задача — уменьшить блокировки основного потока при всех взаимодействиях пользователя, а не только при первом. Любой код, который блокирует основной поток >50 мс, может повлиять на INP.',
    keyPoints: [
      'Разделяем длинные задачи (Long Tasks) и JS: используем разбивку задач и requestIdleCallback, чтобы основной поток оставался свободным для реакций на действия пользователя, любой код, который блокирует основной поток >50 мс, может повлиять на INP',
      'Оптимизируем JavaScript: минификация, удаление неиспользуемого кода (Tree Shaking), code splitting, скрипты, которые не нужны сразу — загружаем асинхронно (async / defer)',
      'Lazy Loading и оптимизация рендера: картинки, видео и тяжёлые компоненты можно загружать только при необходимости, меньше рендеринга → меньше блокировки → быстрее реакция',
      'Используем Web Workers для тяжёлых вычислений: любые операции, которые блокируют основной поток (например, сортировка, фильтры больших массивов), можно вынести в Web Worker',
      'Оптимизируем сторонние скрипты: виджеты, трекеры, аналитика — часто они создают долгие задачи, загружаем их после первичной интерактивности или в web worker',
      'Инструменты для измерения: Chrome DevTools → Performance → Interaction to Next Paint, Web Vitals JS API → getINP(), Lighthouse → отчёт по интерактивности'
    ],
    additionalDescription: 'INP учитывает все взаимодействия за сессию, поэтому важно оптимизировать не только первое взаимодействие, но и все последующие. Ключевая проблема — долгие задачи (Long Tasks), которые блокируют основной поток. Решение — разбивать долгие задачи на части, выносить тяжёлые вычисления в Web Workers, откладывать некритичный JavaScript и оптимизировать рендеринг. Особое внимание стоит уделить сторонним скриптам (аналитика, виджеты), которые часто создают долгие задачи и ухудшают INP.',
    tags: [
      'performance',
      'inp',
      'optimization',
      'web-vitals',
      'main-thread',
      'long-tasks',
      'web-workers'
    ],
    relatedTopics: [
      'inp-interaction-to-next-paint',
      'fid-optimization',
      'bundle-optimization',
      'runtime-optimization',
      'performance-measurement'
    ],
    examples: [
      {
        title: 'Разбиение долгих задач',
        code: `// Плохо: долгая задача блокирует INP
function handleClick() {
  // Обработка большого массива блокирует поток на 200мс
  largeArray.forEach(item => {
    heavyComputation(item);
  });
  updateUI();
}

// Хорошо: разбиваем на части
function handleClick() {
  updateUI(); // Сначала обновляем UI
  processArrayInChunks(largeArray);
}

function processArrayInChunks(array) {
  let index = 0;
  const chunkSize = 100;
  
  function processChunk() {
    const end = Math.min(index + chunkSize, array.length);
    for (let i = index; i < end; i++) {
      heavyComputation(array[i]);
    }
    index = end;
    
    if (index < array.length) {
      // Даём браузеру время обработать другие события
      setTimeout(processChunk, 0);
    }
  }
  
  processChunk();
}`
      },
      {
        title: 'Web Workers для тяжёлых вычислений',
        code: `// main.js - основной поток
const worker = new Worker('worker.js');

button.addEventListener('click', () => {
  // Быстро обновляем UI
  showLoadingState();
  
  // Тяжёлые вычисления в фоне
  worker.postMessage({ 
    data: largeArray,
    type: 'process'
  });
});

worker.onmessage = (e) => {
  // Получаем результат без блокировки потока
  updateUI(e.data.result);
  hideLoadingState();
};

// worker.js - фоновый поток
self.onmessage = (e) => {
  const { data, type } = e.data;
  
  if (type === 'process') {
    // Тяжёлые вычисления не блокируют основной поток
    const result = data.map(item => heavyComputation(item));
    self.postMessage({ result });
  }
};`
      },
      {
        title: 'Оптимизация сторонних скриптов',
        code: `// Плохо: аналитика загружается сразу и блокирует
<script src="analytics.js"></script>
<script src="widget.js"></script>

// Хорошо: отложенная загрузка
<script>
  // Загружаем после первого взаимодействия
  let thirdPartyLoaded = false;
  
  document.addEventListener('click', () => {
    if (!thirdPartyLoaded) {
      thirdPartyLoaded = true;
      // Загружаем асинхронно
      Promise.all([
        import('./analytics.js'),
        import('./widget.js')
      ]).then(([analytics, widget]) => {
        analytics.init();
        widget.init();
      });
    }
  }, { once: true });
</script>

// Или через requestIdleCallback
requestIdleCallback(() => {
  import('./analytics.js').then(module => {
    module.init();
  });
});`
      },
      {
        title: 'Оптимизация обработчиков событий',
        code: `// Плохо: тяжёлая обработка в обработчике
input.addEventListener('input', (e) => {
  // Долгая обработка блокирует поток
  const results = processLargeData(e.target.value);
  updateUI(results);
});

// Хорошо: дебаунс + разбиение задач
const debouncedHandler = debounce((value) => {
  // Сначала показываем индикатор
  showLoading();
  
  // Тяжёлая обработка в chunks
  processInChunks(value, (results) => {
    updateUI(results);
    hideLoading();
  });
}, 300);

input.addEventListener('input', (e) => {
  debouncedHandler(e.target.value);
});

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}`
      },
      {
        title: 'Измерение и мониторинг INP',
        code: `// Web Vitals API
import { onINP } from 'web-vitals';

onINP((metric) => {
  console.log('INP:', metric.value, 'мс');
  
  // Отправка в аналитику
  if (metric.value > 200) {
    console.warn('INP выше порога!');
    sendToAnalytics('inp', {
      value: metric.value,
      target: metric.target?.tagName,
      name: metric.name,
      rating: metric.rating
    });
  }
});

// Chrome DevTools Performance
// 1. Открыть DevTools → Performance
// 2. Включить "Web Vitals"
// 3. Записать сессию с взаимодействиями
// 4. Найти "Interaction to Next Paint" в таймлайне`
      }
    ]
  }
];

// Оптимизация кода и рендеринга
export const CODE_OPTIMIZATION_TOPICS: Topic[] = [
  {
    id: 'code-optimization',
    title: 'Оптимизация кода',
    description: 'Алгоритмы: выбор правильной структуры данных и алгоритма. Структуры данных: массивы vs объекты, Set vs Array для уникальности. Оптимизация циклов: избегать вложенных циклов, использовать эффективные методы массивов.',
    difficulty: 'intermediate',
    tags: ['optimization', 'algorithms', 'performance'],
    keyPoints: [
      'Выбор правильного алгоритма критичен для производительности.',
      'Set быстрее Array для проверки наличия элемента.',
      'Map быстрее Object для частых добавлений/удалений.',
      'Избегать вложенных циклов когда возможно.',
      'Использовать эффективные методы массивов (map, filter, reduce).'
    ],
    examples: [
      {
        title: 'Оптимизация структур данных',
        code: `// Медленно
const array = [1, 2, 3, 4, 5];
if (array.includes(3)) { }  // O(n)

// Быстро
const set = new Set([1, 2, 3, 4, 5]);
if (set.has(3)) { }  // O(1)`
      },
      {
        title: 'Оптимизация циклов',
        code: `// Медленно - O(n²)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // ...
  }
}

// Быстро - O(n)
arr.forEach(item => {
  // ...
});`
      }
    ],
    relatedTopics: ['big-o-complexity', 'bundle-optimization']
  },
  {
    id: 'big-o-complexity',
    title: 'Big O и оптимизация',
    description: 'Big O нотация описывает сложность алгоритмов по времени и памяти в худшем случае. O(1) — константная, O(n) — линейная, O(n²) — квадратичная, O(log n) — логарифмическая. Важно выбирать правильные структуры данных и алгоритмы для масштабируемости. Циклы, методы массивов и коллекций имеют разную сложность. Производительность зависит от количества операций и размера данных.',
    difficulty: 'advanced',
    tags: ['complexity', 'big-o', 'performance', 'optimization', 'algorithms', 'scalability', 'data-structures'],
    keyPoints: [
      'Big O: описывает сложность алгоритма по времени и памяти в худшем случае.',
      'O(1): константная сложность (доступ по индексу, добавление в конец массива, Map.get).',
      'O(n): линейная сложность (перебор массива, поиск элемента, includes/indexOf).',
      'O(n²): квадратичная сложность (вложенные циклы, некоторые алгоритмы сортировки).',
      'O(log n): логарифмическая сложность (бинарный поиск, операции в сбалансированных деревьях).',
      'Методы массивов: map/filter/reduce — O(n), includes/indexOf — O(n), push/pop — O(1), shift/unshift — O(n).',
      'Коллекции: Map/Set get/has — O(1), Object.keys — O(n).',
      'Масштабируемость: выбор правильных структур данных критичен для производительности.',
      'Оптимизация: избегать вложенных циклов, использовать Map/Set для быстрого поиска, кэшировать результаты.'
    ],
    examples: [
      {
        title: "O(1) - константная сложность",
        code: `// Доступ по индексу
const arr = [1, 2, 3, 4, 5];
arr[0]; // O(1) - всегда одна операция

// Добавление в конец
arr.push(6); // O(1) - всегда одна операция

// Получение из Map
const map = new Map([['a', 1], ['b', 2]]);
map.get('a'); // O(1) - хеш-таблица

// Получение размера
map.size; // O(1)`
      },
      {
        title: "O(n) - линейная сложность",
        code: `// Перебор массива
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // O(n) - n операций
}

// Методы массивов
arr.map(x => x * 2); // O(n)
arr.filter(x => x > 2); // O(n)
arr.find(x => x === 3); // O(n) в худшем случае
arr.includes(3); // O(n)
arr.indexOf(3); // O(n)

// Object.keys
Object.keys({ a: 1, b: 2 }); // O(n)`
      },
      {
        title: "O(n²) - квадратичная сложность",
        code: `// Вложенные циклы
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]); // O(n²) - n * n операций
  }
}

// Некоторые алгоритмы сортировки
arr.sort(); // O(n log n) или O(n²) в зависимости от реализации

// Поиск дубликатов (наивный способ)
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true; // O(n²)
    }
  }
  return false;
}`
      },
      {
        title: "O(log n) - логарифмическая сложность",
        code: `// Бинарный поиск
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
} // O(log n)`
      },
      {
        title: "Сравнение сложности операций",
        code: `const arr = [1, 2, 3, 4, 5];
const map = new Map([['a', 1], ['b', 2]]);

// O(1)
arr[0]; // доступ по индексу
arr.push(6); // добавление в конец
map.get('a'); // получение из Map

// O(n)
arr.includes(3); // поиск элемента
arr.indexOf(3); // поиск индекса
arr.shift(); // удаление из начала (сдвиг элементов)
Object.keys({ a: 1, b: 2 }); // получение ключей

// O(n²)
// Вложенные циклы для сравнения всех пар элементов`
      },
      {
        title: "Оптимизация - использование правильных структур",
        code: `// Плохо: O(n²)
function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
}

// Хорошо: O(n)
function findPair(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
}`
      }
    ],
    relatedTopics: ['code-optimization']
  },
  {
    id: 'bundle-optimization',
    title: 'Оптимизация бандла',
    description: 'Code splitting: разделение кода на чанки, загрузка по требованию. Tree shaking: удаление неиспользуемого кода. Lazy loading: загрузка компонентов и модулей только когда они нужны.',
    difficulty: 'intermediate',
    tags: ['bundling', 'webpack', 'optimization'],
    keyPoints: [
      'Code splitting уменьшает размер начального бандла.',
      'Tree shaking удаляет неиспользуемый код.',
      'Lazy loading загружает код по требованию.',
      'Динамические импорты создают отдельные чанки.',
      'Анализ бандла помогает найти большие зависимости.'
    ],
    examples: [
      {
        title: 'Code splitting',
        code: `// Динамический импорт
const Component = lazy(() => import('./Component'));

// React lazy loading
<Suspense fallback={<div>Loading...</div>}>
  <Component />
</Suspense>`
      },
      {
        title: 'Tree shaking',
        code: `// Импортировать только нужное
import { debounce } from 'lodash-es';  // ✅
import _ from 'lodash';  // ❌ (весь lodash)`
      }
    ],
    relatedTopics: ['code-optimization', 'runtime-optimization', 'bundle-splitting-strategies']
  },
  {
    id: 'bundle-splitting-strategies',
    title: 'Bundle Splitting (Разделение бандла)',
    description: 'Bundle Splitting — разделение общего JavaScript-бандла на части (чанки), загружаемые по отдельности для разных страниц/маршрутов, чтобы уменьшить начальный размер загружаемого кода. Стратегии разделения: route-based (по маршрутам), feature-based (по функциям), vendor (отдельно библиотеки). Оптимизация chunk loading, preloading chunks, решение проблем waterfall loading и дублирования зависимостей критично для производительности.',
    difficulty: 'intermediate',
    tags: ['performance', 'optimization', 'bundling', 'code-splitting', 'webpack', 'intermediate'],
    keyPoints: [
      'Route-based splitting: отдельный чанк для каждого маршрута, загружается при переходе.',
      'Feature-based splitting: отдельный чанк для каждой функции, загружается при использовании.',
      'Vendor splitting: отдельный чанк для библиотек (React, lodash), кэшируется отдельно.',
      'Waterfall loading: проблема последовательной загрузки чанков, решается preloading.',
      'Дублирование зависимостей: одна библиотека в нескольких чанках, решается через splitChunks.',
      'Оптимизация: правильная стратегия разделения уменьшает начальный bundle на 50-70%.'
    ],
    examples: [
      {
        title: 'Route-based splitting',
        code: `// React Router с lazy loading
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Каждый маршрут = отдельный чанк
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

// Результат:
// - main.js: основной код (50KB)
// - Home.chunk.js: код Home (30KB)
// - About.chunk.js: код About (25KB)
// - Contact.chunk.js: код Contact (20KB)

// При загрузке /: только main.js + Home.chunk.js (80KB)
// Вместо всех чанков сразу (125KB)`
      },
      {
        title: 'Feature-based splitting',
        code: `// Разделение по функциям
const Chart = lazy(() => import('./features/Chart'));
const Editor = lazy(() => import('./features/Editor'));
const Analytics = lazy(() => import('./features/Analytics'));

function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tab value="overview">Обзор</Tab>
        <Tab value="chart">Графики</Tab>
        <Tab value="editor">Редактор</Tab>
        <Tab value="analytics">Аналитика</Tab>
      </Tabs>
      
      <Suspense fallback={<div>Loading...</div>}>
        {activeTab === 'chart' && <Chart />}
        {activeTab === 'editor' && <Editor />}
        {activeTab === 'analytics' && <Analytics />}
      </Suspense>
    </div>
  );
}

// Результат:
// - Код загружается только при открытии вкладки
// - Начальный bundle меньше
// - Быстрее первая загрузка`
      },
      {
        title: 'Vendor splitting (Webpack)',
        code: `// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Vendor chunk (библиотеки)
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          reuseExistingChunk: true
        },
        // React отдельно (часто обновляется)
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          priority: 20,
          reuseExistingChunk: true
        },
        // Общие компоненты
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  }
};

// Результат:
// - vendors.js: все библиотеки (200KB)
// - react.js: React + ReactDOM (150KB)
// - common.js: общие компоненты (50KB)
// - main.js: основной код (100KB)

// Преимущества:
// - Vendor кэшируется отдельно (редко меняется)
// - React кэшируется отдельно
// - При обновлении кода vendor не перезагружается`
      },
      {
        title: 'Проблема waterfall loading',
        code: `// ❌ ПРОБЛЕМА: последовательная загрузка чанков

// 1. Загружается main.js (100ms)
// 2. main.js требует Home.chunk.js
// 3. Загружается Home.chunk.js (80ms)
// 4. Home.chunk.js требует vendor.js
// 5. Загружается vendor.js (150ms)
// ИТОГО: 330ms (последовательно)

// ✅ РЕШЕНИЕ: preloading чанков
// В main.js:
import(/* webpackPreload: true */ './pages/Home');
import(/* webpackPreload: true */ './vendors');

// Браузер загружает чанки параллельно:
// - main.js (100ms)
// - Home.chunk.js (80ms) параллельно
// - vendor.js (150ms) параллельно
// ИТОГО: 150ms (параллельно)

// Или через <link rel="preload">:
<link rel="preload" href="/static/js/Home.chunk.js" as="script">
<link rel="preload" href="/static/js/vendors.chunk.js" as="script">`
      },
      {
        title: 'Дублирование зависимостей',
        code: `// ❌ ПРОБЛЕМА: одна библиотека в нескольких чанках

// Home.chunk.js содержит lodash (50KB)
// About.chunk.js содержит lodash (50KB)
// Contact.chunk.js содержит lodash (50KB)
// ИТОГО: 150KB lodash (дублирование)

// ✅ РЕШЕНИЕ: splitChunks для общих зависимостей
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Общие зависимости
        common: {
          minChunks: 2, // Если используется в 2+ чанках
          name: 'common',
          priority: 5
        }
      }
    }
  }
};

// Результат:
// - common.js: lodash (50KB) - один раз
// - Home.chunk.js: без lodash
// - About.chunk.js: без lodash
// - Contact.chunk.js: без lodash
// ИТОГО: 50KB lodash (без дублирования)`
      },
      {
        title: 'Оптимизация chunk loading',
        code: `// 1. PRELOADING критичных чанков
// webpack.config.js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // Автоматически добавляет preload для критичных чанков
    })
  ]
};

// Или вручную:
<link rel="preload" href="/static/js/vendors.js" as="script">
<link rel="preload" href="/static/js/main.js" as="script">

// 2. PREFETCHING для будущих чанков
// В коде:
import(/* webpackPrefetch: true */ './pages/About');

// Браузер загружает в фоне при простаивании

// 3. ПРИОРИТИЗАЦИЯ ЧАНКОВ
// Критичные чанки загружаются первыми
// Некритичные - в фоне

// 4. АНАЛИЗ РАЗМЕРОВ
// webpack-bundle-analyzer
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};

// Показывает размер каждого чанка
// Помогает найти большие зависимости`
      },
      {
        title: 'Стратегии выбора',
        code: `// ROUTE-BASED SPLITTING:
// ✅ Использовать для:
// - SPA с множеством маршрутов
// - Когда каждый маршрут независим
// - Когда пользователь не посещает все маршруты

// FEATURE-BASED SPLITTING:
// ✅ Использовать для:
// - Большие функции, используемые редко
// - Тяжёлые компоненты (редакторы, графики)
// - Функции, загружаемые по требованию

// VENDOR SPLITTING:
// ✅ Использовать всегда:
// - Библиотеки редко меняются
// - Кэшируются отдельно
// - Ускоряет повторные визиты

// КОМБИНИРОВАННАЯ СТРАТЕГИЯ:
// - Vendor: отдельно (React, lodash)
// - Routes: по маршрутам
// - Features: тяжёлые функции
// - Common: общие компоненты

// РЕЗУЛЬТАТ:
// - Начальный bundle: 50-100KB
// - Остальное загружается по требованию
// - Быстрая первая загрузка
// - Оптимальное кэширование`
      },
      {
        title: 'Производительность: до и после',
        code: `// БЕЗ SPLITTING:
// - Один bundle: 500KB
// - Время загрузки: 2-3 секунды
// - Время парсинга: 500ms
// - Time to Interactive: 3-4 секунды
// - При обновлении: перезагружается весь bundle

// С SPLITTING:
// - Начальный bundle: 100KB (main + vendor)
// - Время загрузки: 400ms
// - Время парсинга: 100ms
// - Time to Interactive: 600ms
// - Остальные чанки: загружаются по требованию
// - При обновлении: перезагружается только изменённый чанк

// УЛУЧШЕНИЕ:
// - Начальная загрузка: 5x быстрее
// - Time to Interactive: 5-6x быстрее
// - Кэширование: эффективнее (vendor не перезагружается)
// - UX: страница интерактивна быстрее`
      }
    ],
    relatedTopics: ['bundle-optimization', 'code-optimization', 'critical-rendering-path'],
    funFact: 'Bundle splitting стал критичным с ростом размера JavaScript-приложений. В 2010-х годах типичный bundle был 50-100KB, сегодня он может достигать 1-2MB без разделения. Code splitting был популяризирован Webpack и стал стандартной практикой для оптимизации производительности. Современные инструменты (Vite, esbuild) делают code splitting ещё более эффективным благодаря более быстрой сборке и лучшей оптимизации.'
  },
  {
    id: 'critical-css',
    title: 'Critical CSS',
    description: 'Critical CSS — техника извлечения и инлайнинга CSS, необходимого для отображения контента "выше сгиба" (above the fold), чтобы ускорить первичную отрисовку. Браузер блокирует рендеринг до загрузки всех CSS-файлов, поэтому критический CSS инлайнится в <head>, а остальной CSS загружается асинхронно. Это уменьшает время до First Contentful Paint (FCP) и Largest Contentful Paint (LCP).',
    difficulty: 'intermediate',
    tags: ['performance', 'optimization', 'css', 'critical-css', 'fcp', 'lcp', 'intermediate'],
    keyPoints: [
      'Critical CSS: стили для контента выше сгиба, инлайнятся в <head> для быстрой отрисовки.',
      'Проблема: браузер блокирует рендеринг до загрузки всех CSS, что замедляет FCP.',
      'Решение: критический CSS inline, остальной CSS загружается асинхронно после рендера.',
      'Инструменты: critical, penthouse, inline-critical для автоматического извлечения.',
      'Влияние на метрики: уменьшает FCP на 200-500ms, улучшает LCP за счёт быстрого отображения контента.',
      'Best practices: извлекать только видимые стили, минимизировать размер критического CSS (<14KB).'
    ],
    examples: [
      {
        title: 'Базовое использование Critical CSS',
        code: `<!-- БЕЗ Critical CSS -->
<head>
  <link rel="stylesheet" href="styles.css"> <!-- Блокирует рендер -->
</head>
<body>
  <h1>Заголовок</h1>
  <p>Контент...</p>
</body>

<!-- С Critical CSS -->
<head>
  <!-- Критический CSS inline -->
  <style>
    h1 { font-size: 2rem; color: #333; }
    p { font-size: 1rem; line-height: 1.5; }
    .header { background: #fff; padding: 1rem; }
  </style>
  
  <!-- Остальной CSS загружается асинхронно -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
<body>
  <h1>Заголовок</h1> <!-- Отображается сразу -->
  <p>Контент...</p>
</body>`
      },
      {
        title: 'Автоматическое извлечение с critical',
        code: `// Установка: npm install --save-dev critical

// gulpfile.js
const critical = require('critical');

critical.generate({
  base: 'dist/',
  src: 'index.html',
  target: {
    css: 'styles/critical.css',
    html: 'index.html',
    uncritical: 'styles/uncritical.css'
  },
  width: 1300,
  height: 900,
  minify: true
});

// Результат:
// - critical.css: стили для above-the-fold
// - uncritical.css: остальные стили
// - index.html: обновлённый с inline critical CSS`
      },
      {
        title: 'Асинхронная загрузка некритического CSS',
        code: `<!-- Метод 1: preload + onload -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>

<!-- Метод 2: media="print" + onload -->
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>

<!-- Метод 3: JavaScript -->
<script>
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'styles.css';
  document.head.appendChild(link);
</script>

// Все методы позволяют загружать CSS без блокировки рендера`
      },
      {
        title: 'Интеграция в сборку (Webpack)',
        code: `// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CriticalCssPlugin = require('html-critical-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CriticalCssPlugin({
      base: './dist/',
      src: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1300,
      height: 900,
      penthouse: {
        blockJSRequests: false
      }
    })
  ]
};

// Автоматически извлекает и инлайнит Critical CSS при сборке`
      },
      {
        title: 'Влияние на метрики',
        code: `// БЕЗ Critical CSS:
// 1. HTML загружается
// 2. CSS загружается (блокирует рендер) - 200ms
// 3. Рендер начинается
// FCP: ~400ms

// С Critical CSS:
// 1. HTML загружается
// 2. Critical CSS уже в HTML (0ms)
// 3. Рендер начинается сразу
// 4. Остальной CSS загружается асинхронно
// FCP: ~150ms

// Улучшение: ~250ms (62% быстрее)

// LCP также улучшается, так как основной контент
// отображается быстрее`
      },
      {
        title: 'Best practices',
        code: `// 1. РАЗМЕР КРИТИЧЕСКОГО CSS
// Держать < 14KB (размер одного TCP-пакета)
// Если больше - разбить на несколько inline блоков

// 2. ИЗВЛЕЧЕНИЕ
// Использовать инструменты (critical, penthouse)
// Не делать вручную - легко пропустить стили

// 3. МИНИФИКАЦИЯ
// Минифицировать критический CSS
// Удалять комментарии, пробелы

// 4. ОБНОВЛЕНИЕ
// Пересчитывать при изменении стилей
// Автоматизировать в CI/CD

// 5. ТЕСТИРОВАНИЕ
// Проверять на разных разрешениях
// Убедиться, что контент не "прыгает" при загрузке остального CSS`
      }
    ],
    relatedTopics: ['critical-rendering-path', 'lcp-optimization', 'render-blocking-resources'],
    funFact: 'Идея Critical CSS появилась в 2013 году, когда Google опубликовал исследование о том, что блокирующие CSS-файлы замедляют рендеринг. Техника стала популярной после того, как Addy Osmani и другие разработчики начали пропагандировать её как способ улучшения производительности. Сегодня Critical CSS считается обязательной техникой для оптимизации производительности.'
  },
  {
    id: 'list-virtualization',
    title: 'Виртуализация списков (Windowing)',
    description: 'Виртуализация списков (Windowing) — техника рендеринга только видимых пользователю элементов в большом списке для поддержания производительности. Вместо рендеринга всех 1000+ элементов, рендерятся только те, что видны в viewport, плюс небольшой буфер. Это критично для производительности при работе с большими списками данных.',
    difficulty: 'intermediate',
    tags: ['performance', 'optimization', 'virtualization', 'windowing', 'react', 'lists', 'intermediate'],
    keyPoints: [
      'Проблема: рендеринг 1000+ элементов замедляет приложение, увеличивает память и время рендера.',
      'Решение: рендерить только видимые элементы + небольшой буфер сверху/снизу для плавного скролла.',
      'Принцип работы: вычисление видимого диапазона на основе позиции скролла и высоты элементов.',
      'Библиотеки: react-window (легковесная), react-virtualized (функциональная), @tanstack/react-virtual (современная).',
      'Когда использовать: списки с 100+ элементами, таблицы с большим количеством строк, бесконечный скролл.',
      'Преимущества: постоянная производительность независимо от размера данных, меньше использование памяти.'
    ],
    examples: [
      {
        title: 'Проблема без виртуализации',
        code: `// ❌ ПЛОХО: рендерим все элементы
function UserList({ users }) {
  return (
    <div style={{ height: '400px', overflow: 'auto' }}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

// Проблемы:
// - 1000 пользователей = 1000 DOM элементов
// - Медленный рендер (500ms+)
// - Большое использование памяти
// - Медленный скролл
// - Плохой UX`
      },
      {
        title: 'Виртуализация с react-window',
        code: `// Установка: npm install react-window
import { FixedSizeList } from 'react-window';

function UserList({ users }) {
  return (
    <FixedSizeList
      height={400} // Высота контейнера
      itemCount={users.length} // Количество элементов
      itemSize={50} // Высота одного элемента
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <UserItem user={users[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}

// Преимущества:
// - Рендерит только ~10 видимых элементов
// - Быстрый рендер (<50ms)
// - Малое использование памяти
// - Плавный скролл
// - Отличный UX`
      },
      {
        title: 'Виртуализация с @tanstack/react-virtual',
        code: `// Установка: npm install @tanstack/react-virtual
import { useVirtualizer } from '@tanstack/react-virtual';

function UserList({ users }) {
  const parentRef = useRef();
  
  const virtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50, // Примерная высота элемента
    overscan: 5 // Буфер элементов сверху/снизу
  });
  
  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div
        style={{
          height: \`\${virtualizer.getTotalSize()}px\`,
          width: '100%',
          position: 'relative'
        }}
      >
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`
            }}
          >
            <UserItem user={users[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Преимущества:
// - Современный API
// - Гибкая настройка
// - Поддержка динамических размеров`
      },
      {
        title: 'Виртуализация с динамическими размерами',
        code: `// react-window VariableSizeList для элементов разной высоты
import { VariableSizeList } from 'react-window';

function UserList({ users }) {
  const getItemSize = (index) => {
    // Вычисляем высоту элемента
    return users[index].hasAvatar ? 80 : 50;
  };
  
  return (
    <VariableSizeList
      height={400}
      itemCount={users.length}
      itemSize={getItemSize}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <UserItem user={users[index]} />
        </div>
      )}
    </VariableSizeList>
  );
}

// Для @tanstack/react-virtual
const virtualizer = useVirtualizer({
  count: users.length,
  getScrollElement: () => parentRef.current,
  estimateSize: (index) => users[index].hasAvatar ? 80 : 50,
  // Кэширование размеров для производительности
  measureElement: (element) => element?.getBoundingClientRect().height
});`
      },
      {
        title: 'Горизонтальная виртуализация',
        code: `// Виртуализация для горизонтального скролла
import { FixedSizeList } from 'react-window';

function HorizontalList({ items }) {
  return (
    <FixedSizeList
      height={100}
      itemCount={items.length}
      itemSize={200} // Ширина элемента
      layout="horizontal" // Горизонтальная ориентация
      width={600}
    >
      {({ index, style }) => (
        <div style={style}>
          <Item data={items[index]} />
        </div>
      )}
    </FixedSizeList>
  );
}

// Полезно для:
// - Галерей изображений
// - Горизонтальных каруселей
// - Таблиц с большим количеством колонок`
      },
      {
        title: 'Когда использовать виртуализацию',
        code: `// ✅ ИСПОЛЬЗОВАТЬ:
// 1. Списки с 100+ элементами
<UserList users={users} /> // 1000+ пользователей

// 2. Таблицы с большим количеством строк
<DataTable rows={rows} /> // 5000+ строк

// 3. Бесконечный скролл
<InfiniteScroll items={items} /> // Тысячи элементов

// 4. Длинные формы
<Form fields={fields} /> // 200+ полей

// ❌ НЕ ИСПОЛЬЗОВАТЬ:
// 1. Маленькие списки (<50 элементов)
//    - Overhead виртуализации больше выгоды

// 2. Элементы с очень сложным рендером
//    - Виртуализация не поможет, если сам элемент тяжёлый

// 3. Когда нужен доступ ко всем элементам
//    - Виртуализация скрывает невидимые элементы

// 4. Когда элементы имеют очень разную высоту
//    - Сложнее реализовать, нужны точные измерения`
      },
      {
        title: 'Производительность: до и после',
        code: `// БЕЗ виртуализации (1000 элементов):
// - DOM узлов: 1000+
// - Время рендера: ~500ms
// - Память: ~50MB
// - FPS при скролле: 10-20

// С виртуализацией (1000 элементов, видно 10):
// - DOM узлов: ~15 (10 видимых + буфер)
// - Время рендера: ~20ms
// - Память: ~2MB
// - FPS при скролле: 60

// Улучшение:
// - Рендер: 25x быстрее
// - Память: 25x меньше
// - UX: плавный скролл`
      }
    ],
    relatedTopics: ['runtime-optimization', 'bundle-optimization'],
    funFact: 'Виртуализация списков стала популярной в веб-разработке благодаря библиотеке react-virtualized, созданной Брайаном Воном в 2016 году. Идея пришла из нативных приложений (iOS UITableView, Android RecyclerView), где виртуализация использовалась с самого начала для работы с большими списками. В вебе эта техника стала критичной с ростом SPA-приложений и необходимостью отображать большие объёмы данных.'
  },
  {
    id: 'runtime-optimization',
    title: 'Оптимизация рантайма',
    description: 'Мемоизация: кэширование результатов функций. Дебаунс и троттлинг: ограничение частоты вызовов функций. Виртуализация: рендеринг только видимых элементов в больших списках.',
    difficulty: 'advanced',
    tags: ['performance', 'optimization', 'runtime'],
    keyPoints: [
      'Мемоизация кэширует результаты для одинаковых входных данных.',
      'Дебаунс откладывает выполнение до паузы в вызовах.',
      'Троттлинг ограничивает частоту вызовов.',
      'Виртуализация рендерит только видимые элементы.',
      'React.memo предотвращает ненужные ре-рендеры.'
    ],
    examples: [
      {
        title: 'Мемоизация',
        code: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    return cache[key] = fn(...args);
  };
}

const expensiveFn = memoize((n) => {
  // дорогие вычисления
  return n * 2;
});`
      },
      {
        title: 'Дебаунс и троттлинг',
        code: `function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}`
      }
    ],
    relatedTopics: ['bundle-optimization']
  }
];

// Объединённый массив для обратной совместимости
export const OPTIMIZATION_TOPICS: Topic[] = [
  ...PERFORMANCE_BASICS_TOPICS,
  ...WEB_VITALS_TOPICS,
  ...CODE_OPTIMIZATION_TOPICS
];

