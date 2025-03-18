<script setup>
import { AppState } from '@/AppState.js';
import { Art } from '@/models/Art.js';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, onUnmounted } from 'vue';

const artworks = computed(() => AppState.artworks)

// const greetings = [
//   { name: 'mick' },
//   { name: 'adam' }
// ]

onMounted(() => {
  logger.log('home page is mounted')
  getArt()
})

onUnmounted(() => {
  logger.log('home page is unmounted')

})

async function getArt() {
  try {
    await artService.getArt()
  } catch (error) {
    Pop.error(error, 'could not get art')
    logger.error('could not get art', error)
  }
}



</script>

<template>

  <!-- <div v-for="item in greetings">
    {{ item }}
  </div> -->
  <section class="container">
    <div class="row">
      <div v-for="item in artworks" :key="item.id" class="col-md-3 border ">
        <img :src="item.imgUrls.small" :alt="item.slug" class="img-fluid">
        <p class="m-1">
          {{ item.description }} {{ item.attribution }}
        </p>
      </div>
    </div>
  </section>
</template>

//NOTE create card for artworks then create Props


<style scoped lang="scss"></style>
