import { ArrowUpRight } from "lucide-react";

export const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeY0Yb8NnTGTf2DysltCH1tX4smp_QV4CrhpIvXPFIvXbkSiw/viewform";

export function CtaButton({
  children,
  size = "lg",
  variant = "brand",
  className = "",
}: {
  children: React.ReactNode;
  size?: "sm" | "lg";
  variant?: "brand" | "dark";
  className?: string;
}) {
  const sizes =
    size === "sm" ? "h-10 px-4 text-xs gap-1.5" : "h-14 px-7 text-sm gap-2";
  const variants =
    variant === "brand"
      ? "bg-brand text-ink hover:bg-brand-2 shadow-[0_8px_30px_-8px_rgba(253,99,3,0.6)]"
      : "bg-ink text-cream hover:bg-ink-3";

  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex shrink-0 items-center rounded-full font-bold tracking-wide uppercase transition-[background-color,transform] duration-200 active:scale-[0.97] ${sizes} ${variants} ${className}`}
    >
      {children}
      <ArrowUpRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </a>
  );
}
