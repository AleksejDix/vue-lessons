import { defineStore } from 'pinia/dist/pinia.cjs'
import { ref, computed, watchEffect } from '@vue/composition-api'

export const useFavorites = defineStore('favorites', () => {
  const favorites = ref([])

  watchEffect(() => {
    console.log(favorites.value)
  })

  function create(payload) {
    favorites.value.push(payload)
  }

  function destroy(id) {
    favorites.value = favorites.value.filter((x) => x.id !== id)
  }

  function show(id) {
    return favorites.value.find((x) => x.id === id)
  }

  return {
    movies: computed(() => favorites.value),
    index: computed(() => favorites.value.length),
    create,
    destroy,
    show,
  }
})
