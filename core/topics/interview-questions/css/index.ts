import { InterviewCategory } from '../../../types';
import { CSS_BEGINNER_QUESTIONS } from './beginner';
import { CSS_INTERMEDIATE_QUESTIONS } from './intermediate';
import { CSS_ADVANCED_QUESTIONS } from './advanced';

export const CSS_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'css',
  title: 'CSS',
  questions: [
    ...CSS_BEGINNER_QUESTIONS,
    ...CSS_INTERMEDIATE_QUESTIONS,
    ...CSS_ADVANCED_QUESTIONS
  ]
};
