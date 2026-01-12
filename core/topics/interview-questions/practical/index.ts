import { InterviewCategory } from '../../../types';
import { PRACTICAL_BEGINNER_QUESTIONS } from './beginner';
import { PRACTICAL_INTERMEDIATE_QUESTIONS } from './intermediate';
import { PRACTICAL_ADVANCED_QUESTIONS } from './advanced';

export const PRACTICAL_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'practical',
  title: 'Практические задачи',
  questions: [
    ...PRACTICAL_BEGINNER_QUESTIONS,
    ...PRACTICAL_INTERMEDIATE_QUESTIONS,
    ...PRACTICAL_ADVANCED_QUESTIONS
  ]
};
