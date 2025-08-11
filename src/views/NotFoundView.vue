<template>
  <section>
    <h1>Page Not Found  <i class="fa fa-heart-broken"></i> </h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p><router-link :to="{ name: 'home' }" class="link">Go back to home</router-link></p>
  </section>
</template>


<script>
export default {
  name: 'NotFoundView',

}
</script>


<style scoped>

section {
  background-color: var(--teal-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
}
h1 {
  color: var(--teal-600);
  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);
}
.link{
  font-size: clamp(1rem, 2vw + 1rem, 1.5rem);
  color: var(--teal-600);
  text-decoration: underline;
  transition: text-shadow 0.3s ease;
}

</style>
