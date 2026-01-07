import { Topic } from '../../../types';

export const COMPONENT_ARCHITECTURE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-component-solid',
    title: 'SOLID для компонентов',
    difficulty: 'intermediate',
    description: 'SOLID принципы применимы не только к классам, но и к компонентам React/Vue. Single Responsibility: компонент должен делать одну вещь. Open/Closed: компонент открыт для расширения через props, закрыт для модификации. Liskov Substitution: компоненты-варианты должны быть взаимозаменяемы. Interface Segregation: не заставлять компонент принимать props, которые ему не нужны. Dependency Inversion: компоненты должны зависеть от абстракций (props), а не от конкретных реализаций.\n\nПрименение SOLID к компонентам делает их более переиспользуемыми, тестируемыми и поддерживаемыми. Middle-разработчик должен понимать, как эти принципы помогают создавать качественную архитектуру компонентов.',
    keyPoints: [
      'Single Responsibility: компонент должен делать одну вещь (отображение, логика, обработка событий — отдельно).',
      'Open/Closed: компонент открыт для расширения через props/composition, закрыт для модификации.',
      'Liskov Substitution: варианты компонента (Button, PrimaryButton) должны быть взаимозаменяемы.',
      'Interface Segregation: не заставлять компонент принимать props, которые ему не нужны.',
      'Dependency Inversion: компонент зависит от props (абстракций), а не от конкретных реализаций.',
      'Применение: разделять компоненты по ответственности, использовать composition вместо наследования.',
      'Преимущества: переиспользуемость, тестируемость, поддерживаемость, расширяемость.'
    ],
    tags: ['architecture', 'solid', 'components', 'principles', 'intermediate'],
    examples: [
      {
        title: 'Single Responsibility: разделение ответственности',
        code: `// ❌ Плохо: компонент делает слишком много
function UserCard({ user }) {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    fetch(\`/api/users/\${user.id}/comments\`)
      .then(res => res.json())
      .then(setComments);
  }, [user.id]);
  
  return (
    <div>
      <h3>{user.name}</h3>
      <button onClick={() => setLiked(!liked)}>
        {liked ? '❤️' : '🤍'}
      </button>
      <div>
        {comments.map(c => <div key={c.id}>{c.text}</div>)}
      </div>
    </div>
  );
}

// ✅ Хорошо: разделение на компоненты
function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <LikeButton userId={user.id} />
      <UserComments userId={user.id} />
    </div>
  );
}

// Каждый компонент делает одну вещь`
      },
      {
        title: 'Open/Closed: расширение через props',
        code: `// Компонент открыт для расширения, закрыт для модификации
function Button({ children, variant = 'primary', size = 'medium', ...props }) {
  const className = \`btn btn-\${variant} btn-\${size}\`;
  
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

// Расширяем через props, не модифицируя компонент
<Button variant="primary" size="large">Кнопка 1</Button>
<Button variant="secondary" size="small">Кнопка 2</Button>
<Button onClick={handleClick} disabled>Кнопка 3</Button>

// Компонент закрыт для модификации, открыт для расширения`
      },
      {
        title: 'Dependency Inversion: зависимость от абстракций',
        code: `// ❌ Плохо: зависимость от конкретной реализации
function UserList() {
  const users = fetch('/api/users').then(r => r.json());
  // Зависит от конкретного API endpoint
}

// ✅ Хорошо: зависимость от абстракции (props)
function UserList({ users, onUserClick }) {
  // Зависит от props, не от конкретной реализации
  return (
    <div>
      {users.map(user => (
        <div key={user.id} onClick={() => onUserClick(user)}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

// Использование
function App() {
  const users = useUsers(); // Может быть из API, из состояния, из мока
  return <UserList users={users} onUserClick={handleClick} />;
}

// Компонент зависит от абстракций (props), не от конкретных реализаций`
      }
    ],
    relatedTopics: ['architecture-component-container-presentational', 'architecture-code-organization-feature'],
    funFact: 'SOLID принципы были сформулированы Робертом Мартином в 2000 году для объектно-ориентированного программирования, но они отлично применимы и к функциональным компонентам React. Это показывает, что хорошие архитектурные принципы универсальны и не зависят от парадигмы программирования.',
    isFrontendEssential: true
  },
  {
    id: 'architecture-component-container-presentational',
    title: 'Container/Presentational',
    difficulty: 'intermediate',
    description: 'Паттерн Container/Presentational разделяет компоненты на два типа: Container (умные) — содержат логику, загружают данные, управляют состоянием; Presentational (тупые) — только отображают данные, получают их через props. Это классический паттерн React, который упрощает тестирование и переиспользование компонентов.\n\nContainer компоненты отвечают за "что делать", Presentational — за "как выглядеть". Такое разделение позволяет легко тестировать Presentational компоненты (просто передать props) и переиспользовать их в разных контекстах. Container компоненты можно заменять, не трогая Presentational.',
    keyPoints: [
      'Container (Smart) компоненты: содержат логику, загружают данные, управляют состоянием.',
      'Presentational (Dumb) компоненты: только отображают данные, получают через props, вызывают колбэки.',
      'Разделение: Container — "что делать", Presentational — "как выглядеть".',
      'Преимущества: простое тестирование Presentational, переиспользование, разделение ответственности.',
      'Современный подход: Container компоненты заменяются хуками (useUserData, useForm).',
      'Применение: логика в хуках, UI в Presentational компонентах, Container компоненты используют хуки.'
    ],
    tags: ['architecture', 'patterns', 'container', 'presentational', 'intermediate'],
    examples: [
      {
        title: 'Container и Presentational компоненты',
        code: `// Presentational компонент: только отображение
function UserCard({ user, onLike, liked }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={onLike}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

// Container компонент: логика
function UserCardContainer({ userId }) {
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);
  
  const handleLike = () => {
    setLiked(!liked);
    // Отправка на сервер
  };
  
  if (!user) return <div>Загрузка...</div>;
  
  return (
    <UserCard
      user={user}
      onLike={handleLike}
      liked={liked}
    />
  );
}

// Разделение: Container — логика, Presentational — UI`
      },
      {
        title: 'Современный подход: хуки вместо Container',
        code: `// Хук: логика
function useUserCard(userId) {
  const [user, setUser] = useState(null);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);
  
  const handleLike = () => {
    setLiked(!liked);
  };
  
  return { user, liked, handleLike };
}

// Presentational компонент: только UI
function UserCard({ user, onLike, liked }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={onLike}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

// Использование
function UserCardContainer({ userId }) {
  const { user, liked, handleLike } = useUserCard(userId);
  
  if (!user) return <div>Загрузка...</div>;
  
  return (
    <UserCard
      user={user}
      onLike={handleLike}
      liked={liked}
    />
  );
}

// Хуки заменили Container компоненты, но паттерн остался`
      },
      {
        title: 'Переиспользование Presentational компонентов',
        code: `// Presentational компонент переиспользуется
function UserCard({ user, onLike, liked }) {
  // Только UI, без логики
}

// Использование 1: с API
function UserCardFromAPI({ userId }) {
  const { user, liked, handleLike } = useUserFromAPI(userId);
  return <UserCard user={user} onLike={handleLike} liked={liked} />;
}

// Использование 2: с моковыми данными
function UserCardMock() {
  const user = { id: 1, name: 'Тест', email: 'test@test.com' };
  return <UserCard user={user} onLike={() => {}} liked={false} />;
}

// Использование 3: с локальным состоянием
function UserCardLocal() {
  const [user] = useState({ name: 'Локальный', email: 'local@test.com' });
  const [liked, setLiked] = useState(false);
  return <UserCard user={user} onLike={() => setLiked(!liked)} liked={liked} />;
}

// Один Presentational компонент, разные источники данных`
      }
    ],
    relatedTopics: ['architecture-component-solid', 'architecture-state-management-basics'],
    funFact: 'Паттерн Container/Presentational был популяризирован Дэном Абрамовым (создателем Redux) в 2015 году. Позже он сам признал, что с появлением хуков этот паттерн стал менее актуальным, но принцип разделения логики и UI остаётся важным.'
  },
  {
    id: 'architecture-component-hoc',
    title: 'HOC и Composables',
    difficulty: 'intermediate',
    description: 'HOC (Higher-Order Component) — функция, которая принимает компонент и возвращает новый компонент с дополнительной функциональностью. В React HOC использовались для переиспользования логики до появления хуков. В Vue аналогичный паттерн — Composables (функции, которые инкапсулируют логику и состояние).\n\nHOC и Composables позволяют переиспользовать логику между компонентами без дублирования кода. С появлением хуков в React HOC стали менее популярными, но понимание этого паттерна помогает понять эволюцию React и работу некоторых библиотек. В Vue Composables — основной способ переиспользования логики.',
    keyPoints: [
      'HOC (Higher-Order Component): функция компонент → компонент, добавляет функциональность.',
      'Применение HOC: переиспользование логики (аутентификация, загрузка данных, логирование).',
      'Composables (Vue): функции, которые инкапсулируют логику и состояние, аналоги хуков React.',
      'Преимущества: переиспользование логики, разделение ответственности, композиция функциональности.',
      'Недостатки HOC: сложность отладки, проблемы с TypeScript, замена на хуки.',
      'Современный подход: хуки в React, Composables в Vue — более простой и понятный способ.'
    ],
    tags: ['architecture', 'patterns', 'hoc', 'composables', 'vue', 'react', 'intermediate'],
    examples: [
      {
        title: 'HOC: переиспользование логики',
        code: `// HOC для аутентификации
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      fetch('/api/me')
        .then(res => res.json())
        .then(setUser)
        .finally(() => setLoading(false));
    }, []);
    
    if (loading) return <div>Загрузка...</div>;
    if (!user) return <div>Войдите в систему</div>;
    
    return <Component {...props} user={user} />;
  };
}

// Использование
const ProtectedProfile = withAuth(UserProfile);
const ProtectedSettings = withAuth(Settings);

// Логика аутентификации переиспользуется`
      },
      {
        title: 'HOC vs Хуки',
        code: `// HOC (старый подход)
function withUserData(Component) {
  return function ComponentWithUserData({ userId, ...props }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
      fetch(\`/api/users/\${userId}\`).then(r => r.json()).then(setUser);
    }, [userId]);
    return <Component {...props} user={user} />;
  };
}

// Хуки (современный подход)
function useUserData(userId) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`).then(r => r.json()).then(setUser);
  }, [userId]);
  return user;
}

