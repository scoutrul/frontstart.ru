import React from 'react';
import ContentSearch from './ContentSearch';
import { TopicWithMeta } from '../hooks/useContentSearch';

interface ContentToolbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  contentSearchQuery: string | null;
  setContentSearchQuery: (query: string | null) => void;
  searchResults: TopicWithMeta[];
  searchAreaRef: React.RefObject<HTMLDivElement | null>;
  onTopicSelect: (id: string, query: string | null) => void;
  isProjectInfoOpen?: boolean;
  setIsProjectInfoOpen?: (open: boolean) => void;
  isNotesOpen?: boolean;
  setIsNotesOpen?: (open: boolean) => void;
  notesCount?: number;
}

const ContentToolbar: React.FC<ContentToolbarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  contentSearchQuery,
  setContentSearchQuery,
  searchResults,
  searchAreaRef,
  onTopicSelect,
  setIsProjectInfoOpen,
  setIsNotesOpen,
  notesCount = 0
}) => {
  return (
    <>
      {/* Кнопка меню для мобильных */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-3 left-4 z-40 w-10 h-10 text-white"
        >
          <i className="fa-solid fa-bars text-sm"></i>
        </button>
      )}

      {/* Верхняя панель с поиском и ссылками - Liquid Glass стиль */}
      <div className="sticky top-2 z-20">
        <div className="mx-2 lg:mx-4 mt-2">
          <div className="flex items-center justify-end gap-4 ml-16 lg:ml-0">
            {/* Поиск - иконка на мобильных, полный инпут на десктопе */}
            <button 
              onClick={() => setContentSearchQuery('')}
              className="sm:hidden h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] transition-all"
              title="Поиск по контенту"
            >
              <i className="fa-solid fa-search text-sm"></i>
            </button>
            <div 
              onClick={() => setContentSearchQuery('')}
              className="relative cursor-pointer flex-1 backdrop-blur-xl rounded-2xl hidden sm:block"
            >
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400/70 text-sm"></i>
              <input 
                type="text" 
                placeholder="Поиск по контенту..." 
                readOnly
                className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl py-3 pl-11 pr-4 text-sm text-slate-300 outline-none hover:bg-white/[0.06] hover:border-white/[0.1] placeholder:text-slate-500 transition-all cursor-pointer"
              />
            </div>

            {/* Ссылка на телеграм */}
            <a 
              href="https://t.me/frontstart_ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm whitespace-nowrap hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/[0.04]"
            >
              <i className="fa-brands fa-telegram text-base"></i>
              <span className="hidden md:inline">Telegram</span>
            </a>

            {/* Иконки в ряд */}
            <div className="flex items-center gap-1.5">
              {/* Телеграм для мобильных */}
              <a 
                href="https://t.me/frontstart_ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sm:hidden h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-white/[0.08] transition-all"
                title="Telegram канал"
              >
                <i className="fa-brands fa-telegram text-base"></i>
              </a>

              {/* Кнопка информации о проекте */}
              {setIsProjectInfoOpen && (
                <button
                  onClick={() => setIsProjectInfoOpen(true)}
                  className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] transition-all"
                  title="Информация о проекте"
                >
                  <i className="fa-solid fa-info text-sm"></i>
                </button>
              )}

              {/* Кнопка заметок */}
              {setIsNotesOpen && (
                <button
                  onClick={() => setIsNotesOpen(true)}
                  className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] transition-all relative"
                  title="Заметки"
                >
                  <i className="fa-solid fa-note-sticky text-sm"></i>
                  {notesCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1.5 shadow-lg">
                      {notesCount > 99 ? '99+' : notesCount}
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Поиск по контенту (модальный) */}
      <ContentSearch
        contentSearchQuery={contentSearchQuery}
        setContentSearchQuery={setContentSearchQuery}
        searchResults={searchResults}
        searchAreaRef={searchAreaRef}
        onTopicSelect={onTopicSelect}
      />
    </>
  );
};

export default ContentToolbar;
