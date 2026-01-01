import { Topic } from '../../../types';

export const TESTING_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'testing-advanced',
    title: 'E2E и TDD/BDD',
    description: 'Продвинутый уровень тестирования включает E2E тесты для всего приложения, подходы TDD/BDD и тестирование производительности.',
    difficulty: 'advanced',
    tags: ['testing', 'e2e', 'playwright', 'cypress', 'tdd', 'bdd', 'performance', 'architecture', 'productivity'],
    keyPoints: [
      'E2E тесты проверяют полный пользовательский сценарий',
      'Playwright поддерживает несколько браузеров для тестирования',
      'Cypress удобен для записи тестов и отладки',
      'TDD: тесты пишутся до реализации функционала',
      'BDD: тесты описываются на естественном языке для понимания командой'
    ],
    additionalDescription: 'Тестирование производительности позволяет оценить скорость и устойчивость приложения при нагрузке. TDD/BDD помогают структурировать разработку, делая код более надёжным и поддерживаемым.',
    funFact: 'Cypress и Playwright позволяют не только тестировать функционал, но и снимать видео прохождения тестов и делать скриншоты страницы.',
    examples: [
      {
        title: 'Playwright E2E тест',
        code: `import { test, expect } from "@playwright/test";
test("user login flow", async ({ page }) => {
  await page.goto("https://example.com/login");
  await page.fill("#username", "user");
  await page.fill("#password", "pass");
  await page.click("button[type=\\"submit\\"]");
  await expect(page).toHaveURL("https://example.com/dashboard");
});`
      },
      {
        title: 'Cypress E2E тест',
        code: `describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("/login");
    cy.get("#username").type("user");
    cy.get("#password").type("pass");
    cy.get("button[type=\\"submit\\"]").click();
    cy.url().should("include", "/dashboard");
  });
});`
      },
      {
        title: 'TDD пример',
        code: `// 1. Тест (красный)
test("should calculate total", () => {
  expect(calculateTotal([1,2,3])).toBe(6);
});
// 2. Код (зелёный)
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item, 0);
}
// 3. Рефакторинг (синий)`
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
    relatedTopics: ['testing-intermediate', 'ci-cd-basics']
  }
];

