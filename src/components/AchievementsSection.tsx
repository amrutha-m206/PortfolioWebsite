import { Trophy, Github, Users, Award, Crown, Music } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "3rd Place - National Level Hackathon",
      description: "Secured 3rd place at a national-level hackathon organized by IEEE RV University for building a smart academic collaboration platform powered by ML-based recommendations and efficient search using tries.",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10"
    },
    {
      title: "Open Source Contributions",
      description: "Open source contributions in Hacktoberfest 2024 and GirlScript Summer of Code - Ext 2024: Contributed to multiple open-source repositories adding new features.",
      icon: Github,
      color: "text-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Founded ChipTech - Student Club",
      description: "Founded and led ChipTech - Student Club of RV University. As a president organized and led hands on workshops and technical sessions.",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Patent Achievement",
      description: "Obtained a patent for my contribution in Language Development And Confidence-Boosting System Through Interactive Conversations And Creative Storytelling (Patent ID: 202341068947).",
      icon: Award,
      color: "text-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Student Placement Coordinator",
      description: "Student Placement Coordinator, RV University",
      icon: Crown,
      color: "text-red-600",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Violin Performance",
      description: "Performed the violin at various college events, showcasing my passion for music.",
      icon: Music,
      color: "text-red-600",
      bgColor: "bg-red-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-4">Achievements & Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition, leadership roles, and notable accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-l-4 border-emerald group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${achievement.bgColor} group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald mb-4 group-hover:text-emerald-light transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
