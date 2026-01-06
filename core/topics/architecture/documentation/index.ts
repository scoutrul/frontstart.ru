import { Topic } from '../../../types';
import { DOCUMENTATION_BEGINNER_TOPICS } from './beginner';
import { DOCUMENTATION_INTERMEDIATE_TOPICS } from './intermediate';
import { DOCUMENTATION_ADVANCED_TOPICS } from './advanced';

export const DOCUMENTATION_TOPICS: Topic[] = [
  ...DOCUMENTATION_BEGINNER_TOPICS,
  ...DOCUMENTATION_INTERMEDIATE_TOPICS,
  ...DOCUMENTATION_ADVANCED_TOPICS
];
