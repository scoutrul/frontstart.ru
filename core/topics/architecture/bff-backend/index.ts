import { Topic } from '../../../types';
import { BFF_BACKEND_BEGINNER_TOPICS } from './beginner';
import { BFF_BACKEND_INTERMEDIATE_TOPICS } from './intermediate';
import { BFF_BACKEND_ADVANCED_TOPICS } from './advanced';

export const BFF_BACKEND_TOPICS: Topic[] = [
  ...BFF_BACKEND_BEGINNER_TOPICS,
  ...BFF_BACKEND_INTERMEDIATE_TOPICS,
  ...BFF_BACKEND_ADVANCED_TOPICS
];
