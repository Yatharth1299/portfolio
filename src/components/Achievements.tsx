import { Trophy, Target, Cloud, Award, Brain, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Brain,
      title: "CoCubes Test Score",
      value: "603/800",
      description: "Demonstrated strong analytical and problem-solving skills",
      color: "primary",
      category: "Academic"
    },
    {
      icon: Target,
      title: "AINCAT 2025 Rank",
      value: "17343",
      description: "All India Naukri Campus Aptitude Test ranking",
      color: "accent",
      category: "Competition"
    },
    {
      icon: Cloud,
      title: "Google Cloud Top League",
      value: "25+ Skill Badges",
      description: "Comprehensive cloud computing and AI/ML expertise",
      color: "secondary",
      category: "Professional"
    },
    {
      icon: Award,
      title: "AICTE Certified Gen AI Intern",
      value: "Certified",
      description: "Official recognition in Generative AI development",
      color: "primary",
      category: "Certification"
    },
    {
      icon: Code,
      title: "Real-World AI Tools",
      value: "4+ Projects",
      description: "Built production-ready AI applications using open-source stacks",
      color: "accent",
      category: "Development"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/20',
          text: 'text-primary',
          border: 'border-primary/30',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/20',
          text: 'text-secondary',
          border: 'border-secondary/30',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--secondary)/0.3)]'
        };
      case 'accent':
        return {
          bg: 'bg-accent/20',
          text: 'text-accent',
          border: 'border-accent/30',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]'
        };
      default:
        return {
          bg: 'bg-primary/20',
          text: 'text-primary',
          border: 'border-primary/30',
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
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized accomplishments in AI development, academic excellence, and professional certifications
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color);
            
            return (
              <div 
                key={achievement.title}
                className={`glass-card p-8 rounded-xl transition-all duration-500 hover:scale-105 ${colors.glow} group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border} mb-4`}>
                  <Trophy className="h-3 w-3" />
                  {achievement.category}
                </div>

                {/* Icon */}
                <div className={`p-4 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300 mb-4 w-fit`}>
                  <achievement.icon className={`h-8 w-8 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <div className={`text-2xl font-bold ${colors.text} mb-3 font-mono`}>
                  {achievement.value}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative Elements */}
                <div className={`absolute bottom-2 right-2 w-2 h-2 ${colors.bg} rounded-full animate-pulse opacity-60`}></div>
                <div className="absolute top-2 left-2 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Performance Highlights</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  75%+
                </div>
                <div className="text-sm text-muted-foreground">
                  CoCubes Percentile Score
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                  25+
                </div>
                <div className="text-sm text-muted-foreground">
                  Professional Certifications & Badges
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
                  4+
                </div>
                <div className="text-sm text-muted-foreground">
                  Production-Ready AI Applications
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Quote */}
            <div className="text-center mt-8 pt-8 border-t border-white/10">
              <blockquote className="text-lg italic text-muted-foreground">
                "Consistently delivering innovative AI solutions with a focus on real-world impact and scalability"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;