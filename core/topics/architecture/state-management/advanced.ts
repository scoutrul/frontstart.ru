import { Topic } from '../../../types';

export const STATE_MANAGEMENT_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'architecture-state-advanced-patterns',
    title: 'Продвинутые паттерны',
    difficulty: 'advanced',
    description: 'Продвинутые паттерны управления состоянием: нормализация сложных данных, оптимистичные обновления, undo/redo, временные путешествия (time travel), селекторы с мемоизацией. Эти паттерны нужны для сложных приложений с большим объёмом состояния и высокими требованиями к производительности.\n\nSenior-разработчик должен понимать, как проектировать систему управления состоянием для масштабируемых приложений: выбор правильных абстракций, оптимизация производительности, обработка edge cases. Это требует глубокого понимания не только библиотек, но и принципов проектирования.',
    keyPoints: [
      'Нормализация: структурирование сложных данных для эффективного обновления (Redux Toolkit нормализует автоматически).',
      'Оптимистичные обновления: показывать изменения сразу, откатывать при ошибке, улучшает UX.',
      'Undo/Redo: история изменений, возможность откатить действия (сложно реализовать правильно).',
      'Time Travel: отладка через воспроизведение истории состояний (Redux DevTools).',
      'Селекторы с мемоизацией: оптимизация вычислений (reselect для Redux).',
      'Производительность: избегать лишних ре-рендеров, использовать мемоизацию, нормализацию данных.'
    ],
    tags: ['architecture', 'state', 'patterns', 'performance', 'advanced'],
    examples: [
      {
        title: 'Оптимистичные обновления',
        code: `// Оптимистичное обновление: показывать сразу, откатывать при ошибке
async function updateUser(userId, newData) {
  // Сохранить старое состояние
  const previousUser = store.getState().users[userId];
  
  // Оптимистичное обновление
  store.dispatch({
    type: 'USER_UPDATE_OPTIMISTIC',
    payload: { userId, data: newData }
  });
  
  try {
    // Отправка на сервер
    const updatedUser = await fetch(\`/api/users/\${userId}\`, {
      method: 'PUT',
      body: JSON.stringify(newData)
    }).then(r => r.json());
    
    // Подтверждение
    store.dispatch({
      type: 'USER_UPDATE_SUCCESS',
      payload: { userId, data: updatedUser }
    });
  } catch (error) {
    // Откат при ошибке
    store.dispatch({
      type: 'USER_UPDATE_ERROR',
      payload: { userId, data: previousUser }
    });
  }
}

// Пользователь видит изменения сразу, UX лучше`
      },
      {
        title: 'Селекторы с мемоизацией',
        code: `import { createSelector } from 'reselect';

// Базовые селекторы
const getUsers = (state) => state.users;
const getFilter = (state) => state.filter;

// Мемоизированный селектор
const getFilteredUsers = createSelector(
  [getUsers, getFilter],
  (users, filter) => {
    // Вычисление только при изменении users или filter
    return users.filter(user => 
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// Использование
function UserList() {
  const filteredUsers = useSelector(getFilteredUsers);
  // Вычисление только при изменении users или filter
  // Не пересчитывается при изменении других частей состояния
}`
      }
    ],
    relatedTopics: ['architecture-state-global', 'architecture-performance-optimization'],
    funFact: 'Redux DevTools с функцией time travel (временные путешествия) был создан Дэном Абрамовым в 2015 году. Он позволяет "путешествовать" по истории состояний, что делает отладку Redux приложений намного проще. Эта функция вдохновила создание похожих инструментов для других библиотек управления состоянием.'
  }
];
