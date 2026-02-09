<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import Login from "./Login.vue";
import { account } from "@/lib/appwrite";
import SignUp from "./SignUp.vue";

const route = useRoute();

watch(route, () => {
  login.value = false;
  signup.value = false;
});

const isOpen = ref(false);
const login = ref(false);
const signup = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const signupFunction = () => {
  signup.value = !signup.value;
};

const loginFunction = () => {
  login.value = !login.value;
};
</script>
<template>
  <div>
    <div
      class="p-4 bg-white flex justify-between h-16 items-center lg:px-24 border border-zinc-300"
    >
      <div class="z-300 flex justify-start items-center">
        <RouterLink to="/">
          <img class="w-32 lg:mr-8" src="../images/logo.png" alt="" />
        </RouterLink>

        <div class="hidden space-x-8 lg:flex font-medium text-zinc-700">
          <RouterLink class="hover:text-orange-700" to="/">Home</RouterLink>
          <RouterLink class="hover:text-orange-700" to="/courses"
            >Courses</RouterLink
          >
          <RouterLink class="hover:text-orange-700" to="/store"
            >Store</RouterLink
          >
        </div>
      </div>

      <div class="hidden lg:flex justify-end space-x-8">
        <!-- Search Area  -->
        <div
          class="flex justify-center items-center py-2 px-3 rounded-lg border border-zinc-400 outline-none hover:border-4 hover:border-blue-400 duration-300"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            class="h-full text-sm ml-2 outline-none"
            placeholder="Type to Search"
            type="text"
          />
        </div>

        <div v-if="!login && !signup">
          <button
            @click="signupFunction"
            class="mr-2 border border-zinc-800 rounded-xl px-6 py-1 tracking-tighter hover:bg-zinc-300 text-center"
          >
            Sign up
          </button>

          <button
            @click="loginFunction"
            class="border border-black rounded-xl px-6 py-1 tracking-tighter bg-black text-white hover:bg-zinc-700 text-center"
          >
            Log in
          </button>
        </div>

        <!-- <div
          v-else
          class="rounded-full p-2 border-2 border-zinc-600 duration-200 hover:scale-105"
        >
          <i class="fa-solid fa-user"></i>
        </div> -->
      </div>

      <!-- Mobile view  -->
      <div
        :class="[isOpen ? 'fixed right-4' : '']"
        class="right-4 z-300 text-2xl lg:hidden cursor-pointer"
        @click="toggleMenu"
      >
        <i v-if="!isOpen" class="fa-solid fa-bars"></i>
        <i v-else class="fa-solid fa-x"></i>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 z-200 flex mt-10 lg:hidden flex-col justify-center items-center bg-white space-y-4 px-4"
    >
      <!-- Search Area  -->
      <div
        class="w-full flex justify-start items-center py-2 px-3 rounded-lg border border-zinc-400 outline-none hover:border-4 font-medium hover:border-blue-400 duration-300"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          class="h-full ml-2 outline-none"
          placeholder="Type to Search"
          type="text"
        />
      </div>

      <RouterLink
        @click="toggleMenu"
        to="/"
        class="p-2 bg-zinc-100 w-full rounded-lg hover:text-lg hover:text-orange-700 duration-300"
        >Home</RouterLink
      >
      <RouterLink
        @click="toggleMenu"
        to="/courses"
        class="p-2 bg-zinc-100 w-full rounded-lg hover:text-lg hover:text-orange-700 duration-300"
        >Courses</RouterLink
      >
      <RouterLink
        @click="toggleMenu"
        to="/store"
        class="p-2 bg-zinc-100 w-full rounded-lg hover:text-lg hover:text-orange-700 duration-300"
        >Store</RouterLink
      >

      <div class="mt-4 mb-2 border border-zinc-300 w-full"></div>

      <button
        @click="
          () => {
            signupFunction();
            toggleMenu();
          }
        "
        class="border border-zinc-800 rounded-xl w-full block py-2 tracking-tighter hover:bg-zinc-300 text-center"
      >
        Sign up
      </button>

      <button
        @click="
          () => {
            loginFunction();
            toggleMenu();
          }
        "
        class="border border-black rounded-xl w-full block py-2 tracking-tighter bg-black text-white hover:bg-zinc-700 text-center"
      >
        Log in
      </button>

      <!-- <RouterLink
        to="/store"
        class="p-2 bg-zinc-100 w-full rounded-lg flex items-center gap-2 hover:gap-4 transition-all duration-300"
      >
        <i class="fa-regular fa-user"></i>
        <span>My Profile</span>
      </RouterLink>
      <RouterLink
        to="/store"
        class="p-2 bg-zinc-100 w-full rounded-lg flex items-center gap-2 hover:gap-4 transition-all duration-300"
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Purchases</span>
      </RouterLink>

      <RouterLink
        to="/store"
        class="p-2 border border-zinc-400 hover:bg-zinc-100 w-full rounded-lg flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300"
      >
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
        <span>Logout</span>
      </RouterLink> -->
    </div>
  </div>
  <SignUp :signup="signup" @close="signup = false" />
  <Login :login="login" @close="login = false" />
</template>
