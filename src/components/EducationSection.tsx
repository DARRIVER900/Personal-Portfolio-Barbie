import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Heart } from "lucide-react";

const education = [
  {
    period: "2022 – Present",
    title: "Software Engineering",
    institution: "University of Colima. School of Telematics — 6th Semester",
    description: "Focus on web development and interface design",
  },
];

const courses = [
  "UI Design with Figma on Udemy (In Progress)",
];

const softSkills = [
  "Teamwork",
  "Effective communication",
  "Critical thinking",
  "Adaptability",
  "Creativity",
  "Time management",
  "Empathy",
  "Responsibility",
];

const EducationSection = () => {
  return (
    <section id="educacion" className="relative py-28 px-6">
      <div className="absolute inset-0 swirl-overlay" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-3">✦ Training ✦</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">My Journey</h2>
          <p className="text-muted-foreground mt-4 font-body italic">
            Every stroke of knowledge contributes to the complete work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-starry-blue/10 to-transparent" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground text-center mb-6">Studies</h3>
              {education.map((edu) => (
                <div key={edu.title} className="text-center">
                  <span className="text-xs font-body tracking-wider uppercase text-primary/70">{edu.period}</span>
                  <h4 className="font-display font-bold text-foreground mt-1">{edu.title}</h4>
                  <p className="text-sm text-muted-foreground font-body mt-1">{edu.institution}</p>
                  <p className="text-sm text-foreground/60 font-body mt-3 italic">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sunflower-gold/10 to-transparent" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground text-center mb-6">Courses</h3>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower-gold flex-shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-swirl/10 to-transparent" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground text-center mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-body bg-secondary/60 text-foreground/80 border border-border hover-float cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;