<template>
  <section class="lg:px-20">
    <div
      class="flex flex-col lg:flex-row-reverse lg:justify-between px-4 pt-12 bg-linear-to-r from-violet-950 to-violet-800 rounded-2xl"
    >
      <div class="flex flex-col gap-6 lg:mr-8 lg:w-1/2">
        <h2 class="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
          Having doubts? Let's get in touch!
        </h2>
        <p class="text-zinc-400">
          Send us your queries and we'll get back to you soon.
        </p>
        <input
          type="text"
          placeholder="Your name"
          class="mt-8 px-8 py-3 rounded-xl text-lg text-zinc-100 bg-violet-500 border border-zinc-300"
        />
        <input
          type="email"
          placeholder="Your email address"
          class="px-8 py-3 rounded-xl text-lg text-zinc-100 bg-violet-500 border border-zinc-300"
        />
        <input
          type="text"
          placeholder="Your contact number"
          class="px-8 py-3 rounded-xl text-lg text-zinc-100 bg-violet-500 border border-zinc-300"
        />
        <textarea
          placeholder="Type your query here..."
          class="px-8 py-3 rounded-xl text-lg text-zinc-100 bg-violet-500 border border-zinc-300 h-40"
        ></textarea>
        <button
          class="px-10 py-4 text-lg rounded-xl bg-green-400 font-semibold cursor-pointer"
        >
          Submit
        </button>
      </div>
      <div class="lg:w-1/2">
        <img src="../images/earth.png" alt="" />
      </div>
    </div>
  </section>
</template>
