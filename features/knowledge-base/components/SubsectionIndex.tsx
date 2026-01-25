import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../../core/types';
import { META_CATEGORIES, MetaCategoryId } from '../../../core/metaCategories';
import { Badge } from '../../../components/ui';
import Footer from '../../../components/ui/Footer';

interface SubsectionIndexProps {
  metaCategoryId: MetaCategoryId;
  category: Category;
  onTopicSelect: (topicId: string) => void;
  onSearchOpen?: () => void;
}

const SubsectionIndex: React.FC<SubsectionIndexProps> = ({ metaCategoryId, category, onTopicSelect, onSearchOpen }) => {
  const metaCategory = META_CATEGORIES.find(m => m.id === metaCategoryId);

  return (
    <div className="relative z-10">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12 pb-24">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to={`/${metaCategoryId}`}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <i className="fa-solid fa-chevron-left text-xs"></i>
            <span>{metaCategory?.title}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-black text-white mb-3">{category.title}</h1>
          {category.description && (
            <p className="text-slate-300">{category.description}</p>
          )}
          <p className="text-slate-500 text-sm mt-2">{category.topics.length} тем</p>
        </div>

        {/* Topics List */}
        <div className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden divide-y divide-slate-700/20">
          {category.topics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => onTopicSelect(topic.id)}
              className="w-full text-left px-5 py-4 hover:bg-slate-800/40 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="text-slate-600 text-sm font-mono flex-shrink-0 w-6 text-right pt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0 max-h-[4rem]">
                  <div className="flex items-center gap-3 mb-1 justify-between">
                    <h2 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {topic.title}
                    </h2>
                    <Badge variant={topic.difficulty} className="flex-shrink-0" />
                    {topic.isFrontendEssential && (
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" title="Frontend Essential"></div>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm line-clamp-2">{topic.description.slice(0, 180)}...</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SubsectionIndex;
