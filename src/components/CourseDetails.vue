<script setup lang="ts">
import type { Course } from "@/types/course";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { courses } from "@/data/courses";
import { getCourseById } from "@/services/courseService";
import { getImageUrl } from "@/services/imageServices";
import { getSyllabusByCourse } from "@/services/syllabusService";

const route = useRoute();

const course = ref<any>(null);
const syllabus = ref<any[]>([]);
const loading = ref(true);

const tags = [
  "Web3 Fundamentals",
  "Cloud Computing",
  "React & Node.js",
  "Full Stack Development",
];

const showFull = ref(false);

function toggleShowFull(): void {
  showFull.value = !showFull.value;
}

onMounted(async () => {
  try {
    const courseId = route.params.id as string;

    const courseData = await getCourseById(courseId);
    const syllabusData = await getSyllabusByCourse(courseId);

    course.value = courseData;
    syllabus.value = syllabusData;
  } catch (err) {
    console.error("Failed to fetch course", err);
  } finally {
    loading.value = false;
  }
});

// const course = computed<Course | undefined>(() =>
//   courses.find((c) => c.id === Number(route.params.id)),
// );
// console.log(course.value?.title);
</script>

<template>
  <section v-if="!loading && course">
    <div
      class="px-6 py-10 lg:px-24 bg-pink-100 flex flex-col lg:flex-row-reverse gap-12 lg:gap-24"
    >
      <div class="container flex flex-col gap-2 bg-black rounded-2xl lg:w-1/3">
        <img
          class="rounded-t-2xl"
          :src="getImageUrl(course.thumbnailId)"
          alt=""
        />
        <!-- <div class="flex items-center gap-2 pl-4 pb-2">
          <img
            class="w-12 h-12 rounded-full border-2 border-white"
            :src="course.instructor.avatar"
            alt=""
          />
          <div class="flex flex-col">
            <span class="font-semibold text-white">{{
              course.instructor.avatar
            }}</span>
            <span class="text-sm text-white/80">{{
              course.instructor.avatar
            }}</span>
          </div>
        </div> -->
      </div>

      <div class="flex flex-col gap-4 lg:gap-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold md:text-4xl lg:text-5xl">
          {{ course.title }}
        </h2>
        <p class="text-black/80 md:text-lg lg:text-xl">
          Master real-world engineering skills from zero to production. Build
          scalable web apps, deploy on cloud infrastructure, and create
          blockchain applications with hands-on mentorship.
        </p>
        <div class="flex flex-wrap gap-2 font-medium">
          <div
            v-for="tag in tags"
            class="px-4 py-2 bg-white text-black capitalize rounded-full tracking-tight"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:relative flex flex-col lg:flex-row-reverse justify-center items-center lg:items-start gap-10 lg:gap-20 bg-zinc-100 px-4 lg:px-30 py-12"
    >
      <div class="lg:sticky lg:top-10 container p-4 bg-white rounded-2xl">
        <img
          class="rounded-xl mx-auto max-h-70"
          :src="getImageUrl(course.thumbnailId)"
          alt=""
        />
        <h3 class="my-4 text-2xl font-medium">
          {{ course.title }}
        </h3>
        <div class="flex justify-between mb-10">
          <h2 class="text-3xl font-bold">
            $139 <span class="text-zinc-400">{{ course.price }} </span>
          </h2>
          <div class="rounded-full bg-green-100 text-green-600 px-3 py-2">
            {{ course.discount }}% off
          </div>
        </div>
        <RouterLink
          :to="`/courses/${course.$id}/checkout`"
          class="block text-center py-2 bg-black text-white font-medium rounded-xl"
          >Buy Now</RouterLink
        >
      </div>

      <div class="max-w-180">
        <h2 class="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">
          What You'll Learn
        </h2>
        <p class="text-zinc-600 md:text-lg lg:text-xl mb-8">
          Master server side development, APIs and cloud infrastructure
        </p>
        <div class="px-6 pt-8 rounded-2xl bg-white">
          <div
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="showFull ? 'max-h-500' : 'max-h-120'"
          >
            <div v-for="item in syllabus">
              <h2 class="mb-2 text-xl md:text-2xl font-semibold">
                {{ item.title }}
              </h2>
              <img
                :src="getImageUrl(item.imageId)"
                alt=""
                class="rounded-xl mb-10"
              />
            </div>
          </div>

          <button
            @click="toggleShowFull"
            class="w-full py-6 border-t border-zinc-500"
          >
            <span v-if="showFull" class="font-medium text-xl md:text-2xl mr-8"
              >Show Less</span
            >
            <span v-else class="font-medium text-xl md:text-2xl mr-8"
              >Show More</span
            >
            <i
              class="fa-solid fa-angle-down text-2xl transition transform duration-300"
              :class="{ 'rotate-180': showFull }"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
