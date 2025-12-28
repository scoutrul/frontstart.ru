import React, { useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

export const CodeBlock: React.FC<{ title: string; code: string }> = ({ title, code }) => {
  const highlighted = useMemo(() => Prism.highlight(code, Prism.languages.javascript, 'javascript'), [code]);

  return (
    <div className="rounded-xl border border-slate-800/80 bg-[#0d1117] overflow-hidden mb-8 shadow-lg">
      <div className="bg-[#364055] px-4 py-2 border-b border-slate-800/60">
        <span className="text-[12px] font-bold text-amber-500 font-mono tracking-widest uppercase">{title}</span>
      </div>
      <div className="p-6 overflow-x-auto bg-[#334155]">
        <pre className="language-javascript text-sm leading-relaxed" style={{ fontSize: '14px' }}>
          <code style={{ fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: highlighted }} />
        </pre>
      </div>
    </div>
  );
};

