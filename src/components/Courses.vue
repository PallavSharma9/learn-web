<script lang="ts" setup>
import { courses } from "@/data/courses";
import { useCourseStore } from "@/stores/courseStore";
import { getImageUrl } from "@/services/imageServices";
import { onMounted } from "vue";

const courseStore = useCourseStore();

onMounted(() => {
  courseStore.fetchCourses();
});
</script>

<template>
  <div class="py-20 bg-black px-4 lg:px-20">
    <h1
      class="text-white text-center font-semibold text-3xl mb-12 md:text-4xl lg:text-5xl"
    >
      Featured Cohorts
    </h1>
    <div class="flex flex-column md:flex-row justify-center gap-4 flex-wrap">
      <!-- course card  -->
      <div
        v-for="course in courseStore.courses"
        :key="course.id"
        class="container p-4 bg-white rounded-2xl max-w-100"
      >
        <img class="rounded-xl" :src="getImageUrl(course.thumbnailId)" alt="" />
        <h3 class="mt-4 mb-8 text-2xl font-medium">
          {{ course.title }}
        </h3>
        <p class="text-zinc-600 mb-6">
          {{ course.description }}
        </p>
        <div class="flex justify-between mb-10">
          <h2 class="text-3xl font-bold">
            $139 <span class="text-zinc-400">${{ course.price }} </span>
          </h2>
          <div class="rounded-full bg-green-100 text-green-600 px-3 py-2">
            {{ course.discount }}% off
          </div>
        </div>
        <RouterLink
          :to="`/courses/${course.id}`"
          class="block text-center py-2 bg-black text-white font-medium rounded-xl"
          >View Details</RouterLink
        >
      </div>
    </div>
  </div>
</template>
