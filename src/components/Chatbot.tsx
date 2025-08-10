import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, User } from "lucide-react";

const buriIcon = "/lovable-uploads/bb4adc58-e102-411d-8f24-1a9407529348.png";

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "HA HA HA M hmesa takatvar logo ki madat krta hu so... I'm Yatharth's assistant..             Hii👋. ",
      isUser: false,
      timestamp: new Date()
    }
  ]);

  // Knowledge base with exact same content
  const knowledgeBase = {
    skills: "Yatharth is proficient in Python, C++, with extensive experience in AI libraries like Pandas, NumPy, PyTorch, and Scikit-learn. He specializes in AI tools including LangChain, Hugging Face, Ollama, OpenAI, CREWAI, and n8n. He's also skilled with development tools like GitHub, VS Code, Jupyter Notebook, and Streamlit.",
    
    projects: "Yatharth has built several impressive AI projects: 1) AI-Powered Email Responder Agent using n8n and OpenAI that reduced manual processing by 70%, 2) AI Trip Planner Assistant with CREWAI and LangChain that cut planning time by 80%, 3) Document Chatbot using RAG with LangChain and FAISS, and 4) Credit Card Fraud Detection with 98% precision using Random Forest and XGBoost.",
    
    education: "Yatharth is a final-year B.Tech Computer Science student at Meerut Institute of Engineering & Technology with a CGPA of 8.1 and a minor in Robotics.",
    
    certifications: "He holds multiple certifications including Prompt Engineering for Generative AI from IBM, MongoDB certification, AICTE Generative AI Internship, AWS Solutions Architect, Python Programming from Coursera, and 25+ Google Cloud Skill Badges.",
    
    achievements: "Notable achievements include CoCubes Test Score of 603/800, AINCAT 2025 Rank 17343, Google Cloud Top League with 25+ skill badges, AICTE certified Gen AI intern, and building 4+ real-world AI tools.",
    
    contact: "You can reach Yatharth at yatharthkashyap1488@gmail.com. He's also available on LinkedIn and GitHub. He typically responds within 24 hours and is open to collaboration opportunities.",
    
    experience: "Yatharth specializes in building end-to-end AI systems using LLMs and multi-agent architectures. He's known for rapid prototyping, model optimization, and creating scalable real-world AI solutions using open-source tools and APIs."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("skill") || message.includes("technology") || message.includes("programming")) {
      return knowledgeBase.skills;
    }
    
    if (message.includes("project") || message.includes("work") || message.includes("portfolio")) {
      return knowledgeBase.projects;
    }
    
    if (message.includes("education") || message.includes("degree") || message.includes("university") || message.includes("college")) {
      return knowledgeBase.education;
    }
    
    if (message.includes("certificate") || message.includes("certification") || message.includes("course")) {
      return knowledgeBase.certifications;
    }
    
    if (message.includes("achievement") || message.includes("award") || message.includes("rank") || message.includes("score")) {
      return knowledgeBase.achievements;
    }
    
    if (message.includes("contact") || message.includes("email") || message.includes("reach") || message.includes("connect")) {
      return knowledgeBase.contact;
    }
    
    if (message.includes("experience") || message.includes("background") || message.includes("expertise")) {
      return knowledgeBase.experience;
    }
    
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm here to help you learn more about Yatharth. You can ask me about his skills, projects, education, certifications, achievements, or how to contact him. What interests you most?";
    }
    
    if (message.includes("ai") || message.includes("artificial intelligence") || message.includes("machine learning")) {
      return "Yatharth is passionate about AI and ML! He specializes in Generative AI, LLM development, and multi-agent systems. He's worked with cutting-edge tools like LangChain, OpenAI, Ollama, and CREWAI to build intelligent applications that solve real-world problems.";
    }
    
    if (message.includes("job") || message.includes("opportunity") || message.includes("hire") || message.includes("position")) {
      return "Yatharth is actively seeking opportunities in Generative AI Engineering, AI Research, and Machine Learning Development. He's available for full-time positions and is open to collaborating on innovative AI projects. Feel free to reach out to him at yatharthkashyap1488@gmail.com!";
    }
    
    return "I'd be happy to help you learn more about Yatharth! You can ask me about his technical skills, AI projects, educational background, certifications, achievements, or how to get in touch with him. What specific information are you looking for?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        text: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup Message */}
      {showPopup && !isOpen && (
        <div className="absolute bottom-16 right-0 bg-background border border-border rounded-lg p-3 shadow-lg max-w-xs animate-bounce">
          <div className="flex justify-between items-start">
            <p className="text-sm text-foreground">hy!! its me BURI BURI ZAEMON tap me to chat</p>
            <button 
              onClick={closePopup}
              className="text-muted-foreground hover:text-foreground ml-2"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <Button
        onClick={toggleChat}
        size="lg"
        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={buriIcon} 
              alt="Buri Buri Zaemon" 
              className="h-10 w-10 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 border-2 border-white/30" 
            />
            <div className="absolute -top--3 -right--3 w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
          </div>
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96">
          <div className="glass-card rounded-xl shadow-2xl border border-white/20 h-full flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-primary/20 to-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center overflow-hidden">
                  <img src={buriIcon} alt="Buri Buri Zaemon" className="h-6 w-6 rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Buri Buri Zaemon</h3>
                  <p className="text-xs text-muted-foreground">Ask about Yatharth's portfolio</p>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isUser && (
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                      <img src={buriIcon} alt="Buri Buri Zaemon" className="h-4 w-4 rounded-full object-cover" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-primary/20 text-foreground'
                        : 'bg-white/10 text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                  
                  {message.isUser && (
                    <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-3 w-3 text-accent" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                    <img src={buriIcon} alt="Buri Buri Zaemon" className="h-4 w-4 rounded-full object-cover" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, projects, etc..."
                  className="flex-1 glass-card border-white/20 focus:border-primary text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 px-3"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;