import { InterviewCategory } from '../../../types';
import { PERFORMANCE_BEGINNER_QUESTIONS } from './beginner';
import { PERFORMANCE_INTERMEDIATE_QUESTIONS } from './intermediate';
import { PERFORMANCE_ADVANCED_QUESTIONS } from './advanced';

export const PERFORMANCE_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'performance',
  title: 'Производительность',
  questions: [
    ...PERFORMANCE_BEGINNER_QUESTIONS,
    ...PERFORMANCE_INTERMEDIATE_QUESTIONS,
    ...PERFORMANCE_ADVANCED_QUESTIONS
  ]
};
