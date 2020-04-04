<template>
  <section v-if="person">
    <header class="px-2 py-2">
      <h1>{{ person.name }}</h1>
    </header>
    <div class="container">
      <div class="grid">
        <div class="person">
          <Player
            v-if="images.length > 0"
            v-model="images"
            controls
            auto
            :speed="3000"
          >
            <template
              v-slot:default="{
                things,
                some,
                total,
                current
              }"
            >
              <div v-if="some">
                <div class="p-2">
                  <transition name="fade" mode="out-in">
                    <ResponsiveImage
                      :key="
                        `https://image.tmdb.org/t/p/w500/${things[current].file_path}`
                      "
                      :width="things[current].width"
                      :height="things[current].height"
                      :aspect-ratio="things[current].aspect_ratio"
                      :src="
                        `https://image.tmdb.org/t/p/w500/${things[current].file_path}`
                      "
                      :alt="person.name"
                    />
                  </transition>
                </div>
              </div>
            </template>
          </Player>
        </div>
      </div>
    </div>

    <MovieList :list="movies" />
  </section>
</template>

<script>
import MovieList from '@/components/MovieList'
import Player from '@/components/renderless/Player'
import ResponsiveImage from '@/components/ResponsiveImage'

import api from '@/api'
export default {
  components: {
    MovieList,
    Player,
    ResponsiveImage
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
    async getMovies() {
      const response = await api.personMovies.index(this.id)
      this.movies = response.cast
    },
    async getPerson() {
      const response = await api.person.show(this.id)
      this.person = response
    },
    async getPersonImages() {
      const response = await api.personImages.index(this.id)
      this.images = response.profiles
    }
  }
}
</script>

<style scoped>
.person {
  width: 320px;
}
</style>
