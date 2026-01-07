import { Topic } from '../../../types';

export const STATE_MANAGEMENT_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-state-local',
    title: 'Локальный стейт',
    difficulty: 'beginner',
    description: 'Локальный стейт — состояние, которое принадлежит одному компоненту и используется только внутри него. В React это useState, в Vue — ref/reactive. Локальный стейт подходит для простых случаев: форма ввода, переключатель, модальное окно. Он прост в использовании и не требует дополнительных библиотек.\n\nДля Junior важно понимать: начинать с локального стейта, поднимать его выше только когда нужно. Локальный стейт — самый простой способ управления состоянием, и его часто достаточно для большинства компонентов. Не нужно усложнять, используя глобальные сторы там, где можно обойтись локальным стейтом.',
    keyPoints: [
      'Локальный стейт: состояние компонента, используется только внутри него (useState, ref).',
      'Применение: простые случаи — формы, переключатели, модальные окна, UI состояние.',
      'Преимущества: простота, не требует дополнительных библиотек, изоляция состояния.',
      'Недостатки: нельзя использовать в других компонентах, теряется при размонтировании.',
      'Правило: начинать с локального стейта, поднимать выше только когда нужно.',
      'Примеры: input value, checkbox checked, modal open/closed, dropdown expanded.'
    ],
    tags: ['architecture', 'state', 'local', 'react', 'vue', 'basics'],
    examples: [
      {
        title: 'Локальный стейт в React',
        code: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Счёт: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
    </div>
  );
}

// Стейт принадлежит только компоненту Counter`
      },
      {
        title: 'Локальный стейт для формы',
        code: `function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        type="password"
      />
      <button type="submit">Войти</button>
    </form>
  );
}

// Стейт формы локальный, не нужен глобальный стор`
      }
    ],
    relatedTopics: ['architecture-state-lifting', 'architecture-state-context'],
    funFact: 'Знаешь, первый хук useState в React был реализован всего в 50 строках кода? Весь React до хуков был в 2 раза больше. Это отличный пример того, как простое решение (хуки) заменило сложные паттерны и сделало управление состоянием доступным для всех.',
    isFrontendEssential: true
  },
  {
    id: 'architecture-state-lifting',
    title: 'Подъём состояния',
    difficulty: 'beginner',
    description: 'Подъём состояния (Lifting State Up) — перемещение стейта из дочернего компонента в родительский, когда несколько компонентов должны использовать одно и то же состояние. Вместо того чтобы дублировать стейт в нескольких компонентах, стейт поднимается в ближайшего общего родителя и передаётся через props.\n\nПринцип: стейт должен находиться в ближайшем общем родителе компонентов, которые его используют. Это позволяет синхронизировать состояние между компонентами и избежать дублирования. Для Junior важно понимать, когда нужно поднимать стейт: когда несколько компонентов должны отображать или изменять одно и то же значение.',
    keyPoints: [
      'Подъём состояния: перемещение стейта в родительский компонент для использования в нескольких дочерних.',
      'Принцип: стейт в ближайшем общем родителе компонентов, которые его используют.',
      'Применение: когда несколько компонентов должны использовать одно и то же состояние.',
      'Реализация: стейт в родителе, передача через props, изменение через колбэки.',
      'Преимущества: синхронизация состояния, избежание дублирования, единый источник истины.',
      'Недостатки: стейт может подняться слишком высоко, усложнение компонентов.'
    ],
    tags: ['architecture', 'state', 'lifting', 'react', 'basics'],
    examples: [
      {
        title: 'Проблема: дублирование стейта',
        code: `// ❌ Плохо: дублирование стейта
function TemperatureInput() {
  const [temperature, setTemperature] = useState('');
  return <input value={temperature} onChange={(e) => setTemperature(e.target.value)} />;
}

function Display() {
  const [temperature, setTemperature] = useState('');
  return <div>Температура: {temperature}°C</div>;
}

// Два компонента, два независимых стейта — не синхронизированы`
      },
      {
        title: 'Решение: подъём состояния',
        code: `// ✅ Хорошо: стейт поднят в родителя
function App() {
  const [temperature, setTemperature] = useState('');
  
  return (
    <div>
      <TemperatureInput
        value={temperature}
        onChange={setTemperature}
      />
      <Display temperature={temperature} />
    </div>
  );
}

function TemperatureInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function Display({ temperature }) {
  return <div>Температура: {temperature}°C</div>;
}

// Один стейт, синхронизирован между компонентами`
      }
    ],
    relatedTopics: ['architecture-state-local', 'architecture-state-context'],
    funFact: 'Подъём состояния — один из первых паттернов, который изучают в React. Он был описан в официальной документации React с самого начала и остаётся актуальным даже с появлением Context API и глобальных сторов. Иногда простое решение (подъём состояния) лучше сложного (глобальный стор).'
  },
  {
    id: 'architecture-state-context',
    title: 'Context API',
    difficulty: 'beginner',
    description: 'Context API — встроенный механизм React для передачи данных через дерево компонентов без prop drilling (прокидывания props через множество уровней). Context позволяет создать "глобальное" состояние, доступное всем компонентам внутри провайдера. Это упрощает передачу данных, но не заменяет глобальные сторы для сложного состояния.\n\nContext подходит для: темы, языка, аутентификации, конфигурации. Для сложного состояния (списки, фильтры, кэширование) лучше использовать специализированные решения (Redux, Zustand). Для Junior важно понимать: Context — это не глобальный стор, а способ избежать prop drilling.',
    keyPoints: [
      'Context API: механизм передачи данных через дерево компонентов без prop drilling.',
      'Применение: темы, язык, аутентификация, конфигурация — данные, которые нужны многим компонентам.',
      'Реализация: createContext, Provider, useContext — встроенные инструменты React.',
      'Преимущества: избежание prop drilling, простота использования, встроен в React.',
      'Недостатки: не оптимизирован для частых обновлений, все потребители перерендериваются.',
      'Ограничения: не заменяет глобальные сторы для сложного состояния, лучше для статичных данных.'
    ],
    tags: ['architecture', 'state', 'context', 'react', 'basics'],
    examples: [
      {
        title: 'Создание Context',
        code: `// Создание контекста
const ThemeContext = createContext('light');

// Провайдер
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

// Использование
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Переключить тему
      </button>
    </header>
  );
}

// Не нужно прокидывать theme через props`
      },
      {
        title: 'Context для аутентификации',
        code: `const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = async (email, password) => {
    const user = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }).then(r => r.json());
    setUser(user);
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Использование в любом компоненте
function Profile() {
  const { user, logout } = useContext(AuthContext);
  
  if (!user) return <div>Войдите в систему</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={logout}>Выйти</button>
    </div>
  );
}`
      }
    ],
    relatedTopics: ['architecture-state-lifting', 'architecture-state-global'],
    funFact: 'Context API был добавлен в React 16.3 в 2018 году как решение проблемы prop drilling. До этого разработчики использовали библиотеки вроде react-redux или создавали свои решения. Context API сделал передачу данных через дерево компонентов встроенной возможностью React.',
    isFrontendEssential: true
  }
];
