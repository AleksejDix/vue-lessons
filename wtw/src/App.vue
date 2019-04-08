<template>
  <div id="app">
    <Navigation :navigation="categories" />
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      categories: [
        {
          title: "upcoming",
          url: "upcoming"
        },
        {
          title: "now playing",
          url: "now_playing"
        },
        {
          title: "top rated",
          url: "top_rated"
        },
        {
          title: "popular",
          url: "popular"
        }
      ]
    };
  }
};
</script>

<style>
html {
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
}

.main {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

img {
  display: inline-block;
  vertical-align: bottom;
}
</style>
