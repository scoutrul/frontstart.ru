import { Topic } from '../../../types';
import { NETWORK_TOOLS_BEGINNER_TOPICS } from './beginner';
import { NETWORK_TOOLS_INTERMEDIATE_TOPICS } from './intermediate';
import { NETWORK_TOOLS_ADVANCED_TOPICS } from './advanced';

export const NETWORK_TOOLS_TOPICS: Topic[] = [
  ...NETWORK_TOOLS_BEGINNER_TOPICS,
  ...NETWORK_TOOLS_INTERMEDIATE_TOPICS,
  ...NETWORK_TOOLS_ADVANCED_TOPICS
];
