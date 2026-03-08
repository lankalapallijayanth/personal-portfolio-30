import { resume } from "@/data/resume";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12">
      <div className="flex items-center justify-between mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
      </div>

      <div className="space-y-6">
        {resume.experience.map((exp, index) => (
          <div
            key={exp.id}
            className={`rounded-[2rem] bg-card p-8 md:p-10 card-hover animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="px-4 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground font-medium">{exp.company}</p>
              </div>
            </div>
            <ul className="space-y-3 ml-16">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
