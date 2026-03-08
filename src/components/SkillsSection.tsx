import { resume } from "@/data/resume";

const SkillsSection = () => {
  const categories = [
    { label: "Languages", items: resume.skills.languages },
    { label: "Tools & Platforms", items: resume.skills.tools },
    { label: "Methods", items: resume.skills.methods },
  ];

  return (
    <section id="skills" className="py-12">
      <div className="flex items-center justify-between mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={cat.label}
            className={`rounded-[2rem] bg-card p-8 animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            <h3 className="text-xl font-bold mb-6">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
