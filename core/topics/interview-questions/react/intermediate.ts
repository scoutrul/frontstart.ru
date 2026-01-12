import { InterviewQuestion } from '../../../types';

export const REACT_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'react-intermediate-lifecycle',
    question: 'Какие стадии жизненного цикла можно отловить через useEffect?',
    answer: 'Монтирование, обновление и размонтирование.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'hooks', 'useeffect', 'lifecycle']
  },
  {
    id: 'react-intermediate-error-boundary',
    question: 'Как отловить ошибки в React?',
    answer: 'С помощью Error Boundary — классового компонента с методами componentDidCatch и getDerivedStateFromError, перехватывающего ошибки в дочерних компонентах.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'error-boundary', 'error-handling']
  },
  {
    id: 'react-intermediate-rerenders',
    question: 'Как бороться с лишними ререндерами?',
    answer: 'Мемоизация (React.memo, useMemo, useCallback).',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'performance', 'optimization', 'memoization']
  },
  {
    id: 'react-intermediate-usecallback-usememo',
    question: 'Для чего нужны useCallback, useMemo, useRef?',
    answer: 'useCallback мемоизирует функцию, useMemo — результат вычислений, useRef сохраняет значение между рендерами без триггера ререндера.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'hooks', 'usecallback', 'usememo', 'useref', 'optimization']
  },
  {
    id: 'react-intermediate-usecontext',
    question: 'Для чего нужен useContext?',
    answer: 'Для доступа к данным контекста и избежания prop drilling.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'hooks', 'usecontext', 'context', 'state-management']
  },
  {
    id: 'react-intermediate-memo-limitations',
    question: 'Почему нельзя мемоизировать всё подряд?',
    answer: 'Мемоизация тоже имеет стоимость и может ухудшить производительность.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'performance', 'memoization', 'optimization', 'best-practices']
  },
  {
    id: 'react-intermediate-react-memo',
    question: 'Что такое PureComponent и React.memo?',
    answer: 'Error Boundaries перехватывают ошибки в дочерних компонентах. React.memo мемоизирует функциональный компонент, PureComponent — классовый (поверхностное сравнение пропсов и состояния).',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'react-memo', 'purecomponent', 'optimization']
  },
  {
    id: 'react-intermediate-reconciliation',
    question: 'Что такое reconciliation?',
    answer: 'Алгоритм сравнения Virtual DOM для минимизации обновлений реального DOM.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'reconciliation', 'virtual-dom', 'algorithms']
  },
  {
    id: 'react-intermediate-batching',
    question: 'Что такое batching?',
    answer: 'Группировка нескольких обновлений состояния в один ререндер.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'batching', 'performance', 'state-updates']
  },
  {
    id: 'react-intermediate-lifting-state',
    question: 'Что такое поднятие состояния (lifting state up)?',
    answer: 'Перемещение состояния в ближайшего общего предка компонентов, которым нужно это состояние. Позволяет синхронизировать данные между компонентами.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'state', 'lifting-state', 'architecture']
  },
  {
    id: 'react-intermediate-prop-drilling',
    question: 'Как организовать передачу данных между компонентами?',
    answer: 'Через пропсы (prop drilling), контекст (для избежания prop drilling), стейт-менеджеры (Redux, Zustand) для сложных состояний.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'props', 'context', 'state-management', 'architecture']
  },
  {
    id: 'react-intermediate-context-limitations',
    question: 'Что такое контекст (Context) и когда его использовать?',
    answer: 'Контекст решает проблему пропс дриллинга, но может вызывать лишние ререндеры. Для сложных состояний используйте стейт-менеджеры.',
    category: 'react',
    difficulty: 'intermediate',
    tags: ['react', 'context', 'state-management', 'architecture']
  }
];
