import { Topic } from '../../../types';

export const TYPESCRIPT_BASICS_TOPICS: Topic[] = [
  {
    id: 'ts-basics',
    title: 'Основы TypeScript',
    description: 'TypeScript — типизированный надмножество JavaScript. Типы: number, string, boolean, object, array. Интерфейсы для описания структуры объектов. type vs interface: type для объединений и примитивов, interface для объектов и расширения.',
    difficulty: 'beginner',
    tags: ['typescript', 'types', 'basics'],
    keyPoints: [
      'TypeScript добавляет типизацию к JavaScript.',
      'type для примитивов и объединений.',
      'interface для объектов и расширения.',
      'Типы проверяются на этапе компиляции.',
      'any отключает проверку типов (избегать).'
    ],
    examples: [
      {
        title: 'Базовые типы',
        code: `let age: number = 25;
let name: string = "John";
let isActive: boolean = true;
let items: number[] = [1, 2, 3];
let user: { name: string; age: number } = { name: "John", age: 25 };`
      },
      {
        title: 'type vs interface',
        code: `// type
type User = {
  name: string;
  age: number;
};

// interface
interface User {
  name: string;
  age: number;
}

// Расширение
interface Admin extends User {
  role: string;
}`
      }
    ],
    relatedTopics: ['ts-generics']
  }
];

