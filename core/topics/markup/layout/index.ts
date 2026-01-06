import { Topic } from '../../../types';
import { LAYOUT_BEGINNER_TOPICS } from './beginner';
import { LAYOUT_INTERMEDIATE_TOPICS } from './intermediate';
import { LAYOUT_ADVANCED_TOPICS } from './advanced';

export const LAYOUT_TOPICS: Topic[] = [
  ...LAYOUT_BEGINNER_TOPICS,
  ...LAYOUT_INTERMEDIATE_TOPICS,
  ...LAYOUT_ADVANCED_TOPICS
];
