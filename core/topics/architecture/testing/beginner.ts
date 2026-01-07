import { Topic } from '../../../types';

export const TESTING_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-testing-unit',
    title: 'Unit-тесты',
    difficulty: 'beginner',
    description: 'Unit-тесты — тесты отдельных функций и компонентов в изоляции. Они проверяют, что код работает правильно на уровне отдельных единиц. Для Junior важно понимать: как писать простые тесты, как использовать Jest/Vitest, базовые концепции (describe, it, expect).',
    keyPoints: [
      'Unit-тесты: тесты отдельных функций и компонентов в изоляции.',
      'Инструменты: Jest, Vitest для JavaScript/TypeScript.',
      'Базовые концепции: describe (группа тестов), it/test (тест), expect (проверка).',
      'Применение: тестирование утилит, простых компонентов, бизнес-логики.'
    ],
    tags: ['architecture', 'testing', 'unit-tests', 'basics'],
    examples: [
      {
        title: 'Простой unit-тест',
        code: `// utils/formatDate.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ru-RU');
}

// utils/formatDate.test.ts
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('форматирует дату правильно', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('15.01.2024');
  });
});`
      }
    ],
    relatedTopics: ['architecture-testing-integration'],
    funFact: 'Jest был создан Facebook в 2016 году для тестирования React-приложений. Он стал стандартом для тестирования JavaScript и используется в миллионах проектов. Jest упростил написание тестов и сделал их доступными для всех разработчиков.',
    isFrontendEssential: true
  }
];
