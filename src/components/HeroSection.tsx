import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-primary flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-left">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-glow">
                <img 
                  src={profilePhoto} 
                  alt="Amrutha M - Computer Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              About Me
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                Computer Science (Hons) undergraduate at{' '}
                <span className="font-semibold text-white">RV University</span>
              </p>
              
              <p>
                This is where I share my work, ideas, and passion — everything that drives me forward.
                Feel free to explore and get a glimpse of what I love doing.
              </p>
              
              <p className="italic text-white/80 text-lg mt-8">
                "Where logic ends, creativity begins — and I like living in between."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
