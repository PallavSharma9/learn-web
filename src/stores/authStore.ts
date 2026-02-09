import { defineStore } from "pinia";
import * as authService from "@/services/authServices";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | Record<string, any>,
    loading: true,
    loggingOut: false,
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
      if (this.loggingOut) return;

      try {
        this.loggingOut = true;

        await authService.logout();

        this.user = null;
      } finally {
        this.loggingOut = false;
      }

      await authService.logout();

      this.user = null;
    },
  },
});
