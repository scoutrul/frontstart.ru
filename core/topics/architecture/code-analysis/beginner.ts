import { Topic } from '../../../types';

export const CODE_ANALYSIS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-code-analysis-basics',
    title: 'ESLint и Prettier',
    difficulty: 'beginner',
    description: 'ESLint — линтер для поиска ошибок и проблем в коде. Prettier — форматтер для автоматического форматирования кода. Для Junior важно: настроить ESLint и Prettier, понимать базовые правила, использовать автоматическое форматирование.',
    keyPoints: [
      'ESLint: поиск ошибок и проблем в коде, настраиваемые правила.',
      'Prettier: автоматическое форматирование кода, единый стиль.',
      'Настройка: конфигурационные файлы (.eslintrc, .prettierrc).',
      'Использование: автоматическое форматирование при сохранении, проверка в CI.'
    ],
    tags: ['architecture', 'linting', 'eslint', 'prettier', 'basics'],
    examples: [
      {
        title: 'Настройка ESLint и Prettier',
        code: `// .eslintrc.json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "no-console": "warn",
    "react/prop-types": "off"
  }
}

// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}`
      }
    ],
    relatedTopics: ['architecture-code-analysis-advanced'],
    funFact: 'ESLint был создан в 2013 году Николасом Закасом. Он стал стандартом для линтинга JavaScript и используется в миллионах проектов. ESLint помогает находить ошибки до того, как код попадёт в продакшен.'
  }
];
