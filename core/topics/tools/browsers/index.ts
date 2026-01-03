import { Topic } from '../../../types';
import { BROWSERS_BEGINNER_TOPICS } from './beginner';
import { BROWSERS_INTERMEDIATE_TOPICS } from './intermediate';

export const BROWSERS_TOPICS: Topic[] = [
  ...BROWSERS_BEGINNER_TOPICS,
  ...BROWSERS_INTERMEDIATE_TOPICS
];
