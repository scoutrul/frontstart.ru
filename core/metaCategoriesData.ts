import { Category, Topic, Difficulty } from './types';
import { MetaCategoryId } from './metaCategories';

// Простые темы для каждой категории (для начала)
const createSimpleTopic = (
  id: string,
  title: string,
  description: string,
  difficulty: Difficulty,
  tags: string[]
): Topic => ({
  id,
  title,
  description,
  difficulty,
  tags,
  keyPoints: [],
  relatedTopics: []
});

// MARKUP категория
const MARKUP_TOPICS: Topic[] = [
  createSimpleTopic(
    'html-basics',
    'Основы HTML',
    'Структура HTML документа, семантические теги, атрибуты',
    'beginner',
    ['html', 'semantics', 'basics']
  ),
  createSimpleTopic(
    'css-basics',
    'Основы CSS',
    'Селекторы, каскадность, специфичность, наследование',
    'beginner',
    ['css', 'selectors', 'specificity']
  ),
  createSimpleTopic(
    'css-layout',
    'CSS Layout',
    'Flexbox, Grid, позиционирование элементов',
    'intermediate',
    ['css', 'flexbox', 'grid', 'layout']
  ),
  createSimpleTopic(
    'css-animations',
    'CSS Анимации',
    'Transitions, animations, transform, keyframes',
    'intermediate',
    ['css', 'animations', 'transitions']
  ),
  createSimpleTopic(
    'responsive-design',
    'Адаптивный дизайн',
    'Media queries, viewport, mobile-first подход',
    'intermediate',
    ['css', 'responsive', 'media-queries']
  )
];

// TOOLS категория
const TOOLS_TOPICS: Topic[] = [
  createSimpleTopic(
    'git-basics',
    'Основы Git',
    'Коммиты, ветки, merge, rebase, работа с удаленными репозиториями',
    'beginner',
    ['git', 'version-control', 'basics']
  ),
  createSimpleTopic(
    'git-advanced',
    'Продвинутый Git',
    'Cherry-pick, stash, reflog, работа с историей',
    'intermediate',
    ['git', 'advanced', 'workflow']
  ),
  createSimpleTopic(
    'testing-basics',
    'Основы тестирования',
    'Unit тесты, интеграционные тесты, Jest, Vitest',
    'beginner',
    ['testing', 'jest', 'unit-tests']
  ),
  createSimpleTopic(
    'ai-tools',
    'AI инструменты',
    'ChatGPT, Copilot, использование AI в разработке',
    'beginner',
    ['ai', 'tools', 'productivity']
  )
];

// TYPESCRIPT категория
const TYPESCRIPT_TOPICS: Topic[] = [
  createSimpleTopic(
    'ts-basics',
    'Основы TypeScript',
    'Типы, интерфейсы, type vs interface',
    'beginner',
    ['typescript', 'types', 'basics']
  ),
  createSimpleTopic(
    'ts-generics',
    'Дженерики',
    'Generic типы, constraints, utility types',
    'intermediate',
    ['typescript', 'generics', 'advanced']
  ),
  createSimpleTopic(
    'ts-utilities',
    'Utility Types',
    'Partial, Pick, Omit, Record и другие утилиты',
    'intermediate',
    ['typescript', 'utilities', 'types']
  ),
  createSimpleTopic(
    'ts-advanced',
    'Продвинутый TypeScript',
    'Conditional types, mapped types, template literal types',
    'advanced',
    ['typescript', 'advanced', 'types']
  )
];

// FRAMEWORKS категория
const FRAMEWORKS_TOPICS: Topic[] = [
  createSimpleTopic(
    'react-basics',
    'Основы React',
    'Компоненты, props, state, hooks',
    'beginner',
    ['react', 'components', 'hooks']
  ),
  createSimpleTopic(
    'react-hooks',
    'React Hooks',
    'useState, useEffect, useContext, кастомные хуки',
    'intermediate',
    ['react', 'hooks', 'state']
  ),
  createSimpleTopic(
    'vue-basics',
    'Основы Vue',
    'Компоненты, реактивность, директивы',
    'beginner',
    ['vue', 'components', 'reactivity']
  ),
  createSimpleTopic(
    'svelte-basics',
    'Основы Svelte',
    'Компоненты, реактивность, stores',
    'beginner',
    ['svelte', 'components', 'reactivity']
  )
];

// ARCHITECTURE категория
const ARCHITECTURE_TOPICS: Topic[] = [
  createSimpleTopic(
    'design-patterns',
    'Паттерны проектирования',
    'Singleton, Factory, Observer, MVC, MVP',
    'intermediate',
    ['patterns', 'architecture', 'design']
  ),
  createSimpleTopic(
    'clean-code',
    'Чистый код',
    'SOLID принципы, код-ревью, рефакторинг',
    'intermediate',
    ['clean-code', 'solid', 'best-practices']
  ),
  createSimpleTopic(
    'project-structure',
    'Структура проекта',
    'Организация файлов, модули, архитектура приложений',
    'intermediate',
    ['architecture', 'structure', 'organization']
  )
];

