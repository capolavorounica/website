<script setup>
import Hero from './components/Hero.vue';
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-[#faffff]">
    <Navbar />
    <Hero />
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
