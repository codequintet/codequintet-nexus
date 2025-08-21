import { Rocket, Shield, Bot, Heart, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Web & App Development",
      description: "Scalable, futuristic designs that captivate users and drive business growth.",
      features: ["React & Next.js", "Mobile-First Design", "Cloud Architecture", "Performance Optimization"],
      gradient: "from-primary to-cyber-blue"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Pen Testing",
      description: "Protecting businesses from evolving threats with comprehensive security solutions.",
      features: ["Security Audits", "Penetration Testing", "Vulnerability Assessment", "Compliance Solutions"],
      gradient: "from-cyber-blue to-primary"
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Custom AI tools and automation systems that boost productivity and efficiency.",
      features: ["Machine Learning", "Process Automation", "Chatbots & AI Assistants", "Data Analytics"],
      gradient: "from-primary to-cyber-blue"
    },
    {
      icon: Heart,
      title: "Social Impact Tech",
      description: "NGO platforms, donation systems, and educational tools that make a difference.",
      features: ["Donation Platforms", "Educational Systems", "Community Portals", "Impact Analytics"],
      gradient: "from-cyber-blue to-primary"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
            What We <span className="gradient-text">Provide</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyber-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and create lasting impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-lift hover-glow group relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                      <service.icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-space font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" size={20} />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <button className="btn-ghost text-sm group-hover:border-primary transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-space font-semibold mb-4 gradient-text">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our expertise can bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-neon"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;