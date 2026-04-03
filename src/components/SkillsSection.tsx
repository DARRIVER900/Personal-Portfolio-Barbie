import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    accent: "border-sunflower-gold/30",
    dotColor: "bg-sunflower-gold",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    category: "UI/UX Design",
    accent: "border-lavender-swirl/30",
    dotColor: "bg-lavender-swirl",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Usability Testing", "Data-informed Design", "UX Metrics"],
  },
  {
    category: "Tools",
    accent: "border-warm-orange/30",
    dotColor: "bg-warm-orange",
    skills: ["Git","GitHub", "VS Code", "Jira"],
  },
];

const SkillsSection = () => {
  return (
    <section className="relative py-28 px-6">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-3">✦ Skills ✦</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">My Paleta</h2>
          <p className="text-muted-foreground mt-4 font-body italic">Each tool is a color on my digital canvas</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className={`glass-card p-7 border-l-4 ${cat.accent}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full ${cat.dotColor}`} />
                <h3 className="font-display font-bold text-lg text-foreground">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm font-body bg-secondary/60 text-foreground/80 border border-border hover-float cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;