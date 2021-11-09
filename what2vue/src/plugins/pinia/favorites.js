import { defineStore } from 'pinia'
import { computed, watchEffect } from '@vue/composition-api'
import { useStorage } from '@vueuse/core'

export const useFavorites = defineStore('favorites', () => {
  const favorites = useStorage('favorites', [])

  const count = computed(() => favorites.value.length)

  useStorage('favorites', favorites.value)

  watchEffect(() => {
    console.log(count.value)
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
    count,
    create,
    destroy,
    show,
  }
})
