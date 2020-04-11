<template>
  <div>
    <h2 class="pb-4">Favorite genre</h2>
    <ul class="relative inline-flex flex-wrap shadow-sm -m-1">
      <li v-for="genre in genres" :key="genre.id" class="p-1">
        <button
          type="button"
          class="rounded-full px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none  transition ease-in-out duration-150"
        >
          {{ genre.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Profile',
  data() {
    return {
      genres: []
    }
  },
  async mounted() {
    const response = await api.genre.index()
    this.genres = response.genres
  }
}
</script>
