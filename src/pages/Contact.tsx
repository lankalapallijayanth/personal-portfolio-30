import Header from "@/components/Header";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { resume } from "@/data/resume";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            I'm always open to discussing new opportunities, collaborations, or just chatting about tech.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-card p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href={`mailto:${resume.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                  {resume.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  linkedin.com/in/jayanthlankalapalli
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <a href={resume.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  github.com/lankalapalljn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
