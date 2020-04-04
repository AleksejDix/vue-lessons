<template functional>
  <router-link
    class="movie__link"
    :to="{ name: 'cast', params: { id: props.movie.id, movie: props.movie } }"
  >
    <header class="movie__header">
      <h2 class="movie__title">
        {{ props.movie.title }}<span> • {{ props.movie.release_date }}</span>
      </h2>
    </header>

    <div class="movie__image-place">
      <picture>
        <source
          :srcset="
            `https://image.tmdb.org/t/p/w342/${props.movie.poster_path} 1x, https://image.tmdb.org/t/p/w780/${props.movie.poster_path} 2x`
          "
        />
        <img
          v-if="props.movie.poster_path"
          class="movie__image responsive"
          :src="`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`"
          :alt="props.movie"
        />
      </picture>
    </div>
  </router-link>
</template>

<style scoped>
.responsive {
  width: 100%;
  max-width: 100%;
}

.movie__header {
  padding: 10px;
}
.movie__link {
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
.movie__title {
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  white-space: nowrap;
}

.movie__image-place {
  order: -1;
  position: relative;
  padding-top: 150%;
  background-color: #0f1c26;
  border-radius: 4px;
  overflow: hidden;
}

.movie__image {
  order: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
