<template>
  <div class="bg-black text-white">
    <div class="flex flex-col md:flex-row justify-evenly px-8 py-12 lg:px-20">
      <RouterLink to="/">
        <img class="w-50 text-white" src="../images/logo-white.png" alt="" />
      </RouterLink>
      <div class="flex flex-col gap-2">
        <RouterLink to="/" class="text-zinc-300 hover:text-white"
          >Terms & Conditions</RouterLink
        >
        <RouterLink to="/" class="text-zinc-300 hover:text-white"
          >Privacy Policy</RouterLink
        >
        <RouterLink to="/" class="text-zinc-300 hover:text-white"
          >Refund & Cancellation</RouterLink
        >
      </div>
      <div class="flex gap-3 h-13 mt-10">
        <div
          class="p-2 bg-zinc-700 hover:bg-zinc-500 rounded-xl text-white text-3xl"
        >
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div
          class="p-2 bg-zinc-700 hover:bg-zinc-500 rounded-xl text-white text-3xl"
        >
          <i class="fa-brands fa-x-twitter"></i>
        </div>
        <div
          class="p-2 bg-zinc-700 hover:bg-zinc-500 rounded-xl text-white text-3xl"
        >
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div
          class="p-2 bg-zinc-700 hover:bg-zinc-500 rounded-xl text-white text-3xl"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
    <h1
      class="max-w-7xl mx-auto pb-12 text-center font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-[#8c8c8c] via-[#2b2b2b] to-[#010101] opacity-90 text-6xl sm:text-[12rem] md:text-[14rem] -z-1"
    >
      Learn-Web
    </h1>
  </div>
</template>
