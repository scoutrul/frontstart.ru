import { MetaCategoryId } from './metaCategories';
import { Category } from './types';
import { getCachedMetaCategoryData } from './metaCategoriesLoader';

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

/**
 * Получить данные для выбранной meta-категории (из кэша)
 * ВАЖНО: данные должны быть предзагружены через loadMetaCategoryData()
 */
export const getKnowledgeBaseByCategory = (categoryId: MetaCategoryId): Category[] => {
  const cached = getCachedMetaCategoryData(categoryId);
  
  if (!cached) {
    console.warn(`Meta category ${categoryId} not loaded yet. Use MetaCategoryDataProvider to preload data.`);
    return [];
  }
  
  return cached;
};
