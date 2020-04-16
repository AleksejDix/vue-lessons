<template>
  <section v-if="person" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <header>
      <h1>{{ person.name }}</h1>
    </header>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="grid">
        <div class="w-64">
          <Player
            v-if="images.length > 0"
            v-model="images"
            controls
            :speed="5000"
          >
            <template
              #default="{
                things,
                some,
                total,
                current
              }"
            >
              <div v-if="some">
                <div>
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

    <Fetch :apicall="apicallmovies" />

    <MovieList :list="movies" />
  </section>
</template>

<script>
import MovieList from '@/components/MovieList'
import Player from '@/components/renderless/Player'
import ResponsiveImage from '@/components/ResponsiveImage'
import Fetch from '@/components/renderless/Fetch'

import api from '@/api'
export default {
  components: {
    MovieList,
    Player,
    ResponsiveImage,
    Fetch
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
    apicallmovies: () => () => api.personMovies(this.$route.params.id),
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

<style></style>
