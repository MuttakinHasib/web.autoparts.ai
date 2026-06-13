import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tagBadgeVariants = cva(
  "inline-flex h-5 items-center rounded-sm px-1.5 font-medium text-[11px] text-white uppercase leading-none tracking-wide",
  {
    variants: {
      variant: {
        theme: "bg-primary",
        sale: "bg-primary",
        new: "bg-blue-500",
        hot: "bg-violet-600",
      },
    },
    defaultVariants: {
      variant: "theme",
    },
  }
);

interface TagBadgeProps extends VariantProps<typeof tagBadgeVariants> {
  children: ReactNode;
  className?: string;
}

/**
 * Product tag pill ported from the legacy `.tag-badge` (theme / sale / new / hot).
 */
export function TagBadge({ variant, children, className }: TagBadgeProps) {
  return (
    <span className={cn(tagBadgeVariants({ variant }), className)}>
      {children}
    </span>
  );
}
