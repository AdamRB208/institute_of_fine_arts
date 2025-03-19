<script setup>
import { AppState } from '@/AppState.js';
import ArtworksCard from '@/components/ArtworksCard.vue';
import { Art } from '@/models/Art.js';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, onUnmounted } from 'vue';

const artworks = computed(() => AppState.artworks)

const currentPage = computed(() => AppState.currentPage)

const totalPages = computed(() => AppState.totalPages)

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

async function getNextPage(pageNumber) {
  try {
    await artService.changeHomePage(pageNumber)
  } catch (error) {
    Pop.error(error, 'could not get next page')
    logger.error('could not get next page', error)
  }
}

</script>

<template>

  <!-- <div v-for="item in greetings">
    {{ item }}
  </div> -->
  <section class="container">
    <div class="row">
      <button :disabled="currentPage == 1" @click="getNextPage(currentPage - 1)"
        class="col-md-3 btn btn-outline-success mt-2 text-success">
        previous
      </button>
      <div class="col-md-2 text-center align-content-center text-success"> Page {{ currentPage }}
      </div>
      <button :disabled="currentPage == 35" @click="getNextPage(currentPage + 1)"
        class="col-md-3 btn btn-outline-success mt-2 text-success">
        next
      </button>
    </div>
    <div class="row">
      <div v-for="art in artworks" :key="art.id" class="col-md-3 border-success">
        <!-- <img :src="item.imgUrls.small" :alt="item.slug" class="img-fluid mt-2">
        <p class="p-3 text-center">
          {{ item.attribution }}
        </p> -->
        <!-- <ArtworksCard :artwork="artworks" /> -->
        <ArtworksCard :artworks="art" />
      </div>
    </div>
  </section>
</template>



<style scoped lang="scss"></style>
