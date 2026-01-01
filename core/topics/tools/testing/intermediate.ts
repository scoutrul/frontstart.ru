import { Topic } from '../../../types';

export const TESTING_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'testing-intermediate',
    title: 'Юнит-тесты и Mocking',
    description: 'Юнит-тесты проверяют отдельные функции или модули. Средний уровень включает mocking зависимостей, snapshot тесты и измерение покрытия кода.',
    difficulty: 'intermediate',
    tags: ['testing', 'jest', 'vitest', 'mocking', 'unit-tests', 'async', 'snapshots', 'coverage', 'productivity'],
    keyPoints: [
      'jest.fn() создаёт mock-функцию для изоляции логики',
      'jest.spyOn отслеживает вызовы существующих функций',
      'Тестирование асинхронных функций с async/await, return или done',
      'Snapshot тесты фиксируют визуальное состояние компонентов',
      '--coverage показывает процент покрытия кода тестами'
    ],
    additionalDescription: 'Mocking позволяет тестировать код без зависимости от внешних модулей. Snapshot тесты полезны для UI компонентов, так как фиксируют визуальные изменения и предотвращают неожиданные регрессии.',
    funFact: 'Snapshot тесты впервые появились в Jest и стали популярны для тестирования React компонентов.',
    examples: [
      {
        title: 'Mock функции',
        code: `const mockFn = jest.fn();
mockFn("arg1", "arg2");
expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");`
      },
      {
        title: 'Mock модуля',
        code: `jest.mock("./api", () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: "test" }))
}));`
      },
      {
        title: 'Spy',
        code: `const spy = jest.spyOn(obj, "method");
expect(spy).toHaveBeenCalled();`
      },
      {
        title: 'Асинхронный тест с async/await',
        code: `test("async test", async () => {
  const data = await fetchData();
  expect(data).toBeDefined();
});`
      },
      {
        title: 'Snapshot тест',
        code: `import { render } from "@testing-library/react";
import Component from "./Component";
test("matches snapshot", () => {
  const { container } = render(<Component />);
  expect(container).toMatchSnapshot();
});`
      }
    ],
    relatedTopics: ['testing-basics', 'testing-advanced']
  }
];

