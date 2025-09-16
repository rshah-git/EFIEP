import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Module, UserProgress } from '../types/progress';

interface SidebarProps {
  modules: Module[];
  activeModule: number | null;
  onModuleSelect: (moduleId: number | null) => void;
  progress: UserProgress;
}

const Sidebar: React.FC<SidebarProps> = ({ modules, activeModule, onModuleSelect, progress }) => {
  const getModuleProgress = (moduleId: number, totalLessons: number) => {
    const completed = progress.moduleProgress[moduleId] || 0;
    return Math.round((completed / totalLessons) * 100);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <button
          onClick={() => onModuleSelect(null)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeModule === null 
              ? 'bg-slate-100 text-slate-900' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </button>
      </div>

      <nav className="px-6 pb-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Learning Modules
        </h3>
        
        <div className="space-y-2">
          {modules.map((module) => {
            const progressPercent = getModuleProgress(module.id, module.lessons);
            const Icon = module.icon;
            
            return (
              <button
                key={module.id}
                onClick={() => onModuleSelect(module.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all group ${
                  activeModule === module.id
                    ? 'bg-gradient-to-r from-slate-100 to-gray-100 border border-slate-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">
                      {module.title}
                    </h4>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                
                <div className="pl-11">
                  <p className="text-xs text-gray-600 mb-2">{module.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-300`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{progressPercent}%</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;