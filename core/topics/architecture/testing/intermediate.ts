import { Topic } from '../../../types';

export const TESTING_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-testing-integration',
    title: 'Пирамида тестов',
    difficulty: 'intermediate',
    description: 'Пирамида тестов: много unit-тестов (быстрые, изолированные), меньше integration-тестов (проверка взаимодействия), мало e2e-тестов (полный сценарий). Моки и стабы для изоляции зависимостей. Middle должен понимать структуру тестов и применять правильные типы тестов.',
    keyPoints: [
      'Пирамида: много unit, меньше integration, мало e2e.',
      'Unit-тесты: быстрые, изолированные, тестируют отдельные единицы.',
      'Integration-тесты: проверка взаимодействия компонентов, API.',
      'E2E-тесты: полные сценарии пользователя, медленные, но надёжные.',
      'Моки и стабы: изоляция зависимостей, контроль поведения.'
    ],
    tags: ['architecture', 'testing', 'pyramid', 'integration', 'e2e', 'intermediate'],
    examples: [
      {
        title: 'Пирамида тестов',
        code: `// Unit-тесты (много, быстро)
test('formatDate formats correctly', () => { /* ... */ });

// Integration-тесты (средне, проверка взаимодействия)
test('UserProfile loads user data', async () => {
  const { getByText } = render(<UserProfile userId="1" />);
  await waitFor(() => {
    expect(getByText('Иван')).toBeInTheDocument();
  });
});

// E2E-тесты (мало, полные сценарии)
test('user can login and view profile', async () => {
  await page.goto('/login');
  await page.fill('#email', 'test@test.com');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/profile');
});`
      }
    ],
    relatedTopics: ['architecture-testing-unit', 'architecture-testing-advanced'],
    funFact: 'Пирамида тестов была предложена Майком Котном в 2009 году. Идея в том, что большинство тестов должны быть быстрыми unit-тестами, а медленные e2e-тесты должны быть минимальными. Это обеспечивает баланс между скоростью и надёжностью.'
  }
];
