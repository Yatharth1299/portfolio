import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Solar System Animation */}
      <div className="solar-system">
        <div className="solar-sun"></div>
        <div className="solar-planet solar-planet-1"></div>
        <div className="solar-planet solar-planet-2"></div>
        <div className="solar-planet solar-planet-3"></div>
        <div className="solar-planet solar-planet-4"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <Achievements />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
