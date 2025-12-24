
import React, { useState, useMemo } from 'react';
import Prism from 'prismjs';
import 'https://esm.sh/prismjs@1.29.0/components/prism-javascript';
import { Topic, Difficulty, CodeExample } from './types';

export const DifficultyBadge: React.FC<{ difficulty: Difficulty; className?: string; size?: 'sm' | 'md' }> = ({ difficulty, className = '', size = 'sm' }) => {
  const styles = {
    beginner: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    intermediate: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    advanced: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
  };
  const labels = { beginner: 'Новичок', intermediate: 'Средний', advanced: 'Продвинутый' };
  const sizeStyles = size === 'sm' ? 'text-[9px] px-1.5 py-0.5' : 'text-[11px] px-2.5 py-1';

  return (
    <span className={`rounded-full border font-bold uppercase tracking-wider flex-shrink-0 ${styles[difficulty]} ${sizeStyles} ${className}`}>
      {labels[difficulty]}
    </span>
  );
};

export const CodeHighlighter: React.FC<{ example: CodeExample }> = ({ example }) => {
  const [copied, setCopied] = useState(false);
  const highlighted = useMemo(() => Prism.highlight(example.code, Prism.languages.javascript, 'javascript'), [example.code]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-10 last:mb-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-1 w-1 rounded-full bg-emerald-500/50"></div>
        <h5 className="text-[13px] font-bold text-slate-400 font-mono tracking-tight">{example.title}</h5>
      </div>
      <div className="code-block-container overflow-hidden relative group shadow-lg">
        <button 
          onClick={copyToClipboard}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-all text-xs flex items-center gap-1.5 bg-slate-900/50 hover:bg-slate-900 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-slate-700/50 z-10"
        >
          {copied ? <><i className="fa-solid fa-check text-emerald-500"></i> Снято</> : <><i className="fa-solid fa-copy"></i> Копировать</>}
        </button>
        <div className="p-6 overflow-x-auto text-[14px] leading-relaxed">
          <pre className="language-javascript"><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
        </div>
      </div>
    </div>
  );
};

export const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const parseInlines = (str: string) => str
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-400 text-[0.9em] font-mono">$1</code>');

  const nodes = text.split('\n').map((line, index) => {
    const trimmed = line.trim();
    if (trimmed === '---') return <hr key={index} className="my-4 border-slate-800" />;
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      return <li key={index} className="ml-4" dangerouslySetInnerHTML={{ __html: parseInlines(trimmed.substring(2)) }} />;
    }
    if (trimmed === '') return <div key={index} className="h-4" />;
    return <p key={index} dangerouslySetInnerHTML={{ __html: parseInlines(line) }} />;
  });

  return <div className="prose-custom">{nodes}</div>;
};

export const TopicCard: React.FC<{ topic: Topic; isActive: boolean; onClick: () => void }> = ({ topic, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-2.5 rounded-lg transition-all duration-200 border group ${
      isActive 
        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
        : 'border-slate-800 hover:border-slate-700 text-slate-400 hover:bg-slate-800/50'
    }`}
  >
    <div className="flex justify-between items-center gap-2 overflow-hidden">
      <div className="text-[13px] font-semibold leading-tight truncate whitespace-nowrap" title={topic.title}>{topic.title}</div>
      <DifficultyBadge difficulty={topic.difficulty} size="sm" />
    </div>
  </button>
);
