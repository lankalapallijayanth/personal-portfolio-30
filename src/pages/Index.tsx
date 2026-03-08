import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { resume } from "@/data/resume";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        {/* Contact CTA */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interested in working together or have a question? Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${resume.email}`}
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all"
              >
                Email Me
              </a>
              <a
                href={resume.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full border-2 border-border font-medium hover:bg-muted hover:scale-105 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/#experience" className="hover:text-accent transition-colors">Experience</a></li>
                <li><a href="/#projects" className="hover:text-accent transition-colors">Projects</a></li>
                <li><a href="/#skills" className="hover:text-accent transition-colors">Skills</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href={resume.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href={`mailto:${resume.email}`} className="hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Jayanth Lankalapalli. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
