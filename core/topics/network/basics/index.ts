import { Topic } from '../../../types';
import { NETWORK_BASICS_BEGINNER_TOPICS } from './beginner';
import { NETWORK_BASICS_INTERMEDIATE_TOPICS } from './intermediate';
import { NETWORK_BASICS_ADVANCED_TOPICS } from './advanced';

export const NETWORK_BASICS_TOPICS: Topic[] = [
  ...NETWORK_BASICS_BEGINNER_TOPICS,
  ...NETWORK_BASICS_INTERMEDIATE_TOPICS,
  ...NETWORK_BASICS_ADVANCED_TOPICS
];
