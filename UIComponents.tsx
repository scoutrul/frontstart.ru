
import React, { useMemo, useState } from 'react';
import Prism from 'prismjs';
import 'https://esm.sh/prismjs@1.29.0/components/prism-javascript';
import { Difficulty } from './types';

// --- Atoms ---

export const Badge: React.FC<{ 
  variant: Difficulty | 'tag' | 'active-tag' | 'status'; 
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ variant, children, onClick, className = "" }) => {
  const base = "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border transition-all duration-300 select-none flex-shrink-0 inline-flex items-center";
  const styles: Record<string, string> = {
    beginner: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    advanced: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    tag: "bg-slate-800/50 text-slate-500 border-slate-700/50 hover:border-slate-500 hover:text-slate-300 cursor-pointer",
    "active-tag": "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)] cursor-pointer",
    status: "bg-slate-900/80 text-slate-400 border-slate-700"
  };

  return (
    <span onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export const IconButton: React.FC<{
  icon: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
  pulse?: boolean;
  disabled?: boolean;
}> = ({ icon, onClick, active, className = "", pulse, disabled }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
      active 
        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20' 
        : 'bg-slate-900/80 border-slate-800 text-slate-500 hover:text-white hover:border-slate-600'
    } ${pulse ? 'animate-pulse' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
  >
    <i className={`fa-solid ${icon} text-lg`}></i>
  </button>
);

// --- Molecules ---

export const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const parseInlines = (str: string) => str
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-slate-800/50 px-1.5 py-0.5 rounded text-emerald-400 text-[0.9em] font-mono">$1</code>');

  const nodes = text.split('\n').map((line, index) => {
    const trimmed = line.trim();
    if (trimmed === '---') return <hr key={index} className="my-6 border-slate-800" />;
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      return <li key={index} className="ml-4 text-slate-300 mb-2" dangerouslySetInnerHTML={{ __html: parseInlines(trimmed.substring(2)) }} />;
    }
    if (trimmed === '') return <div key={index} className="h-4" />;
    return <p key={index} className="text-slate-400 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: parseInlines(line) }} />;
  });

  return <div className="prose-custom">{nodes}</div>;
};

export const CodeBlock: React.FC<{ title: string; code: string }> = ({ title, code }) => {
  const [copied, setCopied] = useState(false);
  const highlighted = useMemo(() => Prism.highlight(code, Prism.languages.javascript, 'javascript'), [code]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0d1117] overflow-hidden group mb-6 shadow-xl">
      <div className="bg-slate-900/80 px-5 py-3 border-b border-slate-800 flex justify-between items-center">
        <span className="text-[10px] font-black text-slate-500 font-mono tracking-widest uppercase">{title}</span>
        <button 
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }} 
          className="text-[10px] text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-2 uppercase font-black"
        >
          <i className={`fa-solid ${copied ? 'fa-check text-emerald-500' : 'fa-copy'}`}></i>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="p-6 overflow-x-auto bg-slate-950/30">
        <pre className="language-javascript text-[13px] leading-relaxed">
          <code dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  );
};
