import { Topic } from '../../../types';
import { NETWORK_HTTP_HTTPS_BEGINNER_TOPICS } from './beginner';
import { NETWORK_HTTP_HTTPS_INTERMEDIATE_TOPICS } from './intermediate';
import { NETWORK_HTTP_HTTPS_ADVANCED_TOPICS } from './advanced';

export const NETWORK_HTTP_HTTPS_TOPICS: Topic[] = [
  ...NETWORK_HTTP_HTTPS_BEGINNER_TOPICS,
  ...NETWORK_HTTP_HTTPS_INTERMEDIATE_TOPICS,
  ...NETWORK_HTTP_HTTPS_ADVANCED_TOPICS
];
