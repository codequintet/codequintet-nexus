import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo & Tagline */}
          <div className="mb-8">
            <h3 className="text-2xl font-space font-bold gradient-text mb-2">
              CodeQuintet
            </h3>
            <p className="text-muted-foreground">
              Innovating Tech, Empowering Impact.
            </p>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} CodeQuintet. Built with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and</span>
            <Code2 className="text-primary" size={16} />
            <span>by our team.</span>
          </div>

          {/* Additional Links */}
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
            <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </button>
            <span className="text-muted-foreground">•</span>
            <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </button>
            <span className="text-muted-foreground">•</span>
            <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Open Source
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-40"></div>
          <div className="absolute top-4 right-1/3 w-1 h-1 bg-cyber-blue rounded-full animate-float delay-1000 opacity-30"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;