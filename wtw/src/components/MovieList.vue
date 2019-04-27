<template>
  <ul class="list-reset movies__list px-2">
    <li class="movies__list-item" v-for="movie in list" :key="movie.id">
      <MovieItem :movie="movie" />
    </li>
  </ul>
</template>

<script>
import MovieItem from "@/components/MovieItem";
export default {
  props: ["list"],
  components: { MovieItem }
};
</script>

<style>
.movies__list {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(171px, 1fr));
}
</style>
