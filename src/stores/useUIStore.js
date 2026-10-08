import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUIStore = create(
  persist(
    (set, get) => ({
      // State
      theme: "auto",
      isPanelOpen: false,
      title: "Color App",
      view: "home",
      page: {
        book: "docs",
        lab: "analyze",
      },

      // Actions
      setTheme: (theme) => set({ theme }),
      setTitle: (title) => set({ title }),
      setView: (view) => set({ view }),
      setPage: (updates) => 
        set((state) => ({
          page: { ...state.page, ...updates }
        })),
      openPanel: () => set({ isPanelOpen: true }),
      closePanel: () => set({ isPanelOpen: false }),
    }),
    {
      name: "color-app-storage",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);