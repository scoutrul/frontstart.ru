import { InterviewQuestion } from '../../../types';

export const SEO_SSR_INTERMEDIATE_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'seo-ssr-intermediate-ssr-vs-isr',
    question: 'Чем SSR отличается от ISR?',
    answer: 'SSR рендерит страницу на каждый запрос, ISR обновляет статические страницы по расписанию.',
    category: 'seo-ssr',
    difficulty: 'intermediate',
    tags: ['seo', 'ssr', 'isr', 'rendering']
  },
  {
    id: 'seo-ssr-intermediate-csr-vs-ssr',
    question: 'В чем разница между SSR и CSR?',
    answer: 'CSR (Client-Side Rendering): браузер загружает пустой HTML, затем JavaScript, который рендерит интерфейс. SSR (Server-Side Rendering): сервер рендерит HTML и отправляет готовую страницу. SSR лучше для SEO и первичной загрузки, CSR более интерактивен после загрузки.',
    category: 'seo-ssr',
    difficulty: 'intermediate',
    tags: ['seo', 'ssr', 'csr', 'rendering', 'comparison']
  }
];
