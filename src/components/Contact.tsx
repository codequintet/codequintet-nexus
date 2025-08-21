import { useState } from "react";
import { Send, Mail, MessageSquare, User, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectIdea: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent! 🚀",
      description: "We'll get back to you within 24 hours. Thanks for reaching out!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", projectIdea: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cyber-blue/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyber-blue mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Share your project idea and let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 hover-glow">
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="text-primary" size={24} />
              <h3 className="text-xl font-space font-semibold neon-text">
                Tell Us About Your Project
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center space-x-2">
                  <User size={16} />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-glass-bg border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-glass-bg border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Project Idea Field */}
              <div className="space-y-2">
                <label htmlFor="projectIdea" className="text-sm font-medium text-foreground flex items-center space-x-2">
                  <MessageSquare size={16} />
                  <span>Project Idea</span>
                </label>
                <textarea
                  id="projectIdea"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-glass-bg border border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Describe your project idea, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-neon w-full group flex items-center justify-center space-x-3"
              >
                <span>Send Message</span>
                <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="glass-card p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                    <p className="text-muted-foreground">hello@codequintet.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-cyber-blue/20">
                    <MessageSquare className="text-cyber-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quick Chat</h4>
                    <p className="text-muted-foreground">Schedule a consultation</p>
                    <button className="text-sm text-cyber-blue hover:underline mt-1">
                      Book a 30-min call
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-foreground mb-6 text-center">
                Follow Our Journey
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center space-x-3 p-3 rounded-lg border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="glass-card p-6 text-center">
              <h4 className="font-semibold gradient-text mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-sm text-muted-foreground">
                We value your time and respond to all inquiries within 24 hours, 
                often much sooner. Let's start building your future today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;