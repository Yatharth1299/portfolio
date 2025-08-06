import { Code, Database, Brain, Users, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      color: "primary",
      skills: ["Python", "C++"]
    },
    {
      icon: Database,
      title: "Libraries",
      color: "secondary",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch"]
    },
    {
      icon: Brain,
      title: "AI Tools",
      color: "accent",
      skills: ["LangChain", "Hugging Face", "Ollama", "DeepSeek", "OpenAI", "CREWAI", "n8n"]
    },
    {
      icon: Wrench,
      title: "Dev Tools",
      color: "primary",
      skills: ["GitHub", "VS Code", "Jupyter Notebook", "Streamlit"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "secondary",
      skills: ["Communication", "Team Collaboration", "People Management"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary border-primary/30';
      case 'secondary':
        return 'text-secondary border-secondary/30';
      case 'accent':
        return 'text-accent border-accent/30';
      default:
        return 'text-primary border-primary/30';
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-xl neon-glow hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-${category.color}/20 to-${category.color}/10`}>
                  <category.icon className={`h-6 w-6 ${getColorClasses(category.color).split(' ')[0]}`} />
                </div>
                <h3 className={`text-xl font-semibold ${getColorClasses(category.color).split(' ')[0]}`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`px-3 py-2 rounded-lg bg-gradient-to-r from-white/5 to-white/10 border ${getColorClasses(category.color).split(' ')[1]} hover:from-white/10 hover:to-white/15 transition-all duration-200`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className={`absolute top-2 right-2 w-2 h-2 bg-${category.color} rounded-full animate-pulse`}></div>
            </div>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">Tech Stack Highlights</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Python", "LangChain", "PyTorch", "Streamlit", "Ollama", "OpenAI", "CREWAI"].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/30 hover:scale-110 transition-transform duration-200 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
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