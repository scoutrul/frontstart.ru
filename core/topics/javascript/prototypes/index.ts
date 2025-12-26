import { Topic } from '../../../types';
import { JS_PROTOTYPES_BEGINNER_TOPICS } from './beginner';
import { JS_PROTOTYPES_INTERMEDIATE_TOPICS } from './intermediate';
import { JS_PROTOTYPES_ADVANCED_TOPICS } from './advanced';

export const JS_PROTOTYPES_TOPICS: Topic[] = [
  ...JS_PROTOTYPES_BEGINNER_TOPICS,
  ...JS_PROTOTYPES_INTERMEDIATE_TOPICS,
  ...JS_PROTOTYPES_ADVANCED_TOPICS
];
