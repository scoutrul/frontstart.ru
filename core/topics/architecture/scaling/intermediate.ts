import { Topic } from '../../../types';

export const SCALING_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-scaling-modular',
    title: 'Модульный монолит',
    difficulty: 'intermediate',
    description: 'Модульный монолит — монолитное приложение, разделённое на модули с чёткими границами. Модули независимы, но работают в одном процессе. Это компромисс между монолитом и микросервисами: простота монолита, структура микросервисов.',
    keyPoints: [
      'Модульный монолит: разделение на модули с чёткими границами.',
      'Преимущества: простота монолита, структура микросервисов, легко мигрировать.',
      'Применение: проекты среднего размера, подготовка к микрофронтендам.'
    ],
    tags: ['architecture', 'scaling', 'monolith', 'modules', 'intermediate'],
    examples: [
      {
        title: 'Модульная структура',
        code: `src/
  modules/
    user/
      components/
      api/
      store/
    order/
      components/
      api/
      store/
  shared/
    components/
    utils`
      }
    ],
    relatedTopics: ['architecture-scaling-micro-frontends'],
    funFact: 'Модульный монолит стал популярным подходом для проектов среднего размера. Он позволяет получить преимущества структуры микросервисов без сложности распределённой системы. Многие компании начинают с модульного монолита и мигрируют на микросервисы по мере роста.'
  },
  {
    id: 'architecture-scaling-micro-frontends',
    title: 'Микрофронтенды',
    difficulty: 'intermediate',
    description: 'Микрофронтенды — разделение фронтенд-приложения на независимые части, разрабатываемые разными командами. Каждая часть может использовать свой фреймворк, деплоится независимо. Это позволяет масштабировать команду и ускорить разработку.',
    keyPoints: [
      'Микрофронтенды: независимые части приложения, разные команды, разные технологии.',
      'Преимущества: независимая разработка, масштабирование команды, разные технологии.',
      'Недостатки: сложность инфраструктуры, координация, дублирование кода.',
      'Инструменты: Module Federation, Single-SPA, qiankun.',
      'Применение: большие команды (50+ разработчиков), множественные продукты.'
    ],
    tags: ['architecture', 'scaling', 'micro-frontends', 'intermediate'],
    examples: [
      {
        title: 'Module Federation',
        code: `// Host приложение
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        userApp: 'userApp@http://localhost:3001/remoteEntry.js'
      }
    })
  ]
};

// Использование удалённого модуля
const UserModule = React.lazy(() => import('userApp/UserProfile'));`
      }
    ],
    relatedTopics: ['architecture-scaling-modular'],
    funFact: ['Концепцию микрофронтендов впервые формализовали в 2016 году, но компании вроде Spotify и Amazon использовали похожие подходы с 2012 года.', 'Одна из первых публичных реализаций микрофронтендов была в Zalando — они запустили проект "Project Mosaic" в 2017, и он был настолько сложным, что команда позже призналась: "Мы недооценили сложность на порядок".']
  }
];
