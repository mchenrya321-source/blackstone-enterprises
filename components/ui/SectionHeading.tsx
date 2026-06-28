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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-orange md:mb-4 md:text-sm">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold uppercase leading-[0.92] tracking-tight md:text-5xl lg:text-6xl",
          light ? "text-white" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-white/60 md:mt-5 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
