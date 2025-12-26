import { Topic } from '../../../types';
import { NPM_BEGINNER_TOPICS } from './beginner';
import { NPM_INTERMEDIATE_TOPICS } from './intermediate';
import { NPM_ADVANCED_TOPICS } from './advanced';

export const NPM_TOPICS: Topic[] = [
  ...NPM_BEGINNER_TOPICS,
  ...NPM_INTERMEDIATE_TOPICS,
  ...NPM_ADVANCED_TOPICS
];

