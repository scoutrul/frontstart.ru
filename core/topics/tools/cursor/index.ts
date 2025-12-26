import { Topic } from '../../../types';
import { CURSOR_BEGINNER_TOPICS } from './beginner';
import { CURSOR_INTERMEDIATE_TOPICS } from './intermediate';
import { CURSOR_ADVANCED_TOPICS } from './advanced';

export const CURSOR_TOPICS: Topic[] = [
  ...CURSOR_BEGINNER_TOPICS,
  ...CURSOR_INTERMEDIATE_TOPICS,
  ...CURSOR_ADVANCED_TOPICS
];

