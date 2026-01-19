export type MetaCategoryId =
  | "computer-science"
  | "javascript"
  | "markup"
  | "frameworks"
  | "typescript"
  | "architecture"
  | "security"
  | "tools"
  | "network"
  | "optimization"
  | "hiring"
  | "interview-questions";

export interface MetaCategory {
  id: MetaCategoryId;
  title: string;
  icon: string;
  description: string;
}

export const META_CATEGORIES: MetaCategory[] = [
  {
    id: "computer-science",
    title: "Информатика",
    icon: "fa-solid fa-microchip",
    description: "Фундаментальные основы: от истории вычислений и двоичной системы до современных процессоров, операционных систем и сетей. Понимание того, как устроены компьютеры изнутри.",
  },
  {
    id: "network",
    title: "Сеть",
    icon: "fa-solid fa-network-wired",
    description: "Сетевые протоколы и взаимодействие клиент-сервер: HTTP/HTTPS, WebSocket, REST API, GraphQL. Как браузер общается с сервером и что происходит при загрузке страницы.",
  },
  {
    id: "tools",
    title: "Инструменты",
    icon: "fa-solid fa-wrench",
    description: "Рабочее окружение фронтенд-разработчика: редакторы кода, терминал, Git, пакетные менеджеры, сборщики, DevTools, тестирование, Docker, CI/CD и AI-помощники.",
  },
  {
    id: "markup",
    title: "Верстка",
    icon: "fa-solid fa-code",
    description: "HTML-семантика, CSS-стилизация, Flexbox, Grid, адаптивность, доступность (a11y) и базовые принципы UI/UX. Создание качественных интерфейсов, которые работают везде.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "fa-brands fa-js",
    description: "Язык веба от основ до продвинутых концепций: типы данных, функции, замыкания, прототипы, асинхронность, Event Loop, работа с DOM и Browser API.",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: "fa-brands fa-js-square",
    description: "Статическая типизация для JavaScript: базовые и продвинутые типы, дженерики, utility types, типизация React/Vue/Angular компонентов и работа с внешними API.",
  },
  {
    id: "architecture",
    title: "Архитектура",
    icon: "fa-solid fa-sitemap",
    description: "Проектирование фронтенд-приложений: паттерны, компонентная архитектура, управление состоянием, организация кода, стратегии рендеринга и масштабирование.",
  },
  {
    id: "frameworks",
    title: "Фреймворки",
    icon: "fa-solid fa-layer-group",
    description: "Современные фреймворки и их экосистемы: React, Vue, Angular, Svelte. Реактивность, компонентная модель, state management и мета-фреймворки (Next.js, Nuxt).",
  },
  {
    id: "optimization",
    title: "Оптимизация",
    icon: "fa-solid fa-gauge-high",
    description: "Производительность веб-приложений: Core Web Vitals, Critical Rendering Path, оптимизация загрузки ресурсов, кода и рендеринга. Как сделать сайт быстрым.",
  },
  {
    id: "security",
    title: "Безопасность",
    icon: "fa-solid fa-shield-halved",
    description: "Защита веб-приложений: XSS, CSRF, CORS, CSP, безопасность cookies, аутентификация, HTTPS, защита API и хранение данных. OWASP Top 10 для фронтенда.",
  },
  {
    id: "hiring",
    title: "Найм в IT",
    icon: "fa-solid fa-briefcase",
    description: "Практическое руководство по поиску работы: как устроен рынок, воронка найма, резюме, собеседования, переговоры по офферу и выживание в процессе поиска.",
  },
  {
    id: "interview-questions",
    title: "Q&A",
    icon: "fa-solid fa-question-circle",
    description: "Типичные вопросы с технических собеседований по всем направлениям: JavaScript, CSS, React, TypeScript, сети, архитектура и практические задачи с разбором ответов.",
  },
];

export const DEFAULT_META_CATEGORY: MetaCategoryId = "javascript";
