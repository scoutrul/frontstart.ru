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
    relatedTopics: ['architecture-rendering-csr', 'architecture-rendering-advanced'],
    funFact: 'Hydration (гидратация) — это термин из химии, означающий присоединение молекул воды. В вебе он означает "оживление" статичного HTML JavaScript\'ом. Процесс hydration критичен для производительности: если он медленный, пользователь видит статичный контент без интерактивности.'
  }
];
