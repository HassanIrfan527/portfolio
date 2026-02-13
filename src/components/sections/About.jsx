import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import ScrollReveal from "../ui/ScrollReveal";
import GradientOrbs from "../ui/GradientOrbs";

const stats = [
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    detail: "Building SaaS products and automated workflows since 2024",
  },
  {
    value: null,
    display: "SaaS",
    label: "Specialist",
    detail: "Full-stack development across Python, PHP, and JavaScript ecosystems",
  },
  {
    value: 10,
    suffix: "+",
    label: "Integrations Built",
    detail: "REST APIs, third-party platforms, and automated customer workflows",
  },
];

function CountUp({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bioY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const statsY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <GradientOrbs />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="About"
          subtitle="A little about who I am and what I do."
        />

        <div className="grid gap-16 md:grid-cols-5">
          {/* Bio */}
          <motion.div className="md:col-span-3" style={{ y: bioY }}>
            <ScrollReveal>
              <p className="text-lg leading-relaxed text-text-secondary">
                I'm a{" "}
                <span className="font-medium text-accent">
                  Full-Stack Web Developer
                </span>{" "}
                with 2+ years of hands-on experience in the SaaS industry. I
                specialize in{" "}
                <span className="text-text-primary font-medium">
                  Python, JavaScript, and PHP
                </span>{" "}
                — building everything from real-time AI features to complex
                business automation systems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                I transitioned from a high-volume support role into software
                development and system integrations — driven by curiosity and a
                bias for building. Today I work on{" "}
                <span className="text-text-primary font-medium">
                  AI-powered SaaS platforms
                </span>
                , connecting third-party systems, designing automated workflows,
                and shipping features that make products better for real users.
              </p>
            </ScrollReveal>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex flex-col gap-6 md:col-span-2" style={{ y: statsY }}>
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 * i} direction="right">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="group rounded-xl border border-border-light bg-bg-secondary p-5 transition-colors hover:border-accent/30"
                >
                  <div className="text-3xl font-bold text-accent">
                    {stat.value !== null ? (
                      <CountUp target={stat.value} suffix={stat.suffix || ""} />
                    ) : (
                      stat.display
                    )}
                  </div>
                  <div className="mt-1 text-sm font-medium text-text-primary">
                    {stat.label}
                  </div>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-text-muted opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                    {stat.detail}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
