// Конфигурация системы расписания постов

export const POSTING_CONFIG = {
  // Гуманитарные мета-разделы (чередуются по очереди)
  humanitarian: ['computer-science', 'hiring'],
  
  // Технические мета-разделы (скользящий цикл)
  technical: [
    'optimization',
    'security',
    'frameworks',
    'architecture',
    'typescript',
    'javascript',
    'markup',
    'tools',
    'network'
  ],
  
  // Количество постов в день по типам
  postsPerDay: {
    humanitarian: 1,
    technical: 3
  },
  
  // Сбрасывать указатель в начало при достижении конца раздела
  resetOnEnd: true,
  
  // Задержка между постами (мс)
  delayBetweenPosts: 2000,
  
  // Количество дней для предпросмотра по умолчанию
  defaultPreviewDays: 7
};
