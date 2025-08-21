import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/codequintet-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="CodeQuintet Logo" 
              className="h-10 w-auto animate-glow"
            />
            <span className="text-xl font-space font-bold gradient-text">
              CodeQuintet
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-ghost"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;