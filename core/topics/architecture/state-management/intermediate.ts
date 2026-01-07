import { Topic } from '../../../types';

export const STATE_MANAGEMENT_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-state-global',
    title: 'Глобальные сторы',
    difficulty: 'intermediate',
    description: 'Глобальные сторы (Redux, Zustand, Pinia) — решения для управления состоянием, доступным во всём приложении. Они нужны, когда состояние используется в множестве компонентов, и подъём состояния или Context API не подходят. Redux — самое популярное решение с предсказуемым потоком данных. Zustand — более простое и легковесное. Pinia — официальное решение для Vue.\n\nВыбор стора зависит от сложности приложения: для простых случаев достаточно Context API, для сложных — нужен глобальный стор с middleware, devtools, нормализацией данных. Middle-разработчик должен понимать, когда нужен глобальный стор и как выбрать подходящее решение.',
    keyPoints: [
      'Глобальные сторы: состояние, доступное во всём приложении (Redux, Zustand, Pinia).',
      'Когда нужен: состояние используется в множестве компонентов, сложная логика, нужны devtools.',
      'Redux: предсказуемый поток данных, middleware, devtools, но много boilerplate.',
      'Zustand: простота, минимальный boilerplate, хорошая производительность.',
      'Pinia: официальное решение для Vue, замена Vuex, TypeScript из коробки.',
      'Нормализация данных: структурирование данных для эффективного обновления (Redux Toolkit).',
      'Стратегии выбора: сложность приложения, размер команды, требования к производительности.'
    ],
    tags: ['architecture', 'state', 'redux', 'zustand', 'pinia', 'intermediate'],
    examples: [
      {
        title: 'Redux: базовое использование',
        code: `// Store
import { createStore } from 'redux';

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// Использование
function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Счёт: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Увеличить
      </button>
    </div>
  );
}`
      },
      {
        title: 'Zustand: простое решение',
        code: `// Store
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Использование
function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <p>Счёт: {count}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
}

// Минимальный boilerplate, простота использования`
      },
      {
        title: 'Нормализация данных',
        code: `// ❌ Плохо: вложенная структура
const state = {
  users: [
    { id: 1, name: 'Иван', posts: [{ id: 1, title: 'Пост 1' }] },
    { id: 2, name: 'Мария', posts: [{ id: 2, title: 'Пост 2' }] }
  ]
};

// Обновление сложное, нужно искать в массиве

// ✅ Хорошо: нормализованная структура
const state = {
  users: {
    1: { id: 1, name: 'Иван', postIds: [1] },
    2: { id: 2, name: 'Мария', postIds: [2] }
  },
  posts: {
    1: { id: 1, title: 'Пост 1', userId: 1 },
    2: { id: 2, title: 'Пост 2', userId: 2 }
  }
};

// Обновление простое: state.users[1] = newUser

// Redux Toolkit нормализует автоматически`
      }
    ],
    relatedTopics: ['architecture-state-context', 'architecture-state-cache'],
    funFact: ['Redux был вдохновлен Flux от Facebook, но его создатель Дэн Абрамов сказал, что написал Redux за выходные, чтобы подготовиться к конференции. Позже Facebook нанял его и принял Redux как стандарт.', 'Идея однонаправленного потока данных (как в Redux) пришла из функционального программирования и языка Elm, который мало кто использует в продакшене. Но принципы Elm (чистые функции, неизменяемость) стали основой Redux.']
  },
  {
    id: 'architecture-state-cache',
    title: 'Клиентский кэш',
    difficulty: 'intermediate',
    description: 'Клиентский кэш (React Query, SWR) — решения для кэширования данных с сервера, синхронизации и управления загрузкой. Они автоматически кэшируют ответы API, обновляют данные в фоне, обрабатывают ошибки и состояния загрузки. Это упрощает работу с серверными данными и улучшает UX.\n\nReact Query и SWR решают проблемы: дублирование запросов, устаревшие данные, сложная логика обновления. Они автоматически инвалидируют кэш, делают refetch при фокусе окна, поддерживают оптимистичные обновления. Middle-разработчик должен понимать, когда использовать клиентский кэш вместо простого fetch.',
    keyPoints: [
      'Клиентский кэш: кэширование данных с сервера, синхронизация, управление загрузкой (React Query, SWR).',
      'Преимущества: автоматическое кэширование, инвалидация, refetch, обработка ошибок, состояния загрузки.',
      'React Query: мощное решение с множеством возможностей, хорошая интеграция с Redux.',
      'SWR: простое и легковесное решение от Vercel, отличная производительность.',
      'Применение: данные с сервера, которые нужно кэшировать и синхронизировать.',
      'Не нужно для: локального состояния, статических данных, простых случаев.'
    ],
    tags: ['architecture', 'state', 'cache', 'react-query', 'swr', 'intermediate'],
    examples: [
      {
        title: 'React Query: базовое использование',
        code: `import { useQuery } from 'react-query';

function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useQuery(
    ['user', userId],
    () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    {
      staleTime: 5 * 60 * 1000, // 5 минут
      cacheTime: 10 * 60 * 1000 // 10 минут
    }
  );
  
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
  
  return <div>{user.name}</div>;
}

// Автоматическое кэширование, инвалидация, refetch`
      },
      {
        title: 'SWR: простое решение',
        code: `import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(r => r.json());

function UserProfile({ userId }) {
  const { data: user, error } = useSWR(
    \`/api/users/\${userId}\`,
    fetcher,
    {
      revalidateOnFocus: true, // Обновлять при фокусе
      revalidateOnReconnect: true // Обновлять при переподключении
    }
  );
  
  if (error) return <div>Ошибка</div>;
  if (!user) return <div>Загрузка...</div>;
  
  return <div>{user.name}</div>;
}

// Минимальная настройка, автоматическая синхронизация`
      },
      {
        title: 'Инвалидация кэша',
        code: `import { useQuery, useQueryClient } from 'react-query';

function UserProfile({ userId }) {
  const queryClient = useQueryClient();
  
  const { data: user } = useQuery(['user', userId], /* ... */);
  
  const updateUser = async (newData) => {
    await fetch(\`/api/users/\${userId}\`, {
      method: 'PUT',
      body: JSON.stringify(newData)
    });
    
    // Инвалидировать кэш после обновления
    queryClient.invalidateQueries(['user', userId]);
  };
  
  return (
    <div>
      <div>{user.name}</div>
      <button onClick={() => updateUser({ name: 'Новое имя' })}>
        Обновить
      </button>
    </div>
  );
}

// Кэш обновится автоматически`
      }
    ],
    relatedTopics: ['architecture-state-global', 'architecture-data-layer-api-client'],
    funFact: 'React Query был создан Таннером Линсли в 2019 году. Он решил проблему, с которой сталкивался в каждом проекте: кэширование данных с сервера. React Query стал одним из самых популярных решений для работы с серверными данными в React, заменив множество кастомных решений.'
  },
  {
    id: 'architecture-state-sync',
    title: 'Синхронизация и оффлайн',
    difficulty: 'intermediate',
    description: 'Синхронизация состояния между вкладками, устройствами и оффлайн-режимом — сложная задача. Нужно синхронизировать данные между вкладками (BroadcastChannel, localStorage events), обрабатывать оффлайн-режим (Service Workers, IndexedDB), синхронизировать при возвращении онлайн. Это требует продуманной архитектуры и использования специальных инструментов.\n\nСтратегии: оптимистичные обновления (показывать изменения сразу, синхронизировать потом), очередь действий (сохранять действия в оффлайне, выполнять при онлайн), конфликт-резолюция (обрабатывать конфликты при синхронизации). Middle-разработчик должен понимать основы синхронизации и оффлайн-режима.',
    keyPoints: [
      'Синхронизация между вкладками: BroadcastChannel, localStorage events, синхронизация состояния.',
      'Оффлайн-режим: Service Workers для кэширования, IndexedDB для хранения, очередь действий.',
      'Оптимистичные обновления: показывать изменения сразу, синхронизировать с сервером потом.',
      'Конфликт-резолюция: обработка конфликтов при синхронизации (last-write-wins, merge, manual).',
      'Инструменты: React Query с оффлайн-поддержкой, PWA технологии, IndexedDB.',
      'Сложность: синхронизация — одна из самых сложных задач в фронтенд-разработке.'
    ],
    tags: ['architecture', 'state', 'sync', 'offline', 'pwa', 'intermediate'],
    examples: [
      {
        title: 'Синхронизация между вкладками',
        code: `// Использование BroadcastChannel
const channel = new BroadcastChannel('app-state');

// Отправка изменений
function updateState(newState) {
  setState(newState);
  channel.postMessage({ type: 'STATE_UPDATE', state: newState });
}

// Получение изменений
channel.onmessage = (event) => {
  if (event.data.type === 'STATE_UPDATE') {
    setState(event.data.state);
  }
};

// Синхронизация между вкладками`

      },
      {
        title: 'Оффлайн-очередь действий',
        code: `// Очередь действий для оффлайн-режима
class OfflineQueue {
  constructor() {
    this.queue = [];
    this.loadFromStorage();
  }
  
  add(action) {
    this.queue.push(action);
    this.saveToStorage();
  }
  
  async process() {
    if (!navigator.onLine) return;
    
    while (this.queue.length > 0) {
      const action = this.queue.shift();
      try {
        await this.executeAction(action);
      } catch (error) {
        this.queue.unshift(action); // Вернуть в очередь при ошибке
        break;
      }
    }
    
    this.saveToStorage();
  }
  
  loadFromStorage() {
    const stored = localStorage.getItem('offline-queue');
    if (stored) {
      this.queue = JSON.parse(stored);
    }
  }
  
  saveToStorage() {
    localStorage.setItem('offline-queue', JSON.stringify(this.queue));
  }
}

// Использование
const queue = new OfflineQueue();

// При оффлайне: добавить в очередь
if (!navigator.onLine) {
  queue.add({ type: 'UPDATE_USER', data: newData });
} else {
  await updateUser(newData);
}

// При онлайн: обработать очередь
window.addEventListener('online', () => {
  queue.process();
});`
      }
    ],
    relatedTopics: ['architecture-state-cache', 'architecture-rendering-strategies-ssr'],
    funFact: 'Синхронизация состояния между вкладками и оффлайн-режим — одна из самых сложных задач в фронтенд-разработке. Многие крупные приложения (Gmail, Google Docs) потратили годы на реализацию надёжной синхронизации. Это показывает, что простое на первый взгляд требование ("работать оффлайн") на самом деле очень сложное.'
  },
  {
    id: 'architecture-state-machines',
    title: 'State Machines',
    difficulty: 'intermediate',
    description: 'State Machines (конечные автоматы) — математическая модель для описания состояний и переходов между ними. В фронтенде они используются для управления сложным состоянием: формы, модальные окна, анимации, процессы. State Machines делают состояние предсказуемым и тестируемым, исключая недопустимые переходы.\n\nБиблиотеки: XState — самая популярная, поддерживает визуализацию и тестирование. Zustand с middleware — более простое решение. State Machines особенно полезны для сложных процессов с множеством состояний и переходов. Middle-разработчик должен понимать, когда использовать State Machines вместо обычного состояния.',
    keyPoints: [
      'State Machines: математическая модель состояний и переходов, делает состояние предсказуемым.',
      'Применение: сложные процессы (формы, модальные окна, анимации), где важна предсказуемость.',
      'XState: популярная библиотека, поддерживает визуализацию, тестирование, TypeScript.',
      'Преимущества: предсказуемость, исключение недопустимых переходов, легко тестировать.',
      'Недостатки: избыточность для простых случаев, кривая обучения.',
      'Когда использовать: сложные процессы с множеством состояний, где важна надёжность.'
    ],
    tags: ['architecture', 'state', 'state-machines', 'xstate', 'intermediate'],
    examples: [
      {
        title: 'State Machine для формы',
        code: `import { createMachine } from 'xstate';

const formMachine = createMachine({
  id: 'form',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'filling'
      }
    },
    filling: {
      on: {
        SUBMIT: 'submitting',
        CANCEL: 'idle'
      }
    },
    submitting: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error'
      }
    },
    success: {
      type: 'final'
    },
    error: {
      on: {
        RETRY: 'submitting',
        CANCEL: 'idle'
      }
    }
  }
});

// Использование
function Form() {
  const [state, send] = useMachine(formMachine);
  
  return (
    <div>
      {state.matches('idle') && <button onClick={() => send('START')}>Начать</button>}
      {state.matches('filling') && <FormFields />}
      {state.matches('submitting') && <div>Отправка...</div>}
      {state.matches('success') && <div>Успех!</div>}
      {state.matches('error') && <div>Ошибка</div>}
    </div>
  );
}

// Невозможно перейти из 'idle' в 'submitting' — предсказуемость`
      }
    ],
    relatedTopics: ['architecture-state-global', 'architecture-component-solid'],
    funFact: 'State Machines были изобретены в 1950-х годах для описания поведения цифровых схем. В программировании они используются с 1960-х. В фронтенд-разработке они стали популярными с появлением XState в 2017 году, который сделал State Machines доступными для JavaScript-разработчиков.'
  },
  {
    id: 'architecture-state-reducer-pattern',
    title: 'Reducer Pattern',
    difficulty: 'intermediate',
    description: 'Reducer Pattern — архитектурный паттерн для управления сложным состоянием через чистые функции, принимающие предыдущее состояние и действие, и возвращающие новое состояние. Паттерн обеспечивает предсказуемость, тестируемость и отладку. Основа Redux, но может использоваться без библиотек. Senior-разработчик должен понимать паттерн как концепцию, а не только как часть Redux.',
    keyPoints: [
      'Reducer: чистая функция (state, action) => newState, не мутирует исходное состояние.',
      'Предсказуемость: одинаковые входные данные всегда дают одинаковый результат.',
      'Тестируемость: легко тестировать чистые функции без моков и зависимостей.',
      'Композиция: редюсеры можно комбинировать для управления разными частями состояния.',
      'Неизменяемость: возвращает новое состояние, а не изменяет существующее.',
      'Когда использовать: сложное состояние с множеством операций, нужна предсказуемость и отладка.'
    ],
    tags: ['architecture', 'state', 'reducer', 'pattern', 'redux', 'functional', 'intermediate'],
    examples: [
      {
        title: 'Базовый reducer без библиотек',
        code: `// Reducer - чистая функция
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state; // Важно: возвращать state, если action не распознан
  }
}

// Использование
let state = counterReducer(undefined, { type: 'INCREMENT' }); // { count: 1 }
state = counterReducer(state, { type: 'INCREMENT' }); // { count: 2 }
state = counterReducer(state, { type: 'DECREMENT' }); // { count: 1 }
state = counterReducer(state, { type: 'RESET' }); // { count: 0 }

// Предсказуемость: всегда одинаковый результат для одинаковых входных данных`
      },
      {
        title: 'Reducer с payload',
        code: `// Reducer с данными в action
function todosReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
}

// Использование
let state = todosReducer(undefined, {
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Изучить Reducer Pattern' }
});
// { todos: [{ id: 1, text: 'Изучить Reducer Pattern', completed: false }] }

state = todosReducer(state, {
  type: 'TOGGLE_TODO',
  payload: { id: 1 }
});
// { todos: [{ id: 1, text: 'Изучить Reducer Pattern', completed: true }] }`
      },
      {
        title: 'Композиция редюсеров',
        code: `// Разделение на несколько редюсеров
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function todosReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

// Комбинирование редюсеров
function rootReducer(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action),
    todos: todosReducer(state.todos, action)
  };
}

// Использование
let state = rootReducer(undefined, { type: 'INCREMENT' });
// { counter: 1, todos: [] }

state = rootReducer(state, {
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Задача' }
});
// { counter: 1, todos: [{ id: 1, text: 'Задача' }] }`
      },
      {
        title: 'Тестирование редюсеров',
        code: `// Легко тестировать чистые функции
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Тесты
describe('counterReducer', () => {
  it('должен увеличивать счётчик', () => {
    expect(counterReducer(0, { type: 'INCREMENT' })).toBe(1);
    expect(counterReducer(5, { type: 'INCREMENT' })).toBe(6);
  });
  
  it('должен уменьшать счётчик', () => {
    expect(counterReducer(1, { type: 'DECREMENT' })).toBe(0);
    expect(counterReducer(5, { type: 'DECREMENT' })).toBe(4);
  });
  
  it('должен возвращать начальное состояние', () => {
    expect(counterReducer(undefined, { type: 'UNKNOWN' })).toBe(0);
  });
  
  it('не должен мутировать исходное состояние', () => {
    const state = { count: 5 };
    const newState = counterReducer(state, { type: 'INCREMENT' });
    expect(state).not.toBe(newState); // Новый объект
    expect(state.count).toBe(5); // Исходное состояние не изменилось
  });
});

// Преимущества:
// - Нет моков
// - Нет зависимостей
// - Быстрые тесты
// - Легко отлаживать`
      },
      {
        title: 'Reducer в React без Redux',
        code: `// Использование useReducer в React
import { useReducer } from 'react';

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Счёт: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Увеличить
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Уменьшить
      </button>
    </div>
  );
}

// useReducer полезен когда:
// - Сложная логика состояния
// - Множество операций
// - Нужна предсказуемость`
      },
      {
        title: 'Почему reducer, а не setState',
        code: `// ❌ ПЛОХО: множественные setState
function Component() {
  const [state, setState] = useState({ count: 0, todos: [] });
  
  const handleIncrement = () => {
    setState({ ...state, count: state.count + 1 }); // Легко забыть spread
  };
  
  const handleAddTodo = () => {
    setState({ ...state, todos: [...state.todos, newTodo] }); // Сложная логика
  };
  
  // Проблемы:
  // - Легко забыть spread оператор
  // - Сложная логика в компоненте
  // - Трудно тестировать
  // - Нет предсказуемости
}

// ✅ ХОРОШО: reducer pattern
function Component() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' }); // Просто и предсказуемо
  };
  
  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo }); // Логика в reducer
  };
  
  // Преимущества:
  // - Логика в одном месте (reducer)
  // - Легко тестировать
  // - Предсказуемость
  // - Можно использовать Redux DevTools`
      }
    ],
    relatedTopics: ['architecture-state-global', 'architecture-state-machines'],
    funFact: 'Reducer Pattern пришёл из функционального программирования, где функции высшего порядка (как reduce) принимают функцию-аккумулятор. В Redux название "reducer" было выбрано потому, что функция похожа на Array.prototype.reduce: она принимает аккумулятор (state) и текущее значение (action), возвращая новый аккумулятор. Паттерн стал популярным благодаря Redux, но может использоваться независимо.'
  },
  {
    id: 'architecture-state-essential',
    title: 'Essential State (Существенное состояние)',
    difficulty: 'intermediate',
    description: 'Essential State — концепция минимально необходимого представления данных (state) для отрисовки интерфейса. Умение выделять и минимизировать состояние, избегая его дублирования. Essential state хранится, derived state вычисляется. Это основа Single Source of Truth и нормализации данных. Senior-разработчик должен уметь различать, что нужно хранить, а что можно вычислить.',
    keyPoints: [
      'Essential state: минимально необходимое состояние для UI, хранится в store или компоненте.',
      'Derived state: вычисляется из essential state, не хранится отдельно (useMemo, селекторы).',
      'Проблема дублирования: одно и то же состояние в разных местах приводит к рассинхронизации.',
      'Нормализация: структурирование данных для избежания дублирования (entities по ID).',
      'Single Source of Truth: каждое значение хранится в одном месте, остальное вычисляется.',
      'Когда хранить: данные с сервера, пользовательский ввод, состояние UI (модалки, формы).'
    ],
    tags: ['architecture', 'state', 'essential-state', 'normalization', 'single-source-of-truth', 'intermediate'],
    examples: [
      {
        title: 'Essential vs Derived State',
        code: `// ❌ ПЛОХО: храним всё
const state = {
  users: [
    { id: 1, name: 'Иван', age: 25 },
    { id: 2, name: 'Мария', age: 30 }
  ],
  userCount: 2, // Дублирование: можно вычислить
  averageAge: 27.5, // Дублирование: можно вычислить
  activeUsers: [...], // Дублирование: можно вычислить
  userNames: ['Иван', 'Мария'] // Дублирование: можно вычислить
};

// ✅ ХОРОШО: храним только essential
const state = {
  users: [
    { id: 1, name: 'Иван', age: 25, active: true },
    { id: 2, name: 'Мария', age: 30, active: false }
  ]
};

// Derived state вычисляется
const userCount = state.users.length;
const averageAge = state.users.reduce((sum, u) => sum + u.age, 0) / state.users.length;
const activeUsers = state.users.filter(u => u.active);
const userNames = state.users.map(u => u.name);

// Преимущества:
// - Нет дублирования
// - Нет рассинхронизации
// - Меньше места в памяти
// - Легче обновлять`
      },
      {
        title: 'Нормализация для избежания дублирования',
        code: `// ❌ ПЛОХО: вложенная структура с дублированием
const state = {
  posts: [
    {
      id: 1,
      title: 'Пост 1',
      author: { id: 1, name: 'Иван' }, // Дублирование автора
      comments: [
        { id: 1, text: 'Комментарий', author: { id: 1, name: 'Иван' } } // Дублирование
      ]
    },
    {
      id: 2,
      title: 'Пост 2',
      author: { id: 1, name: 'Иван' }, // Дублирование
      comments: [...]
    }
  ]
};

// Проблема: если изменится имя автора, нужно обновить во всех местах

// ✅ ХОРОШО: нормализованная структура
const state = {
  entities: {
    users: {
      1: { id: 1, name: 'Иван' } // Один источник истины
    },
    posts: {
      1: {
        id: 1,
        title: 'Пост 1',
        authorId: 1, // Ссылка на пользователя
        commentIds: [1, 2]
      },
      2: {
        id: 2,
        title: 'Пост 2',
        authorId: 1,
        commentIds: [3]
      }
    },
    comments: {
      1: { id: 1, text: 'Комментарий', authorId: 1, postId: 1 },
      2: { id: 2, text: 'Комментарий 2', authorId: 2, postId: 1 },
      3: { id: 3, text: 'Комментарий 3', authorId: 1, postId: 2 }
    }
  }
};

// Derived: вычисляем при необходимости
const getPostWithAuthor = (postId) => {
  const post = state.entities.posts[postId];
  return {
    ...post,
    author: state.entities.users[post.authorId],
    comments: post.commentIds.map(id => ({
      ...state.entities.comments[id],
      author: state.entities.users[state.entities.comments[id].authorId]
    }))
  };
};

// Преимущества:
// - Один источник истины для каждого entity
// - Легко обновлять
// - Нет дублирования`
      },
      {
        title: 'Что хранить, что вычислять',
        code: `// ХРАНИТЬ (Essential State):
// 1. Данные с сервера
const state = {
  users: [...], // С сервера
  posts: [...] // С сервера
};

// 2. Пользовательский ввод
const state = {
  formData: {
    name: '',
    email: ''
  }
};

// 3. Состояние UI
const state = {
  isModalOpen: false,
  selectedTab: 'home',
  isLoading: true
};

// ВЫЧИСЛЯТЬ (Derived State):
// 1. Агрегации
const userCount = users.length;
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

// 2. Фильтрации
const activeUsers = users.filter(u => u.active);
const completedTodos = todos.filter(t => t.completed);

// 3. Сортировки
const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

// 4. Трансформации
const userNames = users.map(u => u.name);
const userMap = users.reduce((map, u) => ({ ...map, [u.id]: u }), {});

// 5. Условные значения
const hasActiveUsers = users.some(u => u.active);
const isFormValid = formData.name && formData.email;`
      },
      {
        title: 'Использование селекторов для derived state',
        code: `// Redux с reselect
import { createSelector } from 'reselect';

// Essential state
const usersSelector = state => state.users;
const filterSelector = state => state.filter;

// Derived state через селектор
const filteredUsersSelector = createSelector(
  [usersSelector, filterSelector],
  (users, filter) => users.filter(u => u.name.includes(filter))
);

// Использование
const filteredUsers = useSelector(filteredUsersSelector);

// Преимущества:
// - Мемоизация: пересчитывается только при изменении зависимостей
// - Разделение: логика вычисления отделена от компонента
// - Тестируемость: легко тестировать селекторы

// React useMemo для derived state
function UserList({ users, filter }) {
  const filteredUsers = useMemo(
    () => users.filter(u => u.name.includes(filter)),
    [users, filter] // Пересчитывается только при изменении
  );
  
  return <div>{filteredUsers.map(u => <User key={u.id} user={u} />)}</div>;
}`
      },
      {
        title: 'Избегание дублирования состояния',
        code: `// ❌ ПЛОХО: дублирование
const [users, setUsers] = useState([]);
const [userCount, setUserCount] = useState(0);
const [activeUsers, setActiveUsers] = useState([]);

// Проблема: нужно синхронизировать все три состояния
useEffect(() => {
  setUserCount(users.length);
  setActiveUsers(users.filter(u => u.active));
}, [users]);

// ✅ ХОРОШО: один источник истины
const [users, setUsers] = useState([]);

// Вычисляем при необходимости
const userCount = users.length;
const activeUsers = useMemo(
  () => users.filter(u => u.active),
  [users]
);

// Преимущества:
// - Нет рассинхронизации
// - Меньше кода
// - Проще поддерживать`
      }
    ],
    relatedTopics: ['architecture-state-global', 'architecture-state-local', 'architecture-state-reducer-pattern'],
    funFact: 'Концепция Essential State пришла из функционального программирования и теории баз данных, где нормализация данных используется для избежания дублирования и аномалий. В фронтенд-разработке эта концепция стала популярной благодаря Redux и его принципу Single Source of Truth. Понимание того, что хранить, а что вычислять, — один из ключевых навыков senior-разработчика.'
  }
];
