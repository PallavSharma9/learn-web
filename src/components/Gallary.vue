<script lang="ts" setup>
import galleryImage2 from "@/images/galleryImage2.png";
import galleryImage3 from "@/images/galleryImage3.png";
import galleryImage4 from "@/images/galleryImage4.png";
import galleryImage5 from "@/images/galleryImage5.png";
const imageGallery = [
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
];
</script>

<template>
  <div class="lg:px-20 pt-12">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        class="col-span-full bg-linear-to-r from-blue-950 to-blue-800 rounded-2xl px-6 pt-12 lg:px-20 flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-20 lg:gap-0 text-white"
      >
        <div class="lg:w-1/2">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
            A Community That Has Your Back
          </h3>
          <ul class="list-disc pl-6 space-y-2 md:space-y-4 md:text-lg">
            <li>Active Discord with 24/7 community support</li>
            <li>Collaborate on open source and build together</li>
            <li>Weekly study groups and peer code reviews</li>
            <li>Job referrals and opportunity sharing</li>
          </ul>
        </div>
        <img class="lg:w-1/2" src="../images/galleryImage1.png" alt="" />
      </div>
      <img
        v-for="(img, i) in imageGallery"
        :key="i"
        :src="img"
        alt=""
        class="rounded-xl w-full"
      />
    </div>
  </div>
</template>
