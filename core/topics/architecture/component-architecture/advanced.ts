import { Topic } from '../../../types';

export const COMPONENT_ARCHITECTURE_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-component-clean-architecture',
    title: 'Clean Architecture',
    difficulty: 'advanced',
    description: 'Clean Architecture (чистая архитектура) — подход к организации кода, где бизнес-логика не зависит от фреймворков, UI и внешних библиотек. Принцип: зависимости направлены внутрь, к бизнес-логике. Внешние слои (UI, API, БД) зависят от внутренних (доменная логика), но не наоборот.\n\nДля фронтенда Clean Architecture означает разделение на слои: Domain (бизнес-логика), Application (use cases), Infrastructure (API, хранилище), Presentation (UI компоненты). Это делает код независимым от фреймворков, легко тестируемым и поддерживаемым. Senior-разработчик должен понимать, как применять принципы Clean Architecture к фронтенд-проектам.',
    keyPoints: [
      'Clean Architecture: бизнес-логика не зависит от фреймворков, UI и внешних библиотек.',
      'Принцип зависимостей: зависимости направлены внутрь, к бизнес-логике.',
      'Слои: Domain (бизнес-логика), Application (use cases), Infrastructure (API, хранилище), Presentation (UI).',
      'Domain слой: чистые функции, бизнес-правила, не зависит ни от чего.',
      'Application слой: use cases, оркестрация, зависит только от Domain.',
      'Infrastructure слой: API клиенты, хранилище, зависит от Application и Domain.',
      'Presentation слой: UI компоненты, зависит от Application и Domain.',
      'Преимущества: независимость от фреймворков, тестируемость, поддерживаемость, переиспользование логики.'
    ],
    tags: ['architecture', 'clean-architecture', 'ddd', 'layers', 'advanced'],
    examples: [
      {
        title: 'Слои Clean Architecture',
        code: `// Domain слой: бизнес-логика (не зависит ни от чего)
// domain/User.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export function validateUser(user: User): boolean {
  return user.name.length > 0 && user.email.includes('@');
}

// Application слой: use cases (зависит от Domain)
// application/GetUser.ts
export class GetUser {
  constructor(private userRepository: UserRepository) {}
  
  async execute(userId: string): Promise<User> {
    const user = await this.userRepository.findById(userId);
    if (!validateUser(user)) {
      throw new Error('Invalid user');
    }
    return user;
  }
}

// Infrastructure слой: API (зависит от Application и Domain)
// infrastructure/UserRepository.ts
export class UserRepository implements UserRepository {
  async findById(id: string): Promise<User> {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  }
}

// Presentation слой: UI (зависит от Application и Domain)
// presentation/UserProfile.tsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const getUser = new GetUser(new UserRepository());
    getUser.execute(userId).then(setUser);
  }, [userId]);
  
  return <div>{user?.name}</div>;
}

// Зависимости направлены внутрь: Presentation → Application → Domain`
      },
      {
        title: 'DDD-lite для фронтенда',
        code: `// Domain-Driven Design (DDD) упрощённо для фронтенда

// Domain: сущности и бизнес-логика
// domain/Order.ts
export class Order {
  constructor(
    public id: string,
    public items: OrderItem[],
    public total: number
  ) {}
  
  addItem(item: OrderItem): void {
    this.items.push(item);
    this.calculateTotal();
  }
  
  private calculateTotal(): void {
    this.total = this.items.reduce((sum, item) => sum + item.price, 0);
  }
  
  canBeCancelled(): boolean {
    return this.items.length > 0;
  }
}

// Application: use cases
// application/CreateOrder.ts
export class CreateOrder {
  constructor(private orderRepository: OrderRepository) {}
  
  async execute(items: OrderItem[]): Promise<Order> {
    const order = new Order(generateId(), items, 0);
    order.calculateTotal();
    await this.orderRepository.save(order);
    return order;
  }
}

// Бизнес-логика в Domain, оркестрация в Application`
      },
      {
        title: 'Независимость от фреймворков',
        code: `// Domain и Application не зависят от React

// domain/User.ts (чистый TypeScript)
export interface User { id: string; name: string; }

// application/GetUser.ts (чистый TypeScript)
export class GetUser {
  async execute(id: string): Promise<User> { /* ... */ }
}

// Можно использовать в React
function UserProfile({ userId }) {
  const getUser = new GetUser(new UserRepository());
  // ...
}

// Можно использовать в Vue
export default {
  async setup() {
    const getUser = new GetUser(new UserRepository());
    // ...
  }
}

// Можно использовать в Angular
@Component({ /* ... */ })
export class UserProfile {
  constructor(private getUser: GetUser) {}
}

// Бизнес-логика независима от фреймворка`
      }
    ],
    relatedTopics: ['architecture-code-organization-advanced', 'architecture-data-layer-facade'],
    funFact: 'Clean Architecture была предложена Робертом Мартином (дядя Боб) в 2012 году. Изначально она была для бэкенда, но принципы отлично применимы и к фронтенду. Многие крупные компании (Uber, Airbnb) используют Clean Architecture для организации фронтенд-кода, что позволяет им легко мигрировать между фреймворками.'
  },
  {
    id: 'architecture-component-facade',
    title: 'Паттерн Фасад',
    difficulty: 'advanced',
    description: 'Паттерн Фасад предоставляет простой интерфейс для сложной подсистемы. Вместо того чтобы компонент напрямую работал с множеством API, хранилищ и сервисов, он работает с одним фасадом, который скрывает сложность. Фасад упрощает использование подсистемы и делает код более поддерживаемым.\n\nДля фронтенда Фасад часто используется для работы с API: вместо множества вызовов разных endpoints, компонент вызывает методы фасада, который внутри делает нужные запросы. Это упрощает компоненты и централизует логику работы с API. Senior-разработчик должен понимать, когда и как применять паттерн Фасад.',
    keyPoints: [
      'Фасад: простой интерфейс для сложной подсистемы, скрывает детали реализации.',
      'Применение: упрощение работы с API, объединение множества вызовов в один интерфейс.',
      'Преимущества: упрощение компонентов, централизация логики, легче тестировать и поддерживать.',
      'Примеры: API фасад (объединяет вызовы к разным endpoints), хранилище фасад (скрывает детали localStorage/IndexedDB).',
      'Не путать с BFF: Фасад на фронтенде, BFF на бэкенде (адаптирует API под нужды клиента).'
    ],
    tags: ['architecture', 'patterns', 'facade', 'api', 'advanced'],
    examples: [
      {
        title: 'Фасад для API',
        code: `// Без фасада: компонент делает много запросов
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    Promise.all([
      fetch(\`/api/users/\${userId}\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/orders\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/reviews\`).then(r => r.json())
    ]).then(([user, orders, reviews]) => {
      setUser(user);
      setOrders(orders);
      setReviews(reviews);
    });
  }, [userId]);
  
  // Сложная логика в компоненте
}

// С фасадом: простой интерфейс
class UserService {
  async getUserProfile(userId: string) {
    const [user, orders, reviews] = await Promise.all([
      fetch(\`/api/users/\${userId}\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/orders\`).then(r => r.json()),
      fetch(\`/api/users/\${userId}/reviews\`).then(r => r.json())
    ]);
    
    return { user, orders, reviews };
  }
}

function UserProfile({ userId }) {
  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    const service = new UserService();
    service.getUserProfile(userId).then(setProfile);
  }, [userId]);
  
  // Простая логика в компоненте
}

// Фасад скрывает сложность`
      },
      {
        title: 'Фасад для хранилища',
        code: `// Фасад скрывает детали работы с хранилищем
class StorageFacade {
  async save(key: string, value: any): Promise<void> {
    // Может использовать localStorage, IndexedDB, или API
    if (this.isOnline()) {
      await this.saveToAPI(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  
  async load(key: string): Promise<any> {
    if (this.isOnline()) {
      return await this.loadFromAPI(key);
    } else {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  }
  
  private isOnline(): boolean {
    return navigator.onLine;
  }
  
  private async saveToAPI(key: string, value: any): Promise<void> {
    // ...
  }
  
  private async loadFromAPI(key: string): Promise<any> {
    // ...
  }
}

// Компонент использует простой интерфейс
function UserSettings() {
  const storage = new StorageFacade();
  
  const saveSettings = async (settings) => {
    await storage.save('settings', settings);
    // Не нужно знать, куда сохраняется: localStorage или API
  };
  
  // ...
}

// Фасад скрывает детали реализации`
      }
    ],
    relatedTopics: ['architecture-data-layer-facade', 'architecture-bff-backend-basics'],
    funFact: 'Паттерн Фасад был описан в книге "Паттерны проектирования" (Gang of Four) в 1994 году. Он один из самых простых и полезных паттернов, который применяется везде: от операционных систем (системные вызовы — это фасады) до веб-разработки (API клиенты часто являются фасадами).'
  },
  {
    id: 'architecture-component-strategy',
    title: 'Паттерн Стратегия',
    difficulty: 'advanced',
    description: 'Паттерн Стратегия определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми. Вместо жёсткого кода с if/else для разных вариантов поведения, используется стратегия, которую можно подменить. Это делает код более гибким и расширяемым.\n\nДля фронтенда Стратегия часто используется для разных способов валидации, форматирования, обработки данных. Компонент получает стратегию через props и использует её, не зная деталей реализации. Это позволяет легко добавлять новые стратегии без изменения компонента. Senior-разработчик должен понимать, когда применять паттерн Стратегия для создания гибких компонентов.',
    keyPoints: [
      'Стратегия: семейство алгоритмов, инкапсулированных и взаимозаменяемых.',
      'Применение: разные способы валидации, форматирования, обработки данных.',
      'Преимущества: гибкость, расширяемость, легко добавлять новые стратегии.',
      'Реализация: интерфейс стратегии, конкретные реализации, компонент использует стратегию через props.',
      'Примеры: валидация форм (email, phone, custom), форматирование дат (разные локали), обработка платежей (разные провайдеры).'
    ],
    tags: ['architecture', 'patterns', 'strategy', 'advanced'],
    examples: [
      {
        title: 'Стратегия валидации',
        code: `// Интерфейс стратегии
interface ValidationStrategy {
  validate(value: string): boolean;
}

// Конкретные стратегии
class EmailValidation implements ValidationStrategy {
  validate(value: string): boolean {
    return value.includes('@') && value.includes('.');
  }
}

class PhoneValidation implements ValidationStrategy {
  validate(value: string): boolean {
    return /^\+?[\d\s-()]+$/.test(value);
  }
}

// Компонент использует стратегию
function Input({ value, onChange, validator }: {
  value: string;
  onChange: (value: string) => void;
  validator: ValidationStrategy;
}) {
  const isValid = validator.validate(value);
  
  return (
    <div>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      {!isValid && <span>Неверный формат</span>}
    </div>
  );
}

// Использование
<Input
  value={email}
  onChange={setEmail}
  validator={new EmailValidation()}
/>

<Input
  value={phone}
  onChange={setPhone}
  validator={new PhoneValidation()}
/>

// Легко добавить новую стратегию без изменения компонента`
      },
      {
        title: 'Стратегия форматирования',
        code: `// Стратегия для форматирования дат
interface DateFormatter {
  format(date: Date): string;
}

class USDateFormatter implements DateFormatter {
  format(date: Date): string {
    return date.toLocaleDateString('en-US');
  }
}

class EUDateFormatter implements DateFormatter {
  format(date: Date): string {
    return date.toLocaleDateString('ru-RU');
  }
}

// Компонент использует стратегию
function DateDisplay({ date, formatter }: {
  date: Date;
  formatter: DateFormatter;
}) {
  return <span>{formatter.format(date)}</span>;
}

// Использование
<DateDisplay
  date={new Date()}
  formatter={new USDateFormatter()}
/>

<DateDisplay
  date={new Date()}
  formatter={new EUDateFormatter()}
/>

// Легко добавить новый формат без изменения компонента`
      }
    ],
    relatedTopics: ['architecture-component-facade', 'architecture-code-organization-advanced'],
    funFact: 'Паттерн Стратегия был описан в книге "Паттерны проектирования" (Gang of Four) в 1994 году. Он широко используется в функциональном программировании (функции как стратегии) и в объектно-ориентированном (классы как стратегии). В React стратегии часто реализуются через props или контекст.'
  },
  {
    id: 'architecture-component-low-coupling',
    title: 'Низкая связанность',
    difficulty: 'advanced',
    description: 'Низкая связанность (Low Coupling) — принцип проектирования, при котором компоненты слабо зависят друг от друга. Высокая связанность означает, что изменение одного компонента требует изменений в других. Низкая связанность позволяет изменять компоненты независимо, что упрощает поддержку и тестирование.\n\nДостигается через: использование интерфейсов вместо конкретных реализаций, dependency injection, события вместо прямых вызовов, разделение на слои. Senior-разработчик должен проектировать систему с низкой связанностью, чтобы она была гибкой и легко расширяемой.',
    keyPoints: [
      'Низкая связанность: компоненты слабо зависят друг от друга, изменения изолированы.',
      'Высокая связанность: изменение одного компонента требует изменений в других (плохо).',
      'Способы достижения: интерфейсы, dependency injection, события, разделение на слои.',
      'Преимущества: независимые изменения, простое тестирование, переиспользование компонентов.',
      'Примеры: компонент зависит от интерфейса, а не от конкретной реализации; использование событий вместо прямых вызовов.'
    ],
    tags: ['architecture', 'coupling', 'design', 'advanced'],
    examples: [
      {
        title: 'Высокая vs низкая связанность',
        code: `// ❌ Высокая связанность: прямой вызов
function UserCard({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Прямая зависимость от конкретного API
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(r => r.json())
      .then(setUser);
  }, [userId]);
  
  // Компонент жёстко связан с API endpoint
}

// ✅ Низкая связанность: через интерфейс
interface UserRepository {
  findById(id: string): Promise<User>;
}

function UserCard({ userId, userRepository }: {
  userId: string;
  userRepository: UserRepository;
}) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    userRepository.findById(userId).then(setUser);
  }, [userId, userRepository]);
  
  // Компонент зависит от интерфейса, а не от реализации
}

// Можно подменить реализацию для тестов
const mockRepository: UserRepository = {
  findById: async (id) => ({ id, name: 'Mock User' })
};

<UserCard userId="1" userRepository={mockRepository} />`
      },
      {
        title: 'События вместо прямых вызовов',
        code: `// ❌ Высокая связанность: прямой вызов
function Parent() {
  const childRef = useRef();
  
  const handleClick = () => {
    childRef.current.updateData(); // Прямой вызов
  };
  
  return (
    <div>
      <button onClick={handleClick}>Обновить</button>
      <Child ref={childRef} />
    </div>
  );
}

// ✅ Низкая связанность: через события
function Parent() {
  const handleUpdate = () => {
    // Обработка события
  };
  
  return (
    <div>
      <button onClick={handleUpdate}>Обновить</button>
      <Child onUpdate={handleUpdate} />
    </div>
  );
}

function Child({ onUpdate }) {
  return <button onClick={onUpdate}>Обновить данные</button>;
}

// Компоненты связаны через события, а не напрямую`
      },
      {
        title: 'Dependency Injection',
        code: `// Низкая связанность через dependency injection

interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class ApiLogger implements Logger {
  log(message: string): void {
    fetch('/api/logs', {
      method: 'POST',
      body: JSON.stringify({ message })
    });
  }
}

// Компонент зависит от интерфейса, а не от реализации
function UserService({ logger }: { logger: Logger }) {
  const createUser = async (user: User) => {
    logger.log(\`Creating user: \${user.name}\`);
    // ...
  };
  
  // Можно подменить logger для тестов или разных окружений
}

// Использование
const service = new UserService({ logger: new ConsoleLogger() });
// или
const service = new UserService({ logger: new ApiLogger() });

// Низкая связанность: легко подменить реализацию`
      }
    ],
    relatedTopics: ['architecture-component-clean-architecture', 'architecture-code-organization-advanced'],
    funFact: 'Принцип низкой связанности был сформулирован Ларри Константином в 1968 году в контексте структурного программирования. Он один из фундаментальных принципов проектирования программного обеспечения, который применяется во всех парадигмах: от процедурного до функционального программирования.'
  }
];
