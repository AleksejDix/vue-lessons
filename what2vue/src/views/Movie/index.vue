<template>
  <div v-if="isSuccess">
    <div
      class="banner flex items-center justify-center"
      :style="{
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundImage: 'url(' + backgroundURL + ')',
      }"
    >
      <div class="flex items-center justify-center h-32">
        <h1 class="text-white text-5xl font-extralight">
          {{ data.title }}
        </h1>
      </div>
    </div>
    <section class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="offset grid gap-2">
        <div class="flex flex-col sm:flex-row">
          <div class="poster order-2">
            <img v-if="posterURL" class="w-full max-w-full" :src="posterURL" />
          </div>
          <div class="video order-1">
            <div v-if="videoURL" class="aspect-w-16 aspect-h-9">
              <iframe
                :src="videoURL"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="px-4 sm:px-0">
          <div class="flex gap-4 py-4">
            <button class="app-button">
              {{ isFavorite ? 'remove from' : 'add to' }} favorites
            </button>

            <router-link class="app-button" :to="{ name: 'cast' }"
              >cast</router-link
            >
            <router-link class="app-button" :to="{ name: 'crew' }"
              >crew</router-link
            >
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
import {
  defineComponent,
  computed,
  reactive,
  watchEffect,
} from '@vue/composition-api'
import { useQuery } from 'vue-query'

export default defineComponent({
  setup(_props, context) {
    const { isSuccess, data } = useQuery(
      ['movies', { id: context.root.$route.params.id }],
      () => api.movie.show(context.root.$route.params.id)
    )

    const movieId = computed(() => data.value?.id)
    const enabled = computed(() => !!data.value?.id)

    const { isSuccess: isVideoSuccess, data: videos } = useQuery(
      reactive(['videos', { movieId: movieId.value }]),
      () => api.movieVideos.index(movieId.value),
      reactive({
        enabled,
      })
    )

    watchEffect(() => {
      console.log(videos)
    })

    const videoURL = computed(() => {
      if (!Array.isArray(videos.value)) return
      const [firstVideo] = videos.value
      if (!firstVideo) return
      if (!firstVideo.key) return
      return `https://www.youtube.com/embed/${firstVideo.key}`
    })

    const posterURL = computed(() => {
      if (!data.value.poster_path) return
      return `https://image.tmdb.org/t/p/w500/${data.value.poster_path}`
    })
    const backgroundURL = computed(() => {
      if (!data.value.backdrop_path) return
      return `https://image.tmdb.org/t/p/w1400_and_h450_face/${data.value.backdrop_path}`
    })

    return {
      isSuccess,
      data,
      backgroundURL,
      posterURL,
      isVideoSuccess,
      videos,
      videoURL,
    }
  },
  computed: {
    isFavorite() {
      return true
    },
  },

  created() {
    this.$emit('updateLayout', 'SinglePageLayout')
  },
})
</script>

<style scoped>
.poster,
.video {
  width: 100%;
}

.preview {
  background-color: #0f1c26;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
}

@media (min-width: 640px) {
  .offset {
    transform: translateY(-200px);
  }

  .poster {
    width: 27.37%;
  }

  .video {
    width: 73%;
  }

  .banner {
    background-color: #e5e5e5;
    height: 512px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
  }
}
</style>
