import { create } from "zustand";
import { useCartStore } from "./cart.store";
import { useCompareStore } from "./compare.store";
import { useWishlistStore } from "./wishlist.store";

interface HydrationState {
  hydrated: boolean;
  setHydrated: () => void;
}

export const useHydrationStore = create<HydrationState>((set) => ({
  hydrated: false,
  setHydrated: () => set({ hydrated: true }),
}));

/** Rehydrate every persisted store from localStorage (client only). */
export function rehydrateStores() {
  useCartStore.persist.rehydrate();
  useCompareStore.persist.rehydrate();
  useWishlistStore.persist.rehydrate();
}

/**
 * Whether persisted stores have rehydrated. Gate any UI that reads persisted
 * state (cart/wishlist/compare counts) behind this to avoid SSR hydration
 * mismatches — render server-neutral defaults until it flips true.
 */
export const useHydrated = () => useHydrationStore((s) => s.hydrated);
