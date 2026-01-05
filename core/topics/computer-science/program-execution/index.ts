import { Topic } from '../../../types';
import { CS_PROGRAM_EXECUTION_BEGINNER_TOPICS } from './beginner';
import { CS_PROGRAM_EXECUTION_INTERMEDIATE_TOPICS } from './intermediate';

export const CS_PROGRAM_EXECUTION_TOPICS: Topic[] = [
  ...CS_PROGRAM_EXECUTION_BEGINNER_TOPICS,
  ...CS_PROGRAM_EXECUTION_INTERMEDIATE_TOPICS
];
