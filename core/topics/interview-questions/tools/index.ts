import { InterviewCategory } from '../../../types';
import { TOOLS_BEGINNER_QUESTIONS } from './beginner';
import { TOOLS_INTERMEDIATE_QUESTIONS } from './intermediate';
import { TOOLS_ADVANCED_QUESTIONS } from './advanced';

export const TOOLS_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'tools',
  title: 'Инструменты',
  questions: [
    ...TOOLS_BEGINNER_QUESTIONS,
    ...TOOLS_INTERMEDIATE_QUESTIONS,
    ...TOOLS_ADVANCED_QUESTIONS
  ]
};
