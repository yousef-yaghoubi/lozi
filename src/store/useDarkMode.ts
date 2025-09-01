import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DarkModeStore {
  darkMode: boolean;
  toggleMode: () => void;
}

export const useDarkMode = create<DarkModeStore>()(
  persist(
    (set) => ({
      darkMode: false, // مقدار پیش‌فرض
      toggleMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "dark-mode", // کلید localStorage
    }
  )
);
