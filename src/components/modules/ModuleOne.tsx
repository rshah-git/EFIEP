import React, { useState } from 'react';
import { CheckCircle, DollarSign, TrendingUp, Building, Shield } from 'lucide-react';
import LessonCard from '../LessonCard';
import ExerciseComponent from '../ExerciseComponent';
import { UserProgress, Exercise } from '../../types/progress';

interface ModuleOneProps {
  onLessonComplete: (lessonId: string) => void;
  progress: UserProgress;
}

const ModuleOne: React.FC<ModuleOneProps> = ({ onLessonComplete, progress }) => {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'assets-vs-liabilities',
      title: 'Understanding Assets vs. Liabilities',
      description: 'Learn what truly generates value versus what costs money over time',
      icon: TrendingUp,
      content: `
        <p>The foundation of financial intelligence begins with understanding the critical difference between assets and liabilities. This distinction separates those who build wealth from those who merely earn income.</p>
        
        <h3>True Assets</h3>
        <p>Assets are investments that put money in your pocket over time:</p>
        <ul>
          <li>Rental real estate that generates positive cash flow</li>
          <li>Dividend-paying stocks and bonds</li>
          <li>Business ownership that produces profit</li>
          <li>Intellectual property that generates royalties</li>
        </ul>
        
        <h3>Hidden Liabilities</h3>
        <p>Many items people consider assets are actually liabilities that drain wealth:</p>
        <ul>
          <li>Primary residence (costs maintenance, taxes, insurance)</li>
          <li>Cars and boats (depreciate rapidly, require ongoing costs)</li>
          <li>Expensive gadgets and luxury items</li>
        </ul>
        
        <h3>The Elite Mindset</h3>
        <p>Wealthy families teach their children to evaluate every purchase: "Will this put money in my pocket or take it out?" This simple question transforms financial decision-making.</p>
      `,
      exercises: [
        {
          id: 'asset-classification',
          type: 'quiz' as const,
          question: 'Which of the following is a TRUE asset according to elite financial principles?',
          options: [
            'A $100,000 luxury car',
            'A rental property generating $500/month profit',
            'A primary residence worth $500,000',
            'The latest iPhone and laptop'
          ],
          correctAnswer: 1,
          explanation: 'A rental property generating positive cash flow is a true asset because it puts money in your pocket monthly. The other options are liabilities that cost money over time.'
        }
      ]
    },
    {
      id: 'investor-mindset',
      title: 'The Investor\'s Mindset',
      description: 'Master investment vehicles and compound growth principles',
      icon: DollarSign,
      content: `
        <p>The investor's mindset transcends saving money—it focuses on making money work harder than you do. Elite families understand that wealth is built through strategic capital deployment.</p>
        
        <h3>Investment Vehicle Mastery</h3>
        <p>Different investment vehicles serve different purposes:</p>
        
        <h4>Public Markets</h4>
        <ul>
          <li><strong>Stocks:</strong> Ownership in growing companies, provides liquidity</li>
          <li><strong>Bonds:</strong> Predictable income, capital preservation</li>
          <li><strong>REITs:</strong> Real estate exposure without direct ownership</li>
        </ul>
        
        <h4>Private Markets</h4>
        <ul>
          <li><strong>Real Estate:</strong> Leverage, tax benefits, cash flow</li>
          <li><strong>Private Equity:</strong> Higher returns, longer commitment</li>
          <li><strong>Angel Investing:</strong> Support innovation, exponential potential</li>
        </ul>
        
        <h3>The Power of Compound Interest</h3>
        <p>Einstein allegedly called compound interest "the eighth wonder of the world." Starting early with consistent investment creates exponential wealth growth over decades.</p>
        
        <h3>Long-term Thinking</h3>
        <p>Elite investors think in decades, not quarters. They understand that short-term volatility is the price paid for long-term wealth creation.</p>
      `,
      exercises: [
        {
          id: 'compound-calculation',
          type: 'calculation' as const,
          question: 'If you invest $10,000 at age 25 with a 7% annual return, how much will you have at age 65? (Use compound interest formula)',
          explanation: 'Using the compound interest formula A = P(1 + r)^t: $10,000 × (1.07)^40 = approximately $149,745. This demonstrates the power of starting early and letting compound interest work over time.'
        }
      ]
    },
    {
      id: 'entrepreneurship-value-creation',
      title: 'Entrepreneurship and Value Creation',
      description: 'Identify market needs and build sustainable business models',
      icon: Building,
      content: `
        <p>True wealth comes from creating value for others, not just trading time for money. Entrepreneurship is the vehicle for building scalable wealth and impact.</p>
        
        <h3>Identifying Market Opportunities</h3>
        <p>Elite entrepreneurs develop pattern recognition for market gaps:</p>
        <ul>
          <li>Look for inefficiencies in existing markets</li>
          <li>Listen to customer complaints and frustrations</li>
          <li>Identify underserved market segments</li>
          <li>Anticipate future trends and position early</li>
        </ul>
        
        <h3>Business Model Fundamentals</h3>
        <p>A strong business plan addresses key elements:</p>
        <ul>
          <li><strong>Value Proposition:</strong> What unique problem do you solve?</li>
          <li><strong>Target Market:</strong> Who specifically needs this solution?</li>
          <li><strong>Revenue Model:</strong> How do you monetize the value created?</li>
          <li><strong>Scalability:</strong> Can the business grow without proportional cost increases?</li>
        </ul>
        
        <h3>Revenue vs. Wages</h3>
        <p>Understanding the fundamental difference:</p>
        <ul>
          <li><strong>Wages:</strong> Trading time for money, limited by hours worked</li>
          <li><strong>Revenue:</strong> Money generated from value creation, can be scalable and passive</li>
        </ul>
        
        <h3>Building Systems, Not Jobs</h3>
        <p>Elite entrepreneurs build businesses that can operate without their constant presence, creating both wealth and freedom.</p>
      `,
      exercises: [
        {
          id: 'business-opportunity',
          type: 'reflection' as const,
          question: 'Think of a daily frustration you experience. How could this be turned into a business opportunity? Describe the problem, target market, and potential solution.',
          explanation: 'This exercise develops entrepreneurial thinking by training you to see problems as opportunities. Great businesses often start with solving everyday frustrations.'
        }
      ]
    },
    {
      id: 'taxation-legal-structures',
      title: 'Taxation and Legal Structures',
      description: 'Optimize tax efficiency and protect wealth through proper structures',
      icon: Shield,
      content: `
        <p>Elite families understand that it's not just what you earn, but what you keep. Strategic tax planning and legal structures are essential tools for wealth preservation and growth.</p>
        
        <h3>Tax-Advantaged Accounts</h3>
        <p>Maximize contributions to tax-efficient vehicles:</p>
        <ul>
          <li><strong>401(k)/403(b):</strong> Reduce current taxable income</li>
          <li><strong>IRA/Roth IRA:</strong> Tax-free or tax-deferred growth</li>
          <li><strong>HSA:</strong> Triple tax advantage for health expenses</li>
          <li><strong>529 Plans:</strong> Tax-free education funding</li>
        </ul>
        
        <h3>Business Structure Optimization</h3>
        <p>Different structures offer different advantages:</p>
        <ul>
          <li><strong>LLC:</strong> Liability protection, tax flexibility</li>
          <li><strong>S-Corp:</strong> Reduce self-employment taxes</li>
          <li><strong>C-Corp:</strong> Reinvest profits at lower rates</li>
        </ul>
        
        <h3>Asset Protection Strategies</h3>
        <p>Protect wealth from potential liabilities:</p>
        <ul>
          <li>Separate personal and business assets</li>
          <li>Use trusts for estate planning</li>
          <li>Maintain adequate insurance coverage</li>
          <li>Diversify across jurisdictions when appropriate</li>
        </ul>
        
        <h3>Legal Compliance</h3>
        <p>All strategies must be implemented within legal frameworks. Work with qualified professionals to ensure compliance and optimization.</p>
      `,
      exercises: [
        {
          id: 'tax-strategy',
          type: 'case-study' as const,
          question: 'Sarah is a freelance consultant earning $120,000 annually. She currently pays taxes as a sole proprietor. What tax optimization strategies would you recommend, and why?',
          explanation: 'Recommendations might include: 1) Form an LLC or S-Corp to reduce self-employment taxes, 2) Maximize retirement account contributions, 3) Track business deductions carefully, 4) Consider quarterly estimated payments to avoid penalties.'
        }
      ]
    }
  ];

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(`1-${lessonId}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Module 1: Financial Intelligence</h1>
        <p className="text-xl opacity-90">Build and leverage capital like the financial elite</p>
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>{progress.moduleProgress[1] || 0} of {lessons.length} lessons completed</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {lessons.map((lesson) => (
          <div key={lesson.id}>
            <LessonCard
              lesson={lesson}
              isCompleted={isLessonCompleted(lesson.id)}
              isActive={activeLesson === lesson.id}
              onClick={() => setActiveLesson(activeLesson === lesson.id ? null : lesson.id)}
            />
            
            {activeLesson === lesson.id && (
              <div className="mt-4 bg-white rounded-lg border border-gray-200 p-6">
                <div 
                  className="prose max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: lesson.content }}
                />
                
                {lesson.exercises && (
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Practice Exercises</h3>
                    <div className="space-y-4">
                      {lesson.exercises.map((exercise) => (
                        <ExerciseComponent
                          key={exercise.id}
                          exercise={exercise}
                          onComplete={() => onLessonComplete(lesson.id)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleOne;