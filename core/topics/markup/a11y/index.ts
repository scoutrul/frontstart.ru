import { Topic } from '../../../types';
import { A11Y_BEGINNER_TOPICS } from './beginner';
import { A11Y_INTERMEDIATE_TOPICS } from './intermediate';
import { A11Y_ADVANCED_TOPICS } from './advanced';

export const A11Y_TOPICS: Topic[] = [
  ...A11Y_BEGINNER_TOPICS,
  ...A11Y_INTERMEDIATE_TOPICS,
  ...A11Y_ADVANCED_TOPICS
];
