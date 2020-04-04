<template>
  <section class="owl  py-2 ">
    <header class="px-2 flex space-between">
      <h1>{{ name }}</h1>
      <span> {{ total }}</span>
    </header>
    <div v-if="hasMovies">
      <MovieList :list="movies" />
      <IntersectionObserver
        :options="{ rootMargin: '300px' }"
        @intersect="nextPage"
      />
    </div>
  </section>
</template>

<script>
import api from '@/api'
import MovieList from '@/components/MovieList'
import IntersectionObserver from '@/components/IntersectionObserver'

export default {
  components: { MovieList, IntersectionObserver },
  data() {
    return {
      page: 1,
      movies: [],
      total: 0
    }
  },
  computed: {
    hasMovies() {
      if (!this.movies) return
      return this.movies.length > 0
    },
    name() {
      if (!categoy) return
      if (!categoy.name) return
      return categoy.name
      const categoy = api.category.show(this.$route.params.catID)
    },
    query() {
      return {
        page: this.page
      }
    }
  },
  watch: {
    async 'query.page'(next, prev) {
      if (next > prev) {
        this.query.page = next
        this.updateQuery(this.query)
        this.movies = this.movies.concat(await this.getCategory())
      }
    },
    async '$route.params.id'(next, prev) {
      if (next !== prev) {
        this.movies = []
        this.page = 1
        this.updateQuery(this.query)
        this.movies = this.movies.concat(await this.getCategory())
      }
    }
  },
  async mounted() {
    this.movies = await this.getCategory()
  },
  destroyed() {
    this.movies = []
  },
  methods: {
    async getCategory() {
      const query = this.query
      const id = this.$route.params.catID
      try {
        const response = await api.movieCategory.show(id, { query })
        const { total_results = 0, results = [] } = response.data
        this.total = total_results
        return results
      } catch (error) {
        if (status !== 200) {
          this.$router.push({ name: '404' })
        }
      }
    },
    updateQuery(query) {
      this.$router.push({ query })
    },
    nextPage() {
      this.page++
    }
  }
}
</script>
