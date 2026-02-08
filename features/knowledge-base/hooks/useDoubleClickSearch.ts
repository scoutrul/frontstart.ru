import { useEffect, RefObject } from 'react';

/**
 * Хук для обработки двойного клика по тексту с последующим поиском выделенного слова
 * Поддерживает как двойной клик мышкой, так и двойной тап на мобильных устройствах
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

    const handleSearch = (target: Node) => {
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

    const handleDoubleClick = (e: MouseEvent) => {
      handleSearch(e.target as Node);
    };

    // Обработка двойного тапа на мобильных
    let lastTapTime = 0;
    let lastTapX = 0;
    let lastTapY = 0;
    const DOUBLE_TAP_DELAY = 300; // мс между тапами
    const MAX_DISTANCE = 50; // максимальное расстояние между тапами в пикселях

    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as Node;
      const touch = e.touches[0];
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTapTime;

      if (timeDiff < DOUBLE_TAP_DELAY && lastTapTime !== 0) {
        // Проверяем расстояние между тапами
        const distance = Math.sqrt(
          Math.pow(touch.clientX - lastTapX, 2) +
          Math.pow(touch.clientY - lastTapY, 2)
        );
        
        if (distance < MAX_DISTANCE) {
          e.preventDefault(); // Предотвращаем зум
          handleSearch(target);
          lastTapTime = 0;
          return;
        }
      }

      // Сохраняем данные текущего тапа
      lastTapX = touch.clientX;
      lastTapY = touch.clientY;
      lastTapTime = currentTime;
    };

    const element = containerRef.current;
    element.addEventListener('dblclick', handleDoubleClick);
    element.addEventListener('touchstart', handleTouchStart);

    return () => {
      if (element) {
        element.removeEventListener('dblclick', handleDoubleClick);
        element.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, [containerRef, onSearch]);
};
