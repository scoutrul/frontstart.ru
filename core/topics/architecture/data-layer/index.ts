import { Topic } from '../../../types';
import { DATA_LAYER_BEGINNER_TOPICS } from './beginner';
import { DATA_LAYER_INTERMEDIATE_TOPICS } from './intermediate';
import { DATA_LAYER_ADVANCED_TOPICS } from './advanced';

export const DATA_LAYER_TOPICS: Topic[] = [
  ...DATA_LAYER_BEGINNER_TOPICS,
  ...DATA_LAYER_INTERMEDIATE_TOPICS,
  ...DATA_LAYER_ADVANCED_TOPICS
];
