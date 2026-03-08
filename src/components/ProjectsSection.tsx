import { resume } from "@/data/resume";
import { Code2 } from "lucide-react";

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
            className={`rounded-[2rem] bg-card p-8 md:p-10 card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle} • {project.year}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-muted text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
