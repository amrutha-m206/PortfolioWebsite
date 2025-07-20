import { Building, Code, Database, Brain, Cpu } from 'lucide-react';
import { Card } from '@/components/ui/card';

const InternshipsSection = () => {
  const internships = [
    {
      company: "Nokia",
      description: "Developed a version recommendation system that suggests a better version of software if vulnerabilities are detected.",
      icon: Building,
      color: "text-blue-600"
    },
    {
      company: "Broadrange AI",
      description: "AI-powered RFP response generator – Fullstack application.",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      company: "IBM (Project)",
      description: "KoolTools: Tool that analyzes utilization reports for missing compliance checkpoints.",
      icon: Code,
      color: "text-blue-700"
    },
    {
      company: "Dhee Center for AI and Data Science – RV University",
      description: "Trained CNN deep learning model on solar images to detect solar flares using the sun's images.",
      icon: Database,
      color: "text-orange-600"
    },
    {
      company: "CIIRC",
      description: "Developed an RFID-based access system using  Arduino UNO to read UIDs and control  output based on authentication status.",
      icon: Cpu,
      color: "text-green-600"
    },
    {
      company: "Embedded Systems and IOT-RV University",
      description: "Built a soil monitoring system using ESP32 and MQTT for real-time moisture tracking with Adafruit.IO,promoting smart irrigation.",
      icon: Cpu,
      color: "text-green-600"
    }
  ];

  return (
    <section id="internships" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-4">Internships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experiences and industry collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {internships.map((internship, index) => (
            <Card 
              key={index} 
              className="p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-l-4 border-emerald group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 h-full">
                <div className={`p-3 rounded-lg bg-secondary ${internship.color} bg-opacity-10`}>
                  <internship.icon className={`h-6 w-6 ${internship.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-emerald mb-3 group-hover:text-emerald-light transition-colors">
                    {internship.company}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
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

export default InternshipsSection;
