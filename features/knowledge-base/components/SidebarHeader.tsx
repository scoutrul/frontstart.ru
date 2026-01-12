import React from 'react';
import { META_CATEGORIES } from '../../../core/metaCategories';

interface SidebarHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
  className?: string;
  showFullTitle?: boolean;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ 
  icon, 
  title, 
  className = '',
  showFullTitle = true
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-emerald-500">
          <i className={`${icon} text-emerald-500 text-base`}></i>
        </div>
        <div className="flex flex-col">
          {showFullTitle ? (
            <h1 className="font-bold text-white text-lg tracking-tight">
              <span className="relative">            
                Front
                <span className="text-emerald-500 font-bold">Start</span>
              </span>
              {title && (
                <>
                  <span className="text-slate-500 text-sm"> / </span>
                  <span className="text-amber-500 text-sm">{title}</span>
                </>
              )}
            </h1>
          ) : (
            <h1 className="font-bold text-white text-lg tracking-tight">
              <span className="text-emerald-500 font-bold">{title}</span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
