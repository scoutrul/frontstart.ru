import { Topic } from '../../../types';

export const TESTING_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'testing-basics',
    title: 'Основы тестирования',
    description: 'Типы тестов: unit тесты для отдельных функций, интеграционные тесты для взаимодействия компонентов. Jest и Vitest: популярные фреймворки для тестирования JavaScript. Настройка: установка, конфигурация, базовые матчеры (toBe, toEqual). Структура тестов: describe для группировки, it/test для тестов, beforeEach/afterEach для подготовки.',
    difficulty: 'beginner',
    tags: ['testing', 'jest', 'vitest', 'unit-tests', 'basics', 'tools', 'productivity'],
    keyPoints: [
      'Unit тесты проверяют отдельные функции изолированно.',
      'describe группирует связанные тесты.',
      'it или test определяет отдельный тест.',
      'beforeEach выполняется перед каждым тестом.',
      'Матчеры проверяют ожидаемые результаты.'
    ],
    examples: [
      {
        title: 'Базовый тест',
        code: `// sum.test.js
import { sum } from './sum';

describe('sum function', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});`
      },
      {
        title: 'Матчеры',
        code: `expect(2 + 2).toBe(4);              // Строгое равенство
expect({a: 1}).toEqual({a: 1});      // Глубокое равенство
expect('hello').toContain('ell');    // Содержит
expect(true).toBeTruthy();          // Truthy
expect(null).toBeNull();             // Null
expect([1, 2, 3]).toHaveLength(3);  // Длина массива`
      },
      {
        title: 'beforeEach/afterEach',
        code: `let data;

beforeEach(() => {
  data = { count: 0 };
});

afterEach(() => {
  data = null;
});

it('should increment count', () => {
  data.count++;
  expect(data.count).toBe(1);
});`
      }
    ],
    relatedTopics: ['testing-intermediate']
  }
];

