import { InterviewCategory } from '../../../types';
import { JAVASCRIPT_BEGINNER_QUESTIONS } from './beginner';
import { JAVASCRIPT_INTERMEDIATE_QUESTIONS } from './intermediate';
import { JAVASCRIPT_ADVANCED_QUESTIONS } from './advanced';

export const JAVASCRIPT_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'javascript',
  title: 'JavaScript',
  questions: [
    ...JAVASCRIPT_BEGINNER_QUESTIONS,
    ...JAVASCRIPT_INTERMEDIATE_QUESTIONS,
    ...JAVASCRIPT_ADVANCED_QUESTIONS
  ]
};
