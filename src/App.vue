<script setup lang="ts">
import NavBar from './components/shared/NavBar.vue';
import Footer from './components/shared/Footer.vue';


</script>

<template>
  <NavBar/>
  <div class="mx-2">
    <RouterView/>
  </div>
  <Footer />
</template>

<style>

</style>
