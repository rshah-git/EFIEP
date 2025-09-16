import React, { useState } from 'react';
import { CheckCircle, Clock, Lightbulb, Users } from 'lucide-react';
import LessonCard from '../LessonCard';
import ExerciseComponent from '../ExerciseComponent';
import { UserProgress } from '../../types/progress';

interface ModuleThreeProps {
  onLessonComplete: (lessonId: string) => void;
  progress: UserProgress;
}

const ModuleThree: React.FC<ModuleThreeProps> = ({ onLessonComplete, progress }) => {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'valuing-time',
      title: 'Valuing Time as Your Greatest Asset',
      description: 'Master time management principles for maximum impact',
      icon: Clock,
      content: `
        <p>Elite performers understand that time is the only truly non-renewable resource. How you manage and leverage time determines the scale of impact you can achieve.</p>
        
        <h3>The Time Value Mindset</h3>
        <p>Think like the elite about time:</p>
        <ul>
          <li><strong>Time ROI:</strong> Every activity has an opportunity cost</li>
          <li><strong>Leverage vs. Labor:</strong> Focus on activities that scale</li>
          <li><strong>Energy Management:</strong> Optimize for peak performance times</li>
          <li><strong>Compound Value:</strong> Invest time in skills that appreciate</li>
        </ul>
        
        <h3>The Elite Time Audit</h3>
        <p>Track and optimize your time allocation:</p>
        <ol>
          <li><strong>Track Everything:</strong> Log activities for one week</li>
          <li><strong>Categorize Impact:</strong> High/Medium/Low value activities</li>
          <li><strong>Identify Time Drains:</strong> What adds no value?</li>
          <li><strong>Calculate Hourly Value:</strong> What is your time worth?</li>
        </ol>
        
        <h3>Strategic Prioritization</h3>
        <p>Elite prioritization frameworks:</p>
        <ul>
          <li><strong>Eisenhower Matrix:</strong> Urgent vs. Important</li>
          <li><strong>80/20 Rule:</strong> Focus on highest-impact activities</li>
          <li><strong>Warren Buffett's 5/25 Rule:</strong> Focus only on top priorities</li>
          <li><strong>Time Blocking:</strong> Dedicate focused blocks to important work</li>
        </ul>
        
        <h3>Saying No Strategically</h3>
        <p>Elite performers protect their time fiercely:</p>
        <ul>
          <li>Default to "no" for non-essential requests</li>
          <li>Create systems and criteria for decision-making</li>
          <li>Delegate or eliminate low-value activities</li>
          <li>Batch similar activities for efficiency</li>
        </ul>
        
        <h3>Leveraging Technology</h3>
        <p>Use tools to amplify your time:</p>
        <ul>
          <li>Automation for repetitive tasks</li>
          <li>Templates and systems for common activities</li>
          <li>Digital tools for scheduling and communication</li>
          <li>AI and software to augment capabilities</li>
        </ul>
      `,
      exercises: [
        {
          id: 'time-audit',
          type: 'reflection' as const,
          question: 'Calculate your effective hourly rate based on your annual goals. Then list your top 5 time-consuming activities this week and rate each as High, Medium, or Low value. What would you eliminate or delegate?',
          explanation: 'Understanding your time value helps you make better decisions about how to spend it. Elite performers ruthlessly eliminate low-value activities to focus on high-impact work.'
        }
      ]
    },
    {
      id: 'creative-problem-solving',
      title: 'Creative Problem-Solving and Innovation',
      description: 'Apply frameworks to identify opportunities and develop solutions',
      icon: Lightbulb,
      content: `
        <p>Elite problem-solvers don't just fix issues—they identify underlying patterns and create systematic solutions that prevent future problems while opening new opportunities.</p>
        
        <h3>The Elite Problem-Solving Framework</h3>
        <p>Systematic approach to complex challenges:</p>
        <ol>
          <li><strong>Define the Real Problem:</strong> Look beyond symptoms</li>
          <li><strong>Gather Diverse Perspectives:</strong> Seek input from different viewpoints</li>
          <li><strong>Generate Multiple Solutions:</strong> Quantity before quality</li>
          <li><strong>Evaluate Systematically:</strong> Use criteria and data</li>
          <li><strong>Test and Iterate:</strong> Start small, learn fast</li>
        </ol>
        
        <h3>Market Gap Analysis</h3>
        <p>Identify opportunities others miss:</p>
        <ul>
          <li><strong>Customer Pain Points:</strong> What frustrates people daily?</li>
          <li><strong>Industry Inefficiencies:</strong> Where is value being destroyed?</li>
          <li><strong>Technology Disruption:</strong> What new capabilities enable solutions?</li>
          <li><strong>Regulatory Changes:</strong> What new requirements create opportunities?</li>
        </ul>
        
        <h3>Creative Thinking Techniques</h3>
        <p>Tools to break conventional thinking:</p>
        <ul>
          <li><strong>First Principles Thinking:</strong> Break problems down to fundamentals</li>
          <li><strong>Analogical Reasoning:</strong> How do other industries solve this?</li>
          <li><strong>Constraint Removal:</strong> What if resources were unlimited?</li>
          <li><strong>Reverse Engineering:</strong> Start with the ideal outcome</li>
        </ul>
        
        <h3>Innovation Methodologies</h3>
        <p>Structured approaches to innovation:</p>
        <ul>
          <li><strong>Design Thinking:</strong> User-centered problem solving</li>
          <li><strong>Lean Startup:</strong> Build-measure-learn cycles</li>
          <li><strong>Blue Ocean Strategy:</strong> Create uncontested market space</li>
          <li><strong>Jobs-to-be-Done:</strong> Understand customer motivations</li>
        </ul>
        
        <h3>Building a Solution Portfolio</h3>
        <p>Elite innovators develop multiple approaches:</p>
        <ul>
          <li>Core solutions that directly address the problem</li>
          <li>Adjacent opportunities that leverage the same capabilities</li>
          <li>Transformational ideas that could change the game entirely</li>
          <li>Risk mitigation strategies for each approach</li>
        </ul>
      `,
      exercises: [
        {
          id: 'gap-analysis',
          type: 'case-study' as const,
          question: 'Choose an industry you know well. Identify one major inefficiency or customer pain point. Use first principles thinking to design a potential solution. What would be required to implement it?',
          explanation: 'This exercise develops your ability to see opportunities others miss and think systematically about solutions. Elite entrepreneurs excel at identifying and addressing market gaps.'
        }
      ]
    },
    {
      id: 'resourcefulness-delegation',
      title: 'Resourcefulness and Strategic Delegation',
      description: 'Achieve more with less through smart resource management',
      icon: Users,
      content: `
        <p>Elite achievers master the art of accomplishing extraordinary results with limited resources by thinking creatively about what they have and strategically about what others can do.</p>
        
        <h3>The Resourcefulness Mindset</h3>
        <p>Transform constraints into advantages:</p>
        <ul>
          <li><strong>Asset Inventory:</strong> What resources do you already have?</li>
          <li><strong>Network Leverage:</strong> Who can you collaborate with?</li>
          <li><strong>Creative Combinations:</strong> How can you use things differently?</li>
          <li><strong>Timing Optimization:</strong> When is the best time to act?</li>
        </ul>
        
        <h3>Resource Maximization Strategies</h3>
        <p>Get more value from what you have:</p>
        <ul>
          <li><strong>Multi-purpose Solutions:</strong> One action, multiple benefits</li>
          <li><strong>Partnerships:</strong> Share resources and costs</li>
          <li><strong>Bartering:</strong> Trade skills and services</li>
          <li><strong>Technology Leverage:</strong> Automate and scale with tools</li>
        </ul>
        
        <h3>Strategic Delegation Framework</h3>
        <p>Know what to delegate and how:</p>
        <ol>
          <li><strong>Task Analysis:</strong> What requires your unique skills?</li>
          <li><strong>People Assessment:</strong> Who has the right capabilities?</li>
          <li><strong>Clear Communication:</strong> Define expectations and outcomes</li>
          <li><strong>Support Systems:</strong> Provide tools and training needed</li>
          <li><strong>Progress Monitoring:</strong> Check in without micromanaging</li>
        </ol>
        
        <h3>The Delegation Decision Matrix</h3>
        <p>Decide what to delegate using these criteria:</p>
        <table>
          <tr>
            <th>High Skill Required</th>
            <th>Low Skill Required</th>
          </tr>
          <tr>
            <td><strong>You Love:</strong> Keep and Excel</td>
            <td><strong>You Love:</strong> Delegate and Teach</td>
          </tr>
          <tr>
            <td><strong>You Dislike:</strong> Delegate to Experts</td>
            <td><strong>You Dislike:</strong> Delegate or Automate</td>
          </tr>
        </table>
        
        <h3>Building Your Support System</h3>
        <p>Create a network of capable people:</p>
        <ul>
          <li><strong>Virtual Assistants:</strong> Administrative and research tasks</li>
          <li><strong>Specialists:</strong> Technical skills you lack</li>
          <li><strong>Mentors:</strong> Guidance on strategic decisions</li>
          <li><strong>Peers:</strong> Collaboration and mutual support</li>
        </ul>
        
        <h3>Overcoming Delegation Resistance</h3>
        <p>Common barriers and solutions:</p>
        <ul>
          <li><strong>"I can do it faster myself":</strong> Consider long-term efficiency</li>
          <li><strong>"No one can do it like me":</strong> Document processes and train</li>
          <li><strong>"I don't have time to explain":</strong> Invest time upfront to save later</li>
          <li><strong>"What if they make mistakes?":</strong> Build in review processes</li>
        </ul>
      `,
      exercises: [
        {
          id: 'delegation-audit',
          type: 'reflection' as const,
          question: 'List 10 tasks you did this week. For each task, determine: 1) Does it require your unique skills? 2) Do you enjoy it? 3) What would happen if you delegated it? Based on this analysis, what would you delegate first?',
          explanation: 'This exercise helps you identify opportunities for strategic delegation, freeing up time for high-value activities that only you can do effectively.'
        }
      ]
    }
  ];

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(`3-${lessonId}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Module 3: Strategic Thinking</h1>
        <p className="text-xl opacity-90">Create opportunities and execute with precision</p>
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>{progress.moduleProgress[3] || 0} of {lessons.length} lessons completed</span>
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

export default ModuleThree;