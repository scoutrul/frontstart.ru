import { Topic } from '../../../types';

export const RENDERING_STRATEGIES_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-rendering-ssr-ssg-isr',
    title: 'SSR/SSG/ISR в Next.js',
    difficulty: 'intermediate',
    description: 'Next.js поддерживает несколько стратегий рендеринга: SSR (getServerSideProps), SSG (getStaticProps), ISR (Incremental Static Regeneration) — обновление статических страниц по расписанию. Hydration — процесс "оживления" статичного HTML JavaScript\'ом. Bundle анализ помогает оптимизировать размер кода.\n\nMiddle-разработчик должен понимать: когда использовать каждую стратегию, как работает hydration, как анализировать bundle. Это критично для производительности и SEO.',
    keyPoints: [
      'SSR: getServerSideProps, рендеринг на каждом запросе, для динамического контента.',
      'SSG: getStaticProps, генерация на этапе сборки, для статического контента.',
      'ISR: обновление статических страниц по расписанию, компромисс между SSG и SSR.',
      'Hydration: процесс "оживления" статичного HTML JavaScript\'ом, критично для интерактивности.',
      'Bundle анализ: webpack-bundle-analyzer для анализа размера bundle, оптимизация импортов.',
      'Выбор стратегии: SSG для статики, SSR для динамики, ISR для компромисса.'
    ],
    tags: ['architecture', 'rendering', 'nextjs', 'ssr', 'ssg', 'isr', 'intermediate'],
    examples: [
      {
        title: 'ISR: обновление по расписанию',
        code: `export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  
  return {
    props: { data: await data.json() },
    revalidate: 60 // Обновлять каждые 60 секунд
  };
}

// Страница генерируется статически, но обновляется периодически`
      }
    ],
    relatedTopics: ['architecture-rendering-csr', 'architecture-rendering-advanced', 'architecture-rendering-hydration'],
    funFact: 'Hydration (гидратация) — это термин из химии, означающий присоединение молекул воды. В вебе он означает "оживление" статичного HTML JavaScript\'ом. Процесс hydration критичен для производительности: если он медленный, пользователь видит статичный контент без интерактивности.'
  },
  {
    id: 'architecture-rendering-hydration',
    title: 'Hydration (Гидратация)',
    difficulty: 'intermediate',
    description: 'Hydration (гидратация) — процесс "оживления" статичного HTML, полученного с SSR или SSG, путем подключения JavaScript-логики и обработчиков событий на клиенте. React сравнивает серверный HTML с тем, что должен отрендерить на клиенте, и "привязывает" обработчики событий. Медленная hydration блокирует интерактивность, hydration mismatch вызывает ошибки. Senior-разработчик должен понимать процесс hydration, проблемы и способы оптимизации.',
    keyPoints: [
      'Hydration: процесс подключения JavaScript к статичному HTML, делает его интерактивным.',
      'Процесс: React сравнивает серверный HTML с клиентским виртуальным DOM, привязывает обработчики.',
      'Hydration mismatch: несоответствие серверного и клиентского HTML вызывает ошибки и перерендер.',
      'Проблемы: медленная hydration блокирует интерактивность, большой JavaScript увеличивает время.',
      'Оптимизация: selective hydration (гидратировать только интерактивные части), progressive hydration.',
      'Метрики: Time to Interactive (TTI) зависит от скорости hydration, критично для UX.'
    ],
    tags: ['architecture', 'rendering', 'hydration', 'ssr', 'react', 'performance', 'intermediate'],
    examples: [
      {
        title: 'Как работает hydration',
        code: `// 1. СЕРВЕР рендерит HTML
// pages/index.tsx (Next.js)
export default function Home({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <button onClick={() => alert('Clicked')}>Кликни</button>
    </div>
  );
}

// Сервер отправляет:
<html>
  <body>
    <div id="__next">
      <div>
        <h1>Заголовок</h1>
        <button>Кликни</button> <!-- Без обработчика -->
      </div>
    </div>
    <script src="/_next/static/chunks/main.js"></script>
  </body>
</html>

// 2. КЛИЕНТ загружает JavaScript
// React начинает hydration

// 3. REACT сравнивает:
// - Серверный HTML: <button>Кликни</button>
// - Клиентский Virtual DOM: <button onClick={...}>Кликни</button>

// 4. REACT "привязывает" обработчики
// Теперь кнопка интерактивна

// 5. ГИДРАЦИЯ ЗАВЕРШЕНА
// Страница полностью интерактивна`
      },
      {
        title: 'Hydration mismatch (несоответствие)',
        code: `// ❌ ПРОБЛЕМА: несоответствие серверного и клиентского HTML

// Сервер рендерит:
function Component() {
  return <div>{new Date().toLocaleString()}</div>;
}
// HTML: <div>01.01.2024, 12:00:00</div>

// Клиент рендерит (другое время):
// Virtual DOM: <div>01.01.2024, 12:00:05</div>

// React видит несоответствие:
// ⚠️ Warning: Text content did not match. Server: "12:00:00" Client: "12:00:05"
// React перерендерит весь компонент

// ✅ РЕШЕНИЕ: использовать suppressHydrationWarning или избегать различий
function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <div>Загрузка...</div>; // Статичный контент на сервере
  }
  
  return <div>{new Date().toLocaleString()}</div>; // Динамический на клиенте
}

// Или использовать suppressHydrationWarning (осторожно!)
<div suppressHydrationWarning>{new Date().toLocaleString()}</div>`
      },
      {
        title: 'Медленная hydration',
        code: `// ПРОБЛЕМА: большой JavaScript замедляет hydration

// Большой bundle (500KB+):
// - Загрузка: 2-3 секунды
// - Парсинг: 500ms
// - Выполнение: 1-2 секунды
// - Hydration: 500ms
// ИТОГО: 4-6 секунд до интерактивности

// РЕШЕНИЕ: оптимизация bundle
// 1. Code splitting
const Component = lazy(() => import('./Component'));

// 2. Удаление неиспользуемого кода (tree shaking)
import { debounce } from 'lodash-es'; // ✅
import _ from 'lodash'; // ❌

// 3. Минификация
// webpack автоматически минифицирует в production

// 4. Оптимизация зависимостей
// Использовать легковесные альтернативы

// РЕЗУЛЬТАТ:
// - Загрузка: 500ms
// - Парсинг: 100ms
// - Выполнение: 200ms
// - Hydration: 100ms
// ИТОГО: ~900ms до интерактивности`
      },
      {
        title: 'Selective Hydration (выборочная гидратация)',
        code: `// Идея: гидратировать только интерактивные части

// ❌ ПЛОХО: гидратировать всю страницу
function Page() {
  return (
    <div>
      <StaticHeader /> {/* Не интерактивен */}
      <StaticContent /> {/* Не интерактивен */}
      <InteractiveForm /> {/* Интерактивен */}
      <StaticFooter /> {/* Не интерактивен */}
    </div>
  );
}
// React гидратирует всё, даже статичные части

// ✅ ХОРОШО: selective hydration
function Page() {
  return (
    <div>
      <StaticHeader /> {/* Не гидратируется */}
      <StaticContent /> {/* Не гидратируется */}
      <Suspense fallback={<FormSkeleton />}>
        <InteractiveForm /> {/* Гидратируется только это */}
      </Suspense>
      <StaticFooter /> {/* Не гидратируется */}
    </div>
  );
}

// Преимущества:
// - Меньше JavaScript для гидратации
// - Быстрее Time to Interactive
// - Меньше использование памяти`
      },
      {
        title: 'Progressive Hydration (прогрессивная гидратация)',
        code: `// Идея: гидратировать части по приоритету

function Page() {
  return (
    <div>
      {/* Критичная интерактивность - гидратируется сразу */}
      <Suspense fallback={<NavSkeleton />}>
        <Navigation /> {/* Нужна сразу */}
      </Suspense>
      
      {/* Менее критичная - гидратируется позже */}
      <Suspense fallback={<FormSkeleton />}>
        <ContactForm /> {/* Можно позже */}
      </Suspense>
      
      {/* Некритичная - гидратируется при взаимодействии */}
      <Suspense fallback={<WidgetSkeleton />}>
        <LazyWidget /> {/* Только при скролле */}
      </Suspense>
    </div>
  );
}

// React гидратирует части по приоритету:
// 1. Navigation (сразу)
// 2. ContactForm (после Navigation)
// 3. LazyWidget (при взаимодействии)

// Преимущества:
// - Быстрая интерактивность критичных частей
// - Постепенная гидратация остального
// - Лучший UX`
      },
      {
        title: 'Измерение времени hydration',
        code: `// Измерение времени hydration в React
import { useEffect } from 'react';

function useHydrationTime() {
  useEffect(() => {
    const start = performance.now();
    
    // Hydration происходит синхронно при первом рендере
    // После hydration можно измерить время
    
    requestIdleCallback(() => {
      const end = performance.now();
      const hydrationTime = end - start;
      
      console.log('Hydration time:', hydrationTime, 'ms');
      
      // Отправка метрики
      if (window.gtag) {
        gtag('event', 'hydration_time', {
          value: Math.round(hydrationTime)
        });
      }
    });
  }, []);
}

// Использование
function App() {
  useHydrationTime();
  return <div>...</div>;
}

// Chrome DevTools Performance:
// 1. Открыть Performance
// 2. Записать загрузку страницы
// 3. Найти "Hydration" в timeline
// 4. Посмотреть длительность

// Lighthouse:
// - Time to Interactive (TTI) включает время hydration
// - Цель: < 3.5 секунд`
      },
      {
        title: 'Best practices для hydration',
        code: `// 1. ИЗБЕГАТЬ MISMATCH
// - Не использовать Date.now(), Math.random() в рендере
// - Использовать useEffect для клиентских данных
// - Синхронизировать серверный и клиентский рендер

// 2. ОПТИМИЗИРОВАТЬ BUNDLE
// - Code splitting для уменьшения начального bundle
// - Tree shaking для удаления неиспользуемого кода
// - Минификация в production

// 3. SELECTIVE HYDRATION
// - Гидратировать только интерактивные части
// - Использовать Suspense для разделения
// - Отложить гидратацию некритичных частей

// 4. ИЗБЕГАТЬ БОЛЬШИХ КОМПОНЕНТОВ
// - Разбивать на маленькие компоненты
// - Ленивая загрузка тяжёлых компонентов
// - Мемоизация для предотвращения лишних рендеров

// 5. ИСПОЛЬЗОВАТЬ СТАТИЧЕСКИЙ КОНТЕНТ
// - Максимум статичного контента (SSG)
// - Минимум динамического контента
// - Кэширование где возможно`
      }
    ],
    relatedTopics: ['architecture-rendering-ssr-ssg-isr', 'architecture-rendering-csr', 'architecture-rendering-advanced'],
    funFact: 'Hydration была одной из самых сложных проблем при создании React SSR. Команда React потратила годы на оптимизацию процесса hydration, чтобы сделать его быстрым и надёжным. В React 18 была добавлена поддержка selective hydration и streaming, что значительно улучшило производительность SSR-приложений.'
  }
];
