import { InterviewQuestion } from '../../../types';

export const PRACTICAL_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'practical-beginner-vowels',
    question: 'Реализовать функцию подсчета гласных в строке.',
    answer: 'Использовать регулярное выражение /[aeiouAEIOU]/g с match() или filter() для подсчета совпадений.',
    category: 'practical',
    difficulty: 'beginner',
    tags: ['practical', 'algorithms', 'strings', 'basics']
  },
  {
    id: 'practical-beginner-simple-algorithms',
    question: 'Простые алгоритмические задачи',
    answer: 'Задачи на работу со строками, массивами, базовые циклы и условия. Примеры: поиск максимума, сумма элементов, проверка палиндрома.',
    category: 'practical',
    difficulty: 'beginner',
    tags: ['practical', 'algorithms', 'basics']
  }
];
