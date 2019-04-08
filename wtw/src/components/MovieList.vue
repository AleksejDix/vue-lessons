<template>
  <ul class="movies__list">
    <li class="movies__list-item" v-for="movie in list" :key="movie.id">
      <Movie :movie="movie" />
    </li>
  </ul>
</template>

<script>
import Movie from "@/components/Movie";
export default {
  props: ["list"],
  components: { Movie }
};
</script>

<style>
.movies__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5rem;
}

.movies__list-item {
  width: 50%;
  padding: 1.5rem;
}

@media screen and (min-width: 640px) {
  .movies__list-item {
    width: 20%;
  }
}
</style>
