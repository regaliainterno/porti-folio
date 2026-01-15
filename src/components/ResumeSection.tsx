import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  FileText,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Target,
  User,
  Wrench,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ResumeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="resume" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="floating-orb w-[420px] h-[420px] top-10 -left-52 bg-accent"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 19, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-badge mb-6">
              <FileText className="w-4 h-4" />
              Currículo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Visão geral do meu <span className="gradient-text">currículo</span>
            </h2>
            <p className="text-muted-foreground">
              Informações organizadas para leitura rápida, com detalhes em cada seção.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 lg:p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="icon-glass">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Dados pessoais e contato
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Nome</p>
                    <p className="text-muted-foreground">Lucas Nascimento</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua Becker Pinto, Santa Maria, RS, CEP 97050-070
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Telefone</p>
                    <a
                      href="tel:+5521973352636"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +55 21 97335-2636
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">E-mail</p>
                    <a
                      href="mailto:contatolucasscremin@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      contatolucasscremin@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-sm text-muted-foreground">Links profissionais</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/regaliainterno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    github.com/regaliainterno
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucas-nascimento28/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    linkedin.com/in/lucas-nascimento28
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6 lg:p-8"
            >
              <Accordion type="single" collapsible defaultValue="objective" className="w-full">
                <AccordionItem value="objective" className="border-border/60">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="icon-glass">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <span>Objetivo profissional</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Estou em transição para Desenvolvimento de Software, buscando unir experiência em
                    resolução de problemas técnicos e multimídia com conhecimentos em Python e Java.
                    Utilizo IA Generativa para otimizar a lógica de programação e busco oportunidades
                    como Desenvolvedor Júnior ou Estagiário Full Stack.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="education" className="border-border/60">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="icon-glass">
                        <GraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <span>Formação acadêmica</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="space-y-3">
                      <li>
                        Sistemas de Informação (Bacharelado) - UFN - Universidade Franciscana
                        <span className="block text-sm text-muted-foreground">
                          2018-02 a 2020-01 | Trancada
                        </span>
                      </li>
                      <li>
                        Administração (Bacharelado) - SOBRESP - Santa Maria
                        <span className="block text-sm text-muted-foreground">
                          2022-02 a 2024-08 | Trancada
                        </span>
                      </li>
                      <li>
                        Técnico em Manutenção de Equipamentos de Informática - KB TECH
                        <span className="block text-sm text-muted-foreground">
                          2022-11 a 2023-03
                        </span>
                      </li>
                      <li>
                        Técnico Eletrônico - BRED CAPAS
                        <span className="block text-sm text-muted-foreground">
                          2022-07 a 2022-10
                        </span>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience" className="border-border/60">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="icon-glass">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <span>Experiência profissional</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-5">
                      <div>
                        <p className="text-foreground font-medium">
                          Assistente de Marketing | FOIL LTDA (Restinga Seca, RS)
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">Julho de 2025 - Atual</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Auxílio na criação de campanhas alinhadas ao público-alvo.</li>
                          <li>Produção de conteúdo para mídias sociais e técnicas para aumento de tráfego.</li>
                          <li>Suporte em estratégias de SEO e envio de e-mail marketing segmentado.</li>
                          <li>Suporte na implementação de campanhas publicitárias e automação de marketing.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          Atendente de Lojas e Mercados | HELP SMART (Santa Maria)
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Atendimento ao cliente em geral.</li>
                          <li>Reparo de celulares.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          Técnico em Manutenção de Equipamentos de Informática | KB TECH (Santa Maria)
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">
                          Novembro de 2022 - Março de 2023
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Reparo de equipamentos eletrônicos (celulares e computadores).</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          Assistente de Mídias Sociais | BRASIL SERVIÇOS DE TECNOLOGIA LTDA (Santa Maria)
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">Julho de 2022 - Outubro de 2022</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Atendimento ao público (telefone e WhatsApp/Huggy).</li>
                          <li>Suporte de internet e configurações de roteadores.</li>
                          <li>Uso do ERP Voalle.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          Técnico Eletrônico | BRED CAPAS (Santa Maria)
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">
                          Fevereiro de 2022 - Outubro de 2022
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Reparo de celulares (tela, bateria, carcaça) e componentes.</li>
                          <li>Atendimento ao cliente.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">
                          Captador de Imóveis | ESTRUTURA IMOBILIÁRIA (Santa Maria)
                        </p>
                        <p className="text-xs text-muted-foreground">Cargo listado no histórico.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skills" className="border-border/60">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="icon-glass">
                        <Wrench className="w-4 h-4 text-primary" />
                      </div>
                      <span>Habilidades e competências</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <span className="text-foreground font-medium">Desenvolvimento:</span> Vibe Coding
                        (Python e bibliotecas), Visual Studio Code, PyCharm Community.
                      </li>
                      <li>
                        <span className="text-foreground font-medium">Design e edição:</span> Pacote Adobe
                        (Photoshop, Premiere Pro, Dreamweaver) e CorelDraw, com criação de artes.
                      </li>
                      <li>
                        <span className="text-foreground font-medium">Marketing Digital:</span> Gestão de
                        Mídias Sociais (tráfego pago e orgânico), modelagem de campanhas (TikTok, Instagram,
                        Google Ads, Facebook).
                      </li>
                      <li>
                        <span className="text-foreground font-medium">Informática e suporte:</span> Windows
                        em geral; Pacote Office (Word, Excel, PowerPoint); informática avançada (montagem,
                        manutenção, limpeza, instalação e formatação) e informática básica (operação e
                        diagnóstico inicial).
                      </li>
                      <li>
                        <span className="text-foreground font-medium">Outros:</span> Gestor ERP (Abille),
                        Dropshipping e proatividade para sugerir ideias de campanhas.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="languages" className="border-border/60">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="icon-glass">
                        <Languages className="w-4 h-4 text-primary" />
                      </div>
                      <span>Idiomas</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="space-y-2 text-sm">
                      <li>Espanhol: Básico (A2)</li>
                      <li>Inglês: Intermediário (B2)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
