import { motion } from "framer-motion";
import { ArrowUp, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">L</span>
            </div>
            <span className="font-display font-medium text-foreground">Lucas Nascimento</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://instagram.com/jdfxop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lucas-nascimento28/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://wa.me/5521973352636"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Copyright & Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              (c) 2025 Lucas Nascimento
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
