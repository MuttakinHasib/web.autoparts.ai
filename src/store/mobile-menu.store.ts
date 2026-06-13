import { create } from "zustand";

interface MobileMenuState {
  close: () => void;
  isOpen: boolean;
  open: () => void;
  toggle: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
