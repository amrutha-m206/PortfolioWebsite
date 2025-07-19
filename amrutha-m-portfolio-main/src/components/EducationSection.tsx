import { GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EducationSection = () => {
  const educationData = [
    {
      year: "2022–2026",
      degree: "B.Tech(Hons) in Computer Science",
      institution: "RV University",
      location: "Bengaluru, Karnataka",
      highlight: "CGPA: 9.68"
    },
    {
      year: "2020–2022",
      degree: "PU-2",
      institution: "Deeksha Center for Learning",
      location: "Bengaluru, Karnataka"
    },
    {
      year: "2020",
      degree: "10th Grade",
      institution: "RNS International School",
      location: "Bengaluru, Karnataka"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey through different institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald/20"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-start animate-fade-in">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald rounded-full border-4 border-background shadow-md"></div>
                  
                  {/* Content Card */}
                  <div className="ml-16 w-full">
                    <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300 border-l-4 border-emerald">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center gap-2 text-emerald font-semibold mb-2 md:mb-0">
                          <Calendar className="h-4 w-4" />
                          <span>{item.year}</span>
                        </div>
                        {item.highlight && (
                          <div className="bg-emerald text-emerald-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {item.highlight}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-emerald mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {item.degree}
                          </h3>
                          <p className="text-emerald font-medium mb-1">
                            {item.institution}
                          </p>
                          <p className="text-muted-foreground">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;