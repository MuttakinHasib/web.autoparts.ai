import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProduct } from "@/interfaces/product";

interface CompareState {
  clear: () => void;
  has: (id: number) => boolean;
  items: IProduct[];
  remove: (id: number) => void;
  toggle: (product: IProduct) => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (product) =>
        set((state) =>
          state.items.some((p) => p.id === product.id)
            ? { items: state.items.filter((p) => p.id !== product.id) }
            : { items: [...state.items, product] }
        ),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((p) => p.id !== id) })),
      has: (id) => get().items.some((p) => p.id === id),
      clear: () => set({ items: [] }),
    }),
    { name: "autoparts-compare", version: 1, skipHydration: true }
  )
);
