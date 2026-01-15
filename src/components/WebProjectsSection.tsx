import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, ExternalLink, X, Maximize2 } from "lucide-react";

interface WebProject {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  tags: string[];
}

const webProjects: WebProject[] = [
  {
    id: "1",
    title: "Projeto Landing Page",
    description: "Landing page moderna com animações fluidas e design responsivo.",
    url: "https://example.com",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["React", "Tailwind"],
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description: "Painel administrativo com gráficos e métricas em tempo real.",
    url: "https://example.com",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Next.js", "Charts"],
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description: "Plataforma de vendas com carrinho, checkout e pagamentos.",
    url: "https://example.com",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["React", "Stripe"],
  },
  {
    id: "4",
    title: "Portfolio Criativo",
    description: "Site portfolio com animações 3D e efeitos visuais únicos.",
    url: "https://example.com",
    thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=500&fit=crop",
    tags: ["Three.js", "GSAP"],
  },
];

export const WebProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<WebProject | null>(null);

  return (
    <>
      <section id="web-projects" ref={sectionRef} className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="floating-orb w-[400px] h-[400px] top-1/4 -left-40 bg-primary"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="section-badge mb-6">
                <Globe className="w-4 h-4" />
                Web
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Páginas que <span className="gradient-text">desenvolvi</span>
              </h2>
              <p className="text-muted-foreground">
                Clique em qualquer projeto para visualizar em tela cheia.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {webProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="glass-card-hover overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                    
                    {/* Expand Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                        <Maximize2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col glass-card overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="icon-glass">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border bg-card hover:border-primary hover:text-primary transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg border border-border bg-card hover:border-destructive hover:text-destructive transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Preview */}
              <div className="flex-1 overflow-auto p-4">
                <div className="w-full h-full min-h-[60vh] rounded-xl overflow-hidden border border-border bg-card">
                  <iframe
                    src={selectedProject.url}
                    title={selectedProject.title}
                    className="w-full h-full min-h-[60vh]"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 p-4 border-t border-border">
                <span className="text-xs text-muted-foreground">Tecnologias:</span>
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
