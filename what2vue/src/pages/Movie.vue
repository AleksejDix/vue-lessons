<template>
  <div v-if="movie">
    <div
      v-if="loaded"
      class="banner"
      :style="{
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundImage:
          'url(https://image.tmdb.org/t/p/w1400_and_h450_face/' +
          movie.backdrop_path +
          ')'
      }"
    ></div>
    <section class="container">
      <div class="offset owl">
        <div class="preview">
          <div class="poster">
            <img
              class="poster__img"
              v-if="movie.poster_path"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              :alt="movie.title"
            />
          </div>
          <div class="video">
            <div class="ratio" v-if="video">
              <iframe
                class="ratio-object"
                :src="`https://www.youtube.com/embed/${video}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="px-2">
          <h1 class="movie__title">{{ movie.title }}</h1>
          <button class="button" @click="toggleFavorite">
            {{ isFavorite ? "remove from" : "add to" }} favotites
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      loaded: false,
      video: "",
      people: null,
      movie: null
    };
  },
  computed: {
    isFavorite() {
      return !!this.$store.getters.show(this.movie.id);
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite
        ? this.$store.dispatch("DESTROY_FAVORITE", this.movie.id)
        : this.$store.dispatch("STORE_FAVORITE", this.movie);
    },
    async getMovie() {
      this.loaded = false;
      const id = this.$route.params.id;

      const movie = await api.movie.show(id);
      this.movie = movie.data;

      const people = await api.moviePeople.index()(id);
      this.crew = people.data;

      const video = await api.movieVideo.index()(id);
      const [first] = video.data.results;
      this.video = first.key;

      this.loaded = true;
    }
  },
  mounted() {
    this.getMovie();
  }
};
</script>

<style>
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
    transform: translateY(-300px);
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

  .container {
    max-width: 90%;
    margin: 0 auto;
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
