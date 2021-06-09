<template>
  <div class="absolute text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 min-h-screen w-full flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-y-6">
      <span class="text-4xl font-semibold">runde.tips</span>
      <img class="w-2/5 sm:w-1/6 dark:hidden" src="../../assets/logo-dark.svg" alt="Logo">
      <img class="w-2/5 sm:w-1/6 hidden dark:block" src="../../assets/logo.svg" alt="Logo">
      <div class="shim relative overflow-hidden w-2/3 sm:w-1/2 h-2 bg-gray-200 rounded">
        <div class="w-full h-full bg-indigo-500 rounded"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({});
</script>

<style>
.shim-red {
  position: relative;
  overflow: hidden;
  background-color: rgba(255, 0, 0, 0.7);
}
.shim::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(0%);
  background-image: linear-gradient(
    90deg,
    rgba(233, 233, 233, 1) 0,
    rgba(233, 233, 233, 0.9) 50%,
    rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 3s ease-out infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

</style>
