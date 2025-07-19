import { Code, Database, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "C++, Fundamentals of C and Python",
      icon: Code,
      color: "bg-blue-500/10 text-blue-600",
      skills: ["C++", "C", "Python"]
    },
    {
      title: "Database",
      description: "MySQL, MongoDB",
      icon: Database,
      color: "bg-green-500/10 text-green-600",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Expertise",
      description: "Object Oriented Programming, Operating Systems, Data Structures, Database Management System, HTML, CSS, Express.js, MongoDB, Fundamentals of Deep Learning",
      icon: Brain,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["OOP", "Operating Systems", "Data Structures", "DBMS", "HTML", "CSS", "Express.js", "MongoDB", "Deep Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical competencies and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-emerald/10 hover:border-emerald/30 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-emerald mb-4 group-hover:text-emerald-light transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
                
                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-emerald/10 text-emerald text-sm rounded-full font-medium hover:bg-emerald/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;