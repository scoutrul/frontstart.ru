import { Topic } from '../../../types';
import { TERMINAL_BEGINNER_TOPICS } from './beginner';
import { TERMINAL_INTERMEDIATE_TOPICS } from './intermediate';
import { TERMINAL_ADVANCED_TOPICS } from './advanced';

export const TERMINAL_TOPICS: Topic[] = [
  ...TERMINAL_BEGINNER_TOPICS,
  ...TERMINAL_INTERMEDIATE_TOPICS,
  ...TERMINAL_ADVANCED_TOPICS
];

