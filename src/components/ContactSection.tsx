import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Gmail",
    href: "mailto:barbaradariariveraanguiano@gmail.com",
    description: "Send me an email",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    iconColor: "text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/b-daria-rivera-anguiano",
    description: "Let's connect professionally",
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/30",
    iconColor: "text-accent",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/DARRIVER900",
    description: "Check out my repositories",
    color: "from-secondary/40 to-secondary/10",
    borderColor: "border-muted-foreground/30",
    iconColor: "text-foreground",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send className="w-6 h-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Contact
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto italic">
            " “Art isn't what you see, but what you make others see.” — Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`group block p-8 rounded-2xl border ${contact.borderColor} bg-gradient-to-br ${contact.color} backdrop-blur-sm text-center transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10`}
            >
              <div className={`inline-flex p-4 rounded-full bg-card/60 mb-5 ${contact.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {contact.label}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
