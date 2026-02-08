<script lang="ts" setup>
import { useRoute } from "vue-router";
import { watch } from "vue";

const route = useRoute();

const { signup } = defineProps({
  signup: Boolean,
});

const emit = defineEmits(["close"]);

watch(route, () => {
  emit("close");
});

const closeSignup = () => {
  emit("close");
};
</script>
<template>
  <!-- Mobile view  -->
  <div v-if="signup" class="lg:hidden fixed inset-0 h-screen z-999">
    <div class="h-1/2 bg-black/70" @click="closeSignup"></div>
    <div class="h-1/2 bg-white px-4 rounded-t-2xl">
      <div class="w-12 h-1 mx-auto bg-zinc-400"></div>
      <RouterLink to="/" @click="closeSignup">
        <img class="w-32 mx-auto my-6" src="../images/logo.png" alt="" />
      </RouterLink>
      <h3 class="text-xl font-semibold mb-4">Sign in to your account</h3>
      <label class="text-zinc-700 mb-2">Email or Phone</label>
      <input
        type="text"
        placeholder="Enter UserName"
        class="block outline-blue-300 w-full py-1 px-3 rounded-xl border border-zinc-400 text-lg text-zinc-600 mb-2"
      />
      <input
        type="text"
        placeholder="Enter your phone number or email"
        class="block outline-blue-300 w-full py-1 px-3 rounded-xl border border-zinc-400 text-lg text-zinc-600 mb-4"
      />
      <p class="text-xs tracking-tighter text-zinc-600">
        Please add country code if you are a user outside of India
      </p>
      <button
        class="border border-black rounded-xl w-full block py-1 my-6 tracking-tighter bg-black text-white hover:bg-zinc-700 text-center"
      >
        Continue
      </button>
      <div class="w-full h-0.5 mx-auto bg-zinc-400"></div>
    </div>
  </div>

 <!-- Desktop View -->
<div
  v-if="signup"
  class="hidden lg:flex fixed inset-0 z-999 items-center justify-center"
>
  
  <!-- Overlay -->
  <div
    class="absolute inset-0 bg-black/70"
    @click="closeSignup"
  ></div>

  <!-- Modal -->
  <div
    class="relative bg-white w-225 rounded-2xl shadow-2xl flex overflow-hidden"
    @click.stop
  >

    <!-- LEFT SIDE -->
    <div class="w-1/2 bg-indigo-900 text-white p-10 flex flex-col justify-between">
      
      <div>
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">
            Become a Pro Developer
          </h2>

          <div class="bg-white text-indigo-900 rounded-full w-12 h-12 flex items-center justify-center font-bold">
            {{ "</>" }}
          </div>
        </div>

        <p class="text-lg text-white/80">
          Hands-on bootcamps, real projects — start building today.
        </p>
      </div>

      <img class="h-80" src="../images/mainImage.png" alt="">
    </div>

    <!-- RIGHT SIDE -->
    <div class="w-1/2 p-10 relative">

      <!-- Close Button -->
      <button
        @click="closeSignup"
        class="absolute top-4 right-4 text-2xl cursor-pointer"
      >
        ✕
      </button>

      <RouterLink to="/" @click="closeSignup">
        <img class="w-32 mx-auto my-6" src="../images/logo.png" alt="" />
      </RouterLink>

      <h3 class="text-2xl font-semibold mb-6">
        Sign in to your account
      </h3>

      <input
        placeholder="Enter UserName"
        class="w-full border rounded-xl px-4 py-3 mb-4"
      />

      <input
        placeholder="Enter phone or email"
        class="w-full border rounded-xl px-4 py-3 mb-4"
      />

      <button
        class="w-full bg-blue-900 text-white py-3 rounded-xl"
      >
        Continue
      </button>

    </div>
  </div>
</div>

</template>
