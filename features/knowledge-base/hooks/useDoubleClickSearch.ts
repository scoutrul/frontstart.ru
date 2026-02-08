import { useEffect, RefObject } from 'react';

/**
 * Хук для обработки двойного клика по тексту с последующим поиском выделенного слова
 */
export const useDoubleClickSearch = (
  containerRef: RefObject<HTMLElement | null>,
  onSearch: (word: string) => void
) => {
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const getWordFromSelection = (): string | null => {
      const selection = window.getSelection();
      
      if (!selection || selection.rangeCount === 0) {
        return null;
      }

      const selectedText = selection.toString().trim();
      
      if (!selectedText || selectedText.length < 2) {
        return null;
      }

      // Очищаем от спецсимволов, оставляем только буквы, цифры, дефис
      const cleanedWord = selectedText.replace(/[^\p{L}\p{N}\-]/gu, '');
      
      if (cleanedWord.length < 2) {
        return null;
      }

      return cleanedWord;
    };

    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!containerRef.current || !containerRef.current.contains(target)) {
        return;
      }

      // Увеличиваем задержку, чтобы браузер успел выделить слово
      setTimeout(() => {
        const word = getWordFromSelection();
        
        if (word) {
          onSearch(word);
          // Снимаем выделение
          window.getSelection()?.removeAllRanges();
        }
      }, 250);
    };

    const element = containerRef.current;
    element.addEventListener('dblclick', handleDoubleClick);

    return () => {
      if (element) {
        element.removeEventListener('dblclick', handleDoubleClick);
      }
    };
  }, [containerRef, onSearch]);
};
