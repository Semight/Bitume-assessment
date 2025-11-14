import { create } from "zustand";

interface CategoryState {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: "All",
  setActiveCategory: (cat) => set({ activeCategory: cat }),
}));
