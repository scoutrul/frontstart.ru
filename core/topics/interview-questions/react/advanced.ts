import { InterviewQuestion } from '../../../types';

export const REACT_ADVANCED_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'react-advanced-useeffect-uselayouteffect',
    question: 'В чем разница между useEffect и useLayoutEffect?',
    answer: 'useEffect выполняется после рендера, useLayoutEffect — до отрисовки в браузере. useLayoutEffect синхронный и блокирует отрисовку, используется для измерений DOM.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'hooks', 'useeffect', 'uselayouteffect', 'performance']
  },
  {
    id: 'react-advanced-state-during-render',
    question: 'Как React ведёт себя, если state обновляется во время рендера?',
    answer: 'Текущий рендер завершается, затем запускается следующий.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'state', 'rendering', 'lifecycle']
  },
  {
    id: 'react-advanced-code-splitting',
    question: 'Что такое код-сплиттинг и как его реализовать?',
    answer: 'Разделение кода на части для загрузки по требованию. Реализация через React.lazy и Suspense для компонентов, динамический import() для модулей.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'code-splitting', 'performance', 'lazy-loading']
  },
  {
    id: 'react-advanced-custom-hooks',
    question: 'Как создать собственный хук?',
    answer: 'Функция, начинающаяся с "use", может использовать другие хуки. Позволяет переиспользовать логику состояния между компонентами.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'hooks', 'custom-hooks', 'reusability']
  },
  {
    id: 'react-advanced-routing',
    question: 'Как организовать роутинг в React-приложении?',
    answer: 'Популярные библиотеки: React Router, Next.js. Динамические роуты: /users/:id. Защита через компонент-обертку, проверяющий авторизацию.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'routing', 'react-router', 'nextjs', 'architecture']
  },
  {
    id: 'react-advanced-dynamic-routes',
    question: 'Что такое динамические роуты, вложенные роуты?',
    answer: 'Динамические роуты используют параметры (/users/:id). Вложенные роуты позволяют вкладывать маршруты друг в друга для сложной навигации.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'routing', 'dynamic-routes', 'nested-routes']
  },
  {
    id: 'react-advanced-route-protection',
    question: 'Как защитить роуты (например, для авторизованных пользователей)?',
    answer: 'Через компонент-обертку (ProtectedRoute), проверяющий авторизацию и редиректящий на логин при необходимости.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'routing', 'authentication', 'security']
  },
  {
    id: 'react-advanced-why-rerender',
    question: 'Почему компонент ререндерится? Какие причины?',
    answer: 'Рендер вызывают: изменение состояния, пропсов, родителя, контекста.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'rendering', 'performance', 'optimization']
  },
  {
    id: 'react-advanced-optimization-strategy',
    question: 'Как использовать React.memo, useCallback, useMemo для оптимизации?',
    answer: 'React.memo мемоизирует компонент, useCallback — функции (для пропсов), useMemo — вычисления. Используйте только при реальных проблемах производительности.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'optimization', 'memoization', 'performance']
  },
  {
    id: 'react-advanced-reconciliation-details',
    question: 'Как работает Reconciliation (согласование) в React?',
    answer: 'React сравнивает новый Virtual DOM со старым, определяет минимальные изменения (diffing), применяет их к реальному DOM. Использует ключи для оптимизации.',
    category: 'react',
    difficulty: 'advanced',
    tags: ['react', 'reconciliation', 'virtual-dom', 'algorithms', 'performance']
  }
];
