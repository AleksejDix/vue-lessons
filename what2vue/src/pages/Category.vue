<template>
  <section class="owl  py-2 ">
    <header class="px-2 flex space-between">
      <h1>{{ categoryName }}</h1>
      <span> {{ total }}</span>
    </header>
    <div v-if="hasMovies">
      <MovieList :list="movies" />
      <IntersectionObserver
        @intersect="nextPage"
        :options="{ rootMargin: '300px' }"
      />
    </div>
  </section>
</template>

<script>
import api from "@/api";
import MovieList from "@/components/MovieList";
import IntersectionObserver from "@/components/IntersectionObserver";

export default {
  components: { MovieList, IntersectionObserver },
  data() {
    return {
      page: 1,
      movies: [],
      total: 0
    };
  },
  computed: {
    hasMovies() {
      return this.movies.length > 0;
    },
    categoryName() {
      const { name } = api.category.show(this.$route.params.id);
      return name;
    },
    query() {
      return {
        page: this.page
      };
    }
  },
  watch: {
    async "query.page"(next, prev) {
      if (next > prev) {
        this.query.page = next;
        this.updateQuery(this.query);
        this.movies = this.movies.concat(await this.getCategory());
      }
    },
    async "$route.params.id"(next, prev) {
      if (next !== prev) {
        this.movies = [];
        this.page = 1;
        this.updateQuery(this.query);
        this.movies = this.movies.concat(await this.getCategory());
      }
    }
  },
  methods: {
    async getCategory() {
      console.log(this.$route);
      const id = this.$route.params.id;
      const query = this.query;
      console.log(query);
      const { data, status } = await api.movieCategory.show(id, { query });
      console.log(data, status);
      if (status !== 200) {
        this.$router.push({ name: "404" });
      }
      const { total_results, results } = data;
      this.total = total_results;
      return results;
    },
    updateQuery(query) {
      this.$router.push({ query });
    },
    nextPage() {
      this.page++;
    }
  },
  async mounted() {
    this.movies = await this.getCategory();
  },
  destroyed() {
    this.movies = [];
  }
};
</script>
