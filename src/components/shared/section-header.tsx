import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Optional trailing content (links, arrows, a "view all" action). */
  aside?: ReactNode;
  className?: string;
  title: ReactNode;
}

/**
 * Section title with a brand underline accent and an optional trailing slot —
 * the App Router equivalent of the legacy `SectionHeader` / block headers.
 */
export function SectionHeader({ title, aside, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4 border-border border-b pb-3",
        className
      )}
    >
      <h2 className="relative pb-2 font-bold text-2xl tracking-tight after:absolute after:start-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-primary after:content-['']">
        {title}
      </h2>
      {aside ? <div className="flex items-center gap-3">{aside}</div> : null}
    </div>
  );
}
