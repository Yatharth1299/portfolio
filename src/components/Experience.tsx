import { Briefcase, Calendar, CheckCircle2, Building2 } from "lucide-react";

const Experience = () => {
  const roles = [
    {
      title: "Generative AI Engineer",
      company: "WebSoulLab",
      period: "Feb 2025 – Aug 2025",
      color: "primary",
      icon: Briefcase,
      highlights: [
        "Developed backend services and RESTful APIs with Python and FastAPI to support AI-powered application workflows.",
        "Built a voice-based conversational AI application using LangGraph and FastAPI, implementing conversational workflows and state management.",
        "Integrated Whisper ASR for on-premise speech recognition and pyttsx3/ElevenLabs for TTS, reaching 92% transcription accuracy and 95% speech naturalness.",
        "Designed, tested, and documented API endpoints with FastAPI, Postman, and Swagger, improving frontend-backend integration efficiency by 30%."
      ],
      tags: ["Python", "FastAPI", "LangGraph", "Whisper", "TTS", "REST APIs"]
    },
    {
      title: "AI Engineer",
      company: "Extension Technology",
      period: "Aug 2025 – Nov 2026",
      color: "accent",
      icon: Building2,
      highlights: [
        "Contributed to AI-powered applications, backend services, and intelligent automation workflows.",
        "Developed and integrated REST APIs connecting application components, external services, and AI-driven functionality.",
        "Implemented LLM-powered workflows using prompt engineering and AI agent frameworks.",
        "Supported end-to-end delivery through debugging, testing, integration, and deployment."
      ],
      tags: ["Python", "REST APIs", "LLM Workflows", "Prompt Engineering", "AI Agents"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary bg-primary/20',
          border: 'border-primary/30',
          accent: 'text-primary',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
        };
      case 'accent':
        return {
          icon: 'text-accent bg-accent/20',
          border: 'border-accent/30',
          accent: 'text-accent',
          glow: 'hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]'
        };
      default:
        return {
          icon: 'text-primary bg-primary/20',
          border: 'border-primary/30',
          accent: 'text-primary',
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building backend services and AI-powered products in production environments
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => {
            const colors = getColorClasses(role.color);

            return (
              <div
                key={`${role.company}-${role.title}`}
                className={`glass-card p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${colors.glow} relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${colors.icon} flex-shrink-0`}>
                    <role.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {role.title}
                    </h3>
                    <p className={`text-sm font-semibold ${colors.accent} mb-2`}>
                      {role.company}
                    </p>
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${colors.border} border bg-gradient-to-r from-white/5 to-white/10`}>
                      <Calendar className="h-3 w-3" />
                      {role.period}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${colors.accent}`} />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-white/10 to-white/5 border ${colors.border}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
