// Система циклического расписания постов
// Детерминированная логика выбора тем для ежедневного постинга

// Гуманитарные разделы (чередуются по очереди)
export const HUMANITARIAN = ['computer-science', 'hiring'];

// Технические разделы (скользящий цикл по 3 раздела в день)
export const TECHNICAL = [
  'optimization',    // 0
  'security',        // 1
  'frameworks',      // 2
  'architecture',    // 3
  'typescript',      // 4
  'javascript',      // 5
  'markup',          // 6
  'tools',           // 7
  'network'          // 8
];

/**
 * Инициализировать состояние расписания, если его нет
 */
export function initializeScheduleState(state) {
  // Инициализируем поля расписания, если их нет
  if (state.cycleDay === undefined) {
    state.cycleDay = 0;
  }
  
  if (state.humanitarianIndex === undefined) {
    state.humanitarianIndex = 0;
  }
  
  if (!state.metaCategoryPointers) {
    state.metaCategoryPointers = {};
  }
  
  // Инициализируем указатели для всех мета-категорий
  const allCategories = [...HUMANITARIAN, ...TECHNICAL];
  allCategories.forEach(metaId => {
    if (state.metaCategoryPointers[metaId] === undefined) {
      state.metaCategoryPointers[metaId] = 0;
    }
  });
  
  return state;
}

/**
 * Получить тему из мета-категории по указателю
 * Возвращает { topic, newPointer } или null если темы закончились
 * Пропускает уже запощенные темы
 */
function getTopicFromCategory(metaId, pointer, topicsByMeta, resetOnEnd = true, postedIds = []) {
  const topics = topicsByMeta[metaId];
  
  if (!topics || topics.length === 0) {
    console.warn(`No topics found in meta-category: ${metaId}`);
    return null;
  }
  
  // Фильтруем неопубликованные темы
  const unpostedTopics = topics.filter(t => !postedIds.includes(t.id));
  
  if (unpostedTopics.length === 0) {
    console.warn(`All topics in meta-category ${metaId} have been posted`);
    return null;
  }
  
  // Если указатель вышел за границы
  if (pointer >= topics.length) {
    if (resetOnEnd) {
      // Сбрасываем в начало (цикличность)
      pointer = 0;
    } else {
      // Темы закончились
      console.warn(`No more topics in meta-category: ${metaId}`);
      return null;
    }
  }
  
  // Ищем следующую незапощенную тему, начиная с указателя
  let startPointer = pointer;
  let currentPointer = pointer;
  let attempts = 0;
  const maxAttempts = topics.length;
  
  while (attempts < maxAttempts) {
    const currentTopic = topics[currentPointer];
    
    // Если тема не запощена, используем её
    if (!postedIds.includes(currentTopic.id)) {
      const newPointer = currentPointer + 1;
      return { topic: currentTopic, newPointer };
    }
    
    // Переходим к следующей теме
    currentPointer = (currentPointer + 1) % topics.length;
    attempts++;
    
    // Если прошли полный круг и вернулись к началу
    if (currentPointer === startPointer && attempts > 0) {
      break;
    }
  }
  
  // Если все темы запощены
  console.warn(`All topics in meta-category ${metaId} starting from pointer ${pointer} have been posted`);
  return null;
}

/**
 * Спланировать посты на один день
 * Возвращает { posts: [...], newState }
 * posts: [{ topic, metaCategoryId, position }]
 */
export function planDailyPosts(state, topicsByMeta, resetOnEnd = true) {
  // Инициализируем состояние, если нужно
  state = initializeScheduleState(state);
  
  const posts = [];
  const newState = JSON.parse(JSON.stringify(state)); // Deep clone
  const postedIds = state.posted || [];
  
  // 1. Гуманитарный пост
  const humanitarianMetaId = HUMANITARIAN[newState.humanitarianIndex];
  const humanitarianPointer = newState.metaCategoryPointers[humanitarianMetaId];
  
  const humanitarianResult = getTopicFromCategory(
    humanitarianMetaId,
    humanitarianPointer,
    topicsByMeta,
    resetOnEnd,
    postedIds
  );
  
  if (humanitarianResult) {
    posts.push({
      topic: humanitarianResult.topic,
      metaCategoryId: humanitarianMetaId,
      position: humanitarianPointer,
      type: 'humanitarian'
    });
    
    // Обновляем указатель
    newState.metaCategoryPointers[humanitarianMetaId] = humanitarianResult.newPointer;
    
    // Переключаем индекс гуманитарного раздела
    newState.humanitarianIndex = (newState.humanitarianIndex + 1) % HUMANITARIAN.length;
  }
  
  // 2. Три технических поста (скользящее окно)
  const technicalIndices = [
    newState.cycleDay,
    (newState.cycleDay + 1) % TECHNICAL.length,
    (newState.cycleDay + 2) % TECHNICAL.length
  ];
  
  technicalIndices.forEach(techIndex => {
    const metaId = TECHNICAL[techIndex];
    const pointer = newState.metaCategoryPointers[metaId];
    
    const result = getTopicFromCategory(metaId, pointer, topicsByMeta, resetOnEnd, postedIds);
    
    if (result) {
      posts.push({
        topic: result.topic,
        metaCategoryId: metaId,
        position: pointer,
        type: 'technical'
      });
      
      // Обновляем указатель
      newState.metaCategoryPointers[metaId] = result.newPointer;
    }
  });
  
  // Сдвигаем день цикла на 1
  newState.cycleDay = (newState.cycleDay + 1) % TECHNICAL.length;
  
  return { posts, newState };
}

/**
 * Предпросмотр постов на N дней вперёд
 * Не изменяет переданное состояние
 */
export function previewNextPosts(state, topicsByMeta, days = 7, resetOnEnd = true) {
  // Инициализируем состояние, если нужно
  state = initializeScheduleState(state);
  
  const preview = [];
  let currentState = JSON.parse(JSON.stringify(state)); // Deep clone
  
  for (let day = 0; day < days; day++) {
    const { posts, newState } = planDailyPosts(currentState, topicsByMeta, resetOnEnd);
    
    preview.push({
      day: day + 1,
      date: getDateOffset(day),
      cycleDay: currentState.cycleDay,
      humanitarianIndex: currentState.humanitarianIndex,
      posts: posts.map(p => ({
        topicId: p.topic.id,
        title: p.topic.title,
        metaCategoryId: p.metaCategoryId,
        position: p.position,
        type: p.type
      }))
    });
    
    currentState = newState;
  }
  
  return preview;
}

/**
 * Получить дату со смещением в днях от сегодня
 */
function getDateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
}

/**
 * Форматировать превью для вывода в консоль
 */
export function formatPreview(preview) {
  let output = '\n=== PREVIEW: Расписание постов ===\n\n';
  
  preview.forEach(day => {
    output += `День ${day.day} (${day.date})\n`;
    output += `  Цикл: день ${day.cycleDay}, гуманитарный индекс: ${day.humanitarianIndex}\n`;
    output += `  Посты:\n`;
    
    day.posts.forEach((post, idx) => {
      const typeLabel = post.type === 'humanitarian' ? '[Гуманитарный]' : '[Технический]';
      output += `    ${idx + 1}. ${typeLabel} ${post.metaCategoryId}[${post.position}]\n`;
      output += `       ${post.topicId}\n`;
      output += `       "${post.title}"\n`;
    });
    
    output += '\n';
  });
  
  return output;
}
