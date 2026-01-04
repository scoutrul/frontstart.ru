/**
 * Создает регулярное выражение для поиска слова с границами, поддерживающее кириллицу
 * 
 * @param word - слово для поиска
 * @param flags - флаги регулярного выражения (по умолчанию 'i' для case-insensitive)
 * @returns регулярное выражение с границами слов для кириллицы и латиницы
 */
export const createWordBoundaryRegex = (word: string, flags: string = 'i'): RegExp => {
  // Экранируем специальные символы регулярных выражений
  const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Используем Unicode-aware границы слов
  // (?<![а-яА-Яa-zA-Z0-9]) - не буква/цифра перед словом
  // (?![а-яА-Яa-zA-Z0-9]) - не буква/цифра после слова
  const pattern = `(?<![а-яА-Яa-zA-Z0-9])${escapedWord}(?![а-яА-Яa-zA-Z0-9])`;
  
  return new RegExp(pattern, flags);
};
