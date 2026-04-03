import { motion } from "framer-motion";
import { Code, Palette, BarChart3 } from "lucide-react";

const focuses = [
  {
    icon: Code,
    title: "Frontend Dev",
    description: "Modern web applications (React, TypeScript) that build interfaces telling visual stories.",
    gradient: "from-starry-blue to-lavender-swirl",
  },
  {
    icon: Palette,
    title: "UI Engineering",
    description: "Design + development of scalable interfaces",
    gradient: "from-sunflower-gold to-warm-orange",
  },
  {
    icon: BarChart3,
    title: "UX Design",
    description: "User research, usability testing and interaction design",
    gradient: "from-sage-green to-starry-blue",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="relative py-28 px-6">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 swirl-overlay" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-3">✦ Sobre Mí ✦</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">
            Mi Historia
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-foreground/70 text-lg max-w-2xl mx-auto mb-20 leading-relaxed font-body italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Software Engineering student specialized in Frontend and UI/UX.
          I design and develop digital products focused on usability, accessibility and real-world impact.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {focuses.map((focus, i) => (
            <motion.div
              key={focus.title}
              className="glass-card p-8 text-center group hover-float relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${focus.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                  <focus.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{focus.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-body">{focus.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;