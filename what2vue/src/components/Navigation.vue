<template>
  <nav class="c-navigation">
    <div class="container">
      <div class="c-navigation__grid">
        <div class="c-navigation__left">
          <AppLogo />
          <ul class="c-navigation__list">
            <li
              v-for="{ name, params, query, title } in navigation"
              :key="title"
              class="c-navigation__list-item"
            >
              <router-link
                class="c-navigation__link"
                :to="{ name, params, query }"
                >{{ title }}</router-link
              >
            </li>
            <li class="c-navigation__list-item">
              <router-link
                class="c-navigation__link"
                :to="{ name: 'favorites' }"
                >Favorites <Badge>{{ favoritesCount }}</Badge></router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <button @click="login">login</button>
          <img
            class="user"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppLogo from '@/components/functional/Logo'
import Badge from '@/components/functional/Badge'
import api from '@/api'

export default {
  components: {
    AppLogo,
    Badge
  },
  data() {
    return {
      navigation: [
        {
          title: 'Discover',
          name: 'discover',
          params: {},
          query: {
            page: 1,
            sort_by: 'popularity',
            sort_order: 'desc'
          }
        }
      ]
    }
  },
  computed: {
    favoritesCount() {
      return this.$store.getters.index.length
    }
  },
  mounted() {
    const cats = api.category.index()
    const catLinks = cats.map(({ name: title, id }) => ({
      title,
      name: 'category',
      params: {
        id
      },
      query: {
        page: 1
      }
    }))

    this.navigation = this.navigation.concat(catLinks)
  },
  methods: {
    async createToken() {
      const response = await api.requestToken.create()
      const { success, request_token } = response
      if (success) {
        window.open(
          `https://www.themoviedb.org/auth/access?request_token=${request_token}&redirect_to=https://localhost:8080/`
        )
      }
      return response
    },
    async createAccess(payload) {
      const response = await api.accessToken.create(payload)
      return response
    },
    login() {
      this.createToken()
    }
  }
}
</script>

<style scoped>
.c-navigation {
  background: #101d27;
  height: 64px;
  display: flex;
  align-items: center;
}

.c-navigation__left,
.c-navigation__grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-navigation__list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 1rem;
  margin: 0;
}

.c-navigation__list-item {
  padding: 0.5rem 0.5rem;
}

.c-navigation__link {
  white-space: nowrap;
  text-decoration: none;
  width: 100%;
  color: white;
  font-weight: 600;
  text-decoration: uppercase;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  display: inline-block;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 300;
  background-color: #161e2e;
}

.c-navigation__link.router-link-active {
  color: #02d473;
}

.user {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

@media screen and (min-width: 640px) {
  .c-navigation__link + .c-navigation__link {
    margin-left: 1.5rem;
  }
}
</style>
