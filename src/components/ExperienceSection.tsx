import { resume } from "@/data/resume";
import { Briefcase } from "lucide-react";
import cloudInfra from "@/assets/cloud-infra.png";
import cybersecurity from "@/assets/cybersecurity.png";
import mobileDev from "@/assets/mobile-dev.png";

const illustrationMap: Record<string, string> = {
  amex: cloudInfra,
  "amex-intern": cloudInfra,
  qsm: cybersecurity,
  "vcu-research": mobileDev,
};

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
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                {illustrationMap[exp.id] ? (
                  <img src={illustrationMap[exp.id]} alt={`${exp.company} illustration`} className="w-full h-full object-contain" />
                ) : (
                  <Briefcase className="w-5 h-5" />
                )}
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
            <ul className="space-y-3 ml-[4.5rem]">
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
