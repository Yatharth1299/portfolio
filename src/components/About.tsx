import { Brain, GraduationCap, Cpu } from "lucide-react";

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
                  I am a final-year <span className="text-primary font-semibold">Computer Science student</span> at 
                  Meerut Institute of Engineering & Technology with a <span className="text-secondary font-semibold">CGPA of 8.1</span>, 
                  complemented by a minor in <span className="text-accent font-semibold">Robotics</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I specialize in building <span className="text-primary">end-to-end AI systems</span> using 
                  Large Language Models and agent-based tools. My expertise lies in creating 
                  <span className="text-secondary"> intelligent, scalable, real-world solutions</span> with 
                  open-source tools and APIs.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  My passion for <span className="text-accent">Artificial Intelligence</span> drives me to 
                  continuously explore cutting-edge technologies and transform complex problems into 
                  elegant, efficient solutions.
                </p>
              </div>

              {/* Visual Elements */}
              <div className="relative">
                <div className="glass-card p-6 rounded-xl space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-primary">Education</h3>
                      <p className="text-sm text-muted-foreground">B.Tech CSE • CGPA: 8.1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Brain className="h-6 w-6 text-secondary" />
                    <div>
                      <h3 className="font-semibold text-secondary">Specialization</h3>
                      <p className="text-sm text-muted-foreground">AI/ML & Robotics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Cpu className="h-6 w-6 text-accent" />
                    <div>
                      <h3 className="font-semibold text-accent">Focus</h3>
                      <p className="text-sm text-muted-foreground">LLM & Multi-Agent Systems</p>
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