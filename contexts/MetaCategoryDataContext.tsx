/**
 * Провайдер данных текущей метакатегории
 * Загружает данные при смене selectedMetaCategory
 */

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { MetaCategoryId } from '../core/metaCategories';
import { Category } from '../core/types';
import { useKnowledgeBaseStore } from '../store/knowledgeBaseStore';
import { loadMetaCategoryData } from '../core/metaCategoriesLoader';

interface MetaCategoryDataContextValue {
  categories: Category[];
  loading: boolean;
  error: Error | null;
}

const MetaCategoryDataContext = createContext<MetaCategoryDataContextValue | null>(null);

interface MetaCategoryDataProviderProps {
  children: ReactNode;
}

export const MetaCategoryDataProvider: React.FC<MetaCategoryDataProviderProps> = ({ children }) => {
  const { selectedMetaCategory, setSelectedMetaCategory } = useKnowledgeBaseStore();
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Определяем метакатегорию из URL (приоритет над store)
  const urlParts = location.pathname.split('/').filter(Boolean);
  const urlCategory = urlParts[0] as MetaCategoryId;
  
  // Валидируем метакатегорию (должна быть одна из META_CATEGORIES)
  const validMetaCategories: MetaCategoryId[] = [
    'computer-science', 'javascript', 'markup', 'frameworks', 'typescript',
    'architecture', 'security', 'tools', 'network', 'optimization', 'hiring', 'interview-questions'
  ];
  
  const isValidCategory = urlCategory && validMetaCategories.includes(urlCategory);
  const currentMetaCategory = (isValidCategory ? urlCategory : selectedMetaCategory) as MetaCategoryId;

  // Синхронизируем store с URL
  useEffect(() => {
    if (isValidCategory && urlCategory !== selectedMetaCategory) {
      setSelectedMetaCategory(urlCategory);
    }
  }, [urlCategory, selectedMetaCategory, setSelectedMetaCategory, isValidCategory]);

  useEffect(() => {
    let cancelled = false;
    let loaderTimer: NodeJS.Timeout | null = null;

    const loadData = async () => {
      console.log('[MetaCategoryDataProvider] Loading data for:', currentMetaCategory);
      setLoading(true);
      setError(null);
      
      // Показываем loader только если загрузка длится > 1.5s
      loaderTimer = setTimeout(() => {
        if (!cancelled) {
          setShowLoader(true);
        }
      }, 1500);

      try {
        const data = await loadMetaCategoryData(currentMetaCategory);
        console.log('[MetaCategoryDataProvider] Loaded:', currentMetaCategory, 'categories:', data.length);
        
        if (!cancelled) {
          if (loaderTimer) clearTimeout(loaderTimer);
          setCategories(data);
          setLoading(false);
          setShowLoader(false);
        }
      } catch (err) {
        console.error('[MetaCategoryDataProvider] Error loading:', currentMetaCategory, err);
        if (!cancelled) {
          if (loaderTimer) clearTimeout(loaderTimer);
          setError(err instanceof Error ? err : new Error(String(err)));
          setLoading(false);
          setShowLoader(false);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
      if (loaderTimer) clearTimeout(loaderTimer);
    };
  }, [currentMetaCategory]);

  return (
    <MetaCategoryDataContext.Provider value={{ categories, loading: showLoader, error }}>
      {children}
    </MetaCategoryDataContext.Provider>
  );
};

/**
 * Хук для получения данных текущей метакатегории
 */
export const useMetaCategoryData = () => {
  const context = useContext(MetaCategoryDataContext);
  if (!context) {
    throw new Error('useMetaCategoryData must be used within MetaCategoryDataProvider');
  }
  return context;
};
