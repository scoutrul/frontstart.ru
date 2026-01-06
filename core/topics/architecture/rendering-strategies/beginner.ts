import { Topic } from '../../../types';

export const RENDERING_STRATEGIES_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-rendering-csr',
    title: 'CSR и lazy loading',
    difficulty: 'beginner',
    description: 'CSR (Client-Side Rendering) — рендеринг на клиенте: сервер отправляет пустой HTML и JavaScript, браузер рендерит интерфейс. Lazy loading — загрузка компонентов и данных по требованию, а не сразу. Это уменьшает начальный bundle и ускоряет первую загрузку.\n\nДля Junior важно понимать: CSR подходит для интерактивных приложений, где SEO не критично. Lazy loading через React.lazy() и Suspense позволяет загружать компоненты по требованию. Это базовые концепции современной фронтенд-разработки.',
    keyPoints: [
      'CSR: рендеринг на клиенте, сервер отправляет пустой HTML и JavaScript.',
      'Преимущества: быстрые переходы, богатая интерактивность, простота разработки.',
      'Недостатки: медленная первая загрузка, проблемы с SEO, требуется JavaScript.',
      'Lazy loading: загрузка компонентов по требованию через React.lazy() и Suspense.',
      'Применение: интерактивные приложения, админки, дашборды, где SEO не критично.'
    ],
    tags: ['architecture', 'rendering', 'csr', 'lazy-loading', 'basics'],
    examples: [
      {
        title: 'Lazy loading компонентов',
        code: `import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// Компонент загружается только когда нужен`
      }
    ],
    relatedTopics: ['architecture-rendering-ssr'],
    funFact: 'CSR стал стандартом с появлением React, Vue и Angular. До этого все использовали SSR. CSR позволил создавать более интерактивные приложения, но создал проблемы с SEO и первой загрузкой, которые решаются гибридными подходами (SSR + CSR).'
  },
  {
    id: 'architecture-rendering-ssr',
    title: 'SSR и SSG',
    difficulty: 'beginner',
    description: 'SSR (Server-Side Rendering) — рендеринг на сервере: сервер генерирует HTML и отправляет готовую страницу. SSG (Static Site Generation) — генерация статических HTML на этапе сборки. SSR подходит для динамического контента, SSG — для статического.\n\nБазовое понимание: SSR улучшает SEO и первую загрузку, но требует сервера. SSG отлично для блогов и документации, не требует сервера. Для Junior важно понимать разницу и когда что использовать.',
    keyPoints: [
      'SSR: рендеринг на сервере, сервер генерирует HTML и отправляет готовую страницу.',
      'SSG: генерация статических HTML на этапе сборки, не требует сервера.',
      'SSR преимущества: SEO, быстрая первая загрузка, динамический контент.',
      'SSG преимущества: отличная производительность, нет сервера, отлично для статики.',
      'Применение SSR: динамический контент, персональные данные, нужен SEO.',
      'Применение SSG: блоги, документация, статические сайты.'
    ],
    tags: ['architecture', 'rendering', 'ssr', 'ssg', 'basics'],
    examples: [
      {
        title: 'SSR в Next.js',
        code: `// pages/index.tsx
export async function getServerSideProps() {
  const data = await fetch('https://api.example.com/data');
  return {
    props: { data: await data.json() }
  };
}

export default function Home({ data }) {
  return <div>{data.title}</div>;
}

// HTML генерируется на сервере`
      }
    ],
    relatedTopics: ['architecture-rendering-csr'],
    funFact: 'Next.js создал Гийом Рао в 2016 году, работая над своим стартапом. Он был недоволен существующими решениями для SSR и сделал фреймворк "для себя", а потом выложил на GitHub. Next.js стал одним из самых популярных фреймворков для React.'
  }
];
