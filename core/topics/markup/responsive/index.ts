import { Topic } from '../../../types';
import { RESPONSIVE_BEGINNER_TOPICS } from './beginner';
import { RESPONSIVE_INTERMEDIATE_TOPICS } from './intermediate';
import { RESPONSIVE_ADVANCED_TOPICS } from './advanced';

export const RESPONSIVE_TOPICS: Topic[] = [
  ...RESPONSIVE_BEGINNER_TOPICS,
  ...RESPONSIVE_INTERMEDIATE_TOPICS,
  ...RESPONSIVE_ADVANCED_TOPICS
];
