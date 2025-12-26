import { Topic } from '../../../types';
import { JS_VARIABLES_BEGINNER_TOPICS } from './beginner';
import { JS_VARIABLES_INTERMEDIATE_TOPICS } from './intermediate';
import { JS_VARIABLES_ADVANCED_TOPICS } from './advanced';

export const JS_VARIABLES_TOPICS: Topic[] = [
  ...JS_VARIABLES_BEGINNER_TOPICS,
  ...JS_VARIABLES_INTERMEDIATE_TOPICS,
  ...JS_VARIABLES_ADVANCED_TOPICS
];
