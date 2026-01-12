import { InterviewQuestion } from '../../../types';

export const PRACTICAL_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'practical-intermediate-anagrams',
    question: 'Группировка анаграмм из массива слов.',
    answer: 'Отсортировать каждое слово, использовать отсортированную версию как ключ в Map для группировки.',
    category: 'practical',
    difficulty: 'intermediate',
    tags: ['practical', 'algorithms', 'arrays', 'strings', 'map']
  },
  {
    id: 'practical-intermediate-debounce-throttle',
    question: 'Реализовать дебаунс (debounce) и троттлинг (throttle).',
    answer: 'Debounce откладывает выполнение до паузы в вызовах. Throttle ограничивает частоту выполнения. Реализуются через setTimeout/clearTimeout.',
    category: 'practical',
    difficulty: 'intermediate',
    tags: ['practical', 'functions', 'performance', 'optimization']
  },
  {
    id: 'practical-intermediate-event-emitter',
    question: 'Реализовать EventEmitter с методами on, off, emit.',
    answer: 'Хранить подписчиков в Map по имени события. on добавляет подписчика, off удаляет, emit вызывает всех подписчиков события.',
    category: 'practical',
    difficulty: 'intermediate',
    tags: ['practical', 'patterns', 'event-emitter', 'observer']
  },
  {
    id: 'practical-intermediate-safe-get',
    question: 'Написать функцию get для безопасного получения значения из объекта по строковому пути.',
    answer: 'Разбить путь на части, итерироваться по объекту, проверяя существование каждого уровня. Вернуть undefined при отсутствии пути.',
    category: 'practical',
    difficulty: 'intermediate',
    tags: ['practical', 'objects', 'safety', 'nested']
  },
  {
    id: 'practical-intermediate-event-loop',
    question: 'Предсказать порядок вывода console.log с setTimeout, Promise, микрозадачами.',
    answer: 'Синхронный код → все микрозадачи (промисы) → одна макрозадача (setTimeout) → снова все микрозадачи → следующая макрозадача.',
    category: 'practical',
    difficulty: 'intermediate',
    tags: ['practical', 'javascript', 'event-loop', 'async', 'promises']
  }
];
