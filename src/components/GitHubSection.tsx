import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, ExternalLink, Folder } from "lucide-react";

const githubProjects = [
  {
    name: "roteirista",
    description: "Base da interface para gerar e organizar roteiros com Gemini AI e SQLite local.",
    language: "TypeScript",
    languageColor: "hsl(210, 80%, 60%)",
    stars: 0,
    forks: 0,
    url: "https://github.com/regaliainterno/roteirista",
  },
  {
    name: "scraptel_bot",
    description: "Bot privado de Telegram em Python para monitorar YouTube, TikTok, Kwai e Facebook Reels.",
    language: "Python",
    languageColor: "hsl(45, 80%, 50%)",
    stars: 0,
    forks: 0,
    url: "https://github.com/regaliainterno/scraptel_bot",
  },
  {
    name: "scrap_imagens",
    description: "App de scraping de imagens (GUI + backend) via Bing, com validacao e dedupe.",
    language: "Python",
    languageColor: "hsl(45, 80%, 50%)",
    stars: 0,
    forks: 0,
    url: "https://github.com/regaliainterno/scrap_imagens",
  },
  {
    name: "PokeAPI",
    description: "App mobile e PWA com Ionic/Angular para explorar a PokeAPI v2.",
    language: "TypeScript",
    languageColor: "hsl(210, 80%, 60%)",
    stars: 0,
    forks: 0,
    url: "https://github.com/regaliainterno/PokeAPI",
  },
  {
    name: "jdfxop",
    description: "Repositorio de entrada no GitHub para testes e exploracoes.",
    language: "Multi",
    languageColor: "hsl(220, 8%, 60%)",
    stars: 0,
    forks: 0,
    url: "https://github.com/regaliainterno/jdfxop",
  },
  {
    name: "flow_os",
    description: "Sistema para organizacao de producao de conteudo com FastAPI, React/TypeScript e Electron.",
    language: "Multi",
    languageColor: "hsl(220, 8%, 60%)",
    stars: 0,
    forks: 0,
    url: "https://github.com/regaliainterno/flow_os",
  },
];

export const GitHubSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="github" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="floating-orb w-[500px] h-[500px] top-1/3 -right-60 bg-accent"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-badge mb-6">
              <Github className="w-4 h-4" />
              Projetos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meus projetos no <span className="gradient-text">GitHub</span>
            </h2>
            <p className="text-muted-foreground">
              Alguns dos projetos que desenvolvi e contribui.
            </p>
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-10"
          >
            <motion.a
              href="https://github.com/regaliainterno"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-5 py-3 flex items-center gap-3 group hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Github className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-display font-semibold text-foreground text-sm">@regaliainterno</p>
                <p className="text-xs text-muted-foreground">Ver perfil no GitHub</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {githubProjects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="github-card group"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <Folder className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground truncate group-hover:text-primary transition-colors text-sm">
                      {project.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span className="text-xs text-muted-foreground">{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-3.5 h-3.5" />
                    <span className="text-xs">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <GitFork className="w-3.5 h-3.5" />
                    <span className="text-xs">{project.forks}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-8"
          >
            <motion.a
              href="https://github.com/regaliainterno?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              Ver todos os repositorios
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
