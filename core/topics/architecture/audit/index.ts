import { Topic } from '../../../types';
import { AUDIT_BEGINNER_TOPICS } from './beginner';
import { AUDIT_INTERMEDIATE_TOPICS } from './intermediate';
import { AUDIT_ADVANCED_TOPICS } from './advanced';

export const AUDIT_TOPICS: Topic[] = [
  ...AUDIT_BEGINNER_TOPICS,
  ...AUDIT_INTERMEDIATE_TOPICS,
  ...AUDIT_ADVANCED_TOPICS
];
