import { User, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald mb-4">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-primary text-white shadow-elegant animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8">Contact Summary</h3>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/80">Name</p>
                  <p className="text-xl font-semibold">Amrutha M</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/80">Title</p>
                  <p className="text-xl font-semibold">Student</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/80">Email</p>
                  <p className="text-xl font-semibold">amrutha.m273@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/10 rounded-lg">
              <p className="text-white/90 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply connect with fellow tech enthusiasts. Feel free to reach out!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
