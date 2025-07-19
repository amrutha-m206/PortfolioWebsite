const Footer = () => {
  return (
    <footer className="bg-emerald text-emerald-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white/80 leading-relaxed max-w-4xl mx-auto">
            All underlined sentences on this website are hyperlinks that lead to verified certificates 
            and have been provided to ensure authenticity and transparency.
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/60">
              © 2024 Amrutha M. Built with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;