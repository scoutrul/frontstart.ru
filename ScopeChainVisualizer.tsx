
import React, { useState } from 'react';

const ScopeChainVisualizer: React.FC = () => {
  const [step, setStep] = useState(0); 
  const [isSearching, setIsSearching] = useState(false);

  const startSimulation = () => {
    setIsSearching(true);
    setStep(1);
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => {
      setStep(3);
      setIsSearching(false);
    }, 3000);
  };

  return (
    <div className="bg-slate-950/50 border border-slate-800 rounded-3xl p-8 mb-14 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h4 className="text-white font-bold text-lg flex items-center gap-2">
            <i className="fa-solid fa-eye text-emerald-500"></i> Визуализация Scope Chain
          </h4>
          <p className="text-xs text-slate-500 mt-1">Поиск переменной <code>userName</code> в коде</p>
        </div>
        <div className="flex gap-2">
          {step !== 0 && (
            <button onClick={() => setStep(0)} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 transition-all">
              Сброс
            </button>
          )}
          <button 
            onClick={startSimulation} 
            disabled={isSearching || step === 3}
            className={`text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-xl transition-all ${isSearching || step === 3 ? 'bg-slate-800 text-slate-600' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20'}`}
          >
            {isSearching ? 'Идет поиск...' : step === 3 ? 'Найдено' : 'Запустить поиск'}
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-[350px] p-4 font-mono">
        <div className={`w-full max-w-lg border-2 rounded-[2rem] p-8 transition-all duration-500 ${step === 0 ? 'border-slate-800 bg-slate-900/20' : step === 3 ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-700 bg-slate-900/40'}`}>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">Global Scope</div>
          <div className="mb-4 opacity-40"><code className="text-xs text-slate-500">const version = "1.0";</code></div>

          <div className={`relative border-2 rounded-[1.5rem] p-8 transition-all duration-500 ${step === 2 ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : step === 3 ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'border-slate-700 bg-slate-900/60'}`}>
            <div className="absolute -top-3 left-6 bg-slate-900 px-2 text-[9px] font-bold text-slate-500 uppercase">Outer Function</div>
            <div className={`mb-4 transition-all duration-500 ${step >= 2 ? 'scale-110' : 'opacity-60'}`}>
              <code className={`text-sm ${step >= 2 ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>const userName = "Alex";</code>
              {step === 3 && <span className="ml-3 text-[10px] text-emerald-500 font-bold animate-pulse">← НАЙДЕНО ЗДЕСЬ!</span>}
            </div>

            <div className={`relative border-2 rounded-2xl p-6 transition-all duration-500 ${step === 1 ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'border-slate-800 bg-slate-950/80'}`}>
              <div className="absolute -top-3 left-6 bg-slate-950 px-2 text-[9px] font-bold text-slate-600 uppercase">Inner Function</div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-500 ${step === 1 ? 'bg-blue-500/20 border-blue-500 text-blue-400 scale-105' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
                    console.log(userName);
                  </div>
                  {step === 1 && <div className="text-[10px] text-blue-400 font-bold animate-bounce whitespace-nowrap">Ищем...</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex gap-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="flex items-center gap-2">
               <div className={`w-2 h-2 rounded-full ${step >= i ? (i === 3 ? 'bg-emerald-500' : 'bg-blue-500') : 'bg-slate-800'}`}></div>
               <span className="text-[10px] text-slate-500 font-bold uppercase">{i}. {i === 1 ? 'Local' : i === 2 ? 'Parent' : 'Global'}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ScopeChainVisualizer;
