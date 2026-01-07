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
    description: 'Микрофронтенды — архитектурный подход к разбиению фронтенд-монолита на независимые, слабо связанные приложения (микрофронтенды), которые могут разрабатываться и развертываться разными командами. Каждая часть может использовать свой фреймворк, деплоится независимо. Это позволяет масштабировать команду и ускорить разработку. Senior-разработчик должен понимать стратегии интеграции, управление зависимостями, проблемы стилей и роутинга.',
    keyPoints: [
      'Микрофронтенды: независимые части приложения, разные команды, разные технологии, независимый деплой.',
      'Стратегии интеграции: build-time (сборка в один bundle), run-time (загрузка в рантайме), iframe (изоляция).',
      'Преимущества: независимая разработка, масштабирование команды, разные технологии, быстрый деплой.',
      'Недостатки: сложность инфраструктуры, координация между командами, дублирование кода, проблемы стилей и роутинга.',
      'Инструменты: Module Federation (Webpack), Single-SPA, qiankun, Nx, Lerna для монорепозиториев.',
      'Проблемы: изоляция стилей (CSS-in-JS, Shadow DOM), управление зависимостями (версионирование), роутинг между микрофронтендами.'
    ],
    tags: ['architecture', 'scaling', 'micro-frontends', 'module-federation', 'intermediate'],
    examples: [
      {
        title: 'Module Federation (Webpack)',
        code: `// Host приложение (webpack.config.js)
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        userApp: 'userApp@http://localhost:3001/remoteEntry.js',
        productApp: 'productApp@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
      }
    })
  ]
};

// Remote приложение (userApp)
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'userApp',
      filename: 'remoteEntry.js',
      exposes: {
        './UserProfile': './src/UserProfile',
        './UserList': './src/UserList'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ]
};

// Использование в Host
const UserProfile = React.lazy(() => import('userApp/UserProfile'));
const ProductCard = React.lazy(() => import('productApp/ProductCard'));`
      },
      {
        title: 'Стратегии интеграции',
        code: `// 1. BUILD-TIME INTEGRATION
// Все микрофронтенды собираются в один bundle
// ✅ Простота
// ❌ Нет независимого деплоя
// ❌ Медленная сборка

// 2. RUN-TIME INTEGRATION (Module Federation)
// Микрофронтенды загружаются в рантайме
// ✅ Независимый деплой
// ✅ Быстрая разработка
// ❌ Сложность координации

// 3. IFRAME INTEGRATION
// Каждый микрофронтенд в отдельном iframe
// ✅ Полная изоляция
// ✅ Разные версии библиотек
// ❌ Проблемы с роутингом
// ❌ Сложность коммуникации

// ПРИМЕР IFRAME:
<iframe src="http://user-app.com/profile" />
<iframe src="http://product-app.com/catalog" />

// ПРОБЛЕМЫ:
// - Нет общего роутинга
// - Сложная коммуникация (postMessage)
// - Проблемы с размерами`
      },
      {
        title: 'Управление зависимостями',
        code: `// ПРОБЛЕМА: разные версии библиотек

// Host использует React 18
// UserApp использует React 17
// ProductApp использует React 18

// ❌ ПРОБЛЕМЫ:
// - Конфликты версий
// - Дублирование кода
// - Увеличение bundle

// ✅ РЕШЕНИЕ: shared dependencies
// Module Federation
shared: {
  react: {
    singleton: true, // Одна версия для всех
    requiredVersion: '^18.0.0', // Минимальная версия
    strictVersion: false // Разрешить совместимые версии
  },
  'react-dom': {
    singleton: true,
    requiredVersion: '^18.0.0'
  }
}

// ПРАВИЛА:
// - Общие библиотеки в shared
// - Уникальные библиотеки отдельно
// - Версионирование API между микрофронтендами
// - Семантическое версионирование`
      },
      {
        title: 'Изоляция стилей',
        code: `// ПРОБЛЕМА: конфликты CSS между микрофронтендами

// UserApp использует .button { color: blue; }
// ProductApp использует .button { color: red; }
// Конфликт стилей!

// ✅ РЕШЕНИЕ 1: CSS-in-JS
// Каждый микрофронтенд изолирует стили
'use client';
import styled from 'styled-components';

const Button = styled.button\`
  color: blue; /* Изолировано в UserApp */
\`;

// ✅ РЕШЕНИЕ 2: CSS Modules
// Стили с уникальными именами
.button_userApp_abc123 { color: blue; }
.button_productApp_xyz789 { color: red; }

// ✅ РЕШЕНИЕ 3: Shadow DOM
// Полная изоляция стилей
class UserWidget extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.innerHTML = \`
      <style>
        .button { color: blue; } /* Изолировано */
      </style>
      <button class="button">Click</button>
    \`;
  }
}

// ✅ РЕШЕНИЕ 4: Префиксы классов
// UserApp: .user-app-button
// ProductApp: .product-app-button`
      },
      {
        title: 'Роутинг между микрофронтендами',
        code: `// ПРОБЛЕМА: координация роутинга

// ✅ РЕШЕНИЕ 1: Host управляет роутингом
// Host приложение
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/*" element={<UserApp />} />
        <Route path="/products/*" element={<ProductApp />} />
        <Route path="/orders/*" element={<OrderApp />} />
      </Routes>
    </BrowserRouter>
  );
}

// ✅ РЕШЕНИЕ 2: Event-based коммуникация
// Микрофронтенды общаются через события
window.addEventListener('navigate', (event) => {
  const { path } = event.detail;
  history.pushState(null, '', path);
});

// Навигация из UserApp
window.dispatchEvent(new CustomEvent('navigate', {
  detail: { path: '/products/123' }
}));

// ✅ РЕШЕНИЕ 3: Shared роутер
// Общий роутер для всех микрофронтендов
import { createBrowserRouter } from 'shared-router';

const router = createBrowserRouter([
  { path: '/users', component: UserApp },
  { path: '/products', component: ProductApp }
]);`
      },
      {
        title: 'Управление состоянием между микрофронтендами',
        code: `// ПРОБЛЕМА: общее состояние между микрофронтендами

// ✅ РЕШЕНИЕ 1: Event-based коммуникация
// UserApp обновляет пользователя
window.dispatchEvent(new CustomEvent('user-updated', {
  detail: { userId: 123, name: 'Иван' }
}));

// ProductApp слушает обновления
window.addEventListener('user-updated', (event) => {
  const { userId, name } = event.detail;
  updateUserInState(userId, name);
});

// ✅ РЕШЕНИЕ 2: Shared state (Redux/Zustand)
// Общий store для всех микрофронтендов
import { createStore } from 'shared-store';

const store = createStore({
  user: null,
  products: []
});

// UserApp обновляет
store.dispatch({ type: 'SET_USER', payload: user });

// ProductApp читает
const user = store.getState().user;

// ✅ РЕШЕНИЕ 3: URL как источник истины
// Состояние в URL параметрах
// /products?user=123&filter=active
// Все микрофронтенды читают из URL`
      },
      {
        title: 'Когда использовать микрофронтенды',
        code: `// ✅ ИСПОЛЬЗОВАТЬ:
// 1. Большие команды (50+ разработчиков)
//    - Независимая работа команд
//    - Разные технологии
//    - Быстрая разработка

// 2. Множественные продукты
//    - Разные команды для разных продуктов
//    - Независимый деплой
//    - Разные релиз-циклы

// 3. Унаследованные системы
//    - Постепенная миграция
//    - Старый код + новый код
//    - Разные фреймворки

// ❌ НЕ ИСПОЛЬЗОВАТЬ:
// 1. Маленькие команды (<10 разработчиков)
//    - Overhead больше выгоды
//    - Сложность координации

// 2. Простые приложения
//    - Монолит проще
//    - Нет необходимости

// 3. Когда нет проблем с масштабированием
//    - Если монолит работает хорошо
//    - Не нужно усложнять`
      },
      {
        title: 'Проблемы и решения',
        code: `// ПРОБЛЕМА 1: Дублирование зависимостей
// РЕШЕНИЕ: shared dependencies в Module Federation

// ПРОБЛЕМА 2: Конфликты стилей
// РЕШЕНИЕ: CSS-in-JS, CSS Modules, Shadow DOM, префиксы

// ПРОБЛЕМА 3: Роутинг
// РЕШЕНИЕ: Host управляет роутингом, event-based навигация

// ПРОБЛЕМА 4: Состояние между микрофронтендами
// РЕШЕНИЕ: Event-based коммуникация, shared store, URL

// ПРОБЛЕМА 5: Тестирование
// РЕШЕНИЕ: Интеграционные тесты, моки для других микрофронтендов

// ПРОБЛЕМА 6: Производительность
// РЕШЕНИЕ: Lazy loading, code splitting, оптимизация bundle

// ПРОБЛЕМА 7: Координация между командами
// РЕШЕНИЕ: Чёткие контракты API, версионирование, документация`
      }
    ],
    relatedTopics: ['architecture-scaling-modular', 'architecture-code-organization-advanced'],
    funFact: ['Концепцию микрофронтендов впервые формализовали в 2016 году, но компании вроде Spotify и Amazon использовали похожие подходы с 2012 года.', 'Одна из первых публичных реализаций микрофронтендов была в Zalando — они запустили проект "Project Mosaic" в 2017, и он был настолько сложным, что команда позже призналась: "Мы недооценили сложность на порядок".', 'Module Federation был создан Закари Джексоном (Zack Jackson) в 2020 году и стал стандартом для микрофронтендов в экосистеме Webpack. Он решил проблему динамической загрузки модулей между независимыми приложениями.']
  }
];
