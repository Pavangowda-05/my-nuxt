export default defineEventHandler(async (event) => {
  //handle query params
  //   const { name } = getQuery(event);

  // handle post data
  //   const { age } = await readBody(event);

  // api call

  const { data } = await $fetch("https://fakestoreapi.com/products/1");
  return data;
});
