import { Github, Bot, FileText, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI Data Analyst",
      subtitle: "Python | LangChain | LangGraph | Ollama | Streamlit",
      description: "Architected an autonomous AI data analyst using a multi-agent architecture and graph-based orchestration to automate analytical workflows. Intelligent agents handle data ingestion, EDA, statistical analysis, visualization, and insight generation, coordinating tasks through tool calling, state management, and multi-step reasoning. Locally hosted LLMs via Ollama reduce dependency on external model APIs, with a Streamlit interface for dataset uploads and contextual insights.",
      icon: Bot,
      color: "primary",
      tags: ["LangChain", "LangGraph", "Ollama", "Pandas", "NumPy", "Streamlit"],
      impact: "Autonomous multi-agent analytics",
      github: ""
    },
    {
      title: "RAG-Based Intelligent Q&A System",
      subtitle: "LangChain + FAISS + DeepSeek + Ollama + Groq",
      description: "Built an end-to-end Retrieval-Augmented Generation system for document-based question answering. The pipeline covers document ingestion, text chunking, embedding generation, vector indexing, and semantic retrieval. DeepSeek through Ollama and Groq-powered inference generate context-aware answers, while prompt engineering and vector-store reranking improve retrieval relevance — increasing response accuracy by 22%, reducing hallucinations, and delivering 35% faster query responses.",
      icon: FileText,
      color: "accent",
      tags: ["RAG", "FAISS", "LangChain", "DeepSeek", "Groq", "Streamlit"],
      impact: "22% higher answer accuracy",
      github: "https://github.com/Yatharth1299/RAG-Based-AI_chatbot"
    },
    {
      title: "Credit Card Fraud Detection",
      subtitle: "Machine Learning",
      description: "Developed a supervised learning model (Random Forest + XGBoost) to classify fraudulent transactions. Performed heavy data preprocessing, class balancing (SMOTE), and feature engineering. Achieved 98% precision on a synthetic dataset, with a Streamlit UI for visual fraud analysis.",
      icon: Shield,
      color: "secondary",
      tags: ["Random Forest", "XGBoost", "SMOTE", "Streamlit"],
      impact: "98% precision achieved",
      github: "https://github.com/Yatharth1299/CreditCard_Fraud_Detection"
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
            Selected AI applications and backend systems, from agent orchestration to production machine learning
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div 
                key={project.title}
                className={`glass-card p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${colors.glow} group relative`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${colors.icon} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <project.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1 min-w-0">
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
                {project.github && (
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full ${colors.border} hover:bg-white/10 transition-all duration-300 group/btn`}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Code
                    </Button>
                  </div>
                )}

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
              Visit my GitHub to see more backend, AI, and open-source work.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group"
              onClick={() => window.open('https://github.com/Yatharth1299', '_blank')}
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
