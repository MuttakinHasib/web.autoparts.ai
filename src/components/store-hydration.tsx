"use client";

import { useEffect } from "react";
import { rehydrateStores, useHydrationStore } from "@/store/hydration";

/**
 * Rehydrates persisted Zustand stores on mount. Stores use `skipHydration` so
 * the server render and first client render match; this flips the gate once
 * localStorage is read. Renders nothing.
 */
export function StoreHydration() {
  useEffect(() => {
    rehydrateStores();
    useHydrationStore.getState().setHydrated();
  }, []);

  return null;
}
