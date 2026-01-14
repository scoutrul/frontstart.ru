import { Topic } from '../../../types';

export const ARCHITECTURE_TOPICS: Topic[] = [
  {
    id: 'design-patterns',
    title: 'Паттерны проектирования',
    description: 'Паттерны проектирования — переиспользуемые решения типичных проблем. Singleton: один экземпляр класса. Factory: создание объектов без указания конкретного класса. Observer: уведомление зависимых объектов об изменениях. MVC: Model-View-Controller разделение ответственности. MVP: Model-View-Presenter вариант MVC.',
    difficulty: 'intermediate',
    tags: ['patterns', 'architecture', 'design'],
    keyPoints: [
      'Singleton гарантирует один экземпляр класса.',
      'Factory инкапсулирует создание объектов.',
      'Observer уведомляет подписчиков об изменениях.',
      'MVC разделяет данные, представление и логику.',
      'Паттерны решают типичные проблемы проектирования.'
    ],
    examples: [
      {
        title: 'Singleton',
        code: `class Database {
  private static instance: Database;
  
  private constructor() {}
  
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}`
      },
      {
        title: 'Observer',
        code: `class Subject {
  private observers: Observer[] = [];
  
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  
  notify(data: any) {
    this.observers.forEach(obs => obs.update(data));
  }
}`
      }
    ],
    relatedTopics: ['clean-code']
  },
  {
    id: 'clean-code',
    title: 'Чистый код',
    description: 'SOLID принципы: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. Код-ревью: проверка кода коллегами для улучшения качества. Рефакторинг: улучшение структуры кода без изменения функциональности.',
    difficulty: 'intermediate',
    tags: ['clean-code', 'solid', 'best-practices'],
    keyPoints: [
      'Single Responsibility: класс должен иметь одну причину для изменения.',
      'Open/Closed: открыт для расширения, закрыт для модификации.',
      'Liskov Substitution: подклассы должны заменять базовые классы.',
      'Interface Segregation: много маленьких интерфейсов лучше одного большого.',
      'Dependency Inversion: зависеть от абстракций, а не от конкретики.'
    ],
    examples: [
      {
        title: 'Single Responsibility',
        code: `// Плохо
class User {
  save() { }
  sendEmail() { }
  generateReport() { }
}

// Хорошо
class User {
  save() { }
}

class EmailService {
  sendEmail() { }
}

class ReportGenerator {
  generateReport() { }
}`
      }
    ],
    relatedTopics: ['design-patterns', 'project-structure']
  },
  {
    id: 'project-structure',
    title: 'Структура проекта',
    description: 'Организация файлов: логическая группировка по функциональности или типу. Модули: разделение кода на независимые модули. Архитектура приложений: выбор подходящей архитектуры (MVC, MVVM, Clean Architecture).',
    difficulty: 'intermediate',
    tags: ['architecture', 'structure', 'organization'],
    keyPoints: [
      'Группировка по функциональности лучше группировки по типу.',
      'Модули должны быть независимыми и переиспользуемыми.',
      'Архитектура должна соответствовать размеру проекта.',
      'Структура должна быть понятной для новых разработчиков.',
      'Разделение на слои улучшает поддерживаемость.'
    ],
    examples: [
      {
        title: 'Структура по функциональности',
        code: `src/
  features/
    auth/
      components/
      hooks/
      utils/
    dashboard/
      components/
      hooks/
  shared/
    components/
    utils/`
      }
    ],
    relatedTopics: ['clean-code']
  },
  {
    id: 'architecture-optimistic-update',
    title: 'Optimistic Update / Offline-first / Deferred Sync',
    description:
      'Optimistic Update — это архитектурный паттерн, при котором UI сразу обновляется так, как будто операция на сервере уже успешно завершилась, а запрос уходит в сеть в фоне. ' +
      'В случае ошибки состояние откатывается (rollback) или примиряется (reconciliation) с ответом сервера. ' +
      'Этот подход критичен для отзывчивого UX в SPA/PWA и системах с нестабильной сетью.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'optimistic-update',
      'offline-first',
      'deferred-sync',
      'state',
      'async'
    ],
    keyPoints: [
      'Optimistic Update — UI обновляется сразу, запрос выполняется в фоне.',
      'Обязательные элементы: предварительное изменение состояния, фоновая асинхронная операция, обработка ошибок, rollback/reconciliation/deferred sync, server authoritative.',
      'Источник истины может быть на клиенте (store/cache), но сервер остаётся авторитетным для финального состояния.',
      'Вариант 1: Optimistic + rollback — есть сеть, при ошибке откат к предыдущему состоянию.',
      'Вариант 2: Optimistic + retry — временные ошибки, повтор запросов без явного отката UI.',
      'Вариант 3: Optimistic + offline queue — сеть может отсутствовать, мутации ставятся в очередь и синхронизируются позже.',
      'Offline-first optimistic mutations позволяют работать полностью офлайн с последующей синхронизацией.',
      'Deferred Sync отделяет момент изменения UI от момента отправки данных на сервер (batched/debounced sync).',
      'Паттерн снижает латентность, но усложняет логику управления состоянием и конфликтами.'
    ],
    examples: [
      {
        title: 'Базовый optimistic update с rollback (React Query / TanStack Query-подход)',
        code: `type Todo = { id: string; title: string; completed: boolean };

// Псевдо-хук useOptimisticToggle с onMutate/onError/onSettled-логикой
function useOptimisticToggleTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = async (id: string) => {
    // 1) Сохраняем snapshot для возможного rollback
    const previous = todos;

    // 2) Optimistic update
    setTodos(curr =>
      curr.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );

    try {
      // 3) Фоновая мутация
      await api.toggleTodo(id);
    } catch (error) {
      // 4) Rollback при ошибке
      setTodos(previous);
    } finally {
      // 5) Reconciliation: опционально перезагрузить данные с сервера
      // await refetch();
    }
  };

  return { todos, toggleTodo };
}`
      },
      {
        title: 'Offline queue + deferred sync (упрощённый пример)',
        code: `type Mutation = { id: string; type: 'toggle'; payload: { id: string } };

const queue: Mutation[] = [];

function enqueueMutation(m: Mutation) {
  queue.push(m);
  applyOptimistic(m);
}

function applyOptimistic(m: Mutation) {
  if (m.type === 'toggle') {
    // локальное обновление store/UI
  }
}

async function flushQueue() {
  if (!navigator.onLine) return;

  while (queue.length) {
    const m = queue[0];
    try {
      await sendToServer(m);
      queue.shift();
    } catch {
      // стратегия retry/backoff, возможны конфликты и merge
      break;
    }
  }
}

// sync по событиям: online, таймер, уход со страницы и т.п.
window.addEventListener('online', flushQueue);`
      }
    ],
    relatedTopics: ['state-management', 'caching', 'network-reliability']
  },
  {
    id: 'gof-overview-front-end',
    title: 'GoF-паттерны во фронтенде',
    description:
      'GoF-паттерны (Gang of Four) — это классические решения типовых архитектурных задач, разбитые на три группы: создающие, структурные и поведенческие. ' +
      'Во фронтенде они не исчезли, а адаптировались под JavaScript/TypeScript, реактивные фреймворки и SPA-архитектуры. ' +
      'Большинство популярных подходов — Flux/Redux, MVVM, middleware, плагинные системы — на самом деле являются композициями нескольких GoF-паттернов. ' +
      'Понимание этих паттернов на уровне архитектуры помогает осмысленно выбирать решения, объяснять их на собеседовании и видеть trade-off’ы за пределами «просто используем Redux/React Query».\n\n' +
      'Создающие паттерны (Factory, Builder, Singleton) во фронтенде помогают управлять созданием сложных объектов: стора, API-клиентов, UI-компонентов с настройками. ' +
      'Структурные (Adapter, Facade, Decorator, Composite, Proxy) определяют, как мы оборачиваем и комбинируем компоненты, слои API и сервисы. ' +
      'Поведенческие (Observer, Command, State, Strategy, Chain of Responsibility, Mediator) лежат в основе реактивности, state-менеджмента, middleware и workflow-систем. ' +
      'Важно не заучивать названия, а видеть повторяющиеся архитектурные приёмы в конкретных фреймворках и библиотеках.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'design',
      'state-management',
      'reactivity'
    ],
    funFact: [
      'Классическая книга GoF вышла в 1994 году, задолго до современного веба, но большинство фронтенд-архитектур до сих пор можно разложить на те же паттерны.',
      'Многие разработчики годами используют Flux/Redux, MVVM и middleware, не осознавая, что фактически применяют комбинации Observer, Command, State и Chain of Responsibility.'
    ],
    keyPoints: [
      'GoF-паттерны делятся на три группы: создающие, структурные и поведенческие.',
      'Создающие паттерны во фронтенде помогают управлять созданием store, API-клиентов и сложных UI-компонентов.',
      'Структурные паттерны описывают, как мы оборачиваем, композиционируем и адаптируем компоненты и сервисы.',
      'Поведенческие паттерны лежат в основе реактивности, state-менеджмента, middleware и workflow.',
      'Большинство архитектур фронтенда (Flux, MVVM, Service Layer, плагинные системы) — композиции нескольких GoF-паттернов.',
      'Знание GoF-паттернов помогает объяснять архитектурные решения на собеседовании без привязки к конкретному фреймворку.',
      'Важно отделять паттерн как идею от конкретной реализации в библиотеке или фреймворке.'
    ],
    additionalDescription:
      'Во фронтенде GoF-паттерны редко встречаются в «чистом виде» — чаще мы видим гибридные решения: Factory + Singleton для стора, Facade + Adapter для API-слоя, Decorator + Composite для UI-компонентов. ' +
      'Архитектору важно уметь узнавать знакомые принципы за конкретными реализациями, чтобы переиспользовать удачные идеи и вовремя замечать анти-паттерны.\n\n' +
      'Хороший способ прокачаться — брать знакомые технологии (Redux, Vue 3, React Router, Express middleware) и разбирать их на составляющие GoF-паттерны. ' +
      'Это автоматически улучшает словарный запас для собеседований и помогает говорить о фронтенде на языке архитектурных решений, а не только библиотек и API.',
    examples: [
      {
        title: 'Связка Factory + Singleton для стора',
        code: `class Store {
  private static instance: Store | null = null;

  private constructor(private state: object) {}

  static create(initialState = {}) {
    if (!Store.instance) {
      Store.instance = new Store(initialState); // Singleton + Factory Method
    }
    return Store.instance;
  }
}`
      },
      {
        title: 'Observer + Command в упрощённом action-диcпетчере',
        code: `type Action = { type: string; payload?: unknown };

type Listener = () => void;

class Dispatcher {
  private listeners: Listener[] = [];

  dispatch(action: Action) {
    // Command: действие как объект
    // Observer: оповещение подписчиков
    this.listeners.forEach((l) => l());
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }
}`
      }
    ],
    relatedTopics: ['design-patterns', 'clean-code', 'project-structure']
  },
  {
    id: 'flux-redux-as-gof',
    title: 'Flux/Redux как Observer + Command',
    description:
      'Flux и Redux часто описывают как «архитектуру с одним store», но под капотом это композиция нескольких GoF-паттернов: Observer, Command и частично Mediator. ' +
      'Store выступает как объект-субъект (Observer), который уведомляет подписанные view/компоненты об изменениях состояния. ' +
      'Action в Redux — это реализация Command: каждое действие инкапсулирует намерение изменить состояние в виде объекта. ' +
      'Dispatcher/Redux store координирует поток данных, упорядочивая применение команд и оповещения подписчиков.\n\n' +
      'Такая комбинация даёт детерминированный однонаправленный поток данных: view диспатчит actions, reducers чисто преобразуют состояние, а подписчики реагируют на обновления. ' +
      'Middleware добавляет к этой схеме Chain of Responsibility: каждое промежуточное звено может обработать, модифицировать или остановить действие. ' +
      'Важно понимать, что Redux — это не просто глобальный объект, а формализованный паттерн Observer + Command + Chain of Responsibility вокруг одного источника истины.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'state-management',
      'redux',
      'flux',
      'observer',
      'command'
    ],
    funFact: [
      'Идея Flux появилась в Facebook как реакция на усложнение MVC-архитектуры по мере роста приложения и количества двусторонних связей.',
      'Redux упростил оригинальный Flux, сведя архитектуру к одному store и чистым редьюсерам, но по сути остался комбинацией Observer и Command.'
    ],
    keyPoints: [
      'Store в Flux/Redux реализует паттерн Observer: подписчики реагируют на изменения состояния.',
      'Actions — это команды (Command), описывающие намерение изменить состояние в виде объектов.',
      'Reducers — чистые функции, реализующие логику перехода состояния без побочных эффектов.',
      'Middleware добавляют Chain of Responsibility для обработки и трансформации действий по цепочке.',
      'Однонаправленный поток данных упрощает reasoning и дебаггинг в сложных SPA.',
      'Архитектура Redux переносима: её можно реализовать без конкретной библиотеки, опираясь только на Observer + Command.',
      'Понимание GoF-составляющих помогает обсуждать Redux на уровне архитектуры, а не деталей API.'
    ],
    additionalDescription:
      'С точки зрения архитектуры, Redux — это не «глобальный объект», а протокол взаимодействия между слоями: UI → commands (actions) → state transitions (reducers) → notifications (subscribe). ' +
      'Такой протокол хорошо работает в больших командах: его легко объяснить, протестировать и расширить за счёт middleware.\n\n' +
      'На собеседованиях полезно уметь развернуть ответ: не просто «мы используем Redux», а «мы используем однонаправленный поток данных, где actions реализуют Command, store — Observer, а middleware — Chain of Responsibility». ' +
      'Это сразу показывает архитектурное понимание, а не только знание конкретной библиотеки.',
    examples: [
      {
        title: 'Мини-Redux через Observer + Command',
        code: `type State = { count: number };

type Action = { type: 'inc' } | { type: 'dec' };

type Listener = () => void;

function createStore(initial: State) {
  let state = initial;
  const listeners: Listener[] = [];

  const getState = () => state;

  const dispatch = (action: Action) => {
    // Command
    switch (action.type) {
      case 'inc':
        state = { count: state.count + 1 };
        break;
      case 'dec':
        state = { count: state.count - 1 };
        break;
    }
    // Observer
    listeners.forEach((l) => l());
  };

  const subscribe = (listener: Listener) => {
    listeners.push(listener);
  };

  return { getState, dispatch, subscribe };
}`
      }
    ],
    relatedTopics: ['state-management', 'architecture-optimistic-update', 'design-patterns']
  },
  {
    id: 'mvvm-reactivity-as-gof',
    title: 'MVVM и реактивность как Observer + Proxy',
    description:
      'Современные MVVM-фреймворки и системы реактивности (Vue 3, MobX) комбинируют паттерны Observer и Proxy. ' +
      'Модель (Model/ViewModel) оборачивается прокси-объектом, который перехватывает чтение/запись и регистрирует зависимости. ' +
      'Наблюдатели (эффекты/render-функции/компоненты) подписываются на изменения конкретных свойств и переиспользуются при обновлении. ' +
      'Это позволяет автоматически поддерживать согласованность между состоянием и представлением без ручного управления подписками.\n\n' +
      'Factory/Builder добавляются на уровне создания реактивных объектов и ViewModel-слоя: нам нужно централизованно создавать реактивные структуры с нужной конфигурацией. ' +
      'Такое сочетание GoF-паттернов позволяет строить декларативные UI: мы описываем «что должно быть», а система реактивности сама решает, «как» обновить DOM или виртуальное дерево.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'mvvm',
      'reactivity',
      'observer',
      'proxy',
      'state-management'
    ],
    funFact: [
      'Vue 3 перешёл с defineProperty на Proxy не только ради синтаксического сахара, но и ради более точного контроля над доступом к данным и возможностью проксировать целые структуры.',
      'Многие «магические» реактивные системы на самом деле являются аккуратной реализацией Observer поверх Proxy, плюс немного Factory для удобства.'
    ],
    keyPoints: [
      'MVVM отделяет модель/логику (ViewModel) от представления, позволяя тестировать и переиспользовать их независимо.',
      'Observer реализуется через систему реактивных эффектов: компоненты/вычисления подписываются на изменения данных.',
      'Proxy (или аналоги) перехватывает операции чтения/записи и регистрирует зависимости.',
      'Factory/Builder помогают создавать реактивные объекты и ViewModel-слой с едиными правилами.',
      'Реактивность упрощает поддержку сложных UI, но может скрывать стоимость обновлений и сложность зависимостей.',
      'Понимание GoF-паттернов помогает объяснить, как работает «магия» Vue/MobX без привязки к конкретной реализации.'
    ],
    additionalDescription:
      'Архитектурно MVVM + реактивность удобно рассматривать как слой медиации между бизнес-логикой и UI: ViewModel knows how to talk to both. ' +
      'Observer и Proxy позволяют реализовать этот слой так, чтобы UI автоматически реагировал на изменения данных без ручного wiring’а.\n\n' +
      'На собеседовании полезно уметь объяснять, как именно фреймворк отслеживает зависимости и обновляет только нужные части дерева: это сразу выводит разговор на уровень архитектуры, а не чистого синтаксиса.',
    examples: [
      {
        title: 'Упрощённая реактивная система через Observer + Proxy',
        code: `type Effect = () => void;

let activeEffect: Effect | null = null;

const depsMap = new WeakMap<object, Map<string | symbol, Set<Effect>>>();

function track(target: object, key: string | symbol) {
  if (!activeEffect) return;
  let deps = depsMap.get(target);
  if (!deps) {
    deps = new Map();
    depsMap.set(target, deps);
  }
  let dep = deps.get(key);
  if (!dep) {
    dep = new Set();
    deps.set(key, dep);
  }
  dep.add(activeEffect);
}

function trigger(target: object, key: string | symbol) {
  const deps = depsMap.get(target);
  const dep = deps?.get(key);
  dep?.forEach((effect) => effect());
}

function reactive<T extends object>(obj: T): T {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return result;
    },
  });
}`
      }
    ],
    relatedTopics: ['state-management', 'rendering-strategies', 'design-patterns']
  },
  {
    id: 'service-layer-facade-as-gof',
    title: 'Service Layer как Facade + Adapter',
    description:
      'Service Layer / Facade API — это архитектурный приём, при котором фронтенд скрывает детали работы с backend за единым абстрактным интерфейсом. ' +
      'Facade даёт простой методный слой (userService, billingService, articleService), в то время как Adapter отвечает за приведение форматов данных и протоколов к удобному для приложения виду. ' +
      'Singleton используется для того, чтобы сервисы и конфигурация (токены, базовый URL, interceptors) были едиными во всём приложении. ' +
      'В результате UI-компоненты и бизнес-логика зависят от стабильного API сервисного слоя, а не от деталей REST/GraphQL/WebSocket.\n\n' +
      'Такой подход упрощает тестирование, миграции и рефакторинг: можно заменить backend, протокол или библиотеку HTTP-клиента, почти не трогая остальной код. ' +
      'Он также помогает избежать распространённого анти-паттерна «API-запросы разбросаны по компонентам», когда каждый компонент сам знает, как говорить с сервером.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'facade',
      'adapter',
      'api',
      'service-layer'
    ],
    funFact: [
      'В больших frontend-кодовых базах сервисный слой часто становится фактической \"границей контекста\" между бизнес-логикой и внешним миром.',
      'Частая проблема старых проектов — отсутствие явного Facade/Service Layer: любой компонент может напрямую дёргать fetch/axios, что делает миграции почти невозможными.'
    ],
    keyPoints: [
      'Facade предоставляет упрощённый интерфейс к сложным или изменчивым backend-API.',
      'Adapter преобразует внешние модели/форматы (REST, GraphQL) во внутренние DTO/доменные объекты.',
      'Singleton гарантирует, что конфигурация и клиенты (HTTP/WebSocket) едины для всего приложения.',
      'Service Layer уменьшает связность между UI и backend, упрощая тестирование и рефакторинг.',
      'Такой слой удобен для кэширования, ретраев и кросс-срезов (логирование, метрики, feature flags).',
      'На собеседовании Service Layer — хороший пример применения Facade + Adapter во фронтенде.'
    ],
    additionalDescription:
      'Хороший сервисный слой обычно реализует несколько уровней абстракции: низкоуровневый HTTP-клиент, адаптеры по доменным сущностям и фасады для конкретных use-case’ов. ' +
      'Это позволяет изолировать нестабильные элементы (URL, поля ответа, заголовки) на периферии и сохранить стабильный контракт внутри приложения.\n\n' +
      'Важно не превращать Facade в «божественный объект»: каждая область ответственности (auth, billing, контент) должна иметь свой сервис, а не один мегасервис со всеми методами.',
    examples: [
      {
        title: 'Facade + Adapter для userService',
        code: `type ApiUser = { id: string; first_name: string; last_name: string };

type User = { id: string; fullName: string };

class HttpClient {
  constructor(private baseUrl: string) {}

  get<T>(path: string): Promise<T> {
    return fetch(this.baseUrl + path).then((r) => r.json());
  }
}

class UserService {
  constructor(private http: HttpClient) {}

  async getUser(id: string): Promise<User> {
    const apiUser = await this.http.get<ApiUser>(\`/users/\${id}\`);
    // Adapter: приводим API-модель к доменной
    return { id: apiUser.id, fullName: apiUser.first_name + ' ' + apiUser.last_name };
  }
}`
      }
    ],
    relatedTopics: ['data-layer', 'caching', 'network-reliability']
  },
  {
    id: 'plugin-middleware-as-gof',
    title: 'Плагины и middleware как Chain of Responsibility',
    description:
      'Плагинные системы и middleware во фронтенде — это практическая реализация паттерна Chain of Responsibility с элементами Decorator. ' +
      'Запрос, экшен или событие проходит через цепочку обработчиков, каждый из которых может модифицировать его, остановить или передать дальше. ' +
      'Так работают middleware в Redux/Express/Koa, плагины в webpack/Vite, обработчики запросов в HTTP-клиентах. ' +
      'Decorator проявляется в том, что каждый плагин может «оборачивать» поведение следующего, добавляя к нему кросс-срезы — логирование, метрики, пермишены.\n\n' +
      'Такая архитектура хорошо масштабируется: можно добавлять и убирать поведение, не меняя основной код. ' +
      'Но при чрезмерном количестве middleware/плагинов цепочка становится непрозрачной, и отладка усложняется — это типичный trade-off Chain of Responsibility.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'middleware',
      'plugins',
      'chain-of-responsibility',
      'decorator'
    ],
    funFact: [
      'Многие разработчики используют middleware в Express/Redux годами и не связывают это с формальным паттерном Chain of Responsibility.',
      'Плагинные системы сборщиков (webpack, Vite, Rollup) часто представляют собой просто хорошо оформленный Chain of Responsibility с хуками.'
    ],
    keyPoints: [
      'Chain of Responsibility передаёт запрос по цепочке обработчиков, пока один из них не решит его обработать или прервать.',
      'Middleware добавляют кросс-срезы: логирование, аутентификацию, кэширование, метрики, фичи.',
      'Decorator проявляется, когда обработчик оборачивает следующий, добавляя поведение до/после вызова.',
      'Плагинные системы позволяют расширять поведение без модификации ядра.',
      'Отрицательная сторона — сложность трассировки и возможные скрытые зависимости между плагинами.',
      'Понимание Chain of Responsibility упрощает проектирование собственных middleware API.'
    ],
    additionalDescription:
      'При проектировании middleware важно явно определить порядок их выполнения и контракты (какие поля можно читать/менять, как сигнализировать об ошибке). ' +
      'Это уменьшает хаос, когда плагины неявно зависят друг от друга.\n\n' +
      'На собеседованиях можно объяснить Express/Redux middleware как конкретный пример Chain of Responsibility: \"у нас есть цепочка функций, каждая может обработать запрос и решить, вызывать ли next()\".',
    examples: [
      {
        title: 'Цепочка middleware для логирования и авторизации',
        code: `type Context = { user?: { id: string }; requestId: string };

type Middleware = (ctx: Context, next: () => Promise<void>) => Promise<void>;

const logger: Middleware = async (ctx, next) => {
  console.log('start', ctx.requestId);
  await next();
  console.log('end', ctx.requestId);
};

const auth: Middleware = async (ctx, next) => {
  if (!ctx.user) {
    throw new Error('Unauthorized');
  }
  await next();
};

function compose(middlewares: Middleware[]): Middleware {
  return async (ctx, next) => {
    let index = -1;
    async function dispatch(i: number): Promise<void> {
      if (i <= index) return;
      index = i;
      const fn = middlewares[i] || next;
      if (!fn) return;
      await fn(ctx, () => dispatch(i + 1));
    }
    await dispatch(0);
  };
}`
      }
    ],
    relatedTopics: ['design-patterns', 'data-layer', 'optimization']
  },
  {
    id: 'component-composition-hoc-as-gof',
    title: 'Композиция компонентов и HOC как Composite',
    description:
      'Композиция компонентов и HOC (Higher-Order Components) в React/Vue реализуют набор структурных паттернов: Composite, Decorator и частично Factory. ' +
      'Дерево компонентов — это классический Composite: каждый компонент может содержать другие, а UI-дерево обрабатывается единообразно (рендер, диффинг, события). ' +
      'HOC и функциональные обёртки работают как Decorator: они принимают компонент и возвращают новый, добавляя к нему поведение (данные, стили, логирование) без изменения оригинального кода. ' +
      'Factory проявляется в фабриках компонентов и обобщённых обёртках, которые создают специализированные компоненты по конфигурации.\n\n' +
      'Такая комбинация GoF-паттернов позволяет строить богатые библиотеки UI-компонентов и переиспользовать поведение между разными частями приложения. ' +
      'Однако чрезмерное увлечение HOC/обёртками может привести к «лестницам» из компонентов и затруднить дебаг.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'components',
      'hoc',
      'composite',
      'decorator'
    ],
    funFact: [
      'React изначально позиционировался как реализация идеи \"UI = функция от состояния\" поверх древовидного Composite-подхода.',
      'Многие популярные UI-библиотеки (MUI, Chakra, Ant Design) активно используют комбинацию Composite + Decorator для построения своих API.'
    ],
    keyPoints: [
      'Компонентное дерево — реализация Composite: единый интерфейс для узлов и поддеревьев.',
      'HOC и обёртки реализуют Decorator: добавляют поведение без изменения исходного компонента.',
      'Factory используется для генерации компонентов по конфигурации (темы, вариации, пресеты).',
      'Композиция компонентов позволяет собирать сложные интерфейсы из простых строительных блоков.',
      'Слишком глубокие и непрозрачные цепочки HOC усложняют отладку и трекинг данных.',
      'Понимание этих паттернов помогает проектировать библиотеки компонентов и их публичные API.'
    ],
    additionalDescription:
      'При проектировании компонетов полезно думать в терминах Composite: каждый компонент должен быть либо листом (примитив), либо контейнером (layout), но с предсказуемым контрактом. ' +
      'Decorator-подход через HOC можно постепенно заменять на более явную композицию (рендер-пропы, hooks), сохраняя идею расширения без модификации.\n\n' +
      'На собеседовании такие темы хорошо демонстрируют, что вы видите за конкретными API (React/Vue) общие архитектурные принципы.',
    examples: [
      {
        title: 'Простой HOC как Decorator',
        code: `function withLogger<P>(Component: React.ComponentType<P>) {
  return function Wrapped(props: P) {
    console.log('render', Component.displayName || Component.name);
    return <Component {...props} />;
  };
}`
      }
    ],
    relatedTopics: ['rendering-strategies', 'design-patterns', 'project-structure']
  },
  {
    id: 'optimistic-update-as-gof',
    title: 'Optimistic Update как Observer + Command + State',
    description:
      'Optimistic Update / Offline-first / Deferred Sync — это архитектурный подход к работе с асинхронным состоянием, который можно разложить на сочетание Observer, Command и State. ' +
      'UI сразу переходит в новое состояние (State), как если бы операция уже успешно завершилась, а в фоне уходит команда (Command) на сервер. ' +
      'Observer обеспечивает оповещение UI и других частей системы об изменениях и результатах фоновой операции. ' +
      'При успехе состояние подтверждается, при ошибке выполняется rollback или reconciliation с серверной версией.\n\n' +
      'В offline-first варианте добавляется очередь команд и отложенная синхронизация: команды накапливаются локально и отправляются при появлении сети (State + Command + Queue). ' +
      'Deferred Sync позволяет батчить и откладывать синхронизацию, снижая количество запросов и нагрузку на сеть. ' +
      'Все эти варианты остаются частными случаями одного и того же паттерна: мы управляем жизненным циклом локального состояния и команд, согласуя их с сервером.',
    difficulty: 'intermediate',
    tags: [
      'architecture',
      'patterns',
      'gof',
      'optimistic-update',
      'offline-first',
      'deferred-sync',
      'state',
      'async'
    ],
    funFact: [
      'Optimistic UI массово популяризировали социальные сети и мессенджеры, где ожидание ответа сервера неприемлемо для UX.',
      'Многие библиотеки (React Query, Apollo, SWR) предоставляют optimistic-API, но редко называют это прямо GoF-паттернами.'
    ],
    keyPoints: [
      'Optimistic Update — сначала меняем локальное состояние, потом отправляем команду на сервер.',
      'Command представляет собой мутацию/запрос, который можно ретраить, откатывать и ставить в очередь.',
      'State описывает различные режимы сущности: pending, confirmed, failed, queued и т.п.',
      'Observer уведомляет UI и другие части системы о смене состояния и результатах синхронизации.',
      'Offline-first добавляет очередь команд и персистентное хранилище для работы без сети.',
      'Deferred Sync позволяет отправлять команды батчами или по событиям (таймер, уход со страницы, восстановление сети).',
      'Архитектурное понимание optimistic-паттернов важно для приложений с нестабильной сетью и высоким UX-требованием.'
    ],
    additionalDescription:
      'Ключевой архитектурный вопрос в optimistic-подходе — кто является источником истины и как мы примиряем локальное состояние с серверным. ' +
      'Если сервер авторитетен, клиент должен уметь аккуратно откатываться и разрешать конфликты, не ломая UX.\n\n' +
      'На собеседовании полезно уметь объяснить разницу между \"просто отправили запрос\" и полноценной архитектурой optimistic update с ролями Observer, Command и State, очередями и стратегиями синхронизации.',
    examples: [
      {
        title: 'State-машина для optimistic update',
        code: `type Status = 'idle' | 'pending' | 'confirmed' | 'failed';

type Item = { id: string; title: string; status: Status };

function applyOptimisticCreate(list: Item[], temp: Item): Item[] {
  // добавляем временный элемент со статусом pending
  return [...list, temp];
}

function confirmCreate(list: Item[], tempId: string, realId: string): Item[] {
  return list.map((item) =>
    item.id === tempId ? { ...item, id: realId, status: 'confirmed' } : item,
  );
}

function failCreate(list: Item[], tempId: string): Item[] {
  return list.filter((item) => item.id !== tempId);
}`
      }
    ],
    relatedTopics: ['architecture-optimistic-update', 'state-management', 'caching']
  }
];

