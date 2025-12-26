import { Topic } from '../../../types';

export const TYPESCRIPT_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'ts-generics',
    title: 'Дженерики',
    description: 'Generic типы позволяют создавать переиспользуемые компоненты. Constraints ограничивают типы: extends для ограничения. Utility types: Partial, Required, Readonly для трансформации типов.',
    difficulty: 'intermediate',
    tags: ['typescript', 'generics', 'advanced'],
    keyPoints: [
      'Generics делают код переиспользуемым для разных типов.',
      'extends ограничивает допустимые типы.',
      'Partial делает все поля опциональными.',
      'Required делает все поля обязательными.',
      'Readonly делает все поля только для чтения.'
    ],
    examples: [
      {
        title: 'Базовые generics',
        code: `function identity<T>(arg: T): T {
  return arg;
}

identity<string>("hello");
identity<number>(42);`
      },
      {
        title: 'Constraints',
        code: `interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}`
      }
    ],
    relatedTopics: ['ts-basics', 'ts-utilities']
  },
  {
    id: 'ts-utilities',
    title: 'Utility Types',
    description: 'Utility types для трансформации типов: Partial делает все поля опциональными, Pick выбирает поля, Omit исключает поля, Record создаёт объект с заданными ключами и значениями.',
    difficulty: 'intermediate',
    tags: ['typescript', 'utilities', 'types'],
    keyPoints: [
      'Partial<T> делает все поля T опциональными.',
      'Pick<T, K> выбирает поля K из T.',
      'Omit<T, K> исключает поля K из T.',
      'Record<K, V> создаёт объект с ключами K и значениями V.',
      'Readonly<T> делает все поля только для чтения.'
    ],
    examples: [
      {
        title: 'Utility types',
        code: `interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;  // Все поля опциональны
type NameAge = Pick<User, 'name' | 'age'>;  // Только name и age
type WithoutEmail = Omit<User, 'email'>;  // Без email
type UserMap = Record<string, User>;  // { [key: string]: User }`
      }
    ],
    relatedTopics: ['ts-generics', 'ts-advanced']
  },
  {
    id: 'ts-advanced',
    title: 'Продвинутый TypeScript',
    description: 'Conditional types для условной типизации: T extends U ? X : Y. Mapped types для трансформации типов: [K in keyof T]. Template literal types для строковых типов: `Hello ${string}`.',
    difficulty: 'advanced',
    tags: ['typescript', 'advanced', 'types'],
    keyPoints: [
      'Conditional types выбирают тип на основе условия.',
      'Mapped types трансформируют типы через итерацию.',
      'Template literal types создают строковые типы.',
      'infer извлекает тип из другого типа.',
      'Distributive conditional types применяются к каждому члену union.'
    ],
    examples: [
      {
        title: 'Conditional types',
        code: `type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<number[]>;  // true
type B = IsArray<string>;    // false`
      },
      {
        title: 'Mapped types',
        code: `type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};`
      },
      {
        title: 'Template literal types',
        code: `type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<'click'>;  // 'onClick'
type ChangeEvent = EventName<'change'>;  // 'onChange'`
      }
    ],
    relatedTopics: ['ts-utilities']
  }
];

