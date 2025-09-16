import React from 'react';
import { Trophy, User, BookOpen } from 'lucide-react';
import { UserProgress } from '../types/progress';

interface HeaderProps {
  userProgress: UserProgress;
}

const Header: React.FC<HeaderProps> = ({ userProgress }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Elite Academy</h1>
            <p className="text-sm text-gray-600">Financial Intelligence Mastery</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-amber-700">{userProgress.totalPoints} pts</span>
          </div>
          
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;