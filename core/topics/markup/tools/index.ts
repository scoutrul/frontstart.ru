import { Topic } from '../../../types';
import { TOOLS_BEGINNER_TOPICS } from './beginner';
import { TOOLS_INTERMEDIATE_TOPICS } from './intermediate';
import { TOOLS_ADVANCED_TOPICS } from './advanced';

export const TOOLS_TOPICS: Topic[] = [
  ...TOOLS_BEGINNER_TOPICS,
  ...TOOLS_INTERMEDIATE_TOPICS,
  ...TOOLS_ADVANCED_TOPICS
];
