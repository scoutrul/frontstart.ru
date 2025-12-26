import { Topic } from '../../../types';
import { JS_FUNCTIONS_BEGINNER_TOPICS } from './beginner';
import { JS_FUNCTIONS_INTERMEDIATE_TOPICS } from './intermediate';
import { JS_FUNCTIONS_ADVANCED_TOPICS } from './advanced';

export const JS_FUNCTIONS_TOPICS: Topic[] = [
  ...JS_FUNCTIONS_BEGINNER_TOPICS,
  ...JS_FUNCTIONS_INTERMEDIATE_TOPICS,
  ...JS_FUNCTIONS_ADVANCED_TOPICS
];
