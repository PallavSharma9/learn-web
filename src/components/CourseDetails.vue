<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { courses } from "@/data/courses";

const route = useRoute();

const course = computed(() =>
  courses.find((c) => c.id === Number(route.params.id)),
);
</script>

<template>
  <section>
    <div
      class="px-6 py-10 lg:px-24 bg-pink-100 flex flex-col lg:flex-row gap-12 lg:gap-24"
    >
      <div class="container flex flex-col gap-2 bg-black rounded-2xl lg:w-1/3">
        <img class="rounded-t-2xl" src="../images/course-image.png" alt="" />
        <div class="flex items-center gap-2 pl-4 pb-2">
          <img
            class="w-12 h-12 rounded-full border-2 border-white"
            src="../images//heroImage.png"
            alt=""
          />
          <div class="flex flex-col">
            <span class="font-semibold text-white">Pallav Sharma</span>
            <span class="text-sm text-white/80"
              >Senior Engineer &amp; Mentor</span
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:gap-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold md:text-4xl lg:text-5xl">
          Learn-Web Combined Bootcamp
        </h2>
        <p class="text-black/80 md:text-lg lg:text-xl">
          Master real-world engineering skills from zero to production. Build
          scalable web apps, deploy on cloud infrastructure, and create
          blockchain applications with hands-on mentorship.
        </p>
        <div class="flex flex-wrap gap-2 font-medium">
          <div
            class="px-4 py-2 bg-white text-black capitalize rounded-full tracking-tight"
          >
            Web3 Fundamentals
          </div>
          <div
            class="px-4 py-2 bg-white text-black capitalize rounded-full tracking-tight"
          >
            cloud computing
          </div>
          <div
            class="px-4 py-2 bg-white text-black capitalize rounded-full tracking-tight"
          >
            react & node.js
          </div>
          <div
            class="px-4 py-2 bg-white text-black capitalize rounded-full tracking-tight"
          >
            full stack development
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
