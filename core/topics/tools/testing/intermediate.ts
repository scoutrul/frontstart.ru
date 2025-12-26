import { Topic } from '../../../types';

export const TESTING_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'testing-intermediate',
    title: 'Тестирование средний уровень',
    description: 'Mocking: создание моков для зависимостей, spies для отслеживания вызовов, stubs для замены функций. Тестирование асинхронного кода: промисы, async/await, использование done или return. Snapshot тесты: сохранение снимков UI компонентов. Покрытие кода: измерение покрытия тестами, цель 80%+ покрытия.',
    difficulty: 'intermediate',
    tags: ['testing', 'jest', 'vitest', 'mocking', 'async', 'snapshots', 'coverage', 'tools', 'productivity'],
    keyPoints: [
      'jest.fn() создаёт mock функцию.',
      'jest.spyOn отслеживает вызовы существующих функций.',
      'await или return для тестирования async функций.',
      'Snapshot тесты сравнивают текущий вывод с сохранённым.',
      '--coverage показывает процент покрытия кода.'
    ],
    examples: [
      {
        title: 'Mocking',
        code: `// Mock функции
const mockFn = jest.fn();
mockFn('arg1', 'arg2');
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');

// Mock модуля
jest.mock('./api', () => ({
  fetchData: jest.fn(() => Promise.resolve({data: 'test'}))
}));

// Spy
const spy = jest.spyOn(obj, 'method');
expect(spy).toHaveBeenCalled();`
      },
      {
        title: 'Асинхронное тестирование',
        code: `// С промисом
test('async test', () => {
  return fetchData().then(data => {
    expect(data).toBeDefined();
  });
});

// С async/await
test('async test', async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});

// С done
test('async test', (done) => {
  fetchData().then(() => {
    expect(true).toBe(true);
    done();
  });
});`
      },
      {
        title: 'Snapshot тесты',
        code: `import { render } from '@testing-library/react';
import Component from './Component';

test('matches snapshot', () => {
  const { container } = render(<Component />);
  expect(container).toMatchSnapshot();
});

// Обновить snapshot: jest -u`
      }
    ],
    relatedTopics: ['testing-basics', 'testing-advanced']
  }
];

