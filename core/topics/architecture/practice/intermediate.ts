import { Topic } from '../../../types';

export const PRACTICE_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-practice-middle',
    title: 'Практические вопросы: Middle',
    difficulty: 'intermediate',
    description: 'Практические вопросы для уровня Middle: проектирование кэширования, выбор стратегии рендеринга, организация shared-библиотек. Эти вопросы проверяют умение принимать архитектурные решения.',
    keyPoints: [
      'Кэширование: как спроектировать кэширование для каталога товаров?',
      'Рендеринг: когда выбрать SSR вместо CSR для нового проекта?',
      'Shared библиотеки: как организовать shared-библиотеку для нескольких проектов?',
      'Решения: обоснование выбора, trade-offs, компромиссы.'
    ],
    tags: ['architecture', 'practice', 'middle', 'questions'],
    examples: [
      {
        title: 'Пример вопроса',
        code: `// Вопрос: Как спроектировать кэширование для каталога товаров?

// Ответ: Использовать React Query с инвалидацией
const { data: products } = useQuery(
  ['products', filters],
  () => fetchProducts(filters),
  {
    staleTime: 5 * 60 * 1000, // 5 минут
    cacheTime: 10 * 60 * 1000 // 10 минут
  }
);

// Инвалидация при изменении фильтров
queryClient.invalidateQueries(['products']);`
      }
    ],
    relatedTopics: ['architecture-practice-junior', 'architecture-practice-senior'],
    funFact: 'Практические вопросы для Middle проверяют не только знание технологий, но и умение принимать решения. Архитектурные решения требуют понимания trade-offs и компромиссов.'
  }
];
