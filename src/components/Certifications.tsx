import { Award, ExternalLink, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Prompt Engineering for Generative AI",
      issuer: "IBM",
      type: "AI/ML",
      color: "primary",
      verified: true,
      link: "https://www.credly.com/badges/438e584b-f8b6-4bcd-9890-6f7cad29ecc6"
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      type: "Database",
      color: "secondary",
      verified: true,
      link: "https://learn.mongodb.com/c/s3LnauFcSLGsXojhnop6zg"
    },
    {
      title: "Generative AI Internship Certificate",
      issuer: "AICTE",
      type: "Internship",
      color: "accent",
      verified: true,
      link: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=5098b7a45f16186b64b8f9fedda1792d"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      type: "AI/ML",
      color: "primary",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/verify/HHFXFP7YO1TO"
    },
    {
      title: "Python Programming",
      issuer: "Coursera",
      type: "Programming",
      color: "secondary",
      verified: true,
      link: "https://www.coursera.org/account/accomplishments/verify/4EGY5OTT6CPK"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Udemy",
      type: "Cloud",
      color: "accent",
      verified: true,
      link: "https://www.udemy.com/certificate/UC-d317230a-93fd-4d6a-9698-5c16124a76ad/"
    }
  ];

  const achievements = [
    {
      title: "25+ Google Cloud Skill Badges",
      description: "Public Profile with comprehensive cloud computing expertise",
      icon: Star,
      color: "primary",
      link: "https://www.cloudskillsboost.google/public_profiles/501f7b2c-1b85-4823-a4c8-40afdddd7b74"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/20',
          text: 'text-primary',
          border: 'border-primary/30'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/20',
          text: 'text-secondary',
          border: 'border-secondary/30'
        };
      case 'accent':
        return {
          bg: 'bg-accent/20',
          text: 'text-accent',
          border: 'border-accent/30'
        };
      default:
        return {
          bg: 'bg-primary/20',
          text: 'text-primary',
          border: 'border-primary/30'
        };
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent neural-gradient">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and recognized achievements in AI, Cloud Computing, and Software Development
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            
            return (
              <div 
                key={cert.title}
                className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 neon-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <Award className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className={`text-sm font-medium ${colors.text} mb-2`}>
                  {cert.issuer}
                </p>
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border} mb-4`}>
                  {cert.type}
                </span>

                {/* Action */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full ${colors.border} hover:bg-white/10 transition-all duration-300 group/btn`}
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                  View Certificate
                </Button>

                {/* Decorative */}
                <div className={`absolute top-2 right-2 w-2 h-2 ${colors.bg} rounded-full animate-pulse opacity-60`}></div>
              </div>
            );
          })}
        </div>

        {/* Special Achievements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Special Achievements</h3>
          
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color);
            
            return (
              <div 
                key={achievement.title}
                className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl mb-6 hover:scale-105 transition-all duration-300 neon-glow group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className={`p-3 sm:p-4 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${colors.text}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`w-full sm:w-auto ${colors.border} hover:bg-white/10 transition-all duration-300 group/btn mt-2 sm:mt-0`}
                    onClick={() => window.open(achievement.link, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    <span className="text-xs sm:text-sm">View Profile</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Certification Summary</h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Professional Certificates</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">25+</div>
              <div className="text-sm text-muted-foreground">Cloud Skill Badges</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">4+</div>
              <div className="text-sm text-muted-foreground">AI/ML Specializations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Verified Credentials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;