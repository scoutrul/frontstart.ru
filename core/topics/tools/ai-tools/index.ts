import { Topic } from '../../../types';
import { AI_TOOLS_BEGINNER_TOPICS } from './beginner';
import { AI_TOOLS_INTERMEDIATE_TOPICS } from './intermediate';
import { AI_TOOLS_ADVANCED_TOPICS } from './advanced';

export const AI_TOOLS_TOPICS: Topic[] = [
  ...AI_TOOLS_BEGINNER_TOPICS,
  ...AI_TOOLS_INTERMEDIATE_TOPICS,
  ...AI_TOOLS_ADVANCED_TOPICS
];

