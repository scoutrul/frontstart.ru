import { Topic } from '../../../types';
import { MIGRATION_INTERMEDIATE_TOPICS } from './intermediate';
import { MIGRATION_ADVANCED_TOPICS } from './advanced';

export const MIGRATION_TOPICS: Topic[] = [
  ...MIGRATION_INTERMEDIATE_TOPICS,
  ...MIGRATION_ADVANCED_TOPICS
];
