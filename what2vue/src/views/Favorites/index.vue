<template>
  <section class="max-w-7xl mx-auto sm:px-6 lg:px-8 grid gap-2">
    <header class="px-2 flex space-between">
      <h1>Favorites</h1>
    </header>
    <div v-if="hasMovies">
      <MovieList :list="movies" />
    </div>
  </section>
</template>

<script>
import { useFavorites } from '@/plugins/pinia/favorites.js'
import MovieList from '@/components/MovieList'
export default {
  components: {
    MovieList,
  },
  setup() {
    const { movies } = useFavorites()
    return { movies }
  },
  computed: {
    hasMovies() {
      return this.movies.length > 0
    },
  },
  created() {
    this.$emit('updateLayout', 'OffsetLayout')
  },
}
</script>
