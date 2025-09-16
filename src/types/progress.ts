export interface UserProgress {
  completedLessons: string[];
  moduleProgress: Record<number, number>;
  achievements: string[];
  totalPoints: number;
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  lessons: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  exercises?: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'quiz' | 'case-study' | 'reflection' | 'calculation';
  question: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
}