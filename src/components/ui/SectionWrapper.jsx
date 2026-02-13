import ScrollReveal from "./ScrollReveal";

export default function SectionWrapper({
  id,
  children,
  className = "",
  fullWidth = false,
}) {
  return (
    <section id={id} className={`px-6 py-24 md:py-32 ${className}`}>
      <div className={fullWidth ? "" : "mx-auto max-w-5xl"}>
        <ScrollReveal>{children}</ScrollReveal>
      </div>
    </section>
  );
}
