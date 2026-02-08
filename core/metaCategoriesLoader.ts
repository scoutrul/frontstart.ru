/**
 * Loader для lazy-loading метакатегорий
 * Динамически импортирует чанки по требованию
 */

import { MetaCategoryId } from './metaCategories';
import { Category } from './types';

// Кэш загруженных метакатегорий
const cache = new Map<MetaCategoryId, Category[]>();

// Состояние загрузки (для предотвращения дублирования запросов)
const loadingPromises = new Map<MetaCategoryId, Promise<Category[]>>();

/**
 * Маппинг metaCategoryId → динамический импорт
 */
const importers: Record<MetaCategoryId, () => Promise<{ default: Category[] }>> = {
  'computer-science': () => import('./topics/computer-science').then(m => ({ default: m.CS_KNOWLEDGE_BASE })),
  javascript: () => import('./topics/javascript').then(m => ({ default: m.JS_KNOWLEDGE_BASE })),
  markup: () => import('./topics/markup').then(m => ({ default: m.MARKUP_CATEGORIES })),
  frameworks: () => import('./topics/frameworks').then(m => ({ default: m.FRAMEWORKS_CATEGORIES })),
  typescript: () => import('./topics/typescript').then(m => ({ default: m.TYPESCRIPT_CATEGORIES })),
  architecture: () => import('./topics/architecture').then(m => ({ default: m.ARCHITECTURE_CATEGORIES })),
  security: () => import('./topics/security').then(m => ({ default: m.SECURITY_CATEGORIES })),
  tools: () => import('./topics/tools').then(m => ({ default: m.TOOLS_CATEGORIES })),
  network: () => import('./topics/network').then(m => ({ default: m.NETWORK_CATEGORIES })),
  optimization: () => import('./topics/optimization').then(m => ({ default: m.OPTIMIZATION_CATEGORIES })),
  hiring: () => import('./topics/hiring').then(m => ({ default: m.HIRING_CATEGORIES })),
  'interview-questions': () => import('./topics/interview-questions/adapters').then(m => {
    return import('./topics/interview-questions').then(categoriesModule => {
      return { default: m.interviewCategoriesToCategories(categoriesModule.INTERVIEW_QUESTIONS_CATEGORIES) };
    });
  }),
};

/**
 * Загрузить данные метакатегории (с кэшированием)
 */
export async function loadMetaCategoryData(metaCategoryId: MetaCategoryId): Promise<Category[]> {
  // Проверяем кэш
  if (cache.has(metaCategoryId)) {
    return cache.get(metaCategoryId)!;
  }

  // Проверяем, не идёт ли уже загрузка
  if (loadingPromises.has(metaCategoryId)) {
    return loadingPromises.get(metaCategoryId)!;
  }

  // Загружаем
  const importer = importers[metaCategoryId];
  if (!importer) {
    throw new Error(`Unknown meta category: ${metaCategoryId}`);
  }

  const loadPromise = importer()
    .then(module => {
      const data = module.default;
      cache.set(metaCategoryId, data);
      loadingPromises.delete(metaCategoryId);
      return data;
    })
    .catch(error => {
      loadingPromises.delete(metaCategoryId);
      throw new Error(`Failed to load meta category ${metaCategoryId}: ${error.message}`);
    });

  loadingPromises.set(metaCategoryId, loadPromise);
  return loadPromise;
}

/**
 * Получить данные из кэша (синхронно)
 * Возвращает null если данные ещё не загружены
 */
export function getCachedMetaCategoryData(metaCategoryId: MetaCategoryId): Category[] | null {
  return cache.get(metaCategoryId) || null;
}

/**
 * Проверить, загружена ли метакатегория
 */
export function isMetaCategoryLoaded(metaCategoryId: MetaCategoryId): boolean {
  return cache.has(metaCategoryId);
}

/**
 * Очистить кэш (для тестирования)
 */
export function clearCache(): void {
  cache.clear();
  loadingPromises.clear();
}
