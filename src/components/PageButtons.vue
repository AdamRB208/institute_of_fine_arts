<script setup>
import { AppState } from '@/AppState.js';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const currentPage = computed(() => AppState.currentPage)

const totalPages = computed(() => AppState.totalPages)

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
</template>


<style lang="scss" scoped></style>