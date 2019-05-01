<template>
  <nav class="c-navigation">
    <app-logo></app-logo>
    <ul class="c-navigation__list">
      <li
        class="c-navigation__list-item"
        v-for="{ name, params, query, title } in navigation"
        :key="title"
      >
        <router-link class="c-navigation__link" :to="{ name, params, query }">{{
          title
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from "./Logo";
import api from "@/api";

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      navigation: [
        {
          title: "Discover",
          name: "discover",
          params: {},
          query: {
            page: 1,
            sort_by: "popularity",
            sort_order: "desc"
          }
        }
      ]
    };
  },
  mounted() {
    const cats = api.category.index();
    const catLinks = cats.map(({ name: title, id }) => ({
      title,
      name: "category",
      params: {
        id
      },
      query: {
        page: 1
      }
    }));

    this.navigation = this.navigation.concat(catLinks);
  }
};
</script>

<style scoped>
.c-navigation {
  background: #101d27;
}

.c-navigation__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.c-navigation__list-item {
  font-size: 14px;
}

.c-navigation__link {
  white-space: nowrap;
  text-decoration: none;
  width: 100%;
  color: #9b9b9b;
  font-weight: 600;
  text-decoration: uppercase;
  padding: 0 1rem;
  line-height: 2;
  display: inline-block;
}

.c-navigation__link.router-link-active {
  color: #02d473;
}

@media screen and (min-width: 640px) {
  .c-navigation__link + .c-navigation__link {
    margin-left: 1.5rem;
  }
}
</style>
