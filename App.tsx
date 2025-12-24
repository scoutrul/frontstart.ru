
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { KNOWLEDGE_BASE } from './constants';
import { Topic, Difficulty } from './types';
import { askInterviewer, generateSelfTestQuestions } from './geminiService';
import { 
  DifficultyBadge, 
  CodeHighlighter, 
  MarkdownRenderer, 
  TopicCard 
} from './AtomicComponents';
import ScopeChainVisualizer from './ScopeChainVisualizer';

const App: React.FC = () => {
  // --- State ---
  const [selectedTopicId, setSelectedTopicId] = useState<string>('var-let-const');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selfTestQuestions, setSelfTestQuestions] = useState<string | null>(null);
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // --- Memos ---
  const flatTopics = useMemo(() => KNOWLEDGE_BASE.flatMap(c => c.topics), []);
  const currentTopic = useMemo(() => flatTopics.find(t => t.id === selectedTopicId) || flatTopics[0], [selectedTopicId, flatTopics]);
  const nextTopic = useMemo(() => currentTopic.nextTopicId ? flatTopics.find(t => t.id === currentTopic.nextTopicId) : null, [currentTopic, flatTopics]);
  const relatedTopicsList = useMemo(() => currentTopic.relatedTopics.map(id => flatTopics.find(t => t.id === id)).filter(Boolean) as Topic[], [currentTopic, flatTopics]);

  const popularTags = ['this', 'closure', 'async', 'promise', 'hoisting', 'scope', 'const', 'let', 'event loop', 'microtasks', 'prototype', 'immutability'];

  // --- Effects ---
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.lang = 'ru-RU';
      recognitionRef.current.onresult = (event: any) => {
        const lastPart = event.results[event.results.length - 1][0].transcript;
        if (event.results[event.results.length - 1].isFinal) setUserAnswer(prev => prev + (prev.length > 0 ? ' ' : '') + lastPart);
      };
      recognitionRef.current.onend = () => setIsRecording(false);
    }
  }, []);

  // --- Handlers ---
  const toggleRecording = () => {
    if (!recognitionRef.current) return alert('Браузер не поддерживает голос.');
    isRecording ? recognitionRef.current.stop() : (setIsRecording(true), recognitionRef.current.start());
  };

  const jumpToTopic = (id: string) => {
    setSelectedTopicId(id);
    setAiFeedback(null);
    setSelfTestQuestions(null);
    setUserAnswer('');
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCategories = useMemo(() => {
    return KNOWLEDGE_BASE.map(cat => ({
      ...cat,
      topics: cat.topics.filter(t => {
        const matchesSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesDifficulty = selectedDifficulty === 'all' || t.difficulty === selectedDifficulty;
        const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => t.tags.some(topicTag => topicTag.toLowerCase() === tag.toLowerCase()));
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

  const handleGenerateQuestions = async () => {
    setIsGeneratingQuestions(true);
    const questions = await generateSelfTestQuestions(currentTopic.title, currentTopic.keyPoints);
    setSelfTestQuestions(questions);
    setIsGeneratingQuestions(false);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row overflow-hidden bg-[#0f172a]">
      {/* Sidebar Container */}
      <aside className="w-full md:w-80 md:min-w-[320px] bg-slate-900 border-r border-slate-800 flex flex-col p-4 overflow-y-auto shadow-2xl z-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-500 p-2 rounded-lg shadow-md"><i className="fa-brands fa-js text-slate-950 text-lg"></i></div>
          <h1 className="font-bold text-lg text-white tracking-tight">JS Interview <span className="text-emerald-500 text-xl font-black">Pro</span></h1>
        </div>

        <div className="space-y-4 mb-6">
          <div className="relative">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[10px]"></i>
            <input type="text" placeholder="Поиск..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg py-1.5 pl-9 pr-4 text-[11px] focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all placeholder:text-slate-600" />
          </div>
          <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(d => (
              <button key={d} onClick={() => setSelectedDifficulty(d)} className={`flex-1 text-[9px] font-bold py-1 rounded transition-all uppercase ${selectedDifficulty === d ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}>{d === 'all' ? 'Все' : d.substring(0, 3)}</button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1">
            {popularTags.map(tag => (
              <button key={tag} onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])} 
                className={`text-[9px] font-bold uppercase tracking-tight px-2 py-0.5 rounded border transition-all ${selectedTags.includes(tag) ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600'}`}>{tag}</button>
            ))}
          </div>
        </div>

        <nav className="space-y-6 pb-10">
          {filteredCategories.map(cat => (
            <div key={cat.id}>
              <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-2 px-1">{cat.title}</h3>
              <div className="space-y-1">{cat.topics.map(t => <TopicCard key={t.id} topic={t} isActive={selectedTopicId === t.id} onClick={() => jumpToTopic(t.id)} />)}</div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Container */}
      <main ref={contentRef} className="flex-1 overflow-y-auto bg-[#0f172a] p-6 md:p-16 scroll-smooth z-10">
        <div className="max-w-3xl mx-auto">
          <div key={currentTopic.id} className="animate-content">
            {/* Topic Header Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-emerald-500 text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2"><span className="w-8 h-[2px] bg-emerald-500/30"></span> Тема</span>
                 <DifficultyBadge difficulty={currentTopic.difficulty} size="md" />
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">{currentTopic.title}</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light">{currentTopic.description}</p>
            </section>

            {/* Key Points Section */}
            <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 mb-10 relative overflow-hidden group shadow-xl">
              <h4 className="text-white font-bold mb-6 flex items-center gap-3 text-lg"><i className="fa-solid fa-star text-emerald-500"></i> Ключевые моменты</h4>
              <ul className="space-y-5 mb-8">
                {currentTopic.keyPoints.map((p, i) => (
                  <li key={i} className="flex gap-4 text-slate-300 text-base leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] flex-shrink-0"></span>{p}
                  </li>
                ))}
              </ul>
              <button onClick={handleGenerateQuestions} disabled={isGeneratingQuestions} className="text-xs font-bold uppercase tracking-widest bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-6 py-3 rounded-xl transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50">
                {isGeneratingQuestions ? <i className="fa-solid fa-circle-notch animate-spin"></i> : <i className="fa-solid fa-clipboard-question"></i>} Вопросы для самопроверки
              </button>
              {selfTestQuestions && <div className="mt-10 p-8 bg-[#0a0f1d] rounded-2xl border border-emerald-500/20 shadow-2xl"><MarkdownRenderer text={selfTestQuestions} /></div>}
            </section>

            {/* Interactive Visualizers Area */}
            {currentTopic.id === 'scope-chain' && <ScopeChainVisualizer />}

            {/* Code Examples Area */}
            {currentTopic.examples && currentTopic.examples.length > 0 && (
              <section className="mb-14">
                <div className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-code"></i> Практические примеры
                </div>
                <div className="space-y-4">
                  {currentTopic.examples.map((example, idx) => <CodeHighlighter key={idx} example={example} />)}
                </div>
              </section>
            )}

            {/* Learning Navigation Area */}
            <section className="mb-14">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2"><i className="fa-solid fa-map-location-dot"></i> Траектория</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/30 transition-all group">
                  <div>
                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-3">Следующий шаг</div>
                    <h5 className="text-lg font-bold text-white mb-2">{nextTopic ? nextTopic.title : 'Конец модуля'}</h5>
                  </div>
                  {nextTopic && <button onClick={() => jumpToTopic(nextTopic.id)} className="w-fit flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">Вперед <i className="fa-solid fa-arrow-right"></i></button>}
                </div>
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                  <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">Связано</div>
                  <div className="flex flex-wrap gap-2">
                    {relatedTopicsList.map(topic => (
                      <button key={topic.id} onClick={() => jumpToTopic(topic.id)} className="bg-slate-950 border border-slate-800 hover:border-amber-500/50 px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-all">{topic.title}</button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* AI Interviewer Section */}
            <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-16 shadow-xl relative overflow-visible">
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-emerald-500 text-slate-950 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">AI Interviewer</div>
              <h4 className="text-white font-bold mb-2 flex items-center gap-3 text-lg"><i className="fa-solid fa-robot text-emerald-500"></i> Проверка знаний</h4>
              <p className="text-sm text-slate-500 mb-8">Расскажите о теме своими словами, как на реальном интервью.</p>
              <div className="relative mb-6">
                <textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} placeholder="Ваш ответ..." className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-6 text-base text-slate-300 focus:ring-2 focus:ring-emerald-500/30 outline-none min-h-[160px] transition-all" />
                <button onClick={toggleRecording} className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isRecording ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-800 text-slate-400 hover:text-emerald-500'}`}><i className={`fa-solid ${isRecording ? 'fa-stop' : 'fa-microphone'}`}></i></button>
              </div>
              <button onClick={handleAskInterviewer} disabled={isLoading || !userAnswer.trim()} className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-[0.99]">{isLoading ? <i className="fa-solid fa-spinner animate-spin mr-2"></i> : "Проверить ответ"}</button>
              {aiFeedback && <div className="mt-10 p-8 bg-[#0a0f1d] border-l-4 border-emerald-500 rounded-r-2xl animate-in slide-in-from-left-4"><MarkdownRenderer text={aiFeedback} /></div>}
            </section>
          </div>

          <footer className="text-center text-slate-700 text-[10px] font-bold tracking-[0.4em] border-t border-slate-900 pt-10 pb-16 uppercase">
            JS Interview Pro • engine v2.7 • 2025 • <a href="https://www.antongolova.ru" target="_blank" className="text-emerald-500/60 hover:text-emerald-500 transition-colors">www.antongolova.ru</a>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
