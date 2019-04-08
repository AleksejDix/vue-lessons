<template>
  <section class="movies">
    <header class="page__header">
      <h1>{{ category }}</h1>
      {{ total }}
    </header>
    <MovieList :list="movies" />
  </section>
</template>

<script>
import api from "@/api";
import MovieList from "@/components/MovieList";

export default {
  components: { MovieList },
  props: ["category"],
  data() {
    return {
      page: 1,
      movies: [],
      total: 0
    };
  },
  methods: {
    async getCategory() {
      const response = await api.get(`movie/` + this.category);
      this.currentPage = response.page;
      this.total = response.total_results;
      this.movies = response.results;
    }
  },
  mounted() {
    this.getCategory();
  }
};
</script>

<style>
.page__header {
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
}
</style>
