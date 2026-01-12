import { InterviewCategory } from '../../../types';
import { NETWORK_BEGINNER_QUESTIONS } from './beginner';
import { NETWORK_INTERMEDIATE_QUESTIONS } from './intermediate';
import { NETWORK_ADVANCED_QUESTIONS } from './advanced';

export const NETWORK_INTERVIEW_CATEGORY: InterviewCategory = {
  id: 'network',
  title: 'Сетевые протоколы',
  questions: [
    ...NETWORK_BEGINNER_QUESTIONS,
    ...NETWORK_INTERMEDIATE_QUESTIONS,
    ...NETWORK_ADVANCED_QUESTIONS
  ]
};
