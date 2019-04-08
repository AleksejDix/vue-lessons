<template functional>
  <router-link
    class="movie__link"
    :to="{ name: 'movie', params: { id: props.movie.id } }"
  >
    <header class="movie__header">
      <h2 class="movie__title">{{ props.movie.title }}</h2>
    </header>
    <div class="movie__image">
      <img
        class="responsive"
        :src="`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`"
        :alt="props.movie"
      />
    </div>
  </router-link>
</template>

<style>
.responsive {
  width: 100%;
  max-width: 100%;
}
.movie__link {
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
}
.movie__title {
  font-size: 14px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie__image {
  order: -1;
}
</style>
