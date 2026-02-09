<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";
import { useAuthStore } from "./stores/authStore";

const auth = useAuthStore();

onMounted(async () => {
  await auth.checkUser();
});
</script>

<template>
  <div v-if="auth.loading" class="h-screen flex items-center justify-center">
    Loading...
  </div>

  <div v-else>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
