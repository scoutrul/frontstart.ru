import { JS_KNOWLEDGE_BASE } from './topics/javascript';
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
    return JS_KNOWLEDGE_BASE;
  }
  return META_CATEGORIES_DATA[categoryId] || [];
};
