import { Star } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-body flex items-center justify-center gap-2">
          Made with <Star className="w-4 h-4 text-primary fill-primary" /> inspiration and code · 2026
        </p>
        <p className="text-muted-foreground/50 text-xs font-body mt-2 italic">
          "If you hear a voice inside you saying, “You can't code,” then start coding, and that voice will be silenced."
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
