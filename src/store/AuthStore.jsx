import { create } from "zustand";
import { supabase } from "../index";

export const useAuthStore = create((set) => ({
  isAuth: false,
  signWithGoogle: async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) throw Error("Error al iniciar sesión con Google");
      set({ isAuth: true });
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw Error("Error al cerrar sesión");
    set({ isAuth: false });
  },
}));
