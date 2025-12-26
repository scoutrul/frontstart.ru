import { Topic } from '../../../types';
import { DOCKER_BEGINNER_TOPICS } from './beginner';
import { DOCKER_INTERMEDIATE_TOPICS } from './intermediate';
import { DOCKER_ADVANCED_TOPICS } from './advanced';

export const DOCKER_TOPICS: Topic[] = [
  ...DOCKER_BEGINNER_TOPICS,
  ...DOCKER_INTERMEDIATE_TOPICS,
  ...DOCKER_ADVANCED_TOPICS
];

