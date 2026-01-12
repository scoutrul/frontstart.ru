import { InterviewQuestion } from '../../../types';

export const REACT_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'react-beginner-what-is-react',
    question: 'Что такое React и его основные принципы?',
    answer: 'React — библиотека для построения UI на основе компонентов. Основные принципы: декларативность, компонентность, однонаправленный поток данных, Virtual DOM.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'basics', 'components', 'virtual-dom']
  },
  {
    id: 'react-beginner-virtual-dom',
    question: 'Что такое Virtual DOM и как он работает?',
    answer: 'Virtual DOM — это легковесное представление реального DOM в виде объектов JavaScript. При изменении состояния React создает новый Virtual DOM, сравнивает его с предыдущим (diffing), определяет минимальный набор изменений и применяет их к реальному DOM.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'virtual-dom', 'performance', 'basics']
  },
  {
    id: 'react-beginner-jsx',
    question: 'Что такое JSX и как он преобразуется?',
    answer: 'JSX — синтаксическое расширение JavaScript, позволяющее писать HTML-подобный код. Преобразуется в вызовы React.createElement() или в обычный JavaScript через Babel.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'jsx', 'syntax', 'basics']
  },
  {
    id: 'react-beginner-components',
    question: 'Какие бывают компоненты (функциональные, классовые)?',
    answer: 'Функциональные компоненты — функции, возвращающие JSX. Классовые компоненты — классы, расширяющие React.Component. Функциональные предпочтительны с появлением хуков.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'components', 'functional', 'class', 'basics']
  },
  {
    id: 'react-beginner-usestate',
    question: 'Как работает useState? Что такое ленивая инициализация?',
    answer: 'useState возвращает массив [значение, функция обновления]. Ленивая инициализация — передача функции в useState(() => initialValue) для вычисления начального значения только при первом рендере.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'hooks', 'usestate', 'state', 'basics']
  },
  {
    id: 'react-beginner-useeffect-basic',
    question: 'Как работает useEffect? Какие параметры принимает?',
    answer: 'useEffect выполняет побочные эффекты после рендера. Принимает функцию эффекта и массив зависимостей. Без зависимостей выполняется каждый рендер, с пустым массивом — один раз, с зависимостями — при их изменении.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'hooks', 'useeffect', 'side-effects', 'basics']
  },
  {
    id: 'react-beginner-keys',
    question: 'Как работает ключ (key) в списках и зачем он нужен?',
    answer: 'Ключи помогают React идентифицировать элементы списка между рендерами. Без ключей при изменении списка React может пересоздавать DOM-элементы, что неэффективно. Используйте стабильные уникальные идентификаторы (id), а не индексы.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'keys', 'lists', 'performance', 'basics']
  },
  {
    id: 'react-beginner-state-vs-variable',
    question: 'Чем отличается обычная переменная от state?',
    answer: 'Изменение state вызывает ререндер, обычной переменной — нет.',
    category: 'react',
    difficulty: 'beginner',
    tags: ['react', 'state', 'variables', 'rendering', 'basics']
  }
];
