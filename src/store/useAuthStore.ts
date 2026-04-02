import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  user: { name: string } | null;
  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: (name: string) => set({ isLoggedIn: true, user: { name } }),
      logout: () => set({ isLoggedIn: false, user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
