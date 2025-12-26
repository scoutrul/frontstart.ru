import { Topic } from '../../../types';
import { GIT_BEGINNER_TOPICS } from './beginner';
import { GIT_INTERMEDIATE_TOPICS } from './intermediate';
import { GIT_ADVANCED_TOPICS } from './advanced';

export const GIT_TOPICS: Topic[] = [
  ...GIT_BEGINNER_TOPICS,
  ...GIT_INTERMEDIATE_TOPICS,
  ...GIT_ADVANCED_TOPICS
];

