<template>
  <section>
    <header class="px-2 py-2">
      <h1>{{ person.name }}</h1>
    </header>

    <img
      class="avatar"
      :src="`https://image.tmdb.org/t/p/w500/${person.profile_path}`"
      :alt="person.name"
    />

    <div v-for="image in images" :key="image.file_path">
      <img
        class="avatar"
        :src="`https://image.tmdb.org/t/p/w500/${image.file_path}`"
        :alt="person.name"
      />
    </div>
    <MovieList :list="movies" />
  </section>
</template>

<script>
import MovieList from '@/components/MovieList'
import api from '@/api'
export default {
  components: {
    MovieList
  },
  data() {
    return {
      id: this.$route.params.id,
      person: {},
      movies: [],
      images: []
    }
  },
  mounted() {
    this.getPerson()
    this.getMovies()
    this.getPersonImages()
  },
  methods: {
    async getPerson() {
      const response = await api.moviePeople.show(this.id)
      this.person = response.data
    },
    async getMovies() {
      const response = await api.personMovie.index(this.id)
      this.movies = response.data.cast
    },
    async getPersonImages() {
      const response = await api.personImages.index(this.id)
      this.images = response.data.profiles
    }
  }
}
</script>

<style scoped>
.avatar {
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-radius: 4px;
  max-width: 320px;
}
</style>
