import React from 'react';
import { Link } from 'react-router-dom';
import { META_CATEGORIES, MetaCategoryId } from '../../../core/metaCategories';
import { META_CATEGORIES_DATA } from '../../../core/metaCategoriesData';
import { Badge } from '../../../components/ui';
import Footer from '../../../components/ui/Footer';

interface MetaCategoryIndexProps {
  metaCategoryId: MetaCategoryId;
  onTopicSelect: (topicId: string) => void;
}

const MetaCategoryIndex: React.FC<MetaCategoryIndexProps> = ({ metaCategoryId, onTopicSelect }) => {
  const metaCategory = META_CATEGORIES.find(m => m.id === metaCategoryId);
  const categories = META_CATEGORIES_DATA[metaCategoryId] || [];
  
  const totalTopics = categories.reduce((sum, cat) => sum + cat.topics.length, 0);

  if (!metaCategory) {
    return <div className="text-slate-400 p-8">Раздел не найден</div>;
  }

  return (
    <div className="relative z-10">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8 lg:py-12 pb-24">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
              <i className={`${metaCategory.icon} text-xl text-emerald-400`}></i>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-black text-white">{metaCategory.title}</h1>
              <p className="text-slate-400 text-sm">{totalTopics} тем в {categories.length} разделах</p>
            </div>
          </div>
          <p className="text-slate-300">{metaCategory.description}</p>
        </div>

        {/* Sections with Topics */}
        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div key={category.id} className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden">
              {/* Section Header */}
              <Link 
                to={`/${metaCategoryId}/${category.id}`}
                className="block px-5 py-4 border-b border-slate-700/30 bg-slate-800/30 hover:bg-slate-800/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-sm font-mono">{String(catIndex + 1).padStart(2, '0')}</span>
                  <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{category.title}</h2>
                  <span className="text-xs text-slate-500 ml-auto">
                    {category.topics.length} {category.topics.length === 1 ? 'тема' : category.topics.length < 5 ? 'темы' : 'тем'}
                  </span>
                </div>
                {category.description && (
                  <p className="text-slate-400 text-sm mt-2 ml-9">{category.description}</p>
                )}
              </Link>
              
              {/* Topics List */}
              <div className="divide-y divide-slate-700/20">
                {category.topics.map((topic, topicIndex) => (
                  <button
                    key={topic.id}
                    onClick={() => onTopicSelect(topic.id)}
                    className="w-full text-left px-5 py-3 hover:bg-slate-800/40 transition-colors group flex items-center gap-3 relative"
                  >
                    <span className="text-slate-600 text-xs font-mono w-5 flex-shrink-0">
                      {topicIndex + 1}
                    </span>
                    <span className="text-slate-300 group-hover:text-emerald-400 transition-colors flex-1 min-w-0 truncate">
                      {topic.title}
                    </span>
                    <Badge variant={topic.difficulty} className="flex-shrink-0" />
                    {topic.isFrontendEssential && (
                      <div className="absolute right-2 top-2 w-1.5 h-1.5 bg-blue-500 rounded-full" title="Frontend Essential"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MetaCategoryIndex;
