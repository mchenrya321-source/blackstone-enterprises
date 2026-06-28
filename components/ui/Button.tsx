import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "large";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand-orange text-black hover:bg-brand-orange-light shadow-premium-orange",
  secondary: "bg-white text-black hover:bg-white/90",
  outline:
    "border border-white/30 text-white hover:border-brand-orange hover:text-brand-orange",
  ghost: "text-white/70 hover:text-brand-orange",
};

const sizes = {
  default: "px-7 py-3 text-sm font-bold uppercase tracking-widest",
  large: "px-9 py-4 text-base font-bold uppercase tracking-widest sm:text-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  external,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
