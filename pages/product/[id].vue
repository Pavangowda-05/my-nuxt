<template>
  <div>
    <Head>
      <Title>Nuxt | {{ product.title }}</Title>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
