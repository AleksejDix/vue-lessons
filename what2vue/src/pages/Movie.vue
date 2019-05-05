<template>
  <div v-if="movie">
    <div
      class="banner"
      :style="{
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundImage: 'url(' + backgroundURL + ')'
      }"
    ></div>
    <section class="container">
      <div class="offset owl">
        <div class="preview">
          <div class="poster">
            <img class="poster__img" v-if="posterURL" :src="posterURL" />
          </div>
          <div class="video">
            <div class="ratio" v-if="videoURL">
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
        <div class="px-2">
          <h1 class="movie__title">{{ movie.title }}</h1>
          <button class="button" @click="toggleFavorite">
            {{ isFavorite ? "remove from" : "add to" }} favorites
          </button>

          <ul class="list-reset">
            <li v-for="person in people.crew" :key="person.credit_id">
              <Person :person="person" />
            </li>
          </ul>
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
      id: this.$route.params.id,
      loaded: false,
      movie: "",
      video: "",
      people: {}
    };
  },
  computed: {
    isFavorite() {
      return !!this.$store.getters.show(this.movie.id);
    },
    videoURL() {
      if (!this.video) return;
      return `https://www.youtube.com/embed/${this.video}`;
    },
    posterURL() {
      if (!this.movie.poster_path) return;
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    },
    backgroundURL() {
      if (!this.movie.backdrop_path) return;
      return `https://image.tmdb.org/t/p/w1400_and_h450_face/${
        this.movie.backdrop_path
      }`;
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite
        ? this.$store.dispatch("DESTROY_FAVORITE", this.movie.id)
        : this.$store.dispatch("STORE_FAVORITE", this.movie);
    },
    async getMovie() {
      try {
        const response = await api.movie.show(this.id);
        console.log(response.status);
        // if (response.status === 404) {
        //   throw new Error(404);
        // }
        const movie = response.data;
        return movie;
      } catch (error) {
        if (error.response.status === 404) {
          this.$router.push({ name: "404" });
        }
      }
    },
    async getFirstVideo() {
      const response = await api.movieVideo.index()(this.id);
      const [firstVideo] = response.data.results;
      if (!firstVideo) return;
      if (!firstVideo.key) return;
      return firstVideo.key;
    },
    async getPeople() {
      const response = await api.moviePeople.index()(this.id);
      return {
        crew: response.data.crew,
        cast: response.data.cast
      };
    },
    async getMoviePage() {
      this.loaded = false;

      const setMovie = movie => ((this.movie = movie), movie);
      const getVideoAndPeople = () =>
        Promise.all([this.getFirstVideo(), this.getPeople()]);
      const setVideoAndPeople = ([video, people]) => {
        this.video = video;
        this.people = people;
      };

      this.getMovie()
        .then(setMovie)
        .then(getVideoAndPeople)
        .then(setVideoAndPeople);

      this.loaded = true;
    }
  },
  mounted() {
    this.getMoviePage();
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
