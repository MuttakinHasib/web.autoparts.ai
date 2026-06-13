import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IProduct } from "@/interfaces/product";

export interface CartItem {
  id: number;
  product: IProduct;
  quantity: number;
}

interface CartState {
  add: (product: IProduct, quantity?: number) => void;
  clear: () => void;
  items: CartItem[];
  remove: (id: number) => void;
  setQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (product, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { id: product.id, product, quantity }],
          };
        }),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      setQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "autoparts-cart", version: 1, skipHydration: true }
  )
);

export const selectCartCount = (state: CartState) =>
  state.items.reduce((sum, i) => sum + i.quantity, 0);

export const selectCartSubtotal = (state: CartState) =>
  state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
