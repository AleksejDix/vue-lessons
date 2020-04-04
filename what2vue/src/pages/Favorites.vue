<template>
  <section class="owl py-2">
    <header class="px-2 flex space-between">
      <h1>Favorites</h1>
    </header>
    <div v-if="has(movies)">
      <MovieList :list="movies" />
    </div>
  </section>
</template>

<script>
import MovieList from '@/components/MovieList'
export default {
  components: {
    MovieList
  },
  computed: {
    has: () => list => 'length' in list,
    movies() {
      return this.$store.getters.index
    }
  }
}
</script>
