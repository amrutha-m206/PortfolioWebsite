import { Brain, Zap, FileText, Shield, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AutoAssess – Real-time Self Assessment System",
      description: "A real-time online self-assessment fullstack application integrated with Generative AI using LLaMA for generating assessments,calculating scores,viewing performance history based on user input PDFs.",
      icon: Brain,
      tech: ["React.js", "Express.js", "MongoDB", "LLaMA", "Generative AI", "PDF Processing"]
    },
    {
      title: "Earthquake Magnitude Prediction on ESP32",
      description: "The project uses a machine learning model to predict earthquake magnitude, which is converted to TensorFlow Lite format and deployed on an ESP32 for inference.",
      icon: Zap,
      tech: ["Machine Learning", "TensorFlow Lite", "ESP32", "IoT"]
    },
    {
      title: "Dynamic-Real Time News Article Summarization",
      description: "Leveraged the use of the T5 model, which uses the transformer architecture, to summarize text and fine-tuned it to summarize news articles in real time.",
      icon: FileText,
      tech: ["T5 Model", "Transformer", "NLP", "Real-time Processing"]
    },
    {
      title: "Team-Based Collaborative Workflow Management",
      description: "Built a secure SSL-based client-server team management system with a multithreaded C server, Python GUI client, MySQL with role-based access and encrypted exchange over TCP.",
      icon: Shield,
      tech: ["C Programming", "Python GUI", "MySQL", "SSL/TCP", "Security"]
    },
    {
      title: "AI driven Retrieval-Augmented Generation Pipeline",
      description: "Implemented a RAG pipeline for retrieval and summarization of neurology research papers, leveraging FAISS for efficient vector-based semantic search. Achieved MRR of 1.0 and Precision@12 of 92%.",
      icon: Search,
      tech: ["RAG", "FAISS", "Vector Search", "Research Papers", "NLP"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions and technical implementations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {projects.map((project, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald rounded-full border-4 border-background shadow-md hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="md:ml-16">
                    <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border-l-4 border-emerald group">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="p-4 rounded-xl bg-emerald/10 group-hover:bg-emerald/20 transition-colors">
                            <project.icon className="h-8 w-8 text-emerald" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-emerald mb-4 group-hover:text-emerald-light transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-emerald/10 text-emerald text-sm rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
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

export default ProjectsSection;
