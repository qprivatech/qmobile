import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "card";
  id?: string;
  /**
   * Optional className applied to inner content wrapper.
   * Useful for passing titleColors[] cyclic accent pattern to children
   * without breaking the existing Section API.
   */
  contentClassName?: string;
}

export function Section({
  children,
  className,
  variant = "default",
  id,
  contentClassName,
}: SectionProps) {
  const bgMap = {
    default: "bg-background",
    muted: "bg-muted/30",
    card: "bg-card",
  };

  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20", bgMap[variant], className)}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
