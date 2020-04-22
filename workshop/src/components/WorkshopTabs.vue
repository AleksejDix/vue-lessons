<template>
  <nav class="w-full flex">
    <router-link
      v-for="tab in tabs"
      :key="tab"
      exact-active-class="bg-gray-800"
      class="inline-block flex items-center px-3"
      :to="{
        name: tab,
      }"
    >
      {{ capitalize(tab) }}
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['exercices', 'final'],
    }
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
}
</script>
