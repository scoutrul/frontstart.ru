import { Topic } from '../../../types';
import { UX_BEGINNER_TOPICS } from './beginner';
import { UX_INTERMEDIATE_TOPICS } from './intermediate';
import { UX_ADVANCED_TOPICS } from './advanced';

export const UX_TOPICS: Topic[] = [
  ...UX_BEGINNER_TOPICS,
  ...UX_INTERMEDIATE_TOPICS,
  ...UX_ADVANCED_TOPICS
];
