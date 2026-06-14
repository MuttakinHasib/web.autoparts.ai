import { cva, type VariantProps } from "class-variance-authority";
import { Check, CircleHelp, Clock, X } from "lucide-react";
import type { ComponentType } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex h-6 items-center gap-1.5 rounded-sm px-2 font-medium text-xs",
  {
    variants: {
      type: {
        success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
        failure: "bg-destructive/15 text-destructive",
        warning: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
        unknown: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      type: "unknown",
    },
  }
);

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  success: Check,
  failure: X,
  warning: Clock,
  unknown: CircleHelp,
};

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  className?: string;
  /** Render the status icon. */
  showIcon?: boolean;
  /** Visible label. Omit for an icon-only badge. */
  text?: string;
  /** Tooltip text — falls back to `text` when omitted. */
  tooltip?: string;
}

/**
 * Stock / compatibility status indicator ported from the legacy `StatusBadge`.
 * Supports icon-only, text-only, or icon+text, with an optional tooltip.
 */
export function StatusBadge({
  type = "unknown",
  text,
  tooltip,
  showIcon = true,
  className,
}: StatusBadgeProps) {
  const Icon = ICONS[type ?? "unknown"];
  const label = tooltip ?? text;
  const classes = cn(statusBadgeVariants({ type }), className);

  const badge = text ? (
    <span className={classes}>
      {showIcon ? <Icon className="size-3.5" /> : null}
      <span>{text}</span>
    </span>
  ) : (
    <span aria-label={label} className={classes} role="img">
      <Icon className="size-3.5" />
    </span>
  );

  if (!label) {
    return badge;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
