import { Topic } from '../../../types';
import { NODEJS_BEGINNER_TOPICS } from './beginner';
import { NODEJS_INTERMEDIATE_TOPICS } from './intermediate';
import { NODEJS_ADVANCED_TOPICS } from './advanced';

export const NODEJS_TOPICS: Topic[] = [
  ...NODEJS_BEGINNER_TOPICS,
  ...NODEJS_INTERMEDIATE_TOPICS,
  ...NODEJS_ADVANCED_TOPICS
];
