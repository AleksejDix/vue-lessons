<template>
  <div>
    <h2 class="pb-4">Favorite genre</h2>

    <ButtonGroup :buttons="genres" />
  </div>
</template>

<script>
import api from '@/api'
import ButtonGroup from '@/components/ButtonGroup'

const rename = ({ id: value, name: label }) => ({
  value,
  label
})

export default {
  name: 'Profile',
  components: {
    ButtonGroup
  },
  data() {
    return {
      favoriteGenre: [],
      genres: [],
      countries: []
    }
  },
  mounted() {
    this.getGenres()
    this.getCountries()
  },
  methods: {
    async getGenres() {
      const response = await api.genre.index()
      this.genres = response.genres.map(rename)
      return response
    },
    async getCountries() {
      const response = await api.countries.index()
      this.countries = response
      return response
    }
  }
}
</script>
