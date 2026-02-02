<script lang="ts" setup></script>

<template>
  <div class="py-20 bg-black px-4">
    <h1
      class="text-white text-center font-semibold text-3xl mb-12 md:text-4xl lg:text-5xl"
    >
      Featured Cohorts
    </h1>
    <div class="flex flex-column md:flex-row gap-4 flex-wrap">
      <!-- course card  -->
      <div class="p-4 bg-white rounded-2xl max-w-114">
        <img
          class="rounded-xl max-w-105"
          src="../images/course-image.png"
          alt=""
        />
        <h3 class="mt-4 mb-8 text-2xl font-medium">
          Learn-Web Combined Bootcamp
        </h3>
        <p class="text-zinc-600 mb-6">
          Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI
          (Every Saturday) Web3(Every Sunday)...
        </p>
        <div class="flex justify-between mb-10">
          <h2 class="text-3xl font-bold">
            $139 <span class="text-zinc-400">$160 </span>
          </h2>
          <div class="rounded-full bg-green-100 text-green-600 px-3 py-2">
            34% off
          </div>
        </div>
        <RouterLink
          to="/"
          class="block text-center py-2 bg-black text-white font-medium rounded-xl"
          >View Details</RouterLink
        >
      </div>
    </div>
  </div>
</template>
