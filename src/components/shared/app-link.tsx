import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

/**
 * Locale-aware link. Wraps next-intl's `Link`, which prefixes the active
 * locale automatically — the App Router equivalent of the legacy `AppLink`.
 */
export function AppLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
