<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import { AppState } from "@/AppState.js"

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class=" text-center">
    Made with <i class="mdi mdi-heart text-pink"></i> by CodeWorks
  </footer>
</template>

<style lang="scss"></style>
