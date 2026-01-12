import { Topic } from '../../../types';

export const TYPESCRIPT_PATTERNS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'ts-factory-method',
    title: 'Factory Method (Фабричный метод)',
    description: 'Factory Method делегирует создание объектов подклассам, не нарушая общую логику. Решает проблему множества if-else при создании объектов, дублирования кода и сложности добавления новых типов. Изолирует создание объектов, упрощает расширение и повышает тестируемость.',
    difficulty: 'intermediate',
    tags: ['typescript', 'patterns', 'creational', 'factory', 'oop', 'design'],
    keyPoints: [
      'Делегирует создание объектов подклассам, не нарушая общую логику.',
      'Изолирует создание объектов, упрощает расширение и повышает тестируемость.',
      'Используется когда есть вариативность, нужна изоляция, упрощение расширения.',
      'Не нужен если одна реализация, нет планов на расширение, мало параметров.',
      'Отделяет что делается от того, кто это делает.'
    ],
    examples: [
      {
        title: 'Notifier с Email/SMS/Push отправителями',
        code: `// Интерфейс для отправителей
interface Sender {
  send(message: string): Promise<void>;
}

// Конкретные реализации
class EmailSender implements Sender {
  async send(message: string): Promise<void> {
    // Реализация через SMTP протокол
    console.log(\`Email: \${message}\`);
  }
}

class SMSSender implements Sender {
  async send(message: string): Promise<void> {
    // Реализация через SMS API
    console.log(\`SMS: \${message}\`);
  }
}

class PushSender implements Sender {
  async send(message: string): Promise<void> {
    // Реализация через Push API
    console.log(\`Push: \${message}\`);
  }
}

// Абстрактный класс с фабричным методом
abstract class Notifier {
  // Фабричный метод - выбирает конкретную реализацию
  protected abstract createSender(): Sender;
  
  // Общая реализация (логирование, метрики)
  async notify(message: string): Promise<void> {
    const sender = this.createSender();
    // Общая логика: логирование, метрики
    console.log('Logging notification...');
    await sender.send(message);
    console.log('Metrics sent...');
  }
}

// Конкретные реализации
class EmailNotifier extends Notifier {
  protected createSender(): Sender {
    return new EmailSender();
  }
}

class SMSNotifier extends Notifier {
  protected createSender(): Sender {
    return new SMSSender();
  }
}

class PushNotifier extends Notifier {
  protected createSender(): Sender {
    return new PushSender();
  }
}

// Использование
const emailNotifier = new EmailNotifier();
await emailNotifier.notify('Hello!');`
      },
      {
        title: 'Функциональный стиль',
        code: `// Объект с отправителями
const senders = {
  email: async (message: string) => {
    console.log(\`Email: \${message}\`);
  },
  sms: async (message: string) => {
    console.log(\`SMS: \${message}\`);
  },
  push: async (message: string) => {
    console.log(\`Push: \${message}\`);
  }
} as const;

type SenderType = keyof typeof senders;

// Фабричная функция
function makeNotifier(type: SenderType) {
  return async (message: string) => {
    const sender = senders[type];
    // Общая логика
    console.log('Logging notification...');
    await sender(message);
    console.log('Metrics sent...');
  };
}

// Использование
const notifyByEmail = makeNotifier('email');
await notifyByEmail('Hello!');`
      }
    ],
    relatedTopics: ['design-patterns', 'classes', 'interfaces']
  },
  {
    id: 'ts-abstract-factory',
    title: 'Abstract Factory (Абстрактная фабрика)',
    description: 'Abstract Factory создает набор согласованных объектов, которые должны работать вместе. В отличие от Factory Method, который создает один объект, Abstract Factory создает семейство связанных объектов. Используется когда нужно создавать согласованные наборы объектов для разных платформ или провайдеров.',
    difficulty: 'intermediate',
    tags: ['typescript', 'patterns', 'creational', 'abstract-factory', 'oop', 'design'],
    keyPoints: [
      'Создает набор согласованных объектов, которые работают вместе.',
      'Factory Method создает один объект, Abstract Factory - набор связанных.',
      'Используется для семейства согласованных объектов, вариативности платформ/провайдеров.',
      'Не нужен если одна реализация, объекты не связаны, нет масштабирования.',
      'Позволяет гибко переключать реализацию всего семейства.'
    ],
    examples: [
      {
        title: 'Cloud Factory (AWS/Azure/GCP)',
        code: `// Интерфейсы для клиентов облачных провайдеров
interface StorageClient {
  upload(key: string, data: Buffer): Promise<void>;
  download(key: string): Promise<Buffer>;
}

interface MetricsClient {
  record(metric: string, value: number): Promise<void>;
}

interface LogClient {
  log(message: string): Promise<void>;
}

// Интерфейс абстрактной фабрики
interface CloudFactory {
  createStorage(): StorageClient;
  createMetrics(): MetricsClient;
  createLog(): LogClient;
}

// AWS реализация
class AWSStorage implements StorageClient {
  async upload(key: string, data: Buffer): Promise<void> {
    // Реализация через S3
    console.log(\`AWS S3 upload: \${key}\`);
  }
  async download(key: string): Promise<Buffer> {
    console.log(\`AWS S3 download: \${key}\`);
    return Buffer.from('');
  }
}

class AWSMetrics implements MetricsClient {
  async record(metric: string, value: number): Promise<void> {
    // CloudWatch
    console.log(\`AWS CloudWatch: \${metric} = \${value}\`);
  }
}

class AWSLog implements LogClient {
  async log(message: string): Promise<void> {
    // CloudWatch Logs
    console.log(\`AWS CloudWatch Logs: \${message}\`);
  }
}

class AWSFactory implements CloudFactory {
  createStorage(): StorageClient {
    return new AWSStorage();
  }
  createMetrics(): MetricsClient {
    return new AWSMetrics();
  }
  createLog(): LogClient {
    return new AWSLog();
  }
}

// GCP реализация
class GCPStorage implements StorageClient {
  async upload(key: string, data: Buffer): Promise<void> {
    // Реализация через GCS
    console.log(\`GCP GCS upload: \${key}\`);
  }
  async download(key: string): Promise<Buffer> {
    console.log(\`GCP GCS download: \${key}\`);
    return Buffer.from('');
  }
}

class GCPMetrics implements MetricsClient {
  async record(metric: string, value: number): Promise<void> {
    // Cloud Monitoring
    console.log(\`GCP Monitoring: \${metric} = \${value}\`);
  }
}

class GCPLog implements LogClient {
  async log(message: string): Promise<void> {
    // Cloud Logging
    console.log(\`GCP Logging: \${message}\`);
  }
}

class GCPFactory implements CloudFactory {
  createStorage(): StorageClient {
    return new GCPStorage();
  }
  createMetrics(): MetricsClient {
    return new GCPMetrics();
  }
  createLog(): LogClient {
    return new GCPLog();
  }
}

// Bootstrap функция для переключения провайдера
function bootstrap(factory: CloudFactory) {
  const storage = factory.createStorage();
  const metrics = factory.createMetrics();
  const log = factory.createLog();
  
  return { storage, metrics, log };
}

// Использование - переключение между провайдерами
const aws = bootstrap(new AWSFactory());
await aws.storage.upload('file.txt', Buffer.from('data'));

const gcp = bootstrap(new GCPFactory());
await gcp.storage.upload('file.txt', Buffer.from('data'));`
      }
    ],
    relatedTopics: ['ts-factory-method', 'interfaces', 'design-patterns']
  },
  {
    id: 'ts-builder',
    title: 'Builder',
    description: 'Builder упрощает создание сложных объектов с множеством параметров. Собирает объект пошагово, разделяет процесс создания и представления, позволяет проверить состояние на каждом шаге. Делает код более читаемым и проще его дебажить и тестировать.',
    difficulty: 'intermediate',
    tags: ['typescript', 'patterns', 'creational', 'builder', 'oop', 'design'],
    keyPoints: [
      'Собирает сложный объект пошагово, разделяет создание и представление.',
      'Позволяет проверить состояние на каждом шаге, делает код читаемым.',
      'Используется когда объект имеет много полей, нужно собирать постепенно.',
      'Не нужен если объект простой, мало параметров, нет промежуточной логики.',
      'Чейнинг (method chaining) улучшает читаемость, но не обязателен.'
    ],
    examples: [
      {
        title: 'Pizza Builder с чейнингом',
        code: `interface Pizza {
  dough: 'thin' | 'thick';
  sauce: string;
  cheese: string[];
  toppings: string[];
  spicy: boolean;
}

class PizzaBuilder {
  private pizza: Partial<Pizza> = {};

  setDough(dough: 'thin' | 'thick'): this {
    this.pizza.dough = dough;
    return this; // Возвращаем this для чейнинга
  }

  setSauce(sauce: string): this {
    this.pizza.sauce = sauce;
    return this;
  }

  addCheese(cheese: string): this {
    if (!this.pizza.cheese) {
      this.pizza.cheese = [];
    }
    this.pizza.cheese.push(cheese);
    return this;
  }

  addTopping(topping: string): this {
    if (!this.pizza.toppings) {
      this.pizza.toppings = [];
    }
    this.pizza.toppings.push(topping);
    return this;
  }

  setSpicy(spicy: boolean): this {
    this.pizza.spicy = spicy;
    return this;
  }

  // Валидация перед созданием
  build(): Pizza {
    if (!this.pizza.dough) {
      throw new Error('Dough is required');
    }
    if (!this.pizza.sauce) {
      throw new Error('Sauce is required');
    }
    
    return {
      dough: this.pizza.dough,
      sauce: this.pizza.sauce,
      cheese: this.pizza.cheese || [],
      toppings: this.pizza.toppings || [],
      spicy: this.pizza.spicy || false
    };
  }
}

// Использование с чейнингом
const pizza = new PizzaBuilder()
  .setDough('thin')
  .setSauce('tomato')
  .addCheese('mozzarella')
  .addCheese('parmesan')
  .addTopping('pepperoni')
  .addTopping('mushrooms')
  .setSpicy(true)
  .build();`
      },
      {
        title: 'Trading Order Builder (финтех)',
        code: `interface TradingOrder {
  type: 'buy' | 'sell';
  symbol: string;
  quantity: number;
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
  trailingStop?: boolean;
  expiryDate?: Date;
}

class OrderBuilder {
  private order: Partial<TradingOrder> = {};

  setType(type: 'buy' | 'sell'): this {
    this.order.type = type;
    return this;
  }

  setSymbol(symbol: string): this {
    this.order.symbol = symbol;
    return this;
  }

  setQuantity(quantity: number): this {
    if (quantity <= 0) {
      throw new Error('Quantity must be positive');
    }
    this.order.quantity = quantity;
    return this;
  }

  setPrice(price: number): this {
    if (price <= 0) {
      throw new Error('Price must be positive');
    }
    this.order.price = price;
    return this;
  }

  setStopLoss(stopLoss: number): this {
    this.order.stopLoss = stopLoss;
    return this;
  }

  setTakeProfit(takeProfit: number): this {
    if (this.order.stopLoss && takeProfit <= this.order.stopLoss) {
      throw new Error('Take profit must be greater than stop loss');
    }
    this.order.takeProfit = takeProfit;
    return this;
  }

  setTrailingStop(enabled: boolean): this {
    this.order.trailingStop = enabled;
    return this;
  }

  setExpiryDate(date: Date): this {
    if (date < new Date()) {
      throw new Error('Expiry date cannot be in the past');
    }
    this.order.expiryDate = date;
    return this;
  }

  build(): TradingOrder {
    if (!this.order.type) {
      throw new Error('Order type is required');
    }
    if (!this.order.symbol) {
      throw new Error('Symbol is required');
    }
    if (!this.order.quantity) {
      throw new Error('Quantity is required');
    }

    return {
      type: this.order.type,
      symbol: this.order.symbol,
      quantity: this.order.quantity,
      price: this.order.price,
      stopLoss: this.order.stopLoss,
      takeProfit: this.order.takeProfit,
      trailingStop: this.order.trailingStop,
      expiryDate: this.order.expiryDate
    };
  }
}

// Использование
const order = new OrderBuilder()
  .setType('buy')
  .setSymbol('AAPL')
  .setQuantity(100)
  .setPrice(150.50)
  .setStopLoss(145.00)
  .setTakeProfit(160.00)
  .setTrailingStop(true)
  .build();`
      }
    ],
    relatedTopics: ['ts-factory-method', 'classes', 'interfaces']
  },
  {
    id: 'ts-prototype',
    title: 'Prototype',
    description: 'Prototype позволяет копировать существующие объекты, независимо от их класса. Полезно когда создание объекта очень дорого или не хочется повторять реализацию. Можно модифицировать копию без влияния на оригинал. Prototype хранит в себе метод clone - объект сам умеет создавать копию.',
    difficulty: 'intermediate',
    tags: ['typescript', 'patterns', 'creational', 'prototype', 'oop', 'design'],
    keyPoints: [
      'Позволяет копировать существующие объекты, независимо от их класса.',
      'Можно модифицировать копию без влияния на оригинал.',
      'Полезно когда создание объекта дорого или не хочется повторять реализацию.',
      'Не нужен если объект простой, нет дублирования, связан с ресурсами (БД, файлы).',
      'Prototype - это умное переиспользование на основе чего-то готового.'
    ],
    examples: [
      {
        title: 'Темы (черная/белая/оранжевая)',
        code: `interface Theme {
  name: string;
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  borderRadius: number;
  fontSize: number;
}

// Базовый прототип
class ThemePrototype {
  private theme: Theme;

  constructor(theme: Theme) {
    this.theme = { ...theme };
  }

  // Метод клонирования
  clone(): Theme {
    return { ...this.theme };
  }

  // Модификация копии
  cloneWithModifications(modifications: Partial<Theme>): Theme {
    return { ...this.theme, ...modifications };
  }
}

// Эталонные темы
const darkTheme: Theme = {
  name: 'Dark',
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
  primaryColor: '#4a90e2',
  secondaryColor: '#2c3e50',
  borderRadius: 8,
  fontSize: 16
};

const lightTheme: Theme = {
  name: 'Light',
  backgroundColor: '#ffffff',
  textColor: '#000000',
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  borderRadius: 8,
  fontSize: 16
};

// Создание прототипов
const darkPrototype = new ThemePrototype(darkTheme);
const lightPrototype = new ThemePrototype(lightTheme);

// Клонирование без изменений
const darkThemeCopy = darkPrototype.clone();

// Клонирование с модификациями (оранжевая тема на основе темной)
const orangeTheme = darkPrototype.cloneWithModifications({
  name: 'Orange Dark',
  primaryColor: '#ff6b35',
  secondaryColor: '#ff8c42'
});

// Все темы независимы, изменения не влияют на оригинал`
      },
      {
        title: 'Шахматная доска',
        code: `interface ChessPiece {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
  position: { row: number; col: number };
}

interface ChessBoard {
  pieces: ChessPiece[];
  currentTurn: 'white' | 'black';
  moveHistory: string[];
}

class ChessBoardPrototype {
  private board: ChessBoard;

  constructor(board: ChessBoard) {
    // Глубокое копирование
    this.board = {
      pieces: board.pieces.map(piece => ({ ...piece, position: { ...piece.position } })),
      currentTurn: board.currentTurn,
      moveHistory: [...board.moveHistory]
    };
  }

  // Клонирование доски для каждого хода
  clone(): ChessBoard {
    return {
      pieces: this.board.pieces.map(piece => ({
        ...piece,
        position: { ...piece.position }
      })),
      currentTurn: this.board.currentTurn,
      moveHistory: [...this.board.moveHistory]
    };
  }

  // Клонирование с применением хода
  cloneWithMove(from: { row: number; col: number }, to: { row: number; col: number }): ChessBoard {
    const newBoard = this.clone();
    const piece = newBoard.pieces.find(
      p => p.position.row === from.row && p.position.col === from.col
    );
    
    if (piece) {
      piece.position = { ...to };
      newBoard.moveHistory.push(\`\${piece.type} from (\${from.row},\${from.col}) to (\${to.row},\${to.col})\`);
      newBoard.currentTurn = newBoard.currentTurn === 'white' ? 'black' : 'white';
    }
    
    return newBoard;
  }
}

// Начальная позиция
const initialBoard: ChessBoard = {
  pieces: [
    { type: 'king', color: 'white', position: { row: 0, col: 4 } },
    { type: 'king', color: 'black', position: { row: 7, col: 4 } },
    // ... другие фигуры
  ],
  currentTurn: 'white',
  moveHistory: []
};

const boardPrototype = new ChessBoardPrototype(initialBoard);

// Каждый ход - новая копия доски
const boardAfterMove1 = boardPrototype.cloneWithMove(
  { row: 1, col: 0 },
  { row: 3, col: 0 }
);

// Можно вернуться к предыдущему состоянию через прототип
const boardAfterMove2 = boardPrototype.cloneWithMove(
  { row: 6, col: 0 },
  { row: 4, col: 0 }
);`
      }
    ],
    relatedTopics: ['ts-factory-method', 'object-assign', 'spread-operator']
  },
  {
    id: 'ts-singleton',
    title: 'Singleton',
    description: 'Singleton обеспечивает один экземпляр класса в системе. Настоящий Singleton - это контролируемый ресурс с управлением временем жизни, а НЕ глобальный объект. Может создаваться через контекст, контейнер (Spring, NestJS) или React Context. Используется для логеров, пула БД, кэша, метрик, конфигов.',
    difficulty: 'intermediate',
    tags: ['typescript', 'patterns', 'creational', 'singleton', 'oop', 'design'],
    keyPoints: [
      'Обеспечивает один экземпляр класса в системе.',
      'Настоящий Singleton - контролируемый ресурс с управлением временем жизни, НЕ глобальный объект.',
      'Используется для одного общего ресурса с контролем жизненного цикла.',
      'Вреден если хранится пользовательский стейт, невозможно подменить/протестировать, создается глобалкой.',
      'React Context - пример правильного использования Singleton.'
    ],
    examples: [
      {
        title: 'Logger с private constructor',
        code: `class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  // Приватный конструктор - нельзя создать через new
  private constructor() {
    // Инициализация происходит один раз
    console.log('Logger initialized');
  }

  // Единственная точка доступа
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    const timestamp = new Date().toISOString();
    const logEntry = \`[\${timestamp}] \${message}\`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  getLogs(): string[] {
    return [...this.logs];
  }
}

// Использование - всегда один экземпляр
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2); // true

logger1.log('First message');
logger2.log('Second message');

// Оба используют один и тот же экземпляр
logger1.getLogs(); // ['[timestamp] First message', '[timestamp] Second message']`
      },
      {
        title: 'DB client в функциональном стиле',
        code: `interface DatabaseConnection {
  query(sql: string): Promise<any[]>;
  close(): Promise<void>;
}

// Функциональный стиль Singleton
function createDatabaseClient(): () => DatabaseConnection {
  let connection: DatabaseConnection | null = null;

  return function getConnection(): DatabaseConnection {
    if (!connection) {
      // Инициализация происходит один раз
      connection = {
        async query(sql: string) {
          console.log(\`Executing: \${sql}\`);
          return [];
        },
        async close() {
          console.log('Closing connection');
          connection = null;
        }
      };
      console.log('Database connection created');
    }
    return connection;
  };
}

// Создаем функцию-синглтон
const getDB = createDatabaseClient();

// Использование - всегда один экземпляр
const db1 = getDB();
const db2 = getDB();

console.log(db1 === db2); // true

await db1.query('SELECT * FROM users');
await db2.query('SELECT * FROM posts');

// В Express.js
// app.get('/users', async (req, res) => {
//   const db = getDB();
//   const users = await db.query('SELECT * FROM users');
//   res.json(users);
// });`
      },
      {
        title: 'React Context как контролируемый Singleton',
        code: `// React Context - пример правильного использования Singleton
// Контекст управляет жизненным циклом, не глобальный объект

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoggerContextType {
  logs: string[];
  log: (message: string) => void;
  clear: () => void;
}

const LoggerContext = createContext<LoggerContextType | undefined>(undefined);

export function LoggerProvider({ children }: { children: ReactNode }) {
  const [logs, setLogs] = useState<string[]>([]);

  const log = (message: string) => {
    const timestamp = new Date().toISOString();
    setLogs(prev => [...prev, \`[\${timestamp}] \${message}\`]);
  };

  const clear = () => setLogs([]);

  return (
    <LoggerContext.Provider value={{ logs, log, clear }}>
      {children}
    </LoggerContext.Provider>
  );
}

export function useLogger() {
  const context = useContext(LoggerContext);
  if (!context) {
    throw new Error('useLogger must be used within LoggerProvider');
  }
  return context; // Один экземпляр в рамках Provider
}

// Использование:
// <LoggerProvider>
//   <App />
// </LoggerProvider>
// 
// В компоненте:
// const logger = useLogger(); // Всегда один экземпляр в рамках Provider`
      }
    ],
    funFact: 'Singleton часто используется неправильно - как глобальный объект через импорты. Это превращает его в антипаттерн. Правильный Singleton управляется через контекст или контейнер, имеет контролируемый жизненный цикл.',
    relatedTopics: ['ts-factory-method', 'classes', 'react-context']
  }
];
