import { InterviewCategory } from '../../../types';
import { HTML_BEGINNER_QUESTIONS } from './beginner';
import { HTML_INTERMEDIATE_QUESTIONS } from './intermediate';
import { HTML_ADVANCED_QUESTIONS } from './advanced';

export const HTML_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'html',
  title: 'HTML и доступность',
  questions: [
    ...HTML_BEGINNER_QUESTIONS,
    ...HTML_INTERMEDIATE_QUESTIONS,
    ...HTML_ADVANCED_QUESTIONS
  ]
};
