<template>
  <nav class="c-navigation">
    <app-logo></app-logo>
    <ul class="c-navigation__list">
      <li
        class="c-navigation__list-item"
        v-for="item in navigation"
        :key="item.title"
        @click="$emit('changePage', item.url)"
      >
        <router-link
          class="c-navigation__link"
          :to="{ name: 'category', params: { category: item.url } }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from "./Logo";

export default {
  components: {
    AppLogo
  },
  props: ["navigation"]
};
</script>

<style scoped>
.c-navigation {
  height: 100%;
  display: flex;
  background: white;
  align-items: center;
}

.c-navigation__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.c-navigation__list-item {
  font-size: 14px;
}

.c-navigation__link {
  text-decoration: none;
  height: 100%;
  color: inherit;
  font-weight: 600;
  text-decoration: uppercase;
  padding: 1rem 1.5rem;
  display: inline-block;
  border-radius: 100px;
}

.c-navigation__link.router-link-active {
  background-color: #f5f5f5;
}

@media screen and (min-width: 640px) {
  .c-navigation__link + .c-navigation__link {
    margin-left: 1.5rem;
  }
}
</style>
