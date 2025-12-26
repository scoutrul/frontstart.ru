import { Topic } from '../../../types';
import { JS_BROWSER_API_BEGINNER_TOPICS } from './beginner';
import { JS_BROWSER_API_INTERMEDIATE_TOPICS } from './intermediate';
import { JS_BROWSER_API_ADVANCED_TOPICS } from './advanced';

export const JS_BROWSER_API_TOPICS: Topic[] = [
  ...JS_BROWSER_API_BEGINNER_TOPICS,
  ...JS_BROWSER_API_INTERMEDIATE_TOPICS,
  ...JS_BROWSER_API_ADVANCED_TOPICS
];
