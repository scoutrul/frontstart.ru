import { InterviewQuestion } from '../../../types';

export const NETWORK_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'network-beginner-http',
    question: 'Что такое HTTP и для каких целей он используется?',
    answer: 'HTTP — это протокол прикладного уровня для передачи данных между клиентом и сервером, изначально для HTML-документов, сейчас — для любых ресурсов (JSON, файлы и т.д.).',
    category: 'network',
    difficulty: 'beginner',
    tags: ['network', 'http', 'protocols', 'basics']
  },
  {
    id: 'network-beginner-http-request',
    question: 'Из каких элементов состоит HTTP-запрос?',
    answer: 'HTTP-запрос состоит из стартовой строки (метод, URL, версия), заголовков и опционального тела запроса.',
    category: 'network',
    difficulty: 'beginner',
    tags: ['network', 'http', 'request', 'basics']
  },
  {
    id: 'network-beginner-http-methods',
    question: 'Какие методы HTTP запросов вы знаете?',
    answer: 'GET (получение), POST (создание), PUT (обновление), PATCH (частичное обновление), DELETE (удаление), HEAD, OPTIONS.',
    category: 'network',
    difficulty: 'beginner',
    tags: ['network', 'http', 'methods', 'rest', 'basics']
  },
  {
    id: 'network-beginner-get-body',
    question: 'Можно ли отправлять body в GET-запросе?',
    answer: 'Спецификация не запрещает, но семантически GET не предназначен для body, браузеры и прокси могут его игнорировать.',
    category: 'network',
    difficulty: 'beginner',
    tags: ['network', 'http', 'get', 'methods', 'basics']
  }
];
