import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Sun, Moon } from "lucide-react";

const accents = [
  { name: "Blue", color: "#3B82F6" },
  { name: "Purple", color: "#8B5CF6" },
  { name: "Emerald", color: "#10B981" },
  { name: "Red", color: "#DC2626" },
];

const themes = {
  dark: {
    "--color-bg": "#0A0A0A",
    "--color-bg-secondary": "#111111",
    "--color-bg-tertiary": "#1A1A1A",
    "--color-text-primary": "#FAFAFA",
    "--color-text-secondary": "#A1A1AA",
    "--color-text-muted": "#71717A",
    "--color-border": "#1E1E1E",
    "--color-border-light": "#2A2A2A",
    "--color-glass": "rgba(255, 255, 255, 0.03)",
    "--color-glass-border": "rgba(255, 255, 255, 0.06)",
  },
  light: {
    "--color-bg": "#FAFAFA",
    "--color-bg-secondary": "#F4F4F5",
    "--color-bg-tertiary": "#E4E4E7",
    "--color-text-primary": "#09090B",
    "--color-text-secondary": "#52525B",
    "--color-text-muted": "#A1A1AA",
    "--color-border": "#E4E4E7",
    "--color-border-light": "#D4D4D8",
    "--color-glass": "rgba(0, 0, 0, 0.02)",
    "--color-glass-border": "rgba(0, 0, 0, 0.06)",
  },
};

export default function AccentToggle() {
  const [accentIndex, setAccentIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [open, setOpen] = useState(false);

  const applyTheme = useCallback((dark) => {
    const vars = dark ? themes.dark : themes.light;
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  const applyAccent = useCallback((index) => {
    document.documentElement.style.setProperty(
      "--color-accent",
      accents[index].color
    );
  }, []);

  useEffect(() => {
    applyTheme(isDark);
    applyAccent(accentIndex);
  }, [isDark, accentIndex, applyTheme, applyAccent]);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-2">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-border-light bg-bg-secondary p-3 shadow-lg"
          >
            {/* Theme toggle */}
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-text-muted">Theme</span>
              <button
                data-cursor="pointer"
                onClick={() => setIsDark(!isDark)}
                className="flex h-8 items-center gap-1.5 rounded-full border border-border-light px-3 text-text-secondary transition-colors hover:text-text-primary"
              >
                {isDark ? <Moon size={13} /> : <Sun size={13} />}
                <span className="text-xs font-medium">
                  {isDark ? "Dark" : "Light"}
                </span>
              </button>
            </div>

            {/* Accent colors */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-text-muted">Color</span>
              <div className="flex gap-1.5">
                {accents.map((accent, i) => (
                  <button
                    key={accent.name}
                    data-cursor="pointer"
                    onClick={() => setAccentIndex(i)}
                    title={accent.name}
                    className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${
                      accentIndex === i
                        ? "border-text-primary scale-110"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: accent.color }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        data-cursor="pointer"
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-bg-secondary text-text-muted shadow-lg transition-colors hover:border-accent hover:text-accent"
        aria-label="Theme settings"
      >
        <Palette size={16} />
      </motion.button>
    </div>
  );
}
