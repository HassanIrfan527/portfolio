import { motion } from "motion/react";
import {
  Code2, FileCode, Palette, Globe, Terminal, Zap, Server, Workflow,
  Database, GitBranch, MonitorDot, Radio, Mountain, Cpu, Container,
  Plug, Bot, Sparkles, Figma, KanbanSquare, FileText,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { skillCategories } from "../../data/skills";

const iconMap = {
  Code2, FileCode, Palette, Globe, Terminal, Zap, Server, Workflow,
  Database, GitBranch, MonitorDot, Radio, Mountain, Cpu, Container,
  Plug, Bot, Sparkles, Figma, KanbanSquare, FileText,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with daily."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <div className="rounded-2xl border border-border-light bg-bg-secondary p-5">
                <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-widest text-accent uppercase">
                  <span className="h-px flex-1 bg-accent/20" />
                  {category.title}
                  <span className="h-px flex-1 bg-accent/20" />
                </h3>

                <div className="space-y-2">
                  {category.skills.map((skill, i) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          delay: catIndex * 0.08 + i * 0.05,
                          duration: 0.35,
                        }}
                        whileHover={{
                          x: 4,
                          transition: { duration: 0.15 },
                        }}
                        className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-bg-tertiary"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-bg-tertiary text-text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                          {Icon && <Icon size={14} />}
                        </div>
                        <span className="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
