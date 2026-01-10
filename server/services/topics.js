// Сервис для работы с темами
// Читает данные из topics.json (генерируется скриптом generate-topics-json.js)
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TOPICS_JSON_FILE = join(__dirname, '..', 'topics.json');

let cachedTopicsData = null;

// Маппинг ID мета-категорий на их названия
const META_CATEGORY_NAMES = {
  'computer-science': 'Информатика',
  'network': 'Сеть',
  'tools': 'Инструменты',
  'markup': 'Верстка',
  'javascript': 'JavaScript',
  'typescript': 'TypeScript',
  'architecture': 'Архитектура',
  'frameworks': 'Фреймворки',
  'optimization': 'Оптимизация',
  'security': 'Безопасность',
  'hiring': 'Найм в IT'
};

// Маппинг ID категорий на их названия (примеры, нужно дополнить)
const CATEGORY_NAMES = {
  // Computer Science
  'representation-and-information': 'Репрезентация и информация',
  'algorithms-and-logic': 'Алгоритмы и логика',
  'mechanization': 'Механизация вычислений',
  'programming-concept': 'Концепция программирования',
  'electronic-computers': 'Электронные компьютеры',
  'processors-and-microprocessors': 'Процессоры',
  'operating-systems': 'Операционные системы',
  'programming-languages': 'Языки программирования',
  'internet': 'Интернет',
  'data-structures': 'Структуры данных',
  'algorithms': 'Алгоритмы',
  
  // Hiring
  'hiring-reality': 'Реальность рынка',
  'hiring-strategy': 'Стратегия поиска',
  'hiring-resume': 'Резюме',
  'hiring-interview': 'Собеседование',
  'hiring-offer': 'Оффер',
  'hiring-career': 'Карьера',
  
  // Optimization
  'performance': 'Производительность',
  'rendering': 'Рендеринг',
  'code-optimization': 'Оптимизация кода',
  
  // Security
  'security-introduction': 'Введение в веб-безопасность',
  'security-xss': 'XSS (Cross-Site Scripting)',
  'security-csrf': 'CSRF (Cross-Site Request Forgery)',
  'security-cors': 'CORS (Cross-Origin Resource Sharing)',
  'security-cookies': 'Cookies и безопасность',
  'security-csp': 'Content Security Policy (CSP)',
  'security-authentication': 'Аутентификация и авторизация',
  'security-data-storage': 'Хранение данных',
  'security-https': 'HTTPS и шифрование',
  'security-api': 'Защита API',
  'security-owasp': 'OWASP Top 10',
  'security-dependencies': 'Безопасность зависимостей',
  'security-production': 'Безопасность в production',
  'security-basics': 'Основы безопасности',
  'xss': 'XSS',
  'csrf': 'CSRF',
  'cors': 'CORS',
  'authentication': 'Аутентификация',
  
  // Frameworks
  'fundamentals-evolution': 'Эволюция и философия',
  'fundamentals-component-model': 'Компонентная модель',
  'fundamentals-reactivity': 'Реактивность',
  'fundamentals-state-management': 'Управление состоянием',
  'fundamentals-rendering': 'Стратегии рендеринга',
  'fundamentals-meta-frameworks': 'Мета-фреймворки',
  'fundamentals-architecture': 'Архитектура приложений',
  'fundamentals-performance': 'Производительность',
  'fundamentals-ecosystem': 'Экосистема и инструменты',
  'fundamentals-future': 'Будущее и альтернативы',
  'fundamentals-interviews': 'Собеседования',
  'frameworks-evolution': 'Эволюция фреймворков',
  'react': 'React',
  'vue': 'Vue',
  'svelte': 'Svelte',
  
  // Architecture
  'architecture-intro': 'Введение',
  'architecture-patterns': 'Паттерны',
  'architecture-component': 'Компонентная архитектура',
  
  // TypeScript
  'ts-basics': 'Основы',
  'ts-types': 'Типы',
  'ts-advanced': 'Продвинутое',
  
  // JavaScript
  'js-basics': 'Основы',
  'js-functions': 'Функции',
  'js-objects': 'Объекты',
  'js-async': 'Асинхронность',
  'js-advanced': 'Продвинутое',
  
  // Markup
  'ui-ux-intro': 'UI/UX',
  'html': 'HTML',
  'css': 'CSS',
  'animations': 'Анимации',
  
  // Tools
  'tools-basics': 'Основы',
  'git': 'Git',
  'testing': 'Тестирование',
  'ai': 'AI',
  
  // Network
  'network-basics': 'Основы',
  'http': 'HTTP',
  'websocket': 'WebSocket',
  'rest': 'REST',
  'graphql': 'GraphQL'
};

