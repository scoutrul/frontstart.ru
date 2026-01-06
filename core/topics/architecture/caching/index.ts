import { Topic } from '../../../types';
import { CACHING_BEGINNER_TOPICS } from './beginner';
import { CACHING_INTERMEDIATE_TOPICS } from './intermediate';
import { CACHING_ADVANCED_TOPICS } from './advanced';

export const CACHING_TOPICS: Topic[] = [
  ...CACHING_BEGINNER_TOPICS,
  ...CACHING_INTERMEDIATE_TOPICS,
  ...CACHING_ADVANCED_TOPICS
];
