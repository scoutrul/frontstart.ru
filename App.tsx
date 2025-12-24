
import React, { useRef } from 'react';
import Sidebar from './features/knowledge-base/components/Sidebar';
import Content from './features/knowledge-base/components/Content';
import { useCurrentTopic } from './features/knowledge-base/hooks';
import { useKnowledgeBaseStore } from './store/knowledgeBaseStore';

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { selectedTopicId, setSelectedTopicId } = useKnowledgeBaseStore();
  const { currentTopic, relatedTopics } = useCurrentTopic();

  const handleTopicJump = (id: string) => {
    setSelectedTopicId(id);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!currentTopic) {
    return (
      <div className="flex h-screen bg-[#0a0f1d] items-center justify-center">
        <div className="text-slate-400">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0a0f1d] overflow-hidden">
      <Sidebar onTopicSelect={handleTopicJump} />
      <main ref={scrollContainerRef} className="flex-1 overflow-y-auto bg-[#1e293b] relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>
        <Content 
          topic={currentTopic}
          relatedTopics={relatedTopics}
          onTopicJump={handleTopicJump}
        />
      </main>
    </div>
  );
};

export default App;
