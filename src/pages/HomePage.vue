<script setup>
import { AppState } from '@/AppState.js';
import { Art } from '@/models/Art.js';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, onUnmounted } from 'vue';

const art = computed(() => AppState.Art)

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
  <section class="container">
    <div class="row">
      <div class="col-md-3 artwork">
        <div>{{ art }}</div>
      </div>
    </div>
  </section>
</template>




<style scoped lang="scss"></style>
