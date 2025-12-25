export { KNOWLEDGE_BASE } from './topics/categories';
export { BEGINNER_TOPICS, INTERMEDIATE_TOPICS, ADVANCED_TOPICS } from './topics';
import { KNOWLEDGE_BASE } from './topics/categories';
import { META_CATEGORIES_DATA } from './metaCategoriesData';
import { MetaCategoryId } from './metaCategories';
import { Category } from './types';

// Популярные теги для фильтрации
export const POPULAR_TAGS = [
  'this', 
  'closure', 
  'async', 
  'promise', 
  'hoisting', 
  'scope', 
  'const', 
  'let', 
  'event loop', 
  'prototype', 
  'immutability'
] as const;

// Получить данные для выбранной meta-категории
export const getKnowledgeBaseByCategory = (categoryId: MetaCategoryId): Category[] => {
  if (categoryId === 'javascript') {
    return KNOWLEDGE_BASE;
  }
  return META_CATEGORIES_DATA[categoryId] || [];
};
