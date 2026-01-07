import { Topic } from '../../../types';

export const COMPONENT_ARCHITECTURE_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-component-kiss-dry',
    title: 'KISS и DRY',
    difficulty: 'beginner',
    description: 'KISS (Keep It Simple, Stupid) — принцип простоты: код должен быть максимально простым и понятным, без излишних усложнений. DRY (Don\'t Repeat Yourself) — принцип избегания дублирования: каждая логика должна быть в одном месте. Эти принципы помогают писать поддерживаемый код, который легко понимать и изменять.\n\nДля Junior важно понимать: простота важнее "умности". Если код сложный, его сложно поддерживать. Если код дублируется, изменения нужно вносить в нескольких местах, что ведёт к ошибкам. Следование KISS и DRY делает код более надёжным и понятным для всей команды.',
    keyPoints: [
      'KISS (Keep It Simple, Stupid): код должен быть простым и понятным, без излишних усложнений.',
      'DRY (Don\'t Repeat Yourself): избегать дублирования кода, каждая логика в одном месте.',
      'Простота важнее "умности": сложный код сложно поддерживать и понимать.',
      'Дублирование ведёт к ошибкам: изменения нужно вносить в нескольких местах.',
      'Применение: выносить повторяющуюся логику в функции/компоненты, использовать переиспользуемые компоненты.',
      'Баланс: не переусложнять ради DRY (иногда дублирование лучше абстракции).',
      'Для Junior: начинать с простого решения, усложнять только когда это необходимо.'
    ],
    tags: ['architecture', 'principles', 'kiss', 'dry', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'KISS: простое решение лучше сложного',
        code: `// ❌ Плохо: излишне сложно
function getUserData(userId) {
  return fetch(\`/api/users/\${userId}\`)
    .then(res => res.json())
    .then(data => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ...data,
            processed: true,
            timestamp: Date.now()
          });
        }, 100);
      });
    });
}

// ✅ Хорошо: просто и понятно
async function getUserData(userId) {
  const response = await fetch(\`/api/users/\${userId}\`);
  return response.json();
}

// Простота важнее "умности`
      },
      {
        title: 'DRY: избегать дублирования',
        code: `// ❌ Плохо: дублирование кода
function UserCard1({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => console.log(user.id)}>Подробнее</button>
    </div>
  );
}

function UserCard2({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => console.log(user.id)}>Подробнее</button>
    </div>
  );
}

// ✅ Хорошо: переиспользуемый компонент
function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => console.log(user.id)}>Подробнее</button>
    </div>
  );
}

// Используем один компонент везде`
      },
      {
        title: 'Баланс: когда дублирование лучше',
        code: `// ❌ Плохо: излишняя абстракция
function createButton(variant, size, color, onClick, children) {
  // Сложная логика для всех вариантов
  // Трудно понять, что происходит
}

// ✅ Хорошо: простое дублирование лучше сложной абстракции
function PrimaryButton({ onClick, children }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}

function SecondaryButton({ onClick, children }) {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {children}
    </button>
  );
}

// Иногда дублирование лучше абстракции`
      }
    ],
    relatedTopics: ['architecture-component-separation', 'architecture-code-organization-basics'],
    funFact: 'Знаешь, первый хук useState в React был реализован всего в 50 строках кода? Весь React до хуков был в 2 раза больше. Это отличный пример KISS: простое решение (хуки) заменило сложные паттерны (HOC, render props) и сделало код проще.',
    isFrontendEssential: true
  },
  {
    id: 'architecture-component-separation',
    title: 'Разделение UI и логики',
    difficulty: 'beginner',
    description: 'Разделение UI (интерфейса) и логики (бизнес-правил) делает код более поддерживаемым и тестируемым. UI-компоненты отвечают только за отображение, логика выносится в отдельные функции или хуки. Это позволяет переиспользовать логику в разных компонентах и тестировать её отдельно от UI.\n\nДля Junior важно понимать: компонент должен быть "тупым" (dumb) — получать данные через props и отображать их. Вся логика (загрузка данных, обработка событий, вычисления) должна быть в отдельных функциях или хуках. Это упрощает понимание кода и его тестирование.',
    keyPoints: [
      'Разделение ответственности: UI-компоненты отвечают за отображение, логика — в отдельных функциях/хуках.',
      'Dumb компоненты: получают данные через props, отображают их, вызывают колбэки для действий.',
      'Smart компоненты/хуки: содержат логику (загрузка данных, состояние, вычисления).',
      'Преимущества: переиспользование логики, простое тестирование, понятная структура кода.',
      'Паттерн: UI-компонент + хук с логикой (например, useUserData, useForm).',
      'Для Junior: начинать с разделения — выносить логику в функции, компоненты делать "тупыми".'
    ],
    tags: ['architecture', 'components', 'separation', 'ui', 'logic', 'basics'],
    examples: [
      {
        title: 'Плохо: логика в компоненте',
        code: `// ❌ Плохо: логика смешана с UI
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);
  
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Логика и UI смешаны, сложно тестировать`
      },
      {
        title: 'Хорошо: разделение UI и логики',
        code: `// ✅ Хорошо: логика в хуке
function useUserData(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);
  
  return { user, loading, error };
}

// UI-компонент: только отображение
function UserProfile({ userId }) {
  const { user, loading, error } = useUserData(userId);
  
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Логика отделена от UI, легко тестировать`
      },
      {
        title: 'Переиспользование логики',
        code: `// Хук можно использовать в разных компонентах
function useUserData(userId) {
  // ... логика загрузки
  return { user, loading, error };
}

// Компонент 1: профиль пользователя
function UserProfile({ userId }) {
  const { user, loading, error } = useUserData(userId);
  // ...
}

// Компонент 2: карточка пользователя
function UserCard({ userId }) {
  const { user, loading, error } = useUserData(userId);
  // ...
}

// Логика переиспользуется, UI разный`
      }
    ],
    relatedTopics: ['architecture-component-kiss-dry', 'architecture-state-management-basics'],
    funFact: 'Самый популярный баг у Junior в управлении состоянием — бесконечный ре-рендер. В Facebook для его отлова добавили спец. проверку в DevTools. Разделение UI и логики помогает избежать таких проблем: логика в хуках проще отлаживать и тестировать.'
  },
  {
    id: 'architecture-component-approach',
    title: 'Компонентный подход',
    difficulty: 'beginner',
    description: 'Компонентный подход — это разделение интерфейса на независимые, переиспользуемые части (компоненты). Каждый компонент инкапсулирует свою логику и стили, может использоваться в разных местах приложения. Компоненты можно комбинировать, создавая более сложные интерфейсы из простых частей.\n\nКомпонентный подход упрощает разработку: вместо написания всего интерфейса с нуля, можно использовать готовые компоненты. Это ускоряет разработку, делает код более поддерживаемым и позволяет создавать дизайн-системы. Понимание компонентного подхода — основа современной фронтенд-разработки.',
    keyPoints: [
      'Компонент: независимая, переиспользуемая часть интерфейса, инкапсулирует логику и стили.',
      'Композиция: сложные интерфейсы создаются из простых компонентов (компоненты внутри компонентов).',
      'Переиспользование: один компонент используется в разных местах приложения.',
      'Инкапсуляция: компонент скрывает внутреннюю реализацию, предоставляет простой интерфейс (props).',
      'Иерархия: компоненты образуют дерево (родительские и дочерние компоненты).',
      'Преимущества: ускорение разработки, поддерживаемость, создание дизайн-систем.',
      'Примеры: Button, Input, Card, Modal — простые компоненты, которые комбинируются в сложные интерфейсы.'
    ],
    tags: ['architecture', 'components', 'composition', 'basics', 'fundamentals'],
    examples: [
      {
        title: 'Простой компонент',
        code: `// Компонент Button
function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

// Использование
<Button onClick={() => alert('Клик!')}>
  Нажми меня
</Button>

// Компонент инкапсулирует стили и поведение`
      },
      {
        title: 'Композиция компонентов',
        code: `// Простые компоненты
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

// Сложный компонент из простых
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <form>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        type="password"
      />
      <Button onClick={() => console.log('Вход')}>
        Войти
      </Button>
    </form>
  );
}

// Сложный интерфейс из простых компонентов`
      },
      {
        title: 'Переиспользование компонентов',
        code: `// Компонент Card
function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// Использование в разных местах
function UserCard({ user }) {
  return (
    <Card title={user.name}>
      <p>{user.email}</p>
    </Card>
  );
}

function ProductCard({ product }) {
  return (
    <Card title={product.name}>
      <p>Цена: {product.price}</p>
    </Card>
  );
}

// Один компонент, разные использования`
      }
    ],
    relatedTopics: ['architecture-component-separation', 'architecture-code-organization-basics'],
    funFact: 'React изначально назывался "FaxJS" и был создан для Instagram в 2011 году. Джордан Волк (создатель React) говорил, что не ожидал, что его библиотека станет настолько популярной. Компонентный подход React изменил всю индустрию фронтенд-разработки.',
    isFrontendEssential: true
  }
];
