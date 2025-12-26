import { Category } from '../../types';
import { REACT_TOPICS } from './react';
import { VUE_TOPICS } from './vue';
import { SVELTE_TOPICS } from './svelte';

export const FRAMEWORKS_CATEGORIES: Category[] = [
  {
    id: 'react',
    title: 'React',
    topics: REACT_TOPICS
  },
  {
    id: 'vue',
    title: 'Vue',
    topics: VUE_TOPICS
  },
  {
    id: 'svelte',
    title: 'Svelte',
    topics: SVELTE_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const FRAMEWORKS_TOPICS = [
  ...REACT_TOPICS,
  ...VUE_TOPICS,
  ...SVELTE_TOPICS
];