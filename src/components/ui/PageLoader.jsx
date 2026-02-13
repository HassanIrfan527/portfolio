import { motion } from "motion/react";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onAnimationComplete={(definition) => {
        if (definition.opacity === 0) {
          document.getElementById("page-loader")?.remove();
        }
      }}
      id="page-loader"
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-bg"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-lg font-semibold tracking-tight text-text-primary"
      >
        Hassan<span className="text-accent">.</span>
      </motion.div>
    </motion.div>
  );
}
