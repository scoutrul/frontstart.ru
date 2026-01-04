import { Topic, Category } from '../../../core/types';

/**
 * Нормализует строку для сравнения: приводит к нижнему регистру и разбивает на слова
 */
const normalizeString = (str: string): string[] => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ') // Убираем спецсимволы, оставляем пробелы и дефисы
    .split(/\s+|-|_/) // Разбиваем по пробелам, дефисам и подчеркиваниям
    .filter(word => word.length > 0); // Убираем пустые строки
};

/**
 * Проверяет, есть ли пересечение слов между двумя строками
 * Проверяется в обе стороны: слова из tag в category и наоборот
 */
const hasWordMatch = (tag: string, categoryText: string): boolean => {
  const tagWords = normalizeString(tag);
  const categoryWords = normalizeString(categoryText);
  
  // Проверяем в обе стороны: есть ли слова из тега в категории или наоборот
  return tagWords.some(tagWord => 
    categoryWords.some(catWord => 
      tagWord.includes(catWord) || catWord.includes(tagWord)
    )
  );
};

/**
 * Автоматически находит связанные темы на основе тегов текущей темы
 * Если тег темы входит в название/id категории (или наоборот), 
 * все темы из этой категории добавляются в результат
 * 
 * @param currentTopic - текущая тема
 * @param allCategories - все категории из всех мета-категорий
 * @returns массив id связанных тем
 */
export const findRelatedTopicsByTags = (
  currentTopic: Topic,
  allCategories: Category[]
): string[] => {
  if (!currentTopic.tags || currentTopic.tags.length === 0) {
    return [];
  }

  const relatedTopicIds = new Set<string>();

  // Проходим по всем категориям
  for (const category of allCategories) {
    // Проверяем каждый тег текущей темы
    for (const tag of currentTopic.tags) {
      // Проверяем совпадение с id категории
      if (hasWordMatch(tag, category.id)) {
        // Добавляем все темы из этой категории
        category.topics.forEach(topic => {
          if (topic.id !== currentTopic.id) {
            relatedTopicIds.add(topic.id);
          }
        });
        break; // Если нашли совпадение, переходим к следующей категории
      }

      // Проверяем совпадение с названием категории
      if (hasWordMatch(tag, category.title)) {
        // Добавляем все темы из этой категории
        category.topics.forEach(topic => {
          if (topic.id !== currentTopic.id) {
            relatedTopicIds.add(topic.id);
          }
        });
        break; // Если нашли совпадение, переходим к следующей категории
      }
    }
  }

  return Array.from(relatedTopicIds);
};
