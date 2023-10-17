import { ProductCard } from '#build/components'; import { ProductCard } from
'#build/components';
<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product img" class="mx-4 my-7" />
      </div>
      <div class="p-5">
        <h2 class="text-4xl my-4">{{ product.title }}</h2>
        <p class="text-xl my-4">Price-${{ product.price }}</p>
        <h3 class="font-bold">Product Description</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
img {
  max-width: 400px;
  max-height: 220px;
}
</style>
