import { Topic } from '../../../types';
import { CSS_BEGINNER_TOPICS } from './beginner';
import { CSS_INTERMEDIATE_TOPICS } from './intermediate';
import { CSS_ADVANCED_TOPICS } from './advanced';

export const CSS_TOPICS: Topic[] = [
  ...CSS_BEGINNER_TOPICS,
  ...CSS_INTERMEDIATE_TOPICS,
  ...CSS_ADVANCED_TOPICS
];
