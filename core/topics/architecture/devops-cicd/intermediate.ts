import { Topic } from '../../../types';

export const DEVOPS_CICD_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-devops-cicd',
    title: 'CI/CD пайплайн',
    difficulty: 'intermediate',
    description: 'Настройка CI/CD пайплайна: автоматический запуск тестов, сборка, деплой. Code-splitting для оптимизации bundle. Middle должен уметь настраивать GitHub Actions, GitLab CI, или другие системы для автоматизации.',
    keyPoints: [
      'CI/CD: автоматизация тестов, сборки, деплоя при коммитах.',
      'Этапы: lint, test, build, deploy.',
      'Code-splitting: разделение bundle на части для оптимизации загрузки.',
      'Инструменты: GitHub Actions, GitLab CI, CircleCI.'
    ],
    tags: ['architecture', 'devops', 'cicd', 'pipeline', 'intermediate'],
    examples: [
      {
        title: 'GitHub Actions пайплайн',
        code: `# .github/workflows/ci.yml
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
      - run: npm run build`
      }
    ],
    relatedTopics: ['architecture-devops-basics', 'architecture-devops-advanced'],
    funFact: 'CI/CD стал стандартом в современной разработке. Автоматизация сборки и деплоя ускоряет разработку и уменьшает ошибки. Многие компании требуют прохождения всех тестов перед merge в основную ветку.'
  }
];
