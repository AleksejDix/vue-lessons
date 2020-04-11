<template>
  <ul class="movies__list">
    <li v-for="movie in list" :key="movie.id" class="movies__list-item">
      <MovieItem :movie="movie" />
    </li>
  </ul>
</template>

<script>
import MovieItem from '@/components/functional/MovieItem'
export default {
  components: { MovieItem },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.movies__list {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(171px, 1fr));
}
</style>
