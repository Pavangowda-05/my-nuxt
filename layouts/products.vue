<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/product" class="font-bold">Nuxt Products</nuxt-link>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-4">
      <ul class="flex gap-4">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/product">Product</nuxt-link></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
