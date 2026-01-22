import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { META_CATEGORIES, MetaCategoryId } from '../../../core/metaCategories';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { getKnowledgeBaseByCategory } from '../../../core/constants';

const KnowledgePath: React.FC = () => {
  const navigate = useNavigate();
  const { selectedMetaCategory, setSelectedMetaCategory, getProgress, clearFilters } = useKnowledgeBaseStore();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  const handleCategorySelect = (categoryId: MetaCategoryId) => {
    setSelectedMetaCategory(categoryId);
    clearFilters(); // Очищаем фильтры при переключении категории
    
    // Специальная обработка для Q&A раздела
    if (categoryId === 'interview-questions') {
      // Для Q&A переходим на базовый путь, QALayout сам сделает редирект на первую категорию
      navigate('/interview-questions');
      return;
    }
    
    // Переходим на титульную страницу метараздела
    navigate(`/${categoryId}`);
  };

  // Подсчитываем общее количество тем для каждой категории
  const getTotalTopics = (categoryId: MetaCategoryId): number => {
    const knowledgeBase = getKnowledgeBaseByCategory(categoryId);
    return knowledgeBase.flatMap(cat => cat.topics).length;
  };

  // Скролл активной кнопки в видимую область на мобильных устройствах
  const scrollToActive = () => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  // При инициализации страницы
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToActive();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // При изменении активной категории
  useEffect(() => {
    scrollToActive();
  }, [selectedMetaCategory]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-2 px-2 lg:px-4">
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] 
      w-fit mx-auto">
        <div className="w-full px-2 lg:px-3 py-2 max-w-[calc(100vw_-_2rem)]">
          <div ref={scrollContainerRef} className="flex items-center justify-center gap-1.5 overflow-x-auto">
            {META_CATEGORIES.map((category) => {
              const totalTopics = getTotalTopics(category.id);
              const progress = getProgress(category.id, totalTopics);
              const isActive = selectedMetaCategory === category.id;
              const isQA = category.id === 'interview-questions';

              return (
                <button
                  key={category.id}
                  ref={isActive ? activeButtonRef : null}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`
                    flex items-center gap-2 px-2 lg:px-3 py-1.5 rounded-xl transition-all lg:min-w-[70px] max-w-[140px] min-h-[39px]
                    ${isQA
                      ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)] flex-shrink-0'
                      : isActive 
                      ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex-shrink-0' 
                      : 'bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:bg-white/[0.06] hover:text-slate-300 flex-shrink'
                    }
                  `}
                >
                  {!isQA && (
                    <i className={`${category.icon} text-sm ${isActive ? 'text-emerald-400' : 'text-slate-500'} flex-shrink-0`}></i>
                  )}
                  <div className={`${isActive || isQA ? 'flex' : 'hidden lg:flex'} flex-col items-start min-w-0 flex-1 max-w-full`}>
                    <div className={`text-[10px] font-black uppercase tracking-wider leading-tight whitespace-nowrap w-full overflow-hidden text-ellipsis`}>
                      {category.title}
                    </div>
                    {!isQA && totalTopics > 0 && (
                      <div className={`text-[9px] leading-tight whitespace-nowrap ${progress > 0 ? 'text-emerald-400' : 'text-slate-500'}`}>
                        {progress}% • {totalTopics}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePath;

