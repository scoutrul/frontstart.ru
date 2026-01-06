import { Topic } from '../../../types';

export const STYLES_ARCHITECTURE_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-styles-multilayer',
    title: 'Многослойные дизайн-системы',
    difficulty: 'advanced',
    description: 'Многослойные дизайн-системы — системы с несколькими уровнями абстракции: токены (базовые значения), примитивы (базовые компоненты), паттерны (составные компоненты), шаблоны (страницы). Каждый слой использует предыдущий, обеспечивая консистентность и масштабируемость.\n\nАрхитектура: Foundation (токены) → Components (примитивы) → Patterns (составные) → Templates (страницы). Преимущества: переиспользование, консистентность, масштабируемость. Senior-разработчик должен понимать, как проектировать многослойные дизайн-системы для больших организаций.',
    keyPoints: [
      'Многослойные системы: токены → примитивы → паттерны → шаблоны.',
      'Foundation: дизайн-токены (цвета, размеры, типографика).',
      'Components: базовые компоненты (Button, Input), используют токены.',
      'Patterns: составные компоненты (Form, Card), используют примитивы.',
      'Templates: шаблоны страниц, используют паттерны.',
      'Преимущества: переиспользование, консистентность, масштабируемость.',
      'Применение: большие организации, множественные продукты, долгосрочная поддержка.'
    ],
    tags: ['architecture', 'styles', 'design-system', 'advanced'],
    examples: [
      {
        title: 'Многослойная архитектура',
        code: `// Foundation: токены
const tokens = {
  color: { primary: '#007bff' },
  spacing: { md: '16px' }
};

// Components: примитивы (используют токены)
function Button({ children }) {
  return (
    <button style={{
      background: tokens.color.primary,
      padding: tokens.spacing.md
    }}>
      {children}
    </button>
  );
}

// Patterns: составные (используют примитивы)
function LoginForm() {
  return (
    <form>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button>Войти</Button>
    </form>
  );
}

// Templates: страницы (используют паттерны)
function LoginPage() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}`
      }
    ],
    relatedTopics: ['architecture-styles-ui-kit'],
    funFact: 'Многослойные дизайн-системы стали стандартом в крупных компаниях (Google Material Design, IBM Carbon, Salesforce Lightning). Они позволяют масштабировать дизайн на множество продуктов и платформ, обеспечивая консистентность и ускоряя разработку.'
  },
  {
    id: 'architecture-styles-performance',
    title: 'Производительность CSS-in-JS',
    difficulty: 'advanced',
    description: 'CSS-in-JS имеет overhead: стили генерируются в runtime, увеличивая размер bundle и время выполнения. Оптимизации: статическая экстракция (компиляция стилей в CSS на этапе сборки), мемоизация, использование нативных CSS переменных. Senior-разработчик должен понимать trade-offs и оптимизировать производительность CSS-in-JS.',
    keyPoints: [
      'CSS-in-JS overhead: стили генерируются в runtime, увеличивая bundle и время выполнения.',
      'Оптимизации: статическая экстракция, мемоизация, нативные CSS переменные.',
      'Статическая экстракция: компиляция стилей в CSS на этапе сборки (Linaria, vanilla-extract).',
      'Мемоизация: кэширование сгенерированных стилей, избежание пересчёта.',
      'Нативные переменные: использование CSS переменных вместо JavaScript для динамических значений.',
      'Выбор: CSS Modules или статическая экстракция для производительности, CSS-in-JS для гибкости.'
    ],
    tags: ['architecture', 'styles', 'performance', 'css-in-js', 'advanced'],
    examples: [
      {
        title: 'Статическая экстракция',
        code: `// Linaria: стили компилируются в CSS
import { styled } from '@linaria/react';

const Button = styled.button\`
  background: blue;
  padding: 10px;
\`;

// Компилируется в CSS на этапе сборки
// Нет runtime overhead`

      }
    ],
    relatedTopics: ['architecture-performance-optimization'],
    funFact: 'Производительность CSS-in-JS стала проблемой в больших приложениях. Многие компании перешли на статическую экстракцию (Linaria, vanilla-extract) или вернулись к CSS Modules. Это показывает, что простота и производительность иногда важнее гибкости.'
  }
];
