import React from 'react';
import { ArrowRight, Award, Clock, TrendingUp } from 'lucide-react';
import { Module, UserProgress } from '../types/progress';

interface DashboardProps {
  modules: Module[];
  progress: UserProgress;
  onModuleSelect: (moduleId: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ modules, progress, onModuleSelect }) => {
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons, 0);
  const completedLessons = progress.completedLessons.length;
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Elite Academy
        </h1>
        <p className="text-xl text-gray-600">
          Master the foundations of financial intelligence and strategic thinking
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Overall Progress</h3>
              <p className="text-2xl font-bold text-emerald-600">{overallProgress}%</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Points Earned</h3>
              <p className="text-2xl font-bold text-amber-600">{progress.totalPoints}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Keep learning to earn more points!</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Lessons Completed</h3>
              <p className="text-2xl font-bold text-blue-600">{completedLessons}/{totalLessons}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {totalLessons - completedLessons} lessons remaining
          </p>
        </div>
      </div>

      {/* Module Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Modules</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            const completedCount = progress.moduleProgress[module.id] || 0;
            const progressPercent = Math.round((completedCount / module.lessons) * 100);

            return (
              <div
                key={module.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => onModuleSelect(module.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {completedCount} of {module.lessons} lessons completed
                      </span>
                      <span className="text-sm font-bold text-gray-900">{progressPercent}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${module.color} transition-all duration-500`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sm text-gray-500">{module.lessons} lessons</span>
                    <button className="flex items-center space-x-2 text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                      <span>Start Learning</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;