import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QASidebar from './QASidebar';
import QAContent from './QAContent';
import KnowledgePath from './KnowledgePath';
import { INTERVIEW_QUESTIONS_CATEGORIES } from '../../../core/topics/interview-questions';

const QALayout: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId?: string }>();
  const firstCategoryId = INTERVIEW_QUESTIONS_CATEGORIES[0]?.id || null;
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    categoryId || firstCategoryId
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Синхронизация с URL
  useEffect(() => {
    if (categoryId) {
      // Если есть categoryId в URL, используем его
      if (categoryId !== selectedCategoryId) {
        setSelectedCategoryId(categoryId);
      }
    } else if (firstCategoryId && selectedCategoryId !== firstCategoryId) {
      // Если нет categoryId в URL, редиректим на первую категорию
      setSelectedCategoryId(firstCategoryId);
      navigate(`/interview-questions/${firstCategoryId}`, { replace: true });
    }
  }, [categoryId, selectedCategoryId, navigate, firstCategoryId]);

  const handleCategorySelect = (id: string) => {
    setSelectedCategoryId(id);
    navigate(`/interview-questions/${id}`, { replace: true });
  };

  const selectedCategory = selectedCategoryId
    ? INTERVIEW_QUESTIONS_CATEGORIES.find((c) => c.id === selectedCategoryId)
    : null;

  return (
    <div className="flex h-screen bg-[#0a0f1d] overflow-hidden">
      {/* Упрощенная шапка */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[#0f172a]/95 backdrop-blur-sm border-b border-slate-800/80 z-30 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-slate-400 hover:text-slate-200 transition-colors"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <h1 className="font-bold text-white text-lg tracking-tight">
            <span className="text-emerald-500 font-bold">Q&A</span>
            {selectedCategory && (
              <>
                <span className="text-slate-500 text-sm"> / </span>
                <span className="text-amber-500 text-sm">{selectedCategory.title}</span>
              </>
            )}
          </h1>
        </div>
      </div>

      {/* Сайдбар */}
      <QASidebar
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Основной контент */}
      <main className="flex-1 flex flex-col overflow-hidden pt-16 pb-12">
        <div className="flex-1 overflow-y-auto">
          <QAContent categoryId={selectedCategoryId} />
        </div>
      </main>

      {/* Нижнее меню навигации по мета-категориям */}
      <KnowledgePath />
    </div>
  );
};

export default QALayout;