// Использование хуков проще и понятнее
function UserProfile({ userId }) {
  const user = useUserData(userId);
  // ...
}

// Хуки заменили HOC, но принцип переиспользования остался`
      },
      {
        title: 'Composables в Vue',
        code: `// Composable: переиспользование логики
export function useUserData(userId) {
  const user = ref(null);
  const loading = ref(true);
  
  onMounted(async () => {
    const response = await fetch(\`/api/users/\${userId}\`);
    user.value = await response.json();
    loading.value = false;
  });
  
  return { user, loading };
}

// Использование
<script setup>
import { useUserData } from './composables/useUserData';

const { user, loading } = useUserData(props.userId);
</script>

<template>
  <div v-if="loading">Загрузка...</div>
  <div v-else>{{ user.name }}</div>
</template>

// Composables — основной способ переиспользования логики в Vue`
      }
    ],
    relatedTopics: ['architecture-component-container-presentational', 'architecture-state-management-hooks'],
    funFact: 'HOC были основным способом переиспользования логики в React до появления хуков в 2018 году. Многие популярные библиотеки (react-redux, react-router) использовали HOC. С появлением хуков большинство разработчиков перешли на более простой подход, но HOC всё ещё используются в некоторых библиотеках.',
    isFrontendEssential: true
  }
];
