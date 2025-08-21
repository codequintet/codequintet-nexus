import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyber-blue rounded-full animate-float delay-1000 opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-float delay-2000 opacity-50"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Tagline */}
          <div className="flex items-center justify-center space-x-2 mb-6 animate-slide-up">
            <Sparkles className="text-primary animate-glow" size={24} />
            <h2 className="text-lg md:text-xl font-space font-medium neon-text">
              Innovating Tech, Empowering Impact.
            </h2>
            <Sparkles className="text-primary animate-glow" size={24} />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-8 animate-slide-up delay-300">
            We are{' '}
            <span className="gradient-text">CodeQuintet</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-500">
            A team passionate about building futuristic, scalable, and socially impactful digital solutions. 
            We transform innovative ideas into powerful technologies that make a difference.
          </p>

          {/* CTA Button */}
          <div className="animate-slide-up delay-700">
            <button
              onClick={scrollToContact}
              className="btn-neon group inline-flex items-center space-x-3 text-lg"
            >
              <span>Let's Build Together</span>
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up delay-1000">
            <div className="glass-card p-6 hover-lift">
              <div className="text-2xl md:text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="glass-card p-6 hover-lift">
              <div className="text-2xl md:text-3xl font-bold gradient-text">4</div>
              <div className="text-sm text-muted-foreground mt-1">Core Technologies</div>
            </div>
            <div className="glass-card p-6 hover-lift">
              <div className="text-2xl md:text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Secure Solutions</div>
            </div>
            <div className="glass-card p-6 hover-lift">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;