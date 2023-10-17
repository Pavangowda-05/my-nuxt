<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

useHead({
  title: "Nuxt | Products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
