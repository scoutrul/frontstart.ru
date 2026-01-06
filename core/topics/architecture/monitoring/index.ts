import { Topic } from '../../../types';
import { MONITORING_BEGINNER_TOPICS } from './beginner';
import { MONITORING_INTERMEDIATE_TOPICS } from './intermediate';
import { MONITORING_ADVANCED_TOPICS } from './advanced';

export const MONITORING_TOPICS: Topic[] = [
  ...MONITORING_BEGINNER_TOPICS,
  ...MONITORING_INTERMEDIATE_TOPICS,
  ...MONITORING_ADVANCED_TOPICS
];
