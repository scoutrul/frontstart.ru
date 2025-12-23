
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { KNOWLEDGE_BASE } from './constants';
import { Topic, Difficulty } from './types';
import { askInterviewer, handleFollowUp } from './geminiService';

const DifficultyBadge: React.FC<{ difficulty: Difficulty; className?: string }> = ({ difficulty, className = '' }) => {
  const styles = {
    beginner: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    intermediate: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    advanced: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
  };

  const labels = {
    beginner: 'Новичок',
    intermediate: 'Средний',
    advanced: 'Продвинутый',
  };

  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider flex-shrink-0 ${styles[difficulty]} ${className}`}>
      {labels[difficulty]}
    </span>
  );
};

const TopicCard: React.FC<{ 
  topic: Topic; 
  isActive: boolean; 
  onClick: () => void 
}> = ({ topic, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-3 rounded-lg transition-all duration-200 border group ${
      isActive 
        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
        : 'border-slate-700 hover:border-slate-500 text-slate-400 hover:bg-slate-800'
    }`}
  >
    <div className="flex justify-between items-center gap-2 overflow-hidden">
      <div className="text-sm font-semibold leading-tight truncate whitespace-nowrap" title={topic.title}>
        {topic.title}
      </div>
      <DifficultyBadge difficulty={topic.difficulty} />
    </div>
  </button>
);

