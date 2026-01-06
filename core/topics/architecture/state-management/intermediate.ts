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
  }
];
