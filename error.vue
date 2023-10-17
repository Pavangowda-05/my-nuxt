<template>
  <div class="mt-7 mx-w-sm mx-3 text-center card">
    <p class="mt-7 text-7xl text-center font-bold">{{ error.statusCode }}</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7" @click="handleError">Go to home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
