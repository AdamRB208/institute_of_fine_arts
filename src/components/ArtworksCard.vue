<script setup>
import { Art } from '@/models/Art.js';

defineProps({

  artworks: Art
  // artworksProp: { type: Art, required: true },

})

</script>


<template>
  <img :src="artworks.imgUrls.small" :alt="artworks.id" class="img-fluid mt-2">
  <p class="p-3 text-center text-success">
    {{ artworks.attribution }}
  </p>
</template>


<style lang="scss" scoped></style>
