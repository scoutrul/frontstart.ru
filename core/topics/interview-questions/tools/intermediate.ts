import { InterviewQuestion } from '../../../types';

export const TOOLS_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'tools-intermediate-tree-shaking',
    question: 'Что такое tree shaking, code splitting, minification?',
    answer: 'Tree shaking удаляет неиспользуемый код. Code splitting разделяет код на части. Minification сжимает код, удаляя пробелы и переименовывая переменные.',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'tree-shaking', 'code-splitting', 'minification', 'optimization']
  },
  {
    id: 'tools-intermediate-eslint-prettier',
    question: 'Что такое ESLint, Prettier и как их настроить?',
    answer: 'ESLint находит ошибки и проблемы в коде, Prettier форматирует код. Настраиваются через конфигурационные файлы (.eslintrc, .prettierrc).',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'eslint', 'prettier', 'linting', 'formatting']
  },
  {
    id: 'tools-intermediate-testing',
    question: 'Какие виды тестирования вы знаете (unit, integration, e2e)?',
    answer: 'Unit — тестирование отдельных функций/компонентов. Integration — тестирование взаимодействия компонентов. E2E — тестирование всего приложения как пользователь.',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'testing', 'unit', 'integration', 'e2e']
  },
  {
    id: 'tools-intermediate-jest-rtl',
    question: 'Как писать unit-тесты с Jest и React Testing Library?',
    answer: 'Jest — фреймворк для тестов. RTL фокусируется на тестировании как пользователь (поиск по тексту, ролям), а не по реализации.',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'testing', 'jest', 'react-testing-library', 'react']
  },
  {
    id: 'tools-intermediate-mocks',
    question: 'Что такое моки (mocks), стабы (stubs), снапшоты (snapshots)?',
    answer: 'Моки заменяют зависимости с контролем поведения. Стабы — упрощенные версии зависимостей. Снапшоты проверяют неизменность вывода компонента.',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'testing', 'mocks', 'stubs', 'snapshots']
  },
  {
    id: 'tools-intermediate-eslint-rules',
    question: 'Какие правила линтера важны для React-проектов?',
    answer: 'Важные правила: react-hooks/exhaustive-deps, no-unused-vars, react/prop-types, @typescript-eslint/no-explicit-any.',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'eslint', 'react', 'linting', 'best-practices']
  },
  {
    id: 'tools-intermediate-cicd-basics',
    question: 'Что такое непрерывная интеграция и непрерывное развертывание?',
    answer: 'CI автоматизирует тестирование при каждом коммите. CD автоматизирует деплой после успешных тестов. Ускоряет разработку и снижает риски.',
    category: 'tools',
    difficulty: 'intermediate',
    tags: ['tools', 'ci-cd', 'devops', 'automation']
  }
];
