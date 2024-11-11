// store/auth-store.ts
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  login: async (values) => {
    // API call here
    const user = await loginUser(values);
    set({ user });
  },
  logout: () => set({ user }),
}));
