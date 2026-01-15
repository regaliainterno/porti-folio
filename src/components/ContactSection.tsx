import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "5521973352636";
    const whatsappMessage = [
      "Ola! Voce recebeu uma nova mensagem pelo site.",
      `Nome: ${formData.name}`,
      `Email: ${formData.email}`,
      `Mensagem: ${formData.message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    toast.success("Abrindo o WhatsApp...");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="floating-orb w-[500px] h-[500px] -bottom-40 left-1/4 bg-primary"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-badge mb-6">Contato</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground">
              Quer trocar uma ideia ou colaborar em algum projeto? Me manda uma mensagem.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-4 mb-10"
          >
            <motion.a
              href="https://instagram.com/jdfxop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lucas-nascimento28/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://wa.me/5521973352636"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-2">Mensagem</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Escreva sua mensagem..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 py-3"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Enviar
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
