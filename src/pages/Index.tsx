import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