const App: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('var-let-const');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isFollowUpLoading, setIsFollowUpLoading] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const flatTopics = useMemo(() => KNOWLEDGE_BASE.flatMap(c => c.topics), []);
  
  const currentTopic = useMemo(() => 
    flatTopics.find(t => t.id === selectedTopicId) || flatTopics[0],
  [selectedTopicId, flatTopics]);

  const popularTags = [
    'this', 'closure', 'async', 'promise', 'hoisting', 'scope', 'const', 'let', 'event loop', 'microtasks', 'prototype', 'immutability'
  ];

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'ru-RU';

      recognitionRef.current.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setUserAnswer(prev => {
            const lastPart = event.results[event.results.length - 1][0].transcript;
            if (event.results[event.results.length - 1].isFinal) {
                return prev + (prev.length > 0 ? ' ' : '') + lastPart;
            }
            return prev;
        });
      };

      recognitionRef.current.onend = () => setIsRecording(false);
      recognitionRef.current.onerror = () => setIsRecording(false);
    }
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) return alert('Браузер не поддерживает голос.');
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      setIsRecording(true);
      recognitionRef.current.start();
    }
  };

  const jumpToTopic = (id: string) => {
    setSelectedTopicId(id);
    setAiFeedback(null);
    setUserAnswer('');
    if (isRecording) recognitionRef.current?.stop();
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextTopic = useMemo(() => 
    currentTopic.nextTopicId ? flatTopics.find(t => t.id === currentTopic.nextTopicId) : null
  , [currentTopic, flatTopics]);

  const filteredCategories = useMemo(() => {
    return KNOWLEDGE_BASE.map(cat => ({
      ...cat,
      topics: cat.topics.filter(t => {
        const matchesSearch = !searchQuery || 
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesDifficulty = selectedDifficulty === 'all' || t.difficulty === selectedDifficulty;
        
        const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => 
          t.tags.some(topicTag => topicTag.toLowerCase() === tag.toLowerCase())
        );
        
        return matchesSearch && matchesDifficulty && matchesTags;
      })
    })).filter(cat => cat.topics.length > 0);
  }, [searchQuery, selectedDifficulty, selectedTags]);

  const handleAskInterviewer = async () => {
    if (!userAnswer.trim()) return;
    setIsLoading(true);
    const feedback = await askInterviewer(currentTopic.title, userAnswer);
    setAiFeedback(feedback || "Ошибка.");
    setIsLoading(false);
  };

  const handleFollowUpRequest = async (type: 'explain' | 'tricky_question') => {
    if (!aiFeedback) return;
    setIsFollowUpLoading(true);
    const feedback = await handleFollowUp(currentTopic.title, type, aiFeedback);
    setAiFeedback(prev => `${prev}\n\n---\n\n${feedback}`);
    setIsFollowUpLoading(false);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSelectedDifficulty('all');
  };

  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-80 md:min-w-[320px] bg-slate-900 border-r border-slate-800 flex flex-col p-4 overflow-y-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-emerald-500 p-2 rounded-lg"><i className="fa-brands fa-js text-slate-950 text-xl"></i></div>
          <h1 className="font-bold text-lg text-white">JS Interview <span className="text-emerald-500">Pro</span></h1>
        </div>

        <div className="space-y-4 mb-6">
          <div className="relative">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
            <input 
              type="text" placeholder="Поиск..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg">
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(d => (
              <button key={d} onClick={() => setSelectedDifficulty(d)}
                className={`flex-1 text-[9px] font-bold py-1 rounded transition-all uppercase ${selectedDifficulty === d ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}>
                {d === 'all' ? 'Все' : d.substring(0, 3)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            {popularTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`text-[9px] px-2 py-0.5 rounded border transition-all ${
                  selectedTags.includes(tag) 
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                  : 'bg-slate-800/50 border-slate-700 text-slate-500 hover:border-slate-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <nav className="space-y-6">
          {filteredCategories.map(cat => (
            <div key={cat.id}>
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">{cat.title}</h3>
              <div className="space-y-1">
                {cat.topics.map(t => (
                  <TopicCard key={t.id} topic={t} isActive={selectedTopicId === t.id} onClick={() => jumpToTopic(t.id)} />
                ))}
              </div>
            </div>
          ))}
          {filteredCategories.length === 0 && (
            <div className="text-center py-10">
              <p className="text-slate-500 text-xs italic">Ничего не найдено</p>
              <button onClick={clearFilters} className="text-emerald-500 text-[10px] font-bold mt-2 uppercase">Сбросить</button>
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main ref={contentRef} className="flex-1 overflow-y-auto bg-slate-950 p-4 md:p-12 scroll-smooth">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-2">
               <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Тема</span>
               <DifficultyBadge difficulty={currentTopic.difficulty} />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">{currentTopic.title}</h2>
            <p className="text-lg text-slate-400 leading-relaxed">{currentTopic.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {currentTopic.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 mb-8">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
              <i className="fa-solid fa-star text-emerald-500"></i> Ключевые моменты
            </h4>
            <ul className="space-y-3">
              {currentTopic.keyPoints.map((p, i) => (
                <li key={i} className="flex gap-3 text-slate-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {currentTopic.codeExample && (
            <div className="mb-10">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Код для закрепления</div>
              <div className="bg-[#1e293b] rounded-xl p-5 border border-slate-800 overflow-x-auto">
                <pre className="text-emerald-300 text-sm font-mono leading-relaxed"><code>{currentTopic.codeExample}</code></pre>
              </div>
            </div>
          )}

          {/* AI Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-12">
            <h4 className="text-white font-bold mb-1 flex items-center gap-2">
              <i className="fa-solid fa-robot text-emerald-500"></i> Проверка знаний
            </h4>
            <p className="text-xs text-slate-500 mb-4 italic">Напишите или надиктуйте объяснение темы, как на реальном собеседовании.</p>
            
            <div className="relative mb-4">
              <textarea 
                value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Ваш ответ..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-slate-300 focus:ring-1 focus:ring-emerald-500 outline-none min-h-[120px]"
              />
              <button onClick={toggleRecording}
                className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-800 text-slate-500 hover:text-emerald-500'}`}>
                <i className={`fa-solid ${isRecording ? 'fa-stop' : 'fa-microphone'}`}></i>
              </button>
            </div>

            <button onClick={handleAskInterviewer} disabled={isLoading || !userAnswer.trim()}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg transition-all text-sm disabled:opacity-50">
              {isLoading ? <i className="fa-solid fa-spinner animate-spin"></i> : "Получить фидбек"}
            </button>

            {aiFeedback && (
              <div className="mt-6 p-4 bg-slate-950 border-l-2 border-emerald-500 rounded-r-lg">
                <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-tighter mb-2">Отзыв AI</div>
                <p className="text-slate-300 text-sm whitespace-pre-wrap italic">{aiFeedback}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => handleFollowUpRequest('explain')} disabled={isFollowUpLoading} className="text-[10px] font-bold bg-slate-800 py-1.5 px-3 rounded hover:bg-slate-700 transition-colors">
                    {isFollowUpLoading ? '...' : 'Разобрать детальнее'}
                  </button>
                  <button onClick={() => handleFollowUpRequest('tricky_question')} disabled={isFollowUpLoading} className="text-[10px] font-bold bg-slate-800 py-1.5 px-3 rounded hover:bg-slate-700 transition-colors">
                    {isFollowUpLoading ? '...' : 'Сложный вопрос'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Next Topic Recommendation */}
          {nextTopic && (
            <div className="mb-12">
               <h4 className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-4 text-center">Рекомендуемый следующий шаг</h4>
               <button 
                onClick={() => jumpToTopic(nextTopic.id)}
                className="w-full group bg-gradient-to-r from-slate-900 to-slate-900 hover:from-emerald-950 hover:to-slate-900 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-2xl transition-all duration-300 text-left shadow-lg hover:shadow-emerald-500/5"
               >
                 <div className="flex items-center justify-between">
                   <div className="space-y-1">
                     <DifficultyBadge difficulty={nextTopic.difficulty} />
                     <h5 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{nextTopic.title}</h5>
                     <p className="text-sm text-slate-500 line-clamp-1">{nextTopic.description}</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-emerald-500 flex items-center justify-center transition-all group-hover:translate-x-1">
                     <i className="fa-solid fa-arrow-right text-slate-400 group-hover:text-slate-950"></i>
                   </div>
                 </div>
               </button>
            </div>
          )}

          <footer className="text-center text-slate-700 text-[10px] font-bold tracking-widest border-t border-slate-900 pt-8 pb-12 uppercase">
            JS Interview Pro • Learning Path System 1.0
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
