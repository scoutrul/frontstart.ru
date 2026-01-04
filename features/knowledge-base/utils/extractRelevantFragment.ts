import { createWordBoundaryRegex } from './wordBoundaryRegex';

/**
 * Извлекает релевантный фрагмент описания, содержащий одно из искомых слов
 * 
 * @param description - полное описание темы
 * @param searchWords - массив слов для поиска (из тегов или поискового запроса)
 * @param contextLength - количество символов контекста до и после найденного слова (по умолчанию 80)
 * @returns объект с фрагментом и информацией о найденном слове
 */
export const extractRelevantFragment = (
  description: string | undefined,
  searchWords: string[],
  contextLength: number = 80
): { fragment: string; foundWord: string | null } => {
  if (!description || !searchWords || searchWords.length === 0) {
    return { fragment: description || '', foundWord: null };
  }

  // Нормализуем слова для поиска (lowercase, убираем спецсимволы)
  const normalizedWords = searchWords.map(word => 
    word.toLowerCase().replace(/[^\w\s-]/g, '')
  ).filter(word => word.length > 0);

  if (normalizedWords.length === 0) {
    return { fragment: description, foundWord: null };
  }

  // Ищем первое вхождение любого из слов
  let foundIndex = -1;
  let foundWord: string | null = null;
  let foundWordLength = 0;

  for (const word of normalizedWords) {
    // Ищем слово как отдельное слово (с границами слов, поддерживающими кириллицу)
    const wordRegex = createWordBoundaryRegex(word, 'i');
    const match = description.match(wordRegex);
    
    if (match && match.index !== undefined) {
      foundIndex = match.index;
      foundWord = match[0];
      foundWordLength = match[0].length;
      break;
    }
  }

  // Если слово не найдено, возвращаем начало описания
  if (foundIndex === -1) {
    const maxLength = 200;
    if (description.length <= maxLength) {
      return { fragment: description, foundWord: null };
    }
    return { 
      fragment: description.substring(0, maxLength) + '...', 
      foundWord: null 
    };
  }

  // Вычисляем границы фрагмента с контекстом
  const start = Math.max(0, foundIndex - contextLength);
  const end = Math.min(description.length, foundIndex + foundWordLength + contextLength);

  // Извлекаем фрагмент
  let fragment = description.substring(start, end);

  // Добавляем многоточие, если фрагмент обрезан
  if (start > 0) {
    fragment = '...' + fragment;
  }
  if (end < description.length) {
    fragment = fragment + '...';
  }

  return { fragment, foundWord };
};
