
import React from 'react';
import { Topic } from './types';
import { Badge, CodeBlock, MarkdownRenderer } from './UIComponents';
import ScopeChainVisualizer from './ScopeChainVisualizer';
import MentorFeature from './MentorFeature';

interface ContentProps {
  topic: Topic;
  nextTopic?: Topic | null;
  relatedTopics: Topic[];
  onTopicJump: (id: string) => void;
  onGenerateQuestions: () => void;
  isGeneratingQuestions: boolean;
  selfTestQuestions: string | null;
}

const ContentFeature: React.FC<ContentProps> = (props) => {
  const { topic } = props;

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-6 md:px-12 animate-content">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <Badge variant={topic.difficulty}>{topic.difficulty}</Badge>
          <div className="h-[1px] flex-1 bg-slate-800/50"></div>
          <div className="flex gap-2">
            {topic.tags.slice(0, 3).map(t => <span key={t} className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">#{t}</span>)}
          </div>
        </div>
        <h2 className="text-6xl font-black text-white mb-10 tracking-tighter leading-none">{topic.title}</h2>
        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-emerald-500/20 rounded-full"></div>
          <p className="text-xl text-slate-400 leading-relaxed font-medium pl-2 italic">
            {topic.description}
          </p>
        </div>
      </header>

      <section className="bg-[#0d1117] border border-slate-800 rounded-[2.5rem] p-12 mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
        <h3 className="text-white text-2xl font-black mb-10 flex items-center gap-4">
          <i className="fa-solid fa-bolt-lightning text-emerald-500"></i>
          Key Concepts
        </h3>
        <ul className="grid grid-cols-1 gap-8 mb-12">
          {topic.keyPoints.map((point, i) => (
            <li key={i} className="flex gap-6 text-slate-300 text-lg group">
              <div className="mt-1.5 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/5 transition-all">
                <span className="text-xs font-black text-slate-600 group-hover:text-emerald-500">0{i+1}</span>
              </div>
              <span className="pt-1.5 leading-snug">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">Готовы к глубокой проверке знаний?</p>
          <button 
            onClick={props.onGenerateQuestions}
            disabled={props.isGeneratingQuestions}
            className="flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-emerald-500 text-slate-950 px-8 py-4 rounded-2xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10 active:scale-95 disabled:opacity-50"
          >
            {props.isGeneratingQuestions ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-brain"></i>}
            Сгенерировать вопросы
          </button>
        </div>
        {props.selfTestQuestions && (
          <div className="mt-12 p-10 bg-slate-950/50 rounded-3xl border border-emerald-500/20 animate-in zoom-in-95">
            <MarkdownRenderer text={props.selfTestQuestions} />
          </div>
        )}
      </section>

      {topic.id === 'scope-chain' && <div className="mb-16"><ScopeChainVisualizer /></div>}

      {topic.examples && topic.examples.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-white text-xl font-black">Pragmatic Code</h3>
            <div className="h-[1px] flex-1 bg-slate-800"></div>
          </div>
          <div className="space-y-4">
            {topic.examples.map((ex, idx) => (
              <CodeBlock key={idx} title={ex.title} code={ex.code} />
            ))}
          </div>
        </section>
      )}

      <MentorFeature topicTitle={topic.title} />

      <footer className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 border-t border-slate-900 mb-20">
        <div 
          onClick={() => props.nextTopic && props.onTopicJump(props.nextTopic.id)}
          className={`p-10 bg-[#0d1117] border border-slate-800 rounded-[2rem] hover:border-emerald-500/40 transition-all cursor-pointer group flex flex-col justify-between ${!props.nextTopic ? 'opacity-50 cursor-default' : ''}`}
        >
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-4">Следующая тема</span>
          <h4 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
            {props.nextTopic ? props.nextTopic.title : "🏁 Модуль завершен"}
          </h4>
        </div>
        <div className="p-10 bg-[#0d1117] border border-slate-800 rounded-[2rem] flex flex-col justify-between">
          <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-4">Рекомендуем также</span>
          <div className="flex flex-wrap gap-2">
            {props.relatedTopics.map(t => (
              <button key={t.id} onClick={() => props.onTopicJump(t.id)} className="bg-slate-900 px-4 py-2 rounded-xl text-xs font-bold text-slate-500 hover:text-white transition-all border border-slate-800 hover:border-slate-700">
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContentFeature;
