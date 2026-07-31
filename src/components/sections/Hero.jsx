import { Suspense, lazy, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import { ChevronDown, Download } from "lucide-react";
import { useInViewport } from "../../hooks/useInViewport";

const ParticleField = lazy(() => import("../canvas/ParticleField"));

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function AnimatedName({ text }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const mouseRef = useRef({ x: 0, y: 0 });
  const [sectionRef, isVisible] = useInViewport({
    rootMargin: "400px 0px 200px 0px",
  });

  const handleMouseMove = (e) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    };
  };

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background — lazy mounted/unmounted based on viewport */}
      <div className="absolute inset-0">
        {isVisible && (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: false,
              alpha: true,
              powerPreference: "default",
              failIfMajorPerformanceCaveat: false,
            }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <ParticleField mouse={mouseRef} />
            </Suspense>
          </Canvas>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-sm font-medium tracking-widest text-accent uppercase"
        >
          Full-Stack Web Developer
        </motion.p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl">
          <AnimatedName text="Syed Hassan" />
          <br />
          <AnimatedName text="Irfan" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-lg text-base text-text-secondary md:text-lg"
        >
          Building scalable SaaS products with clean code and thoughtful design.
        </motion.p>

        {/* Available for work badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-5 flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-text-muted">
            Available for freelance work
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            onClick={() => scrollTo("#projects")}
            data-cursor="pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => scrollTo("#contact")}
            data-cursor="pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rounded-full border border-border-light px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          >
            Get In Touch
          </motion.button>
          <motion.a
            href="/Resume.pdf"
            download
            data-cursor="pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 rounded-full border border-border-light px-5 py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          >
            <Download size={14} />
            CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
