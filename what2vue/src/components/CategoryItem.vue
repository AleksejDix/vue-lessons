<template>
  <section class="owl">
    <header class="flex justify-between">
      <h2 class="uppercase font-bold ">{{ category.name }}</h2>
      <div>
        <router-link
          class="app-button"
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
    <div class="h-scoller relative -mx-2 sm:-mx-10 lg:-mx-12">
      <div class="h-scoller__body">
        <ul class="h-scoller__list">
          <li v-for="movie in movies" :key="movie.id" class="h-scoller__item">
            <MovieItem :movie="movie" />
          </li>
        </ul>
      </div>
      <div
        class="overlay-left absolute left-0 bottom-0 top-0 pointer-events-none w-16"
      ></div>
      <div
        class="overlay-right absolute right-0 bottom-0 top-0 pointer-events-none w-16"
      ></div>
    </div>
  </section>
</template>

<script>
import api from '@/api'
import MovieItem from '@/components/functional/MovieItem'
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
}
.h-scoller__body {
  transform: translate3d(0, 0, 0);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.h-scoller__list {
  display: flex;
  margin: 0 -10px;
  padding-left: 48px;
}
.h-scoller__item {
  padding: 8px;
  width: 256px;
  max-width: 256px;
  flex: 1 0 auto;
}

.overlay-right {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.overlay-left {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
