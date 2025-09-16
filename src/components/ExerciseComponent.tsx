import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import { Exercise } from '../types/progress';

interface ExerciseComponentProps {
  exercise: Exercise;
  onComplete: () => void;
}

const ExerciseComponent: React.FC<ExerciseComponentProps> = ({ exercise, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [textAnswer, setTextAnswer] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = () => {
    if (exercise.type === 'quiz' && selectedAnswer !== null) {
      setShowResult(true);
      if (selectedAnswer === exercise.correctAnswer) {
        setIsCompleted(true);
        onComplete();
      }
    } else if (exercise.type === 'reflection' || exercise.type === 'case-study' || exercise.type === 'calculation') {
      if (textAnswer.trim()) {
        setShowResult(true);
        setIsCompleted(true);
        onComplete();
      }
    }
  };

  const getExerciseIcon = () => {
    switch (exercise.type) {
      case 'quiz':
        return <AlertCircle className="w-5 h-5" />;
      case 'reflection':
        return <Lightbulb className="w-5 h-5" />;
      case 'case-study':
        return <AlertCircle className="w-5 h-5" />;
      case 'calculation':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  const getExerciseTypeLabel = () => {
    switch (exercise.type) {
      case 'quiz':
        return 'Knowledge Check';
      case 'reflection':
        return 'Reflection Exercise';
      case 'case-study':
        return 'Case Study';
      case 'calculation':
        return 'Calculation Exercise';
      default:
        return 'Exercise';
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-blue-600">
          {getExerciseIcon()}
        </div>
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
          {getExerciseTypeLabel()}
        </span>
        {isCompleted && (
          <div className="ml-auto text-green-600">
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
      </div>
      
      <h4 className="font-semibold text-gray-900 mb-4">{exercise.question}</h4>

      {exercise.type === 'quiz' && exercise.options && (
        <div className="space-y-3 mb-4">
          {exercise.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && setSelectedAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === exercise.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-red-500 bg-red-50 text-red-800'
                    : 'border-blue-500 bg-blue-50 text-blue-800'
                  : showResult && index === exercise.correctAnswer
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              } ${showResult ? 'cursor-default' : 'cursor-pointer'}`}
              disabled={showResult}
            >
              <span className="font-medium text-sm text-gray-600 mr-2">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      )}

      {(exercise.type === 'reflection' || exercise.type === 'case-study' || exercise.type === 'calculation') && (
        <div className="mb-4">
          <textarea
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder="Type your response here..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            rows={6}
            disabled={isCompleted}
          />
        </div>
      )}

      {!showResult && (
        <button
          onClick={handleSubmit}
          disabled={
            (exercise.type === 'quiz' && selectedAnswer === null) ||
            ((exercise.type === 'reflection' || exercise.type === 'case-study' || exercise.type === 'calculation') && !textAnswer.trim())
          }
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      )}

      {showResult && exercise.explanation && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <div className="text-blue-600 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-blue-900 mb-2">Explanation</h5>
              <p className="text-blue-800 text-sm leading-relaxed">{exercise.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">Exercise Completed!</span>
            <span className="text-sm">+10 points earned</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseComponent;