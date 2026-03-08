import { ExternalLink } from "lucide-react";
import { resume } from "@/data/resume";
import mobileDev from "@/assets/mobile-dev.png";
import heroIllustration from "@/assets/hero-illustration.png";

const projectImageMap: Record<string, string> = {
  instabot: heroIllustration,
  halfway: mobileDev,
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12">
      <div className="flex items-center justify-between mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resume.projects.map((project, index) => (
          <div
            key={project.id}
            className={`rounded-[2rem] bg-card overflow-hidden card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            {projectImageMap[project.id] && (
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={projectImageMap[project.id]}
                  alt={`${project.title} illustration`}
                  className="w-full h-full object-contain p-6"
                />
              </div>
            )}
            <div className="p-8 md:p-10">
              <div className="mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle} • {project.year}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                {"github" in project && (project as any).github && (
                  <a
                    href={(project as any).github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    GitHub <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
