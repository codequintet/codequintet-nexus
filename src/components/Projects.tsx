import { ExternalLink, Github, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Donation Management Dashboard",
      description: "A comprehensive platform for NGOs to manage donations, track impact, and engage with donors through real-time analytics and automated reporting.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Live",
      category: "Social Impact"
    },
    {
      title: "AI Student Helper App",
      description: "Intelligent tutoring system that provides personalized learning experiences, homework assistance, and progress tracking for students.",
      tech: ["Python", "TensorFlow", "React Native", "Firebase"],
      status: "In Development",
      category: "AI & Education"
    },
    {
      title: "Cyber Audit Platform",
      description: "Enterprise security assessment tool that automates vulnerability scanning, generates compliance reports, and provides actionable security insights.",
      tech: ["Vue.js", "Django", "Docker", "AWS"],
      status: "Beta",
      category: "Cybersecurity"
    },
    {
      title: "Green Energy Tracker",
      description: "IoT-enabled platform that monitors renewable energy consumption, predicts usage patterns, and optimizes energy distribution for smart cities.",
      tech: ["Next.js", "TypeScript", "MongoDB", "IoT"],
      status: "Planning",
      category: "Sustainability"
    },
    {
      title: "Community Learning Hub",
      description: "Open-source platform connecting learners with mentors, featuring interactive workshops, skill assessments, and collaborative projects.",
      tech: ["React", "GraphQL", "Supabase", "WebRTC"],
      status: "Live",
      category: "Education"
    },
    {
      title: "Healthcare Analytics Suite",
      description: "AI-powered analytics platform helping healthcare providers optimize patient care through predictive modeling and resource management.",
      tech: ["Python", "FastAPI", "React", "PostgreSQL"],
      status: "In Development",
      category: "Healthcare"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "text-green-400 bg-green-400/20";
      case "Beta": return "text-yellow-400 bg-yellow-400/20";
      case "In Development": return "text-blue-400 bg-blue-400/20";
      case "Planning": return "text-purple-400 bg-purple-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
            Project <span className="gradient-text">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyber-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of innovative solutions we've built across various domains, from social impact to cutting-edge AI applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover-lift hover-glow group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="text-primary" size={20} />
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-space font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 pt-4 border-t border-primary/20">
                  <button 
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    disabled={project.status === "Planning"}
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </button>
                  <button 
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    disabled={project.status === "Planning"}
                  >
                    <Github size={16} />
                    <span>Source Code</span>
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
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              From concept to deployment, we're here to turn your innovative ideas into reality. 
              Let's collaborate on your next breakthrough project.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-neon"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;