// SECURITY категория
const SECURITY_TOPICS: Topic[] = [
  createSimpleTopic(
    'xss-protection',
    'Защита от XSS',
    'Cross-Site Scripting, санитизация, CSP',
    'intermediate',
    ['security', 'xss', 'csp']
  ),
  createSimpleTopic(
    'csrf-protection',
    'Защита от CSRF',
    'Cross-Site Request Forgery, токены, SameSite cookies',
    'intermediate',
    ['security', 'csrf', 'cookies']
  ),
  createSimpleTopic(
    'cors-basics',
    'CORS',
    'Cross-Origin Resource Sharing, preflight, credentials',
    'intermediate',
    ['security', 'cors', 'http']
  ),
  createSimpleTopic(
    'data-protection',
    'Защита данных',
    'Хеширование, шифрование, безопасное хранение',
    'advanced',
    ['security', 'encryption', 'hashing']
  )
];

// NETWORK категория
const NETWORK_TOPICS: Topic[] = [
  createSimpleTopic(
    'http-basics',
    'Основы HTTP',
    'Методы, статус коды, заголовки, протокол',
    'beginner',
    ['http', 'network', 'protocol']
  ),
  createSimpleTopic(
    'rest-api',
    'REST API',
    'REST принципы, ресурсы, методы, статусы',
    'intermediate',
    ['rest', 'api', 'http']
  ),
  createSimpleTopic(
    'graphql-basics',
    'GraphQL',
    'Запросы, мутации, схемы, резолверы',
    'intermediate',
    ['graphql', 'api', 'queries']
  ),
  createSimpleTopic(
    'websocket',
    'WebSocket',
    'Двусторонняя связь, события, переподключение',
    'intermediate',
    ['websocket', 'realtime', 'network']
  )
];

// OPTIMIZATION категория
const OPTIMIZATION_TOPICS: Topic[] = [
  createSimpleTopic(
    'performance-basics',
    'Основы производительности',
    'Метрики, профилирование, бенчмарки',
    'beginner',
    ['performance', 'metrics', 'profiling']
  ),
  createSimpleTopic(
    'code-optimization',
    'Оптимизация кода',
    'Алгоритмы, структуры данных, оптимизация циклов',
    'intermediate',
    ['optimization', 'algorithms', 'performance']
  ),
  createSimpleTopic(
    'bundle-optimization',
    'Оптимизация бандла',
    'Code splitting, tree shaking, lazy loading',
    'intermediate',
    ['bundling', 'webpack', 'optimization']
  ),
  createSimpleTopic(
    'runtime-optimization',
    'Оптимизация рантайма',
    'Мемоизация, дебаунс, троттлинг, виртуализация',
    'advanced',
    ['performance', 'optimization', 'runtime']
  )
];

// Данные по категориям
export const META_CATEGORIES_DATA: Record<MetaCategoryId, Category[]> = {
  javascript: [], // Будет заполнено динамически из существующего KNOWLEDGE_BASE
  markup: [
    {
      id: 'html',
      title: 'HTML',
      topics: MARKUP_TOPICS.filter(t => t.id.startsWith('html'))
    },
    {
      id: 'css',
      title: 'CSS',
      topics: MARKUP_TOPICS.filter(t => t.id.startsWith('css') || t.id.startsWith('responsive'))
    }
  ],
  tools: [
    {
      id: 'git',
      title: 'Git',
      topics: TOOLS_TOPICS.filter(t => t.id.startsWith('git'))
    },
    {
      id: 'testing',
      title: 'Тестирование',
      topics: TOOLS_TOPICS.filter(t => t.id.startsWith('testing'))
    },
    {
      id: 'ai',
      title: 'AI инструменты',
      topics: TOOLS_TOPICS.filter(t => t.id.startsWith('ai'))
    }
  ],
  typescript: [
    {
      id: 'ts-basics-cat',
      title: 'Основы TypeScript',
      topics: TYPESCRIPT_TOPICS.filter(t => t.id === 'ts-basics')
    },
    {
      id: 'ts-advanced-cat',
      title: 'Продвинутый TypeScript',
      topics: TYPESCRIPT_TOPICS.filter(t => t.id.startsWith('ts-') && t.id !== 'ts-basics')
    }
  ],
  frameworks: [
    {
      id: 'react',
      title: 'React',
      topics: FRAMEWORKS_TOPICS.filter(t => t.id.startsWith('react'))
    },
    {
      id: 'vue',
      title: 'Vue',
      topics: FRAMEWORKS_TOPICS.filter(t => t.id.startsWith('vue'))
    },
    {
      id: 'svelte',
      title: 'Svelte',
      topics: FRAMEWORKS_TOPICS.filter(t => t.id.startsWith('svelte'))
    }
  ],
  architecture: [
    {
      id: 'patterns',
      title: 'Паттерны и принципы',
      topics: ARCHITECTURE_TOPICS
    }
  ],
  security: [
    {
      id: 'web-security',
      title: 'Веб-безопасность',
      topics: SECURITY_TOPICS
    }
  ],
  network: [
    {
      id: 'protocols',
      title: 'Протоколы и API',
      topics: NETWORK_TOPICS
    }
  ],
  optimization: [
    {
      id: 'performance',
      title: 'Производительность',
      topics: OPTIMIZATION_TOPICS
    }
  ]
};

