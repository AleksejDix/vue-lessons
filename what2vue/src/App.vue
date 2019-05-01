<template>
  <div id="app">
    <Navigation />
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>

<style>
html {
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: #192531;
  box-sizing: border-box;
  height: 100%;
  color: #9b9b9b;
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
  height: 100%;
  min-height: 100%;
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
  display: flex;
  height: 100%;
  overflow: hidden;
}

.main {
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}

img {
  display: inline-block;
  vertical-align: bottom;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-radius: 4px;
  line-height: 1.5;
  border: 1px solid #02d473;
  color: #02d473;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  max-height: 42px;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 0.375rem;
}

::-webkit-scrollbar:horizontal {
  height: 0.375rem;
}

::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: #192531;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #02d473;
}

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #02d473;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #02d473, 0 0 5px #02d473;
  opacity: 1;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #02d473;
  border-left-color: #02d473;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.list-reset {
  list-style: none;
  padding: 0;
  margin: 0;
}

.flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.button {
  text-decoration: none;
  min-height: 42px;
  line-height: 1.5px;
  font-size: 13px;
  border: none;
  padding: 10px 12px 9px;
  background-color: #02d473;
  color: black;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.owl > * + * {
  margin-top: 2rem;
}

.px-2 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-2 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
