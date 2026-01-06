import { Topic } from '../../../types';
import { PRACTICE_BEGINNER_TOPICS } from './beginner';
import { PRACTICE_INTERMEDIATE_TOPICS } from './intermediate';
import { PRACTICE_ADVANCED_TOPICS } from './advanced';

export const PRACTICE_TOPICS: Topic[] = [
  ...PRACTICE_BEGINNER_TOPICS,
  ...PRACTICE_INTERMEDIATE_TOPICS,
  ...PRACTICE_ADVANCED_TOPICS
];
