import { Github, Linkedin, Mail, Download } from "lucide-react";
import { resume } from "@/data/resume";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in bg-card flex items-center justify-center">
          <img
            src={heroIllustration}
            alt="Software engineering workspace illustration"
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              {resume.name}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              Software Engineer with experience building scalable applications, cloud infrastructure, and automation tools at American Express. Passionate about full-stack development and modern technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <a
              href={`mailto:${resume.email}`}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-4 text-base font-medium transition-all hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/Jayanth_Lankalapalli_Resume.pdf"
              download
              className="border-2 border-border hover:border-primary hover:bg-muted rounded-full px-8 py-4 md:px-10 md:py-4 text-base font-medium transition-all hover:scale-105 text-center inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-4 animate-slide-up stagger-3">
            <a href={resume.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${resume.email}`} className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
