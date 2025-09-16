import React, { useState } from 'react';
import { CheckCircle, Heart, Target, Shield } from 'lucide-react';
import LessonCard from '../LessonCard';
import ExerciseComponent from '../ExerciseComponent';
import { UserProgress } from '../../types/progress';

interface ModuleFourProps {
  onLessonComplete: (lessonId: string) => void;
  progress: UserProgress;
}

const ModuleFour: React.FC<ModuleFourProps> = ({ onLessonComplete, progress }) => {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'strategic-philanthropy',
      title: 'Strategic Philanthropy',
      description: 'Create measurable, sustainable impact through giving',
      icon: Heart,
      content: `
        <p>Elite philanthropy goes beyond writing checks—it applies business principles to create sustainable, measurable impact that addresses root causes rather than just symptoms.</p>
        
        <h3>The Strategic Giving Framework</h3>
        <p>Approach philanthropy like elite business strategy:</p>
        <ul>
          <li><strong>Define Clear Objectives:</strong> What specific outcomes do you want?</li>
          <li><strong>Measure Impact:</strong> How will you know you're succeeding?</li>
          <li><strong>Focus Resources:</strong> Concentrate efforts for maximum impact</li>
          <li><strong>Build Partnerships:</strong> Leverage others' expertise and resources</li>
        </ul>
        
        <h3>Impact Investment Principles</h3>
        <p>Combine financial returns with social impact:</p>
        <ul>
          <li><strong>Double Bottom Line:</strong> Profit and purpose working together</li>
          <li><strong>Sustainable Models:</strong> Self-perpetuating solutions</li>
          <li><strong>Scalable Solutions:</strong> Interventions that can grow</li>
          <li><strong>Market-Based Approaches:</strong> Using capitalism for good</li>
        </ul>
        
        <h3>Due Diligence for Giving</h3>
        <p>Evaluate charitable organizations like investments:</p>
        <ul>
          <li><strong>Leadership Assessment:</strong> Who runs the organization?</li>
          <li><strong>Financial Transparency:</strong> How efficiently do they use funds?</li>
          <li><strong>Impact Measurement:</strong> Do they track and report results?</li>
          <li><strong>Theory of Change:</strong> Is their approach evidence-based?</li>
        </ul>
        
        <h3>Leveraging Your Unique Assets</h3>
        <p>Give more than money:</p>
        <ul>
          <li><strong>Expertise:</strong> Share your professional skills</li>
          <li><strong>Network:</strong> Connect nonprofits with resources</li>
          <li><strong>Platform:</strong> Use your influence to amplify causes</li>
          <li><strong>Time:</strong> Engage directly with organizations</li>
        </ul>
        
        <h3>Building Philanthropic Legacy</h3>
        <p>Create lasting impact beyond your lifetime:</p>
        <ul>
          <li>Establish foundations with clear missions</li>
          <li>Train and involve family members</li>
          <li>Create endowments for perpetual funding</li>
          <li>Document and share lessons learned</li>
        </ul>
      `,
      exercises: [
        {
          id: 'philanthropic-strategy',
          type: 'reflection' as const,
          question: 'Choose a social issue you care about deeply. Design a strategic philanthropic approach: 1) Define specific, measurable goals, 2) Identify 3 organizations working on this issue, 3) Evaluate their effectiveness, 4) Propose how you could contribute beyond money.',
          explanation: 'This exercise helps you think strategically about giving, focusing on impact rather than just good intentions. Elite philanthropists approach giving with the same rigor they apply to business investments.'
        }
      ]
    },
    {
      id: 'personal-legacy',
      title: 'Defining Your Personal Legacy',
      description: 'Clarify your values and create a vision for lasting impact',
      icon: Target,
      content: `
        <p>Elite legacy builders understand that true success is measured by the positive impact you have on others and the world, long after you're gone.</p>
        
        <h3>Values Clarification Process</h3>
        <p>Define what truly matters to you:</p>
        <ol>
          <li><strong>Peak Experience Analysis:</strong> When have you felt most fulfilled?</li>
          <li><strong>Role Model Study:</strong> Who do you admire and why?</li>
          <li><strong>Regret Prevention:</strong> What would you regret not doing?</li>
          <li><strong>Impact Visualization:</strong> How do you want to be remembered?</li>
        </ol>
        
        <h3>Legacy Dimensions</h3>
        <p>Consider impact across multiple areas:</p>
        <ul>
          <li><strong>Family Legacy:</strong> Values and principles passed to children</li>
          <li><strong>Professional Legacy:</strong> Industry impact and innovation</li>
          <li><strong>Community Legacy:</strong> Local improvements and contributions</li>
          <li><strong>Global Legacy:</strong> Broader societal or environmental impact</li>
        </ul>
        
        <h3>Creating Your Legacy Statement</h3>
        <p>Craft a clear, compelling vision:</p>
        <ul>
          <li><strong>Personal Mission:</strong> What is your unique purpose?</li>
          <li><strong>Core Values:</strong> What principles guide your decisions?</li>
          <li><strong>Impact Goals:</strong> What specific changes do you want to create?</li>
          <li><strong>Success Metrics:</strong> How will you measure your legacy?</li>
        </ul>
        
        <h3>Living Your Legacy Daily</h3>
        <p>Align actions with legacy intentions:</p>
        <ul>
          <li>Make decisions through the lens of legacy</li>
          <li>Invest time in relationships that matter</li>
          <li>Mentor others and share knowledge freely</li>
          <li>Take stands on issues important to you</li>
        </ul>
        
        <h3>Legacy Planning Strategies</h3>
        <p>Ensure your impact continues:</p>
        <ul>
          <li><strong>Documentation:</strong> Write down your wisdom and lessons</li>
          <li><strong>Succession Planning:</strong> Train others to continue your work</li>
          <li><strong>Institutional Building:</strong> Create organizations that outlast you</li>
          <li><strong>Story Telling:</strong> Share your journey to inspire others</li>
        </ul>
        
        <h3>The Compound Effect of Legacy</h3>
        <p>Understand how your impact multiplies:</p>
        <ul>
          <li>People you influence go on to influence others</li>
          <li>Organizations you build continue creating value</li>
          <li>Ideas you share spread and evolve</li>
          <li>Examples you set inspire future generations</li>
        </ul>
      `,
      exercises: [
        {
          id: 'legacy-vision',
          type: 'reflection' as const,
          question: 'Write your legacy statement in 3 parts: 1) Your core values (what drives you), 2) Your unique contribution (what you want to be known for), 3) Your lasting impact (how the world will be different because of you). Make it personal and specific.',
          explanation: 'This exercise helps you clarify your deepest motivations and create a north star for life decisions. Elite achievers use legacy thinking to guide major choices and maintain perspective during challenges.'
        }
      ]
    },
    {
      id: 'ethics-in-business',
      title: 'Ethics and Integrity in Business',
      description: 'Build lasting success through principled decision-making',
      icon: Shield,
      content: `
        <p>Elite business leaders understand that integrity is not a constraint on success—it's the foundation of sustainable, meaningful achievement and trust-based relationships.</p>
        
        <h3>The Integrity Advantage</h3>
        <p>Why ethics create competitive advantage:</p>
        <ul>
          <li><strong>Trust Building:</strong> Reduces transaction costs and friction</li>
          <li><strong>Talent Attraction:</strong> Top performers want to work for ethical leaders</li>
          <li><strong>Customer Loyalty:</strong> People prefer doing business with trustworthy organizations</li>
          <li><strong>Risk Mitigation:</strong> Ethical practices prevent costly scandals</li>
        </ul>
        
        <h3>Ethical Decision-Making Framework</h3>
        <p>Questions to guide tough decisions:</p>
        <ol>
          <li><strong>Legal Test:</strong> Is this action legal?</li>
          <li><strong>Public Test:</strong> Would I be comfortable if this were public?</li>
          <li><strong>Mirror Test:</strong> Can I look at myself in the mirror?</li>
          <li><strong>Stakeholder Test:</strong> Who is helped and who is harmed?</li>
          <li><strong>Long-term Test:</strong> What are the potential long-term consequences?</li>
        </ol>
        
        <h3>Common Ethical Dilemmas</h3>
        <p>Navigate complex situations with principle:</p>
        <ul>
          <li><strong>Competitive Intelligence:</strong> Gathering information ethically</li>
          <li><strong>Employee Treatment:</strong> Balancing profit with people</li>
          <li><strong>Customer Relations:</strong> Honesty in marketing and sales</li>
          <li><strong>Supplier Relationships:</strong> Fair dealing and payment terms</li>
        </ul>
        
        <h3>Building an Ethical Culture</h3>
        <p>Create organizations that do the right thing:</p>
        <ul>
          <li><strong>Lead by Example:</strong> Your actions set the standard</li>
          <li><strong>Clear Policies:</strong> Written guidelines for behavior</li>
          <li><strong>Open Communication:</strong> Safe channels for raising concerns</li>
          <li><strong>Consistent Enforcement:</strong> Apply standards fairly to everyone</li>
        </ul>
        
        <h3>The Cost of Compromise</h3>
        <p>Understand what you risk when you compromise integrity:</p>
        <ul>
          <li>Reputation damage that takes decades to repair</li>
          <li>Loss of trust from key stakeholders</li>
          <li>Legal and financial consequences</li>
          <li>Personal stress and loss of self-respect</li>
        </ul>
        
        <h3>Integrity as Competitive Strategy</h3>
        <p>How ethical behavior creates business value:</p>
        <ul>
          <li><strong>Premium Pricing:</strong> Customers pay more for trusted brands</li>
          <li><strong>Lower Costs:</strong> Less need for monitoring and enforcement</li>
          <li><strong>Better Partnerships:</strong> Access to high-quality collaborators</li>
          <li><strong>Regulatory Favor:</strong> Governments trust ethical companies more</li>
        </ul>
        
        <h3>Personal Integrity Practices</h3>
        <p>Daily habits that reinforce ethical behavior:</p>
        <ul>
          <li>Tell the truth even when it's uncomfortable</li>
          <li>Keep promises and commitments consistently</li>
          <li>Give credit to others generously</li>
          <li>Admit mistakes quickly and transparently</li>
          <li>Stand up for what's right even when it's difficult</li>
        </ul>
      `,
      exercises: [
        {
          id: 'ethical-scenario',
          type: 'case-study' as const,
          question: 'You discover a competitor\'s confidential pricing strategy through a mutual contact. Using this information could help you win a major contract worth $1M. Apply the 5-question ethical framework to this situation. What would you do and why?',
          explanation: 'This scenario tests your commitment to ethical principles when faced with significant financial temptation. Elite leaders understand that short-term gains from ethical compromises rarely outweigh long-term reputation and relationship costs.'
        }
      ]
    }
  ];

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(`4-${lessonId}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Module 4: Legacy & Philanthropy</h1>
        <p className="text-xl opacity-90">Create lasting impact and meaningful purpose</p>
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>{progress.moduleProgress[4] || 0} of {lessons.length} lessons completed</span>
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

export default ModuleFour;