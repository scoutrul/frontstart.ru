import { Topic } from '../../../types';
import { CODE_ANALYSIS_BEGINNER_TOPICS } from './beginner';
import { CODE_ANALYSIS_INTERMEDIATE_TOPICS } from './intermediate';
import { CODE_ANALYSIS_ADVANCED_TOPICS } from './advanced';

export const CODE_ANALYSIS_TOPICS: Topic[] = [
  ...CODE_ANALYSIS_BEGINNER_TOPICS,
  ...CODE_ANALYSIS_INTERMEDIATE_TOPICS,
  ...CODE_ANALYSIS_ADVANCED_TOPICS
];
