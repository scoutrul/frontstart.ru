import { InterviewCategory } from '../../../types';
import { ARCHITECTURE_BEGINNER_QUESTIONS } from './beginner';
import { ARCHITECTURE_INTERMEDIATE_QUESTIONS } from './intermediate';
import { ARCHITECTURE_ADVANCED_QUESTIONS } from './advanced';

export const ARCHITECTURE_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'architecture',
  title: 'Архитектура',
  questions: [
    ...ARCHITECTURE_BEGINNER_QUESTIONS,
    ...ARCHITECTURE_INTERMEDIATE_QUESTIONS,
    ...ARCHITECTURE_ADVANCED_QUESTIONS
  ]
};
