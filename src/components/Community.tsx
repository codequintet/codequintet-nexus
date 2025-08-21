import { GraduationCap, Users, Shield, Lightbulb, Calendar, BookOpen } from "lucide-react";

const Community = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Coding Workshops",
      description: "Hands-on programming sessions covering modern frameworks, best practices, and emerging technologies.",
      frequency: "Weekly",
      audience: "All Levels"
    },
    {
      icon: Shield,
      title: "Security Awareness",
      description: "Cybersecurity training programs for businesses and individuals to protect against digital threats.",
      frequency: "Monthly",
      audience: "Professionals"
    },
    {
      icon: Lightbulb,
      title: "AI Learning Sessions",
      description: "Interactive workshops exploring machine learning, AI tools, and their practical applications.",
      frequency: "Bi-weekly",
      audience: "Tech Enthusiasts"
    },
    {
      icon: Users,
      title: "Open Source Contributions",
      description: "Collaborative projects where community members contribute to meaningful open source initiatives.",
      frequency: "Ongoing",
      audience: "Developers"
    }
  ];

  const events = [
    {
      date: "Mar 15",
      title: "Introduction to React Hooks",
      type: "Workshop",
      spots: "8 spots left"
    },
    {
      date: "Mar 22",
      title: "Cybersecurity Fundamentals",
      type: "Seminar",
      spots: "12 spots left"
    },
    {
      date: "Mar 29",
      title: "Building AI Chatbots",
      type: "Hands-on",
      spots: "5 spots left"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyber-blue/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
            Community & <span className="gradient-text">Learning Hub</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyber-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in learning & sharing. CodeQuintet runs coding workshops, AI learning sessions, 
            and security awareness programs to build a stronger tech community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Programs Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-space font-semibold mb-8 neon-text">
              Our Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 hover-lift hover-glow group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                      <program.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {program.title}
                      </h4>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{program.frequency}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users size={12} />
                          <span>{program.audience}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-space font-semibold mb-8 neon-text">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 hover-lift group"
                  style={{ animationDelay: `${(index + programs.length) * 150}ms` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-center min-w-[3rem]">
                      <div className="text-lg font-bold text-primary">{event.date.split(' ')[1]}</div>
                      <div className="text-xs text-muted-foreground uppercase">{event.date.split(' ')[0]}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{event.type}</span>
                        <span className="text-primary bg-primary/20 px-2 py-1 rounded">{event.spots}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 btn-ghost">
              View All Events
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-2xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-2xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Workshops Conducted</div>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-2xl font-bold gradient-text mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Open Source Projects</div>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-2xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Free Resources</div>
          </div>
        </div>

        {/* Join Community CTA */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="text-primary" size={24} />
              <h3 className="text-xl font-space font-semibold gradient-text">
                Join Our Learning Community
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Connect with like-minded developers, participate in workshops, and contribute to 
              meaningful projects that make a difference in the tech community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon">
                Join Community
              </button>
              <button className="btn-ghost">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;