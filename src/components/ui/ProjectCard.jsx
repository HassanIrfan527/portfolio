import { motion } from "motion/react";
import { ExternalLink, Github, Play } from "lucide-react";

const gridClasses = {
  large: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  medium: "lg:row-span-2",
  small: "",
};

export default function ProjectCard({ project, index }) {
  const isLarge = project.gridSize === "large";
  const isSmall = project.gridSize === "small";
  const spanClass = gridClasses[project.gridSize] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-glass-border bg-glass backdrop-blur-sm transition-all duration-500 hover:border-accent/20 hover:bg-bg-secondary ${spanClass}`}
    >
      {/* Preview Image (if available) */}
      {project.preview && (
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      <div className={`flex h-full flex-col ${isSmall ? "p-5 md:p-6" : "p-6 md:p-8"}`}>
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-medium tracking-wider text-accent uppercase">
              {project.role}
            </span>
            <h3
              className={`mt-2 font-bold text-text-primary ${
                isSmall ? "text-xl" : "text-2xl md:text-3xl"
              }`}
            >
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="rounded-full border border-border-light p-2 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <Github size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="rounded-full border border-border-light p-2 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.loomUrl && (
              <a
                href={project.loomUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="rounded-full border border-border-light p-2 text-text-muted transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                <Play size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className={`mt-3 text-text-secondary ${isSmall ? "text-sm" : ""}`}>
          {project.tagline}
        </p>

        {/* Description — shown for medium cards */}
        {project.description && !isLarge && !isSmall && (
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {project.description}
          </p>
        )}

        {/* Features — shown for medium cards as list, hover-reveal for large */}
        {isLarge && project.features && (
          <div className="mt-6 grid max-h-0 gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-60 group-hover:opacity-100 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-text-muted"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </div>
            ))}
          </div>
        )}

        {!isLarge && !isSmall && project.features && (
          <div className="mt-4 space-y-1.5">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-text-muted"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* Loom demo CTA for cards with video but no preview image */}
        {project.loomUrl && !project.preview && (
          <a
            href={project.loomUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-4 py-2 text-xs font-medium text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
          >
            <Play size={14} fill="currentColor" />
            Watch Demo
          </a>
        )}

        {/* Spacer */}
        <div className="mt-auto" />

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-bg-tertiary px-3 py-1 text-xs font-medium text-text-muted transition-colors group-hover:text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      </div>
    </motion.div>
  );
}
