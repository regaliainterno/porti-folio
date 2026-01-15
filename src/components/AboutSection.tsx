import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Automação & Back-end",
    items: ["Python", "FastAPI", "APIs e integrações", "Automação desktop"],
  },
  {
    icon: Palette,
    title: "Interfaces & Apps",
    items: ["React", "Electron", "UX pragmática", "Fluxos de conteúdo"],
  },
  {
    icon: Rocket,
    title: "Estratégia & IA",
    items: ["Marketing Digital", "IA Generativa", "Pipelines de produção", "Vibe Coding"],
  },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="floating-orb w-[400px] h-[400px] top-20 -right-40 bg-accent"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-badge mb-6">Sobre</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Um pouco sobre mim
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              <div
                className={`relative ${isExpanded ? "" : "max-h-40 overflow-hidden cursor-pointer"} transition-all duration-500`}
                onClick={() => {
                  if (!isExpanded) setIsExpanded(true);
                }}
                onKeyDown={(event) => {
                  if (!isExpanded && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    setIsExpanded(true);
                  }
                }}
                role={isExpanded ? undefined : "button"}
                tabIndex={isExpanded ? -1 : 0}
                aria-expanded={isExpanded}
              >
                <div className="space-y-4">
                  <p>
                    Sou Lucas Nascimento, desenvolvedor de software em transição de carreira, combinando
                    estratégia de Marketing Digital com programação para resolver problemas reais. Entrei
                    no desenvolvimento para automatizar meus fluxos como criador de conteúdo.
                  </p>
                  <p>
                    Minha abordagem é direta: encontro gargalos e construo ferramentas para removê-los. O
                    FlowOS é um exemplo, integrando FastAPI, React/Electron e IA Generativa para orquestrar
                    vídeos curtos.
                  </p>
                  <p>
                    Tenho proficiência em Python para automação desktop e back-end, além de experiência com
                    interfaces gráficas e dependências de sistema. Busco oportunidades para aplicar a
                    mentalidade de "Vibe Coding": código enxuto, bem estruturado e centrado no usuário.
                  </p>
                </div>
                {!isExpanded && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end justify-center">
                    <span className="text-sm text-foreground/80 mb-2">Continuar lendo</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="icon-glass mb-4">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
