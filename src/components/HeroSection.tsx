import { motion } from "framer-motion";
import heroBg from "@/assets/vangogh-hero-bg.jpg";


const stars = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 80 + 5}%`,
  left: `${Math.random() * 90 + 5}%`,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 3,
}));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background painting */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-sunflower-gold animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center max-w-3xl px-6">
        
        <motion.p
          className="text-sm font-body font-medium tracking-[0.3em] uppercase text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ✦ Personal Portfolio ✦
        </motion.p>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="text-gradient-gold">Barbara Daria Rivera Anguiano</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/70 max-w-xl mx-auto mb-10 font-body leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          "I design, build and optimize user-centered interfaces using React, TypeScript and modern UI systems."
          <span className="block text-sm mt-2 not-italic text-muted-foreground">
            — Frontend / UI Engineer crafting intuitive and impactful digital experiences
          </span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#proyectos"
            className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-full golden-glow hover-float text-sm tracking-wide"
          >
            View Projects
          </a>
          <a
            href="#sobre-mi"
            className="px-8 py-3 border border-primary/40 text-foreground font-display font-semibold rounded-full hover-float text-sm tracking-wide"
          >
            Get to know me
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;