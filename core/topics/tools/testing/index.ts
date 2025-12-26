import { Topic } from '../../../types';
import { TESTING_BEGINNER_TOPICS } from './beginner';
import { TESTING_INTERMEDIATE_TOPICS } from './intermediate';
import { TESTING_ADVANCED_TOPICS } from './advanced';

export const TESTING_TOPICS: Topic[] = [
  ...TESTING_BEGINNER_TOPICS,
  ...TESTING_INTERMEDIATE_TOPICS,
  ...TESTING_ADVANCED_TOPICS
];

