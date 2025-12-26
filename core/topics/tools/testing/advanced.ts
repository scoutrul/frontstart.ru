import { Topic } from '../../../types';

export const TESTING_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'testing-advanced',
    title: 'Продвинутое тестирование',
    description: 'E2E тесты: Playwright и Cypress для тестирования всего приложения в браузере. Тестирование производительности: измерение времени выполнения, нагрузочное тестирование. TDD/BDD подходы: Test-Driven Development, Behavior-Driven Development. Тестирование архитектуры: проверка структуры кода, зависимостей, паттернов.',
    difficulty: 'advanced',
    tags: ['testing', 'e2e', 'playwright', 'cypress', 'performance', 'tdd', 'bdd', 'architecture', 'tools', 'productivity'],
    keyPoints: [
      'E2E тесты проверяют весь flow приложения.',
      'Playwright поддерживает несколько браузеров.',
      'Cypress имеет удобный интерфейс для отладки.',
      'TDD: сначала тесты, потом код.',
      'BDD использует естественный язык для описания тестов.'
    ],
    examples: [
      {
        title: 'Playwright E2E тест',
        code: `import { test, expect } from '@playwright/test';

test('user login flow', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'user');
  await page.fill('#password', 'pass');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://example.com/dashboard');
});`
      },
      {
        title: 'Cypress E2E тест',
        code: `describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('#username').type('user');
    cy.get('#password').type('pass');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});`
      },
      {
        title: 'TDD подход',
        code: `// 1. Написать тест (красный)
test('should calculate total', () => {
  expect(calculateTotal([1, 2, 3])).toBe(6);
});

// 2. Написать минимальный код (зелёный)
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item, 0);
}

// 3. Рефакторинг (синий)
// Улучшить код, сохраняя тесты зелёными`
      },
      {
        title: 'BDD с Cucumber',
        code: `# feature file
Feature: User login
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to dashboard`
      }
    ],
    relatedTopics: ['testing-intermediate']
  }
];

