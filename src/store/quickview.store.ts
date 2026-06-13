import { create } from "zustand";
import type { IProduct } from "@/interfaces/product";

interface QuickviewState {
  close: () => void;
  open: (product: IProduct) => void;
  product: IProduct | null;
}

export const useQuickviewStore = create<QuickviewState>((set) => ({
  product: null,
  open: (product) => set({ product }),
  close: () => set({ product: null }),
}));
