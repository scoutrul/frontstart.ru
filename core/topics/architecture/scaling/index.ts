import { Topic } from '../../../types';
import { SCALING_BEGINNER_TOPICS } from './beginner';
import { SCALING_INTERMEDIATE_TOPICS } from './intermediate';
import { SCALING_ADVANCED_TOPICS } from './advanced';

export const SCALING_TOPICS: Topic[] = [
  ...SCALING_BEGINNER_TOPICS,
  ...SCALING_INTERMEDIATE_TOPICS,
  ...SCALING_ADVANCED_TOPICS
];
