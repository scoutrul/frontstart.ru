import { Topic } from '../../../types';
import { DEVTOOLS_BEGINNER_TOPICS } from './beginner';
import { DEVTOOLS_INTERMEDIATE_TOPICS } from './intermediate';
import { DEVTOOLS_ADVANCED_TOPICS } from './advanced';

export const DEVTOOLS_TOPICS: Topic[] = [
  ...DEVTOOLS_BEGINNER_TOPICS,
  ...DEVTOOLS_INTERMEDIATE_TOPICS,
  ...DEVTOOLS_ADVANCED_TOPICS
];

