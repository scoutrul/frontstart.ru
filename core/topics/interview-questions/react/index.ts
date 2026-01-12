import { InterviewCategory } from '../../../types';
import { REACT_BEGINNER_QUESTIONS } from './beginner';
import { REACT_INTERMEDIATE_QUESTIONS } from './intermediate';
import { REACT_ADVANCED_QUESTIONS } from './advanced';

export const REACT_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'react',
  title: 'React',
  questions: [
    ...REACT_BEGINNER_QUESTIONS,
    ...REACT_INTERMEDIATE_QUESTIONS,
    ...REACT_ADVANCED_QUESTIONS
  ]
};
