import React, { useState } from 'react';
import { BookOpen, Trophy, User, Target, DollarSign, Heart, Lightbulb, Users } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ModuleOne from './components/modules/ModuleOne';
import ModuleTwo from './components/modules/ModuleTwo';
import ModuleThree from './components/modules/ModuleThree';
import ModuleFour from './components/modules/ModuleFour';
import Dashboard from './components/Dashboard';
import { UserProgress } from './types/progress';

const MODULES = [
  {
    id: 1,
    title: 'Financial Intelligence',
    description: 'Building and leveraging capital',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-600',
    lessons: 4
  },
  {
    id: 2,
    title: 'Social & Emotional Intelligence',
    description: 'Leadership and networking mastery',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    lessons: 4
  },
  {
    id: 3,
    title: 'Strategic Thinking',
    description: 'Opportunity creation and execution',
    icon: Lightbulb,
    color: 'from-purple-500 to-violet-600',
    lessons: 3
  },
  {
    id: 4,
    title: 'Legacy & Philanthropy',
    description: 'Creating lasting impact',
    icon: Heart,
    color: 'from-rose-500 to-pink-600',
    lessons: 3
  }
];

function App() {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedLessons: [],
    moduleProgress: {},
    achievements: [],
    totalPoints: 0
  });

  const handleLessonComplete = (moduleId: number, lessonId: string) => {
    const lessonKey = `${moduleId}-${lessonId}`;
    if (!userProgress.completedLessons.includes(lessonKey)) {
      setUserProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lessonKey],
        totalPoints: prev.totalPoints + 10,
        moduleProgress: {
          ...prev.moduleProgress,
          [moduleId]: (prev.moduleProgress[moduleId] || 0) + 1
        }
      }));
    }
  };

  const renderContent = () => {
    switch (activeModule) {
      case 1:
        return <ModuleOne onLessonComplete={(lessonId) => handleLessonComplete(1, lessonId)} progress={userProgress} />;
      case 2:
        return <ModuleTwo onLessonComplete={(lessonId) => handleLessonComplete(2, lessonId)} progress={userProgress} />;
      case 3:
        return <ModuleThree onLessonComplete={(lessonId) => handleLessonComplete(3, lessonId)} progress={userProgress} />;
      case 4:
        return <ModuleFour onLessonComplete={(lessonId) => handleLessonComplete(4, lessonId)} progress={userProgress} />;
      default:
        return <Dashboard modules={MODULES} progress={userProgress} onModuleSelect={setActiveModule} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header userProgress={userProgress} />
      
      <div className="flex">
        <Sidebar 
          modules={MODULES}
          activeModule={activeModule}
          onModuleSelect={setActiveModule}
          progress={userProgress}
        />
        
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;