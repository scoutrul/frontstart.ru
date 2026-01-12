import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { META_CATEGORIES, MetaCategoryId } from '../../../core/metaCategories';
import { useKnowledgeBaseStore } from '../../../store/knowledgeBaseStore';
import { getKnowledgeBaseByCategory } from '../../../core/constants';

const CollapsibleKnowledgePath: React.FC = () => {
  const navigate = useNavigate();
  const { selectedMetaCategory, setSelectedMetaCategory, setSelectedTopicId, getProgress, clearFilters } = useKnowledgeBaseStore();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  const handleCategorySelect = (categoryId: MetaCategoryId) => {
    setSelectedMetaCategory(categoryId);
    clearFilters();
    const knowledgeBase = getKnowledgeBaseByCategory(categoryId);
    const firstTopic = knowledgeBase.flatMap(cat => cat.topics)[0];
    if (firstTopic) {
      setSelectedTopicId(firstTopic.id);
      navigate(`/${categoryId}/${firstTopic.id}`);
    } else {
      navigate(`/${categoryId}`);
    }
  };

  const getTotalTopics = (categoryId: MetaCategoryId): number => {
    const knowledgeBase = getKnowledgeBaseByCategory(categoryId);
    return knowledgeBase.flatMap(cat => cat.topics).length;
  };

  const scrollToActive = () => {
    if (activeButtonRef.current && scrollContainerRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  useEffect(() => {
    if (!isCollapsed) {
      const timer = setTimeout(() => {
        scrollToActive();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  useEffect(() => {
    if (!isCollapsed) {
      scrollToActive();
    }
  }, [selectedMetaCategory, isCollapsed]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/80 shadow-2xl transition-all duration-300 ${
      isCollapsed ? 'h-10' : 'h-20'
    }`}>
      {/* Кнопка для раскрытия/сворачивания */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-slate-900/95 backdrop-blur-sm border-t border-x border-slate-800/80 rounded-t-lg px-3 py-1.5 text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
        title={isCollapsed ? 'Развернуть навигацию' : 'Свернуть навигацию'}
      >
        <i className={`fa-solid fa-chevron-${isCollapsed ? 'up' : 'down'} text-xs`}></i>
        {!isCollapsed && <span className="text-[10px] font-medium">Навигация</span>}
      </button>

      <div className="w-full px-0 lg:px-4 py-1.5 h-full flex items-center">
        <div 
          ref={scrollContainerRef} 
          className={`flex items-center justify-start px-2 lg:justify-center gap-1 overflow-x-auto lg:overflow-x-hidden w-full ${
            isCollapsed ? 'opacity-60' : 'opacity-100'
          } transition-opacity`}
        >
          {META_CATEGORIES.map((category) => {
            const totalTopics = getTotalTopics(category.id);
            const progress = getProgress(category.id, totalTopics);
            const isActive = selectedMetaCategory === category.id;

            return (
              <button
                key={category.id}
                ref={isActive ? activeButtonRef : null}
                onClick={() => handleCategorySelect(category.id)}
                className={`
                  flex items-center gap-1.5 px-2 py-1 rounded-md transition-all flex-shrink-0
                  ${isCollapsed 
                    ? 'min-w-[50px]' 
                    : 'lg:min-w-[70px]'
                  }
                  ${isActive 
                    ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-400' 
                    : 'bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:bg-slate-800/70 hover:text-slate-300'
                  }
                `}
              >
                <i className={`${category.icon} text-xs ${isActive ? 'text-emerald-400' : 'text-slate-500'} flex-shrink-0`}></i>
                {!isCollapsed && (
                  <div className={`${isActive ? 'flex' : 'hidden lg:flex'} flex-col items-start min-w-0 flex-1`}>
                    <div className={`text-[9px] font-black uppercase tracking-wider leading-tight whitespace-nowrap ${isActive ? '' : 'overflow-hidden text-ellipsis'}`}>
                      {category.title}
                    </div>
                    {totalTopics > 0 && (
                      <div className={`text-[8px] leading-tight whitespace-nowrap ${progress > 0 ? 'text-emerald-400' : 'text-slate-500'}`}>
                        {progress}% • {totalTopics}
                      </div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleKnowledgePath;
