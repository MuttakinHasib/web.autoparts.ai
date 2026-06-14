import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProduct } from "@/interfaces/product";

interface WishlistState {
  add: (product: IProduct) => void;
  clear: () => void;
  has: (id: number) => boolean;
  items: IProduct[];
  remove: (id: number) => void;
  toggle: (product: IProduct) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product) =>
        set((state) =>
          state.items.some((p) => p.id === product.id)
            ? state
            : { items: [...state.items, product] }
        ),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((p) => p.id !== id) })),
      toggle: (product) =>
        set((state) =>
          state.items.some((p) => p.id === product.id)
            ? { items: state.items.filter((p) => p.id !== product.id) }
            : { items: [...state.items, product] }
        ),
      has: (id) => get().items.some((p) => p.id === id),
      clear: () => set({ items: [] }),
    }),
    { name: "autoparts-wishlist", version: 1, skipHydration: true }
  )
);
