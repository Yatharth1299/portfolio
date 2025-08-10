import { ExternalLink, Github, Bot, MapPin, FileText, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Email Responder Agent",
      subtitle: "n8n + OpenAI",
      description: "Automated email classification and response using n8n, OpenAI API, and webhooks. Reduced manual email processing by 70% via smart routing and summarization logic.",
      icon: Bot,
      color: "primary",
      tags: ["n8n", "OpenAI", "Automation", "NLP"],
      impact: "70% reduction in manual processing",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Trip Planner Assistant",
      subtitle: "CREWAI + LangChain + Ollama + DuckDuckGo + Streamlit",
      description: "Intelligent multi-agent system for personalized travel plans. Integrated real-time search (DuckDuckGo), reasoning via LangChain agents, and deployed via Streamlit. Cut planning time by 80%, with interactive UI and expert-level suggestions.",
      icon: MapPin,
      color: "accent",
      tags: ["CREWAI", "LangChain", "Ollama", "Streamlit"],
      impact: "80% reduction in planning time",
      github: "https://github.com/Yatharth1299/AI-Powered-Trip-Planner-by-multi-agents-system",
      demo: "#"
    },
    {
      title: "Document Chatbot using RAG",
      subtitle: "LangChain + FAISS + Ollama",
      description: "Built a chatbot that enables users to ask questions about documents. Used LangChain + FAISS vector DB + Ollama for deep document Q&A. Hosted on Groq backend with a clean Streamlit UI.",
      icon: FileText,
      color: "secondary",
      tags: ["RAG", "FAISS", "LangChain", "Vector DB"],
      impact: "Intelligent document querying",
      github: "https://github.com/Yatharth1299/AI_chatbot",
      demo: "#"
    },
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Machine Learning",
      description: "Developed a supervised learning model (Random Forest + XGBoost) to classify fraudulent transactions. Performed heavy data preprocessing, class balancing (SMOTE), and feature engineering. Achieved 98% precision on synthetic dataset; built Streamlit UI with visual fraud analysis dashboards.",
      icon: Shield,
      color: "primary",
      tags: ["Random Forest", "XGBoost", "SMOTE", "Streamlit"],
      impact: "98% precision achieved",
      github: "https://github.com/Yatharth1299/CreditCard_Fraud_Detection",
      demo: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary bg-primary/20',
          border: 'border-primary/30',
          accent: 'text-primary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]'
        };
      case 'secondary':
        return {
          icon: 'text-secondary bg-secondary/20',
          border: 'border-secondary/30',
          accent: 'text-secondary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--secondary)/0.5)]'
        };
      case 'accent':
        return {
          icon: 'text-accent bg-accent/20',
          border: 'border-accent/30',
          accent: 'text-accent',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]'
        };
      default:
        return {
          icon: 'text-primary bg-primary/20',
          border: 'border-primary/30',
          accent: 'text-primary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]'
        };
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent neural-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of real-world AI applications and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div 
                key={project.title}
                className={`glass-card p-8 rounded-2xl transition-all duration-500 hover:scale-105 ${colors.glow} group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium ${colors.accent} mb-2`}>
                      {project.subtitle}
                    </p>
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${colors.border} border bg-gradient-to-r from-white/5 to-white/10`}>
                      <Calendar className="h-3 w-3" />
                      {project.impact}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-white/10 to-white/5 border ${colors.border} hover:scale-105 transition-transform`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.title !== "AI-Powered Email Responder Agent" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full ${colors.border} hover:bg-white/10 transition-all duration-300 group/btn`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </Button>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Explore More Projects</h3>
            <p className="text-muted-foreground mb-6">
              Visit my GitHub to see more innovative AI solutions and open-source contributions.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group"
              onClick={() => window.open('https://github.com/Yatharth1299/Yatharth1299/tree/main', '_blank')}
            >
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;