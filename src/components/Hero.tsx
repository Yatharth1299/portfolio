import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";
import profileImage from "/images/profile.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Open Google Drive resume link
    window.open('https://drive.google.com/file/d/1hEQnAkfJML7Vb0d7KM4lSyQeOPKOezkE/view?usp=sharing', '_blank');
  };

  const handleReachOut = () => {
    window.open('mailto:yk.ai.engineer@gmail.com?subject=Let\'s Connect!', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden particles-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 pt-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl neural-pulse">
              <img 
                src={profileImage} 
                alt="Yatharth - Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Name and Role */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent neural-gradient text-glow" style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
          Yatharth
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          Backend Engineer
        </h2>
        <p className="text-lg md:text-xl font-medium text-secondary mb-8 tracking-wide">
          AI/ML &amp; LLM Engineering
        </p>

        {/* Professional Summary */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Backend Engineer specializing in{" "}
            <span className="text-primary font-semibold">Python</span>,{" "}
            <span className="text-secondary font-semibold">FastAPI</span>, and{" "}
            <span className="text-accent font-semibold">AI-powered applications</span>. 
            I build RESTful APIs, multi-agent architectures, and{" "}
            <span className="text-primary font-semibold">RAG pipelines</span> that turn 
            requirements into working products. Focused on{" "}
            <span className="text-secondary font-semibold">scalable, reliable backend systems</span>{" "}
            and end-to-end delivery, from data ingestion and retrieval to{" "}
            <span className="text-accent font-semibold">LLM-powered workflows</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={handleDownloadResume}
            size="lg" 
            className="glass-card neon-glow group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent border-primary/50 hover:border-primary transition-all duration-300 text-foreground hover:text-foreground"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="outline" 
            size="lg" 
            className="glass-card neon-glow group px-8 py-4 text-lg font-semibold border-secondary/50 hover:border-secondary transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            Reach Out
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/yatharth-a36922280/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass-card neon-glow rounded-full hover:bg-primary/20 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="https://github.com/Yatharth1299" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass-card neon-glow rounded-full hover:bg-secondary/20 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="mailto:yk.ai.engineer@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 glass-card neon-glow rounded-full hover:bg-accent/20 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
