import { InterviewQuestion } from '../../../types';

export const NETWORK_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'network-intermediate-http2',
    question: 'Чем HTTP/2 отличается от HTTP/1.1?',
    answer: 'HTTP/2 бинарный, поддерживает мультиплексирование, сжатие заголовков и server push, что повышает производительность по сравнению с HTTP/1.1.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'http', 'http2', 'performance']
  },
  {
    id: 'network-intermediate-cors',
    question: 'Что такое CORS и зачем он нужен?',
    answer: 'CORS — это браузерная политика безопасности, которая через HTTP-заголовки определяет, разрешены ли кросс-доменные запросы.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'cors', 'security', 'browser']
  },
  {
    id: 'network-intermediate-options',
    question: 'Для чего нужен HTTP-метод OPTIONS?',
    answer: 'OPTIONS используется для preflight-запросов CORS, чтобы проверить, разрешён ли основной кросс-доменный запрос.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'http', 'options', 'cors', 'preflight']
  },
  {
    id: 'network-intermediate-simple-request',
    question: 'Что такое простой запрос в контексте CORS?',
    answer: 'Простой запрос — это GET, POST или HEAD без нестандартных заголовков и с допустимым Content-Type, не требующий preflight.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'cors', 'simple-request', 'preflight']
  },
  {
    id: 'network-intermediate-cors-headers',
    question: 'Какие заголовки CORS вы знаете?',
    answer: 'Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials, Access-Control-Max-Age.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'cors', 'headers']
  },
  {
    id: 'network-intermediate-websocket',
    question: 'Что такое WebSocket и чем он отличается от HTTP?',
    answer: 'WebSocket — двусторонний протокол поверх TCP с постоянным соединением, в отличие от однонаправленного request-response HTTP.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'websocket', 'protocols', 'real-time']
  },
  {
    id: 'network-intermediate-websocket-handshake',
    question: 'Что такое handshake в WebSocket?',
    answer: 'Handshake — это начальный HTTP-запрос с заголовком Upgrade, после которого соединение переключается на WebSocket-протокол.',
    category: 'network',
    difficulty: 'intermediate',
    tags: ['network', 'websocket', 'handshake', 'protocols']
  }
];
