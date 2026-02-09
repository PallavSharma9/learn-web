import { defineStore } from "pinia";
import * as authService from "@/services/authServices";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as any,
    loading: true,
  }),

  actions: {
    async checkUser() {
      try {
        this.user = await authService.getCurrentUser();
      } finally {
        this.loading = false;
      }
    },

    async signup(email: string, password: string, name: string) {
      await authService.signup(email, password, name);

      // auto login
      await this.login(email, password);
    },

    async login(email: string, password: string) {
      await authService.login(email, password);

      this.user = await authService.getCurrentUser();
    },

    async logout() {
      await authService.logout();

      this.user = null;
    },
  },
});
