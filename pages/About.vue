<template>
  <div>
    <h1>About Page</h1>
  </div>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja/");
//post
// {
//   method: "post",
//   body: { age: 30 },
// }
</script>

<style scoped>
h1 {
  font-size: 30px;
}
</style>
