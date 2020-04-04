<template functional>
  <article>
    <router-link
      class="person-link"
      :to="{ name: 'person', params: { id: props.person.id } }"
    >
      <div class="image">
        <img
          v-if="props.person.profile_path"
          class="avatar"
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

.image {
  background-color: #0e1b25;
  display: block;
  position: relative;
  width: 100%;
  padding-top: 150%;
}
.avatar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
}

.human {
  color: #f5f5f5;
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  white-space: nowrap;
}
</style>
