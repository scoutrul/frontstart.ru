import { InterviewCategory } from '../../../types';
import { SEO_SSR_BEGINNER_QUESTIONS } from './beginner';
import { SEO_SSR_INTERMEDIATE_QUESTIONS } from './intermediate';
import { SEO_SSR_ADVANCED_QUESTIONS } from './advanced';

export const SEO_SSR_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'seo-ssr',
  title: 'SEO и SSR',
  questions: [
    ...SEO_SSR_BEGINNER_QUESTIONS,
    ...SEO_SSR_INTERMEDIATE_QUESTIONS,
    ...SEO_SSR_ADVANCED_QUESTIONS
  ]
};
