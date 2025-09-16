import React, { useState } from 'react';
import { CheckCircle, Users, MessageCircle, Heart, User } from 'lucide-react';
import LessonCard from '../LessonCard';
import ExerciseComponent from '../ExerciseComponent';
import { UserProgress } from '../../types/progress';

interface ModuleTwoProps {
  onLessonComplete: (lessonId: string) => void;
  progress: UserProgress;
}

const ModuleTwo: React.FC<ModuleTwoProps> = ({ onLessonComplete, progress }) => {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'art-of-networking',
      title: 'The Art of Networking',
      description: 'Build authentic, long-term connections that create mutual value',
      icon: Users,
      content: `
        <p>Elite networks are built on authentic relationships, not transactional exchanges. Your network becomes your greatest asset for opportunities, knowledge, and support.</p>
        
        <h3>Beyond Transactional Relationships</h3>
        <p>True networking focuses on giving value first:</p>
        <ul>
          <li>Lead with genuine interest in others' success</li>
          <li>Share knowledge, connections, and opportunities freely</li>
          <li>Remember personal details and follow up consistently</li>
          <li>Offer help before asking for anything</li>
        </ul>
        
        <h3>Active Listening Mastery</h3>
        <p>Elite networkers are exceptional listeners who:</p>
        <ul>
          <li>Ask thoughtful questions that reveal deeper interests</li>
          <li>Remember and reference previous conversations</li>
          <li>Listen for unspoken needs and challenges</li>
          <li>Create space for others to share their expertise</li>
        </ul>
        
        <h3>Digital and In-Person Strategies</h3>
        <p>Modern networking requires mastery of both channels:</p>
        <ul>
          <li><strong>LinkedIn:</strong> Professional content sharing and relationship building</li>
          <li><strong>Industry Events:</strong> Face-to-face connections at conferences and meetups</li>
          <li><strong>Mastermind Groups:</strong> Regular peer learning and accountability</li>
          <li><strong>Mentorship:</strong> Both seeking mentors and mentoring others</li>
        </ul>
        
        <h3>The Long Game</h3>
        <p>Elite networking is about planting seeds for relationships that may bloom years later. Consistency and authenticity compound over time.</p>
      `,
      exercises: [
        {
          id: 'networking-strategy',
          type: 'reflection' as const,
          question: 'Identify 5 people in your current network. For each person, write one way you could provide value to them this week without expecting anything in return.',
          explanation: 'This exercise shifts your mindset from "what can I get" to "what can I give," which is the foundation of powerful networking relationships.'
        }
      ]
    },
    {
      id: 'negotiation-influence',
      title: 'Negotiation and Influence',
      description: 'Master psychology and communication for win-win outcomes',
      icon: MessageCircle,
      content: `
        <p>Elite negotiators understand that the best outcomes come from understanding human psychology and creating win-win scenarios, not from aggressive tactics.</p>
        
        <h3>Psychological Principles</h3>
        <p>Understanding human psychology gives you negotiation superpowers:</p>
        <ul>
          <li><strong>Reciprocity:</strong> People feel obligated to return favors</li>
          <li><strong>Social Proof:</strong> We follow what others like us are doing</li>
          <li><strong>Scarcity:</strong> Limited availability increases perceived value</li>
          <li><strong>Authority:</strong> People defer to perceived expertise</li>
          <li><strong>Liking:</strong> We say yes to people we like and trust</li>
        </ul>
        
        <h3>Preparation and Research</h3>
        <p>Elite negotiators invest heavily in preparation:</p>
        <ul>
          <li>Research the other party's needs, constraints, and motivations</li>
          <li>Identify your BATNA (Best Alternative to Negotiated Agreement)</li>
          <li>Understand the full scope of what can be negotiated</li>
          <li>Prepare multiple options and creative solutions</li>
        </ul>
        
        <h3>Communication Excellence</h3>
        <p>How you communicate often matters more than what you communicate:</p>
        <ul>
          <li><strong>Frame positively:</strong> Focus on gains rather than losses</li>
          <li><strong>Use their language:</strong> Mirror their communication style</li>
          <li><strong>Ask powerful questions:</strong> Guide them to your desired conclusion</li>
          <li><strong>Manage emotions:</strong> Stay calm and help others do the same</li>
        </ul>
        
        <h3>Creating Win-Win Outcomes</h3>
        <p>The best negotiations create value for all parties, leading to stronger relationships and future opportunities.</p>
      `,
      exercises: [
        {
          id: 'influence-technique',
          type: 'quiz' as const,
          question: 'You want to convince your boss to approve a new project. Which psychological principle would be most effective?',
          options: [
            'Tell them it\'s urgent and must be decided today (Scarcity)',
            'Show how similar companies have succeeded with this approach (Social Proof)',
            'Emphasize your authority and expertise (Authority)',
            'Focus on building personal rapport first (Liking)'
          ],
          correctAnswer: 1,
          explanation: 'Social proof is often most effective with decision-makers because it reduces their perceived risk by showing that others like them have successfully taken similar actions.'
        }
      ]
    },
    {
      id: 'resilience-failure',
      title: 'Resilience and Learning from Failure',
      description: 'Transform setbacks into stepping stones for growth',
      icon: Heart,
      content: `
        <p>Elite performers view failure differently—not as an endpoint, but as valuable data for improvement. This mindset shift is crucial for long-term success.</p>
        
        <h3>Reframing Failure</h3>
        <p>Change your relationship with failure:</p>
        <ul>
          <li><strong>Failure as Feedback:</strong> Each setback provides information for improvement</li>
          <li><strong>Temporary vs. Permanent:</strong> Failures are events, not identity</li>
          <li><strong>Specific vs. Global:</strong> One failure doesn't mean total failure</li>
          <li><strong>Learning Opportunities:</strong> What can this teach me?</li>
        </ul>
        
        <h3>Building Antifragility</h3>
        <p>Go beyond resilience to become stronger from stress:</p>
        <ul>
          <li>Embrace volatility as a source of growth</li>
          <li>Build redundancy in your skills and income</li>
          <li>Practice controlled exposure to manageable risks</li>
          <li>Develop multiple options and backup plans</li>
        </ul>
        
        <h3>The Recovery Process</h3>
        <p>Systematic approach to bouncing back:</p>
        <ol>
          <li><strong>Acknowledge:</strong> Accept the reality of the situation</li>
          <li><strong>Analyze:</strong> What factors contributed to the outcome?</li>
          <li><strong>Adjust:</strong> What will you do differently next time?</li>
          <li><strong>Act:</strong> Implement changes and move forward</li>
        </ol>
        
        <h3>Emotional Regulation</h3>
        <p>Manage the emotional impact of setbacks:</p>
        <ul>
          <li>Practice mindfulness to stay present-focused</li>
          <li>Use breathing techniques to manage stress response</li>
          <li>Build a support network for perspective and encouragement</li>
          <li>Maintain physical health as foundation for mental resilience</li>
        </ul>
      `,
      exercises: [
        {
          id: 'failure-analysis',
          type: 'reflection' as const,
          question: 'Think of a recent setback or failure you experienced. Apply the 4-A framework: Acknowledge what happened, Analyze the contributing factors, Adjust your approach, and identify your next Action step.',
          explanation: 'This structured approach helps you extract maximum learning from failures while maintaining forward momentum rather than getting stuck in negative emotions.'
        }
      ]
    },
    {
      id: 'personal-branding',
      title: 'Personal Branding and Communication',
      description: 'Articulate your unique value and build a reputation of excellence',
      icon: User,
      content: `
        <p>Your personal brand is your reputation scaled. Elite professionals understand that their brand opens doors and creates opportunities long before they walk into a room.</p>
        
        <h3>Defining Your Unique Value Proposition</h3>
        <p>Clarity on what makes you valuable:</p>
        <ul>
          <li><strong>Core Strengths:</strong> What are you naturally exceptional at?</li>
          <li><strong>Unique Experiences:</strong> What perspective do you bring?</li>
          <li><strong>Values Alignment:</strong> What principles guide your decisions?</li>
          <li><strong>Future Vision:</strong> Where are you heading and why?</li>
        </ul>
        
        <h3>Consistent Message Across Channels</h3>
        <p>Your brand should be consistent everywhere:</p>
        <ul>
          <li><strong>Professional Bio:</strong> Clear, compelling summary</li>
          <li><strong>LinkedIn Profile:</strong> Optimized for your target audience</li>
          <li><strong>Speaking Topics:</strong> Areas where you can add value</li>
          <li><strong>Content Creation:</strong> Regular sharing of insights</li>
        </ul>
        
        <h3>Building Trust and Credibility</h3>
        <p>Trust is built through consistent actions over time:</p>
        <ul>
          <li>Deliver on promises consistently</li>
          <li>Share credit generously with team members</li>
          <li>Admit mistakes quickly and transparently</li>
          <li>Help others succeed without expecting immediate returns</li>
        </ul>
        
        <h3>Thought Leadership</h3>
        <p>Establish expertise by sharing valuable insights:</p>
        <ul>
          <li>Write articles on industry trends and challenges</li>
          <li>Speak at conferences and industry events</li>
          <li>Mentor others and share lessons learned</li>
          <li>Take stands on important issues in your field</li>
        </ul>
        
        <h3>Digital Presence Optimization</h3>
        <p>Your online presence often makes first impressions:</p>
        <ul>
          <li>Google yourself regularly to monitor your digital footprint</li>
          <li>Create valuable content consistently</li>
          <li>Engage meaningfully with others' content</li>
          <li>Maintain professionalism across all platforms</li>
        </ul>
      `,
      exercises: [
        {
          id: 'value-proposition',
          type: 'reflection' as const,
          question: 'Write your personal value proposition in 2-3 sentences. What unique combination of skills, experience, and perspective do you offer? How does this create value for others?',
          explanation: 'A clear value proposition helps you communicate your worth effectively and guides your career decisions. It should be specific, authentic, and focused on the value you create for others.'
        }
      ]
    }
  ];

  const isLessonCompleted = (lessonId: string) => {
    return progress.completedLessons.includes(`2-${lessonId}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Module 2: Social & Emotional Intelligence</h1>
        <p className="text-xl opacity-90">Master leadership, networking, and human psychology</p>
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>{progress.moduleProgress[2] || 0} of {lessons.length} lessons completed</span>
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

export default ModuleTwo;