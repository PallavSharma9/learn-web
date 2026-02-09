import { defineStore } from "pinia";
import * as courseService from "@/services/courseService";

export const useCourseStore = defineStore("course", {
  state: () => ({
    courses: [] as any[],
    loading: false,
  }),

  actions: {
    async fetchCourses() {
      try {
        this.loading = true;
        this.courses = await courseService.getCourses();
      } finally {
        this.loading = false;
      }
    },
  },
});
