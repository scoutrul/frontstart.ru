import { Topic } from '../../../types';

export const REACT_TOPICS: Topic[] = [
  {
    id: 'react-basics',
    title: 'Основы React',
    description: 'React — библиотека для создания UI. Компоненты: функциональные компоненты, JSX синтаксис. Props: передача данных от родителя к ребёнку. State: useState для локального состояния компонента. Hooks: функции для работы с состоянием и жизненным циклом.',
    difficulty: 'beginner',
    tags: ['react', 'components', 'hooks'],
    keyPoints: [
      'Компоненты — переиспользуемые части UI.',
      'Props передают данные от родителя к ребёнку.',
      'State хранит локальное состояние компонента.',
      'useState возвращает значение и функцию обновления.',
      'JSX компилируется в вызовы React.createElement.'
    ],
    examples: [
      {
        title: 'Базовый компонент',
        code: `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Welcome name="John" />;
}`
      },
      {
        title: 'State',
        code: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
      }
    ],
    relatedTopics: ['react-hooks']
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    description: 'Hooks позволяют использовать состояние и жизненный цикл в функциональных компонентах. useState для состояния, useEffect для побочных эффектов, useContext для контекста. Кастомные хуки: создание переиспользуемой логики.',
    difficulty: 'intermediate',
    tags: ['react', 'hooks', 'state'],
    keyPoints: [
      'useState управляет локальным состоянием.',
      'useEffect выполняет побочные эффекты.',
      'useContext получает значение контекста.',
      'Кастомные хуки начинаются с "use".',
      'Hooks можно вызывать только на верхнем уровне.'
    ],
    examples: [
      {
        title: 'useEffect',
        code: `function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);
  
  return <div>{user?.name}</div>;
}`
      },
      {
        title: 'Кастомный хук',
        code: `function useFetch(url) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(url).then(r => r.json()).then(setData);
  }, [url]);
  
  return data;
}`
      }
    ],
    relatedTopics: ['react-basics']
  }
];

