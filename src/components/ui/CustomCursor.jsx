import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "motion/react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cursorRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    // Lerp at 0.45 — snappy but still slightly soft
    posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.45;
    posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.45;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable =
        target.closest("[data-cursor='pointer']") ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";

      setIsPointer(!!clickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, animate]);

  if (isTouch) return null;

  const size = isPointer ? 40 : 16;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="rounded-full border border-accent mix-blend-difference"
        animate={{
          width: size,
          height: size,
          x: -size / 2,
          y: -size / 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          x: { duration: 0.2 },
          y: { duration: 0.2 },
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  );
}
