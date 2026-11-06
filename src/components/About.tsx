import { Brain, GraduationCap, Cpu, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent neural-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="glass-card p-8 md:p-12 rounded-2xl relative">
            {/* Floating Icons */}
            <div className="absolute top-6 right-6">
              <Brain className="h-8 w-8 text-primary opacity-30 animate-float" />
            </div>
            <div className="absolute bottom-6 left-6">
              <Cpu className="h-6 w-6 text-accent opacity-30 animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  I'm a <span className="text-primary font-semibold">Backend Engineer</span> focused on 
                  Python, API development, and intelligent backend systems. I build RESTful services with{" "}
                  <span className="text-secondary font-semibold">FastAPI</span> and ship end-to-end AI 
                  features — from data ingestion and retrieval to agent orchestration — using{" "}
                  <span className="text-accent font-semibold">LangChain, LangGraph</span>, and vector databases.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Alongside my degree I've worked as a{" "}
                  <span className="text-primary">Generative AI Engineer</span> and{" "}
                  <span className="text-secondary">AI Engineer</span>, building voice-based conversational 
                  agents, RAG pipelines, and LLM-powered automation for real applications.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I care about <span className="text-accent">scalable architecture, clean APIs, and testing</span>, 
                  and I enjoy taking products from an initial concept to a reliable working implementation.
                </p>
              </div>

              {/* Visual Elements */}
              <div className="relative">
                <div className="glass-card p-6 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-primary">Education</h3>
                      <p className="text-sm text-muted-foreground">B.Tech CSE • CGPA: 8.2/10</p>
                      <p className="text-xs text-muted-foreground">Jun 2022 – Jun 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Brain className="h-6 w-6 text-secondary" />
                    <div>
                      <h3 className="font-semibold text-secondary">Specialization</h3>
                      <p className="text-sm text-muted-foreground">AI/ML • Minor in Robotics</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-accent" />
                    <div>
                      <h3 className="font-semibold text-accent">Experience</h3>
                      <p className="text-sm text-muted-foreground">Backend & Gen AI Engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Cpu className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-primary">Focus</h3>
                      <p className="text-sm text-muted-foreground">APIs, RAG & Multi-Agent Systems</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
