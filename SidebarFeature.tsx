
import React from 'react';
import { Category, Difficulty } from './types';
import { Badge } from './UIComponents';

interface SidebarProps {
  categories: Category[];
  selectedTopicId: string;
  onTopicSelect: (id: string) => void;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedDifficulty: Difficulty | 'all';
  onDifficultyChange: (val: Difficulty | 'all') => void;
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const SidebarFeature: React.FC<SidebarProps> = (props) => {
  const popularTags = ['this', 'closure', 'async', 'promise', 'hoisting', 'scope', 'const', 'let', 'event loop', 'prototype', 'immutability'];

  return (
    <aside className="w-full md:w-80 h-full bg-[#0d1117] border-r border-slate-800 flex flex-col shadow-2xl z-30 overflow-hidden flex-shrink-0">
      <div className="p-6 border-b border-slate-800/50 bg-[#0a0f1d]/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-500 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <i className="fa-brands fa-js text-slate-950 text-lg"></i>
          </div>
          <div>
            <h1 className="font-black text-white text-sm tracking-tight leading-none uppercase">JS Interview</h1>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Knowledge Core</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-emerald-500 transition-colors text-xs"></i>
            <input 
              type="text" 
              placeholder="Поиск тем..." 
              value={props.searchQuery}
              onChange={(e) => props.onSearchChange(e.target.value)}
              className="w-full bg-slate-900/40 border border-slate-800 rounded-lg py-2.5 pl-9 pr-4 text-[12px] focus:ring-1 focus:ring-emerald-500/30 focus:border-emerald-500/40 outline-none transition-all placeholder:text-slate-700 text-white"
            />
          </div>

          <div className="flex bg-slate-950/50 p-1 rounded-lg border border-slate-800">
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(d => (
              <button 
                key={d} 
                onClick={() => props.onDifficultyChange(d)}
                className={`flex-1 text-[9px] font-bold py-1.5 rounded-md transition-all uppercase ${
                  props.selectedDifficulty === d ? 'bg-slate-800 text-emerald-400 shadow-sm' : 'text-slate-600 hover:text-slate-400'
                }`}
              >
                {d === 'all' ? 'Все' : d.substring(0, 3)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {popularTags.slice(0, 6).map(tag => (
              <Badge 
                key={tag} 
                variant={props.selectedTags.includes(tag) ? 'active-tag' : 'tag'}
                onClick={() => props.onTagToggle(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        {props.categories.map(cat => (
          <div key={cat.id}>
            <div className="flex items-center gap-2 mb-3 px-2">
              <span className="w-1 h-1 rounded-full bg-slate-700"></span>
              <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">{cat.title}</h3>
            </div>
            <div className="space-y-1">
              {cat.topics.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => props.onTopicSelect(topic.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 group flex items-center justify-between ${
                    props.selectedTopicId === topic.id 
                      ? 'bg-emerald-500/5 text-white' 
                      : 'text-slate-500 hover:bg-slate-900/50 hover:text-slate-300'
                  }`}
                >
                  <span className={`text-[13px] font-semibold truncate ${props.selectedTopicId === topic.id ? 'text-emerald-400' : ''}`}>
                    {topic.title}
                  </span>
                  {props.selectedTopicId === topic.id && (
                    <div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarFeature;