/**
 * Загрузить данные тем из JSON
 */
function loadTopicsData() {
  if (cachedTopicsData) {
    return cachedTopicsData;
  }

  if (!existsSync(TOPICS_JSON_FILE)) {
    throw new Error(`topics.json not found at ${TOPICS_JSON_FILE}. Run: node scripts/generate-topics-json.js`);
  }

  try {
    const content = readFileSync(TOPICS_JSON_FILE, 'utf-8');
    cachedTopicsData = JSON.parse(content);
    return cachedTopicsData;
  } catch (error) {
    throw new Error(`Failed to load topics.json: ${error.message}`);
  }
}

/**
 * Получить все темы из всех мета-категорий
 */
export function getAllTopics() {
  const data = loadTopicsData();
  return data.topics || [];
}

/**
 * Получить тему по ID
 */
export function getTopicById(id) {
  const allTopics = getAllTopics();
  return allTopics.find(t => t.id === id);
}

/**
 * Найти мета-категорию для темы по ID
 */
export function findTopicMetaCategory(topicId) {
  const data = loadTopicsData();
  const topicMeta = data.topicsWithMeta?.find(t => t.topicId === topicId);
  return topicMeta ? topicMeta.metaCategoryId : null;
}

/**
 * Найти метараздел и подраздел для темы по ID
 */
export function findTopicCategories(topicId) {
  const data = loadTopicsData();
  const topicMeta = data.topicsWithMeta?.find(t => t.topicId === topicId);
  return topicMeta ? {
    metaCategoryId: topicMeta.metaCategoryId,
    categoryId: topicMeta.categoryId
  } : null;
}

/**
 * Получить все мета-категории с их темами
 */
export function getTopicsByMetaCategory() {
  const data = loadTopicsData();
  const topics = getAllTopics();
  const topicsWithMeta = data.topicsWithMeta || [];
  
  const result = {};
  
  topics.forEach(topic => {
    const meta = topicsWithMeta.find(m => m.topicId === topic.id);
    if (meta) {
      if (!result[meta.metaCategoryId]) {
        result[meta.metaCategoryId] = [];
      }
      result[meta.metaCategoryId].push(topic);
    }
  });
  
  return result;
}

/**
 * Форматировать ID категории в читаемое название
 */
function formatCategoryId(categoryId) {
  // Если есть в маппинге - используем его
  if (CATEGORY_NAMES[categoryId]) {
    return CATEGORY_NAMES[categoryId];
  }
  
  // Иначе форматируем ID: убираем префикс мета-категории, заменяем дефисы на пробелы, капитализируем
  let formatted = categoryId;
  
  // Убираем префиксы типа "security-", "architecture-", "frameworks-" и т.д.
  const prefixes = ['security-', 'architecture-', 'frameworks-', 'typescript-', 'javascript-', 'markup-', 'tools-', 'network-', 'optimization-', 'hiring-'];
  for (const prefix of prefixes) {
    if (formatted.startsWith(prefix)) {
      formatted = formatted.substring(prefix.length);
      break;
    }
  }
  
  // Заменяем дефисы на пробелы и капитализируем каждое слово
  formatted = formatted
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return formatted;
}

/**
 * Получить полный путь к теме (Метакатегория / Категория / Топик)
 */
export function getTopicPath(topicId) {
  const topic = getTopicById(topicId);
  if (!topic) return null;
  
  const categories = findTopicCategories(topicId);
  if (!categories) return topic.title;
  
  const metaCategoryName = META_CATEGORY_NAMES[categories.metaCategoryId] || categories.metaCategoryId;
  const categoryName = formatCategoryId(categories.categoryId);
  
  return `${metaCategoryName} / ${categoryName} / ${topic.title}`;
}
