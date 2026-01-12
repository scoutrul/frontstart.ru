import { InterviewCategory } from '../../../types';
import { TYPESCRIPT_BEGINNER_QUESTIONS } from './beginner';
import { TYPESCRIPT_INTERMEDIATE_QUESTIONS } from './intermediate';
import { TYPESCRIPT_ADVANCED_QUESTIONS } from './advanced';

export const TYPESCRIPT_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'typescript',
  title: 'TypeScript',
  questions: [
    ...TYPESCRIPT_BEGINNER_QUESTIONS,
    ...TYPESCRIPT_INTERMEDIATE_QUESTIONS,
    ...TYPESCRIPT_ADVANCED_QUESTIONS
  ]
};
