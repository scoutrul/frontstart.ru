import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import QASidebar from './QASidebar';
import QAContent from './QAContent';
import KnowledgePath from './KnowledgePath';
import ContentToolbar from './ContentToolbar';
import ProjectInfoModal from '../../../components/ui/ProjectInfoModal';
import NotesModal from '../../../components/ui/NotesModal';
import { useContentSearch } from '../hooks';
import { useNotesCount } from '../../../hooks/useNotesCount';
import { INTERVIEW_QUESTIONS_CATEGORIES } from '../../../core/topics/interview-questions';

const QALayout: React.FC = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId?: string }>();
  const firstCategoryId = INTERVIEW_QUESTIONS_CATEGORIES[0]?.id || null;
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    categoryId || firstCategoryId
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProjectInfoOpen, setIsProjectInfoOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const notesCount = useNotesCount();
  
  const {
    contentSearchQuery,
    setContentSearchQuery,
    searchResults,
    searchAreaRef
  } = useContentSearch(selectedCategoryId || undefined);

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

  const handleTopicSelect = (id: string, _query: string | null) => {
    // Переходим на страницу темы в основном разделе
    navigate(`/javascript/${id}`);
  };

  return (
    <div className="flex h-screen bg-[#0a0f1d] overflow-hidden">
      {/* Сайдбар */}
      <QASidebar
        selectedCategoryId={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Основной контент */}
      <main className="flex-1 flex flex-col overflow-hidden pb-16 relative">
        <ContentToolbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          contentSearchQuery={contentSearchQuery}
          setContentSearchQuery={setContentSearchQuery}
          searchResults={searchResults}
          searchAreaRef={searchAreaRef}
          onTopicSelect={handleTopicSelect}
          setIsProjectInfoOpen={setIsProjectInfoOpen}
          setIsNotesOpen={setIsNotesOpen}
          notesCount={notesCount}
        />
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto relative">
          <QAContent categoryId={selectedCategoryId} />
        </div>
      </main>

      {/* Нижнее меню навигации по мета-категориям */}
      <KnowledgePath />

      {/* Модальное окно информации о проекте */}
      <ProjectInfoModal 
        isOpen={isProjectInfoOpen}
        onClose={() => setIsProjectInfoOpen(false)}
      />

      {/* Модальное окно заметок */}
      <NotesModal 
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />
    </div>
  );
};

export default QALayout;
