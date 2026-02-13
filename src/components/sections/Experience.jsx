import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import GradientOrbs from "../ui/GradientOrbs";
import { experience } from "../../data/experience";

function ExperienceCard({ entry, index, scrollYProgress }) {
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    [30 + index * 15, -(30 + index * 15)]
  );

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div className="group relative" style={{ y: cardY }}>
        {/* Timeline connector */}
        {index < experience.length - 1 && (
          <div className="absolute top-14 left-6 bottom-0 hidden w-px bg-gradient-to-b from-accent/40 to-border-light md:block" />
        )}

        <div className="flex gap-6">
          {/* Timeline dot — desktop only */}
          <div className="hidden pt-1 md:block">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-light bg-bg-secondary transition-colors group-hover:border-accent/30 group-hover:bg-accent/5"
            >
              <Briefcase size={18} className="text-accent" />
              {entry.current && (
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-bg bg-accent">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                </span>
              )}
            </motion.div>
          </div>

          {/* Card */}
          <div className="flex-1 rounded-2xl border border-border-light bg-bg-secondary p-6 transition-all duration-300 group-hover:border-accent/20 group-hover:bg-bg-secondary/80 md:p-7">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    {entry.company}
                  </h3>
                  {entry.current && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-accent uppercase">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-base font-medium text-accent">
                  {entry.role}
                </p>
              </div>
            </div>

            {/* Meta */}
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {entry.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} />
                {entry.location}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {entry.description}
            </p>

            {/* Highlights */}
            {entry.highlights && (
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.08 + 0.3 }}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Tech tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {entry.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-light bg-bg-tertiary px-2.5 py-1 text-xs font-medium text-text-muted transition-colors group-hover:border-accent/20 group-hover:text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <GradientOrbs variant="right" />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far."
        />

        <div className="space-y-8">
          {experience.map((entry, i) => (
            <ExperienceCard
              key={entry.id}
              entry={entry}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
