<template functional>
  <router-link
    :to="{ name: 'cast', params: { id: props.movie.id, movie: props.movie } }"
  >
    <div class="relative pt-150 bg-grey-200 rounded overflow-hidden">
      <picture>
        <source
          :srcset="
            `https://image.tmdb.org/t/p/w342/${props.movie.poster_path} 1x, https://image.tmdb.org/t/p/w780/${props.movie.poster_path} 2x`
          "
        />
        <img
          v-if="props.movie.poster_path"
          class="movie__image inset-0 max-w-full w-full object-cover"
          :src="`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`"
          :alt="props.movie"
        />
      </picture>
    </div>
    <header class="py-2">
      <h2 class="truncate">
        {{ props.movie.title }}<span> • {{ props.movie.release_date }}</span>
      </h2>
      <div class="flex items-center owl-x">
        <div
          class="circle"
          :class="{
            red: props.movie.vote_average < 5,
            orange:
              props.movie.vote_average >= 5 && props.movie.vote_average < 7.5,
            green: props.movie.vote_average >= 7.5
          }"
        ></div>
        <div>{{ props.movie.vote_average * 10 }}%</div>
      </div>
    </header>
  </router-link>
</template>

<style>
.circle {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: black;
}

.green {
  background-color: #02d473;
}
.orange {
  background-color: orangered;
}
.red {
  background-color: crimson;
}
</style>
