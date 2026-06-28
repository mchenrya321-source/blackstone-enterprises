import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-brand-orange sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl",
          light ? "text-white" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-white/60 sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
