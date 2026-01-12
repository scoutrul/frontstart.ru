import React from 'react';
import { INTERVIEW_QUESTIONS_CATEGORIES } from '../../../core/topics/interview-questions';
import SidebarHeader from './SidebarHeader';

interface QASidebarProps {
  selectedCategoryId: string | null;
  onCategorySelect: (categoryId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const QASidebar: React.FC<QASidebarProps> = ({ selectedCategoryId, onCategorySelect, isOpen = true, onClose }) => {
  return (
    <>
      {/* Overlay для мобильных */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Сайдбар */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-[#0f172a] border-r border-slate-800/80
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        <div className="flex-1 overflow-y-auto p-6">
          {/* Заголовок */}
          <div className="mb-8">
            <SidebarHeader
              icon="fa-solid fa-question-circle"
              title="Q&A"
              showFullTitle={true}
            />
          </div>

          {/* Список категорий */}
          <nav className="space-y-2">
            {INTERVIEW_QUESTIONS_CATEGORIES.map((category) => {
              const isActive = selectedCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategorySelect(category.id);
                    onClose?.();
                  }}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg transition-all
                    ${
                      isActive
                        ? 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                        : 'bg-slate-800/30 border border-slate-700/40 text-slate-300 hover:bg-slate-800/50 hover:text-slate-200'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.title}</span>
                    <span className="text-xs text-slate-500">
                      {category.questions.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default QASidebar;
