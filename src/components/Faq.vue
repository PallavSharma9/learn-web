<script setup lang="ts">
import { ref } from "vue";

const question = ref([
  {
    title: "What makes Learn-web different from other coding platforms?",
    current: false,
    description:
      "No compromises. With Learn-web, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.",
  },
  {
    title: "Do I need prior coding experience to join?",
    current: false,
    description:
      "No prior experience is required. Our courses are designed to take you from beginner to advanced levels with structured learning paths.",
  },
  {
    title: "What kind of support can I expect?",
    current: false,
    description:
      "You'll get 24/7 community support through our active Discord, weekly study groups, peer code reviews, and direct mentorship opportunities.",
  },
  {
    title: "Are the courses self-paced or scheduled?",
    current: false,
    description:
      "We offer both self-paced learning materials and scheduled live sessions, giving you the flexibility to learn at your own pace while staying connected with the community.",
  },
  {
    title: "Will I get a certificate after completion?",
    current: false,
    description:
      "Yes, you'll receive a certificate of completion for each course you finish, along with portfolio projects that demonstrate your skills to potential employers.",
  },
]);

const toggleQuestion = (index: number) => {
  question.value = question.value.map((q, i) => ({
    ...q,
    current: i === index ? !q.current : false,
  }));
};
</script>

<template>
  <div class="my-12 flex flex-col justify-center items-center space-y-4">
    <h1
      class="mb-10 text-center text-3xl md:text-4xl lg:text-5xl font-semibold"
    >
      FAQs
    </h1>
    <p class="w-sm mb-8 text-center">Get your questions answered</p>
    <div
      v-for="(ques, index) in question"
      :key="ques.title"
      class="px-4 w-full md:w-150 lg:w-200 flex flex-col py-3 border-b border-zinc-300 text-zinc-600"
    >
      <div
        @click="toggleQuestion(index)"
        class="flex justify-between w-full hover:text-black"
      >
        <p class="font-medium text-lg">{{ ques.title }}</p>
        <i
          class="fa-solid fa-angle-down text-2xl transition transform duration-300"
          :class="{ 'rotate-180': ques.current }"
        ></i>
      </div>

      <div v-if="ques.current" class="mt-4">
        {{ ques.description }}
      </div>
    </div>
  </div>
</template>
