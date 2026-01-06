import { Topic } from '../../../types';
import { DEVOPS_CICD_BEGINNER_TOPICS } from './beginner';
import { DEVOPS_CICD_INTERMEDIATE_TOPICS } from './intermediate';
import { DEVOPS_CICD_ADVANCED_TOPICS } from './advanced';

export const DEVOPS_CICD_TOPICS: Topic[] = [
  ...DEVOPS_CICD_BEGINNER_TOPICS,
  ...DEVOPS_CICD_INTERMEDIATE_TOPICS,
  ...DEVOPS_CICD_ADVANCED_TOPICS
];
