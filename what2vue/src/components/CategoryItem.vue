<template>
  <section class="owl">
    <header class="px-2 flex space-between">
      <h2>{{ category.name }}</h2>
      <div>
        <router-link
          class="button"
          :to="{
            name: 'category',
            params: {
              id: category.id
            },
            query: {
              page: 1
            }
          }"
        >
          view all {{ total }}
        </router-link>
      </div>
    </header>
    <div class="h-scoller">
      <div class="h-scoller__body">
        <ul class="list-reset h-scoller__list">
          <li v-for="movie in movies" :key="movie.id" class="h-scoller__item">
            <MovieItem :movie="movie" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api'
import MovieItem from '@/components/MovieItem'
export default {
  components: { MovieItem },
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      movies: [],
      total: ''
    }
  },
  mounted() {
    this.getCategory()
  },
  methods: {
    async getCategory() {
      const response = await api.movieCategory.show(this.category.id)
      const { total_results, results } = response
      this.total = total_results
      this.movies = results
      return response
    }
  }
}
</script>

<style>
.h-scoller {
  display: block;
  padding-left: 2rem;
  height: 388px;
}
.h-scoller__body {
  transform: translate3d(0, 0, 0);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.h-scoller__list {
  display: flex;
  margin: 0 -10px;
}
.h-scoller__item {
  padding: 10px;
  width: 232px;
  max-width: 232px;
  flex: 1 0 auto;
}
</style>
