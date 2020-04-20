<template>
  <div v-if="movie">
    <div
      class="banner"
      :style="{
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundImage: 'url(' + backgroundURL + ')'
      }"
    ></div>
    <section class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="offset owl">
        <div class="preview">
          <div class="poster">
            <img v-if="posterURL" class="poster__img" :src="posterURL" />
          </div>
          <div class="video">
            <div v-if="videoURL" class="ratio">
              <iframe
                class="ratio-object"
                :src="videoURL"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1 class="movie__title">{{ movie.title }}</h1>
          <button class="app-button" @click="toggleFavorite">
            {{ isFavorite ? 'remove from' : 'add to' }} favorites
          </button>
          <div>
            <router-link :to="{ name: 'cast' }">cast</router-link>
            <router-link :to="{ name: 'crew' }">crew</router-link>
          </div>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '@/api'

const getFirstVideo = id => async () => {
  const response = await api.movieVideos.index(id)
  const [firstVideo] = response.results
  if (!firstVideo) return
  if (!firstVideo.key) return
  return firstVideo.key
}

export default {
  data() {
    return {
      id: this.$route.params.id,
      loaded: false,
      movie: '',
      video: '',
      people: {}
    }
  },
  computed: {
    isFavorite() {
      return !!this.$store.getters.show(this.movie.id)
    },
    videoURL() {
      if (!this.video) return
      return `https://www.youtube.com/embed/${this.video}`
    },
    posterURL() {
      if (!this.movie.poster_path) return
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    },
    backgroundURL() {
      if (!this.movie.backdrop_path) return
      return `https://image.tmdb.org/t/p/w1400_and_h450_face/${this.movie.backdrop_path}`
    }
  },
  mounted() {
    this.getMoviePage()
  },
  methods: {
    toggleFavorite() {
      this.isFavorite
        ? this.$store.dispatch('DESTROY_FAVORITE', this.movie.id)
        : this.$store.dispatch('STORE_FAVORITE', this.movie)
    },
    async getMovie() {
      const response = await api.movie.show(this.id)
      return response
    },
    getMoviePage() {
      this.loaded = false
      const setMovie = movie => ((this.movie = movie), movie)

      const setVideo = video => {
        this.video = video
      }

      return this.getMovie()
        .then(setMovie)
        .then(getFirstVideo(this.id))
        .then(response => {
          this.loaded = true
          setVideo(response)
          return response
        })
    }
  }
}
</script>

<style scoped>
.movie__title {
  color: #f5f5f5;
  font-size: 2rem;
  line-height: 1.125;
  text-align: center;
}
.ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.5%;
}

.ratio-object {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}

.flex {
  display: flex;
}

.poster,
.video {
  width: 100%;
}
.poster__img {
  width: 100%;
  max-width: 100%;
}

.preview {
  background-color: #0f1c26;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

@media (min-width: 640px) {
  .movie__title {
    font-size: 3rem;
  }
  .offset {
    transform: translateY(-200px);
  }

  .preview {
    display: flex;
  }

  .poster {
    width: 27.5%;
  }

  .video {
    width: 73%;
  }

  .banner {
    background-color: #e5e5e5;
    height: 500px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
  }
}
</style>