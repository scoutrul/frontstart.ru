import { Topic } from '../../../types';

export const CODE_ORGANIZATION_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-code-organization-basics',
    title: 'Базовая структура',
    difficulty: 'beginner',
    description: 'Базовая структура проекта — организация файлов по типам: /components для компонентов, /pages для страниц, /utils для утилит, /hooks для хуков. Это простой и понятный подход для небольших проектов. Файлы группируются по их типу, что упрощает поиск и навигацию.\n\nДля Junior важно понимать: начинать с простой структуры, усложнять только когда проект растёт. Базовая структура подходит для проектов до 10-20 компонентов. Когда проект становится больше, нужна более сложная организация (по фичам, по доменам).',
    keyPoints: [
      'Базовая структура: группировка по типам файлов (/components, /pages, /utils, /hooks).',
      'Преимущества: простота, понятность, легко найти файл по типу.',
      'Недостатки: сложно масштабировать, файлы одной фичи разбросаны по папкам.',
      'Применение: небольшие проекты (до 10-20 компонентов), простые приложения.',
      'Структура: src/components/, src/pages/, src/utils/, src/hooks/, src/styles/.',
      'Для Junior: начинать с простой структуры, усложнять при росте проекта.'
    ],
    tags: ['architecture', 'structure', 'organization', 'basics'],
    examples: [
      {
        title: 'Базовая структура проекта',
        code: `src/
  components/
    Button.tsx
    Input.tsx
    Card.tsx
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
  utils/
    formatDate.ts
    validateEmail.ts
  hooks/
    useAuth.ts
    useFetch.ts
  styles/
    global.css
    variables.css
  App.tsx
  index.tsx`
      }
    ],
    relatedTopics: ['architecture-code-organization-feature'],
    funFact: 'Большинство проектов начинаются с простой структуры "по типам", но по мере роста становятся неудобными. Это нормально — не нужно усложнять структуру заранее. Лучше рефакторить, когда появляется реальная необходимость.'
  }
];
