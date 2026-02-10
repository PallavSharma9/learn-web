<script lang="ts" setup>
import { getCourseById } from "@/services/courseService";
import { getImageUrl } from "@/services/imageServices";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();

const course = ref<any>(null);
const loading = ref(true);
const agreed = ref(false);

onMounted(async () => {
  try {
    const courseId = route.params.id as string;

    const courseData = await getCourseById(courseId);

    course.value = courseData;
  } catch (err) {
    console.error("Failed to fetch course", err);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div
    v-if="!loading && course"
    class="min-h-screen bg-zinc-100 flex justify-center items-center px-6 py-16"
  >
    <div class="max-w-6xl w-full grid lg:grid-cols-2 gap-10">
      <!-- LEFT — Course -->
      <div class="bg-white rounded-2xl p-6 shadow">
        <img class="rounded-xl mb-6" :src="getImageUrl(course.thumbnailId)" />

        <h2 class="text-3xl font-semibold mb-2">
          {{ course.title }}
        </h2>

        <p class="text-zinc-600">Lifetime access • Beginner to Advanced</p>
      </div>

      <!-- RIGHT — Payment -->
      <div class="bg-white rounded-2xl p-8 shadow">
        <h2 class="text-2xl font-semibold mb-6">Purchase Details</h2>

        <!-- PRICE -->
        <div class="flex justify-between mb-3">
          <span>Price</span>
          <span class="font-semibold">${{ course.price }}</span>
        </div>

        <div class="flex justify-between mb-6">
          <span>Discount</span>
          <span class="text-green-600"> {{ course.discount }}% OFF </span>
        </div>

        <div class="border-t pt-4 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${{ course.price }}</span>
        </div>

        <!-- TERMS -->
        <div class="flex items-center gap-3 mt-8">
          <input
            type="checkbox"
            v-model="agreed"
            class="w-5 h-5 accent-black"
          />

          <span class="text-sm"> I agree to Terms & Conditions </span>
        </div>

        <!-- BUTTON -->
        <button
          :disabled="!agreed"
          class="mt-6 w-full py-3 rounded-xl text-white transition"
          :class="
            agreed
              ? 'bg-black hover:bg-zinc-800'
              : 'bg-zinc-400 cursor-not-allowed'
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
