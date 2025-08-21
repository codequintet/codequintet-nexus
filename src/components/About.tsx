import { Code2, Shield, Brain, Heart } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications with modern frameworks"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent systems that streamline processes and enhance productivity"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and penetration testing services"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Technology solutions that create positive change in communities"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
            About <span className="gradient-text">CodeQuintet</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyber-blue mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-space font-semibold mb-6 neon-text">
              Our Story
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                CodeQuintet was born from a shared vision: to bridge the gap between cutting-edge technology 
                and meaningful social impact. We believe that the most powerful innovations are those that 
                not only push technological boundaries but also create positive change in the world.
              </p>
              <p>
                Our team combines deep technical expertise with a passion for solving real-world problems. 
                From building scalable web applications to implementing AI-driven solutions, we approach 
                every project with innovation, security, and social responsibility at the forefront.
              </p>
              <p>
                We don't just write code—we craft digital experiences that empower businesses, 
                protect against threats, and create platforms for positive social impact.
              </p>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift hover-glow group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-space font-semibold mb-4 gradient-text">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize access to advanced technology solutions while maintaining the highest 
              standards of security and social responsibility. We envision a future where technology 
              serves as a catalyst for positive change, empowering organizations and individuals to 
              achieve their goals while contributing to a better world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;