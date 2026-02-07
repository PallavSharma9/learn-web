<template>
  <div
    class="p-4 bg-pink-50 pt-16 lg:px-24 lg:py-30 flex flex-col md:flex-row justify-center gap-12 md:justify-start items-center"
  >
    <div
      class="flex flex-col justify-center items-center md:items-start gap-6 md:w-1/2"
    >
      <div
        class="flex items-center gap-2 px-4 py-2 border border-dashed rounded-2xl text-sm w-70"
      >
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <p>Join 100+ enrolled students today</p>
      </div>
      <h1 class="text-3xl font-semibold md:text-fold md:text-5xl lg:text-6xl">
        Master Full Stack Developement
      </h1>
      <p class="md:text-lg text-zinc-600 text-center md:text-start">
        Master Full Stack Developement through hands-on open source projects.
        Join a community of developers transforming their careers with
        practical, real world programming skills.
      </p>

      <div class="flex justify-center items-center gap-6">
        <RouterLink
          to="/"
          class="px-3 py-2 rounded-lg border border-zinc-400 hover:bg-zinc-200"
          >Learn More</RouterLink
        >
        <RouterLink
          to="/courses"
          class="px-3 py-2 bg-black text-white rounded-lg"
          >Explore Courses</RouterLink
        >
      </div>
    </div>

    <img class="md:w-1/2" src="../images/heroImage.png" alt="" />
  </div>
</template>
