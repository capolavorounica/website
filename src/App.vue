<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-[#faffff]">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>