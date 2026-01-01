import { Topic } from '../../../types';

export const NODEJS_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'node-backend',
    title: 'Node.js как серверная среда',
    difficulty: 'advanced',
    description: 'Использование Node.js для бэкенд-разработки и асинхронной работы. Подходит для серверных приложений (Express, Fastify), асинхронная модель событий и неблокирующие I/O, работа с потоками, файловой системой и сетью.',
    keyPoints: [
      'Что это: использование Node.js для бэкенд-разработки и асинхронной работы',
      'Подходит для серверных приложений (Express, Fastify)',
      'Асинхронная модель событий и неблокирующие I/O',
      'Работа с потоками, файловой системой и сетью'
    ],
    tags: ['tools', 'nodejs', 'backend', 'server', 'async', 'express'],
    relatedTopics: ['node-modules'],
    funFact: 'Node.js использует один поток для выполнения JavaScript, но благодаря неблокирующему I/O может обрабатывать тысячи одновременных соединений. Это делает его идеальным для приложений с высокой нагрузкой.',
    examples: [
      {
        title: 'Простой HTTP-сервер',
        code: `import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js');
});

server.listen(3000);`
      }
    ]
  },
  {
    id: 'node-ecosystem',
    title: 'Экосистема и перспективы',
    difficulty: 'advanced',
    description: 'Развитие Node.js, современные инструменты и корпоративное использование. Node.js лежит в основе современных фронтенд-инструментов, активно поддерживается сообществом, LTS-релизы, используется на локальных машинах, серверах и для SSR (Next.js, Nuxt.js).',
    keyPoints: [
      'Что это: развитие Node.js, современные инструменты и корпоративное использование',
      'Node.js лежит в основе современных фронтенд-инструментов',
      'Активно поддерживается сообществом, LTS-релизы',
      'Используется на локальных машинах, серверах и для SSR (Next.js, Nuxt.js)'
    ],
    tags: ['tools', 'nodejs', 'ecosystem', 'ssr', 'nextjs', 'nuxt'],
    relatedTopics: ['node-backend'],
    funFact: 'Node.js используется такими компаниями как Netflix, LinkedIn, Uber и PayPal. Netflix обрабатывает более 1 миллиарда запросов в день, используя Node.js на бэкенде.',
    examples: [
      {
        title: 'SSR с Next.js',
        code: `// Next.js использует Node.js для серверного рендеринга
// npm create next-app@latest`

      },
      {
        title: 'Node.js на сервере',
        code: `// Node.js на сервере для API или микросервисов
// Используется в production-окружениях`
      }
    ]
  }
];
