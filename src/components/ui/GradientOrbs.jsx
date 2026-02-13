export default function GradientOrbs({ variant = "default" }) {
  if (variant === "right") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slower absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-accent/[0.04] blur-[100px]" />
        <div className="animate-float-slow absolute -left-20 bottom-1/4 h-60 w-60 rounded-full bg-accent/[0.03] blur-[80px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute -top-20 -left-32 h-72 w-72 rounded-full bg-accent/[0.04] blur-[100px]" />
      <div className="animate-float-slower absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-accent/[0.03] blur-[80px]" />
    </div>
  );
}
