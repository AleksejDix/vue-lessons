<template functional>
  <article>
    <router-link
      class="person-link"
      :to="{ name: 'person', params: { id: props.person.id } }"
    >
      <div class="relative bg-grey-200 w-full py-150">
        <img
          v-if="props.person.profile_path"
          class="absolute rounded w-full h-full block inset-0"
          :src="`https://image.tmdb.org/t/p/w500/${props.person.profile_path}`"
          :alt="props.person.name"
        />
      </div>
      <span class="human">
        {{ props.person.name }}
      </span>
    </router-link>
  </article>
</template>

<style scoped>
.person-link {
  text-decoration: none;
}

.py-150 {
  padding-top: 150%;
}
</style>
