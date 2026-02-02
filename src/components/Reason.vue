<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    title: "Live Interactive Sessions",
    description:
      "Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.",
  },
  {
    title: "Real Engineer, Real Experience",
    description:
      "Learn from engineers who have built & scaled real-world systems at top tech companies.",
  },
  {
    title: "Learn by Doing",
    description:
      "Hands-on projects, open-source contributions & end-to-end applications.",
  },
  {
    title: "Career Guidance",
    description: "Resume reviews, mock interviews, and career mentorship.",
  },
  {
    title: "Strong Community",
    description: "A focused developer community that grows together.",
  },
];
</script>

<template>
  <section class="py-20 px-4 bg-zinc-200">
    <!-- Heading -->
    <h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
      Why Learn-Web?
    </h1>

    <p
      class="text-zinc-700 mx-auto text-lg md:text-xl mt-4 mb-16 max-w-2xl text-center w-sm md:w-lg"
    >
      Our most comprehensive and impactful learning experiences
    </p>

    <!-- Swiper -->
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="1"
      :space-between="24"
      :centered-slides="false"
      loop
      navigation
      :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3, centeredSlides: true },
      }"
      class="max-w-6xl mx-auto px-4"
    >
      <SwiperSlide v-for="(card, i) in cards" :key="i">
        <div class="card h-full p-8 rounded-2xl transition-all duration-300">
          <div
            class="w-12 h-12 rounded-full bg-teal-400 mb-6 flex items-center justify-center"
          >
            <i class="fa-solid fa-code text-white"></i>
          </div>

          <h3 class="text-xl font-semibold mb-4">
            {{ card.title }}
          </h3>

          <div class="h-0.5 w-14 bg-teal-400 mb-4"></div>

          <p class="text-sm opacity-80">
            {{ card.description }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
/* -------------------------
   DEFAULT (ALL SCREENS)
------------------------- */
.card {
  background-color: white;
  color: #1f2937; /* zinc-800 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

/* -------------------------
   HIDE ARROWS (MOBILE + TABLET)
------------------------- */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}

/* -------------------------
   LG ONLY STYLES
------------------------- */
@media (min-width: 1024px) {
  /* Show arrows */
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: flex;
    width: 44px;
    height: 44px;
    background: rgba(0, 0, 0, 0.45);
    border-radius: 9999px;
    color: white;
  }

  :deep(.swiper-button-prev)::after,
  :deep(.swiper-button-next)::after {
    font-size: 16px;
  }

  /* Side cards */
  .swiper-slide .card {
    opacity: 0.6;
    transform: scale(0.95);
  }

  /* Active (center) card */
  .swiper-slide-active .card {
    background-color: #0f172a; /* dark */
    color: white;
    opacity: 1;
    transform: scale(1.05);
  }

  .swiper-slide-prev .card,
  .swiper-slide-next .card {
    opacity: 0.75;
  }
}
</style>
