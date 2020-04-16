<template>
  <section class="max-w-7xl mx-auto sm:px-6 lg:px-8 owl">
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
