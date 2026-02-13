import { motion } from "motion/react";
import { Github, Linkedin, Mail, MessageCircle, Briefcase, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import { socials } from "../../data/socials";

const iconMap = { Github, Linkedin, Mail, MessageCircle, Briefcase };

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      data-cursor="pointer"
      className="rounded-md p-1.5 text-text-muted opacity-0 transition-all duration-200 hover:bg-accent/10 hover:text-accent group-hover:opacity-100"
      title="Copy"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project idea, want to collaborate, or just say hello? Reach out through any of these platforms."
        />

        {/* Social Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {socials.map((social, i) => {
            const Icon = iconMap[social.icon];
            const isFeatured = social.featured;
            return (
              <ScrollReveal
                key={social.name}
                delay={i * 0.08}
                className={isFeatured ? "sm:col-span-2" : ""}
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`group flex items-start gap-4 rounded-xl border border-border-light bg-bg-secondary transition-all duration-300 hover:border-accent/30 hover:bg-bg-tertiary ${
                    isFeatured ? "p-6 sm:p-7 md:p-8" : "p-5 md:p-6"
                  }`}
                >
                  <div
                    className={`flex shrink-0 items-center justify-center bg-bg-tertiary text-text-muted transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent ${
                      isFeatured
                        ? "h-14 w-14 rounded-xl"
                        : "h-10 w-10 rounded-lg"
                    }`}
                  >
                    {Icon && <Icon size={isFeatured ? 26 : 20} />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-semibold text-text-primary ${
                          isFeatured ? "text-lg" : "text-sm"
                        }`}
                      >
                        {social.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <CopyButton text={social.handle} />
                        <ArrowUpRight
                          size={isFeatured ? 18 : 14}
                          className="text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        />
                      </div>
                    </div>
                    <p
                      className={`mt-0.5 truncate text-accent/70 ${
                        isFeatured ? "text-sm" : "text-xs"
                      }`}
                    >
                      {social.handle}
                    </p>
                    <p
                      className={`mt-1.5 leading-relaxed text-text-muted ${
                        isFeatured ? "text-sm" : "text-xs"
                      }`}
                    >
                      {social.description}
                    </p>
                  </div>
                </motion.a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted">
              Prefer email?{" "}
              <a
                href="mailto:syedhassan.ig@gmail.com"
                data-cursor="pointer"
                className="font-medium text-accent transition-opacity hover:opacity-80"
              >
                syedhassan.ig@gmail.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
