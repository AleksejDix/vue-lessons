<template>
  <nav>
    <router-link
      v-for="tab in tabs"
      :key="tab"
      :to="{
        name: tab,
      }"
    >
      {{ tab }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['exercices', 'final', 'extra'],
    }
  },
}
</script>
