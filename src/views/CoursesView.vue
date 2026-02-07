<script lang="ts" setup>
import Courses from "@/components/Courses.vue";
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-8 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1563394867331-e687a36112fd?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center py-30 px-8 text-white text-center"
  >
    <div class="flex items-center gap-2">
      <img
        class="w-12 h-12 rounded-full border-2 border-white"
        src="../images//heroImage.png"
        alt=""
      />
      <p class="text-lg">Mentored by Pallav Sharma</p>
    </div>
    <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">
      Choose Your Learning Path
    </h1>
    <p class="max-w-3xl lg:text-lg">
      Master real engineering skills with hands-on mentorship. From full-stack
      development to DevOps — get job-ready with structured, industry-focused
      programs.
    </p>
    <div
      class="mt-14 flex items-center px-3 text-zinc-500 bg-white gap-2 rounded-2xl"
    >
      <i class="fa-solid fa-magnifying-glass text-lg"></i>
      <input
        class="py-2 outline-none w-100 md:w-120 lg:w-150"
        type="text"
        placeholder="Search for courses, topics, technologies..."
      />
    </div>
  </div>
  <Courses />
</template>
