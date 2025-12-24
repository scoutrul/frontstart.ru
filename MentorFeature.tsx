
import React, { useState, useRef, useEffect } from 'react';
import { askInterviewer } from './geminiService';
import { IconButton, MarkdownRenderer, Badge } from './UIComponents';

interface MentorProps {
  topicTitle: string;
}

const MentorFeature: React.FC<MentorProps> = ({ topicTitle }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.lang = 'ru-RU';
      recognitionRef.current.onresult = (event: any) => {
        const lastPart = event.results[event.results.length - 1][0].transcript;
        if (event.results[event.results.length - 1].isFinal) setAnswer(prev => prev + (prev.length > 0 ? ' ' : '') + lastPart);
      };
      recognitionRef.current.onend = () => setRecording(false);
    }
  }, []);

  const handleCheck = async () => {
    if (!answer.trim()) return;
    setLoading(true);
    const res = await askInterviewer(topicTitle, answer);
    setFeedback(res || "Ошибка получения обратной связи.");
    setLoading(false);
  };

  return (
    <section className="bg-slate-950 border border-slate-800 rounded-[3rem] p-12 mb-20 relative overflow-hidden shadow-inner">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <i className="fa-solid fa-robot text-9xl text-emerald-500"></i>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 relative z-10">
        <div>
          <Badge variant="status" className="mb-4">AI Tutor Active</Badge>
          <h4 className="text-3xl font-black text-white tracking-tight">AI Interview Trainer</h4>
          <p className="text-slate-500 text-lg mt-2">Расскажите о теме своими словами, а ментор проверит точность.</p>
        </div>
        <IconButton 
          icon={recording ? "fa-stop" : "fa-microphone"} 
          onClick={() => recording ? recognitionRef.current.stop() : (setRecording(true), recognitionRef.current.start())} 
          active={recording} 
          pulse={recording}
        />
      </div>

      <div className="space-y-8 relative z-10">
        <div className="relative">
          <textarea 
            value={answer} 
            onChange={(e) => setAnswer(e.target.value)} 
            placeholder="Опишите ваше понимание темы здесь..." 
            className="w-full bg-slate-900/30 border border-slate-800 rounded-[2rem] p-10 text-xl text-slate-200 focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500/30 outline-none min-h-[220px] transition-all placeholder:text-slate-800"
          />
          {recording && (
            <div className="absolute top-6 right-8 flex items-center gap-3 bg-rose-500/10 px-4 py-2 rounded-full border border-rose-500/20">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Recording...</span>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleCheck} 
          disabled={loading || !answer.trim()}
          className="w-full bg-white hover:bg-emerald-400 text-slate-950 font-black py-6 rounded-[1.5rem] transition-all shadow-2xl text-xl active:scale-[0.98] disabled:opacity-30 flex items-center justify-center gap-4"
        >
          {loading ? <i className="fa-solid fa-circle-notch animate-spin"></i> : <i className="fa-solid fa-paper-plane"></i>}
          Отправить на разбор
        </button>

        {feedback && (
          <div className="mt-16 p-12 bg-[#0d1117] border border-slate-800 rounded-[2.5rem] animate-in slide-in-from-bottom-8 duration-500 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950">
                <i className="fa-solid fa-comment-dots"></i>
              </div>
              <h5 className="text-white text-xl font-black">Фидбек ментора</h5>
            </div>
            <MarkdownRenderer text={feedback} />
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorFeature;
