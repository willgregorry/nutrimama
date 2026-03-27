import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  user: { name: string } | null;
  login: (name: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  isLoggedIn: true,
  user: { name: "Willy" },
  login: (name: string) => set({ isLoggedIn: true, user: { name } }),
  logout: () => set({ isLoggedIn: false, user: null }),
}));
