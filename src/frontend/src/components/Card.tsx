import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dataOcid?: string;
  /**
   * Optional className for the card title element.
   * Use with titleColors[] cyclic accent pattern for dark-mode readability.
   */
  titleClassName?: string;
  /**
   * Optional className for the card description/body text.
   * Defaults to text-foreground (NOT text-muted-foreground) per dark-mode readability rule.
   */
  descriptionClassName?: string;
}

export function Card({
  children,
  className,
  hover = false,
  dataOcid,
  titleClassName,
  descriptionClassName,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-subtle",
        hover && "transition-smooth hover:shadow-elevated hover:-translate-y-1",
        className,
      )}
      data-ocid={dataOcid}
      data-title-class={titleClassName}
      data-description-class={descriptionClassName}
    >
      {children}
    </div>
  );
}
