import { Topic } from '../../../types';
import { HTML_BEGINNER_TOPICS } from './beginner';
import { HTML_INTERMEDIATE_TOPICS } from './intermediate';
import { HTML_ADVANCED_TOPICS } from './advanced';

export const HTML_TOPICS: Topic[] = [
  ...HTML_BEGINNER_TOPICS,
  ...HTML_INTERMEDIATE_TOPICS,
  ...HTML_ADVANCED_TOPICS
];
