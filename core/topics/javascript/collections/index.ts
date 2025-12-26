import { Topic } from '../../../types';
import { JS_COLLECTIONS_BEGINNER_TOPICS } from './beginner';
import { JS_COLLECTIONS_INTERMEDIATE_TOPICS } from './intermediate';
import { JS_COLLECTIONS_ADVANCED_TOPICS } from './advanced';

export const JS_COLLECTIONS_TOPICS: Topic[] = [
  ...JS_COLLECTIONS_BEGINNER_TOPICS,
  ...JS_COLLECTIONS_INTERMEDIATE_TOPICS,
  ...JS_COLLECTIONS_ADVANCED_TOPICS
];
