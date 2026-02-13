import { motion } from "motion/react";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Briefcase } from "lucide-react";
import { socials } from "../../data/socials";

const iconMap = { Github, Linkedin, Mail, MessageCircle, Briefcase };

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-light px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Left — credit */}
        <p className="text-sm text-text-muted">
          Designed & Built by{" "}
          <span className="text-text-secondary">Syed Hassan Irfan</span>
        </p>

        {/* Center — social icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="text-text-muted transition-colors hover:text-accent"
                aria-label={social.name}
              >
                {Icon && <Icon size={18} />}
              </motion.a>
            );
          })}
        </div>

        {/* Right — back to top */}
        <motion.button
          onClick={scrollToTop}
          data-cursor="pointer"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp size={14} />
        </motion.button>
      </div>

      <div className="mx-auto mt-8 max-w-5xl text-center text-xs text-text-muted/50">
        &copy; {new Date().getFullYear()} Syed Hassan Irfan. All rights reserved.
      </div>
    </footer>
  );
}
