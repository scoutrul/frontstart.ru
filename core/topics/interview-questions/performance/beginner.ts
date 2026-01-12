import { InterviewQuestion } from '../../../types';

export const PERFORMANCE_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'performance-beginner-core-web-vitals',
    question: 'Что такое Core Web Vitals (LCP, FID, CLS)?',
    answer: 'LCP (загрузка самого большого контента), FID (задержка первого ввода), CLS (визуальная стабильность). Измеряйте через Lighthouse, Web Vitals.',
    category: 'performance',
    difficulty: 'beginner',
    tags: ['performance', 'core-web-vitals', 'lcp', 'fid', 'cls', 'metrics', 'basics']
  },
  {
    id: 'performance-beginner-lazy-loading',
    question: 'Как оптимизировать загрузку изображений (lazy loading, responsive images)?',
    answer: 'Lazy loading откладывает загрузку невидимых изображений. <img srcset sizes> для адаптивных изображений. Используйте loading="lazy" или Intersection Observer.',
    category: 'performance',
    difficulty: 'beginner',
    tags: ['performance', 'images', 'lazy-loading', 'optimization', 'basics']
  },
  {
    id: 'performance-beginner-fcp-tti',
    question: 'Что такое First Contentful Paint (FCP), Time to Interactive (TTI)?',
    answer: 'FCP — время до первого отображения контента. TTI — время до полной интерактивности страницы. Важные метрики производительности.',
    category: 'performance',
    difficulty: 'beginner',
    tags: ['performance', 'metrics', 'fcp', 'tti', 'basics']
  }
];
