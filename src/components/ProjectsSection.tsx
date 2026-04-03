import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import carebitesImg from "../assets/Home_CareBites.png";
import coffeeImg from "../assets/Home_AltaPinta.png";

const projects = [
  {
    title: "CareBites",
    description: "Designed a user-centered platform to reduce food waste and improve access to resources by connecting donors and beneficiaries.",
    tags: ["UX/UI", "User Research", "Prototyping", "Figma"],
    gradient: "from-starry-blue via-lavender-swirl to-starry-blue-deep",
    image: carebitesImg,
    link: "https://www.figma.com/proto/HmxdVwiPF2fpuahHc1xq5l/Care-Bites?node-id=59-105&t=u1E1M0K8kJZa1X6N-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=69%3A336",
  },
  {
    title: "Coffee App",
    description: "Designed a clean and intuitive interface to enhance product discovery and simplify the food ordering experience.",
    tags: ["UI Design", "Mobile Design", "Figma"],
    gradient: "from-sunflower-gold via-warm-orange to-sunflower-amber",
    image: coffeeImg,
    link: "https://www.figma.com/proto/Fhp4FgFadeicumZVQAQ6wW/Cafeteria?node-id=114-2080&t=qwfL6OWdY3GQ9OsY-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4&show-proto-sidebar=1"
  },
  
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="relative py-28 px-6">
      <div className="absolute inset-0 swirl-overlay" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-3">✦ Works ✦</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">Projects</h2>
          <p className="text-muted-foreground mt-4 font-body italic">"I dream my paintings, and then I paint my dreams"</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, i) => (
            <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm"
            >
            <motion.div
              key={project.title}
              className="glass-card overflow-hidden group hover-float cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`h-44 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                 <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"
              />

                {/* Brushstroke texture overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
                  }}
                />
                <ExternalLink className="w-8 h-8 text-foreground/20 group-hover:text-foreground/50 transition-all duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-body">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-body px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;