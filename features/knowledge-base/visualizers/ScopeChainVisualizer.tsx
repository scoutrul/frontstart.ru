
import React, { useState, useEffect } from 'react';

const ScopeChainVisualizer: React.FC = () => {
  const [step, setStep] = useState<'idle' | 'searching-inner' | 'searching-outer' | 'found'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs(prev => [msg, ...prev].slice(0, 3));
  };

  const startSimulation = () => {
    setStep('searching-inner');
    setLogs([]);
    addLog("Запрос: console.log(userName)");
    
    setTimeout(() => {
      addLog("Внутренняя область: userName не найден.");
      setStep('searching-outer');
    }, 1200);

    setTimeout(() => {
      addLog("Внешняя область: userName найден!");
      setStep('found');
    }, 2500);
  };

  const reset = () => {
    setStep('idle');
    setLogs([]);
  };

  return (
    <div className="bg-[#0d1117] border border-slate-800/60 rounded-3xl p-8 mb-14 shadow-2xl relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 relative z-10">
        <div>
          <h4 className="text-white font-black text-xl flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <i className="fa-solid fa-layer-group text-emerald-500 text-sm"></i>
            </span>
            Scope Chain Visualizer
          </h4>
          <p className="text-xs text-slate-500 mt-2 font-medium">Поиск переменной по цепочке лексических окружений</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={reset}
            className="text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl border border-slate-800 text-slate-500 hover:text-slate-300 transition-all active:scale-95"
          >
            Сброс
          </button>
          <button 
            onClick={startSimulation}
            disabled={step !== 'idle'}
            className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center gap-2 ${
              step === 'found' 
                ? 'bg-emerald-500 text-slate-950' 
                : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20'
            }`}
          >
            {step === 'idle' && <><i className="fa-solid fa-play"></i> Запустить поиск</>}
            {(step === 'searching-inner' || step === 'searching-outer') && <><i className="fa-solid fa-spinner animate-spin"></i> Поиск...</>}
            {step === 'found' && <><i className="fa-solid fa-check"></i> Найдено</>}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Diagram */}
        <div className="lg:col-span-8 flex justify-center py-4">
          <div className={`relative w-full max-w-md border-2 rounded-[2.5rem] p-10 transition-all duration-700 ${
            step === 'idle' ? 'border-slate-800/40 bg-slate-900/10' : 'border-slate-800 bg-slate-900/20'
          }`}>
            <span className="absolute -top-3 left-8 bg-[#0d1117] px-3 text-[9px] font-black text-slate-600 uppercase tracking-widest">Global Scope</span>
            
            {/* Outer Scope */}
            <div className={`relative border-2 rounded-[2rem] p-10 transition-all duration-500 transform ${
              step === 'searching-outer' ? 'border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)] scale-[1.02]' : 
              step === 'found' ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]' :
              'border-slate-800/60 bg-slate-900/40'
            }`}>
              <span className="absolute -top-3 left-8 bg-[#161b22] px-3 text-[9px] font-bold text-slate-500 uppercase tracking-widest">Outer Function</span>
              
              <div className="mb-6 flex items-center justify-between">
                <code className={`text-sm font-bold transition-all duration-500 ${
                  step === 'found' ? 'text-emerald-400 scale-110 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-slate-500'
                }`}>
                  const <span className={step === 'found' ? 'text-emerald-300' : 'text-slate-400'}>userName</span> = "Alex";
                </code>
                {step === 'found' && (
                  <span className="text-[10px] font-black text-emerald-500 animate-pulse bg-emerald-500/10 px-2 py-0.5 rounded">MATCH!</span>
                )}
              </div>

              {/* Inner Scope */}
              <div className={`relative border-2 rounded-2xl p-8 transition-all duration-500 ${
                step === 'searching-inner' ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-[1.02]' : 
                'border-slate-800 bg-slate-950/60'
              }`}>
                <span className="absolute -top-3 left-6 bg-[#0d1117] px-2 text-[9px] font-bold text-slate-600 uppercase tracking-widest">Inner Function</span>
                
                <div className="flex flex-col gap-4">
                  <div className={`px-4 py-3 rounded-xl border font-mono text-xs transition-all duration-500 flex items-center justify-between ${
                    step === 'searching-inner' ? 'bg-blue-500/10 border-blue-500/50 text-blue-300' : 
                    step === 'found' ? 'bg-emerald-500/5 border-emerald-500/30 text-emerald-400/80' :
                    'bg-slate-900 border-slate-800 text-slate-500'
                  }`}>
                    <span>console.log(userName);</span>
                    {step === 'searching-inner' && <i className="fa-solid fa-magnifying-glass animate-bounce"></i>}
                  </div>
                </div>

                {/* Search Path Arrow */}
                {(step === 'searching-outer' || step === 'found') && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-0.5 h-8 bg-gradient-to-t from-emerald-500 to-transparent"></div>
                    <i className="fa-solid fa-chevron-up text-emerald-500 text-[10px] -mt-1"></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Logs / Explanation */}
        <div className="lg:col-span-4 h-full flex flex-col">
          <div className="bg-slate-950/80 border border-slate-800/60 rounded-2xl p-6 flex-1 shadow-inner">
            <h5 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Engine Trace</h5>
            <div className="space-y-4">
              {logs.length === 0 && (
                <p className="text-slate-700 text-[11px] italic">Ожидание запуска симуляции...</p>
              )}
              {logs.map((log, i) => (
                <div key={i} className={`flex gap-3 text-[11px] leading-relaxed animate-in slide-in-from-left-2 duration-300 ${
                  i === 0 ? 'text-emerald-400 font-bold' : 'text-slate-500'
                }`}>
                  <span className="text-slate-800 font-mono">[{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}]</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 p-4 border-l-2 border-emerald-500/30 bg-emerald-500/5 rounded-r-xl">
            <p className="text-[10px] text-slate-400 leading-relaxed">
              <strong className="text-emerald-500">Scope Chain</strong> — это однонаправленный поиск. Движок всегда идет от текущего контекста к глобальному, никогда не заглядывая во "вложенные" области других функций.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeChainVisualizer;
