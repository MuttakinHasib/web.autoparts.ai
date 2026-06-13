import { Star } from "lucide-react";
import { clamp } from "@/lib/format";
import { cn } from "@/lib/utils";

interface RatingProps {
  className?: string;
  /** Optional review count rendered next to the stars. */
  count?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  /** Rating value from 0 to `max`. Fractional values render partial stars. */
  value: number;
}

const SIZE_CLASS = {
  sm: "size-3.5",
  md: "size-4",
  lg: "size-5",
} as const;

/**
 * Read-only star rating with fractional fill, ported from the legacy `Rating`.
 * Outline stars sit underneath a width-clipped layer of filled stars.
 */
export function Rating({
  value,
  max = 5,
  count,
  size = "md",
  className,
}: RatingProps) {
  const safeValue = clamp(value, 0, max);
  const fillPercent = (safeValue / max) * 100;
  const starClass = SIZE_CLASS[size];
  const stars = Array.from({ length: max }, (_, i) => i);

  return (
    <span
      aria-label={`Rated ${safeValue} out of ${max}`}
      className={cn("inline-flex items-center gap-2", className)}
      role="img"
    >
      <span className="relative inline-flex">
        <span className="inline-flex text-muted-foreground/40">
          {stars.map((i) => (
            <Star className={starClass} key={`bg-${i}`} />
          ))}
        </span>
        <span
          className="absolute inset-0 inline-flex overflow-hidden text-accent-brand"
          style={{ width: `${fillPercent}%` }}
        >
          {stars.map((i) => (
            <Star className={cn(starClass, "fill-current")} key={`fg-${i}`} />
          ))}
        </span>
      </span>
      {count == null ? null : (
        <span className="text-muted-foreground text-sm">({count})</span>
      )}
    </span>
  );
}
