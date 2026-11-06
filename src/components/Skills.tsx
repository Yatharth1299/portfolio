import { Code, Server, Database, Brain, Cpu, Sparkles, Monitor, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      color: "primary",
      skills: ["Python", "JavaScript", "SQL", "C++", "C"]
    },
    {
      icon: Server,
      title: "Backend Engineering",
      color: "secondary",
      skills: ["FastAPI", "RESTful APIs", "API Design", "Webhooks", "API Integration", "Swagger/OpenAPI", "Postman"]
    },
    {
      icon: Database,
      title: "Databases & Data",
      color: "accent",
      skills: ["SQL", "FAISS", "Vector Databases", "Embeddings", "Semantic Search", "Data Processing"]
    },
    {
      icon: Brain,
      title: "AI & LLM Engineering",
      color: "primary",
      skills: ["LangChain", "LangGraph", "LangSmith", "RAG", "Multi-Agent Systems", "MCP", "Prompt Engineering", "Tool Calling"]
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      color: "secondary",
      skills: ["Scikit-learn", "PyTorch", "TensorFlow", "NLP", "CNN", "Pandas", "NumPy"]
    },
    {
      icon: Sparkles,
      title: "AI Models & Platforms",
      color: "accent",
      skills: ["Ollama", "Groq", "DeepSeek", "Hugging Face", "Claude", "Mistral", "AWS Bedrock"]
    },
    {
      icon: Monitor,
      title: "Frontend & Interfaces",
      color: "primary",
      skills: ["React.js", "Vite", "Streamlit", "HTML5", "CSS3"]
    },
    {
      icon: Cloud,
      title: "Cloud & Developer Tools",
      color: "secondary",
      skills: ["AWS Lambda", "API Gateway", "EC2", "S3", "Git", "GitHub", "Jupyter Notebook", "VS Code"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          border: 'border-primary/30',
          bg: 'bg-primary/15',
          dot: 'bg-primary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          border: 'border-secondary/30',
          bg: 'bg-secondary/15',
          dot: 'bg-secondary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]'
        };
      case 'accent':
        return {
          text: 'text-accent',
          border: 'border-accent/30',
          bg: 'bg-accent/15',
          dot: 'bg-accent',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]'
        };
      default:
        return {
          text: 'text-primary',
          border: 'border-primary/30',
          bg: 'bg-primary/15',
          dot: 'bg-primary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
        };
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent neural-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);

            return (
              <div
                key={category.title}
                className={`glass-card p-6 rounded-xl transition-all duration-300 ${colors.glow} relative`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg ${colors.bg}`}>
                    <category.icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-1.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border ${colors.border} hover:from-white/10 hover:to-white/15 transition-all duration-200`}
                    >
                      <span className="text-xs font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-3 right-3 w-2 h-2 ${colors.dot} rounded-full animate-pulse opacity-60`}></div>
              </div>
            );
          })}
        </div>

        {/* Engineering Practices */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">Engineering Practices</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "System Design",
                "Scalable Architecture",
                "API Documentation",
                "Testing",
                "Performance Optimization",
                "Deployment",
                "End-to-End Development"
              ].map((practice, index) => (
                <span
                  key={practice}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/30 hover:scale-105 transition-transform duration-200 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {practice}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
