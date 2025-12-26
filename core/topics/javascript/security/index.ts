import { Topic } from '../../../types';
import { JS_SECURITY_BEGINNER_TOPICS } from './beginner';
import { JS_SECURITY_INTERMEDIATE_TOPICS } from './intermediate';
import { JS_SECURITY_ADVANCED_TOPICS } from './advanced';

export const JS_SECURITY_TOPICS: Topic[] = [
  ...JS_SECURITY_BEGINNER_TOPICS,
  ...JS_SECURITY_INTERMEDIATE_TOPICS,
  ...JS_SECURITY_ADVANCED_TOPICS
];
