import React, { useState } from 'react';
import { InterviewQuestion } from '../../../core/types';
import { Badge } from '../../../components/ui';
import { getInterviewQuestionsByCategory } from '../../../core/topics/interview-questions';

interface QAContentProps {
  categoryId: string | null;
}

const QAContent: React.FC<QAContentProps> = ({ categoryId }) => {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const questions = categoryId ? getInterviewQuestionsByCategory(categoryId) : [];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  if (!categoryId) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        <div className="text-center">
          <i className="fa-solid fa-question-circle text-4xl mb-4 text-slate-600"></i>
          <p>Выберите категорию для просмотра вопросов</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        <p>В этой категории пока нет вопросов</p>
      </div>
    );
  }

  // Группируем вопросы по сложности
  const questionsByDifficulty = {
    beginner: questions.filter((q) => q.difficulty === 'beginner'),
    intermediate: questions.filter((q) => q.difficulty === 'intermediate'),
    advanced: questions.filter((q) => q.difficulty === 'advanced'),
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="space-y-6">
        {/* Начальный уровень */}
        {questionsByDifficulty.beginner.length > 0 && (
          <section>
            <h2 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">
              Начальный уровень
            </h2>
            <div className="space-y-3">
              {questionsByDifficulty.beginner.map((question) => (
                <QuestionAccordion
                  key={question.id}
                  question={question}
                  isOpen={openQuestions.has(question.id)}
                  onToggle={() => toggleQuestion(question.id)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Средний уровень */}
        {questionsByDifficulty.intermediate.length > 0 && (
          <section>
            <h2 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">
              Средний уровень
            </h2>
            <div className="space-y-3">
              {questionsByDifficulty.intermediate.map((question) => (
                <QuestionAccordion
                  key={question.id}
                  question={question}
                  isOpen={openQuestions.has(question.id)}
                  onToggle={() => toggleQuestion(question.id)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Продвинутый уровень */}
        {questionsByDifficulty.advanced.length > 0 && (
          <section>
            <h2 className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">
              Продвинутый уровень
            </h2>
            <div className="space-y-3">
              {questionsByDifficulty.advanced.map((question) => (
                <QuestionAccordion
                  key={question.id}
                  question={question}
                  isOpen={openQuestions.has(question.id)}
                  onToggle={() => toggleQuestion(question.id)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

interface QuestionAccordionProps {
  question: InterviewQuestion;
  isOpen: boolean;
  onToggle: () => void;
}

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({ question, isOpen, onToggle }) => {
  return (
    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-800/50 transition-colors"
      >
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <Badge variant={question.difficulty} className="flex-shrink-0" />
          <span className="text-slate-200 font-medium text-sm flex-1">{question.question}</span>
        </div>
        <i
          className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'} text-slate-400 text-xs flex-shrink-0 transition-transform`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 border-t border-slate-700/50">
          <div className="pt-4 text-slate-300 text-sm leading-relaxed whitespace-pre-line">
            {question.answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default QAContent;
