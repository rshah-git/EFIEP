import React from 'react';
import { CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    icon: any;
  };
  isCompleted: boolean;
  isActive: boolean;
  onClick: () => void;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, isCompleted, isActive, onClick }) => {
  const Icon = lesson.icon;

  return (
    <div 
      className={`bg-white rounded-lg border-2 transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'border-blue-500 shadow-lg' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isCompleted 
                ? 'bg-green-100 text-green-600' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold ${
                isCompleted ? 'text-green-800' : 'text-gray-900'
              }`}>
                {lesson.title}
                {isCompleted && <span className="ml-2 text-sm text-green-600 font-normal">✓ Completed</span>}
              </h3>
              <p className="text-gray-600 text-sm">{lesson.description}</p>
            </div>
          </div>
          
          <div className="text-gray-400">
            {isActive ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;