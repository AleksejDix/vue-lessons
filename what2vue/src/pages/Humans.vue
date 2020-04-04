<template>
  <section>
    <ul class="list-reset people">
      <li v-for="person in peopleType" :key="person.credit_id">
        <Person :person="person" />
      </li>
    </ul>
  </section>
</template>

<script>
import api from '@/api'

import Person from '@/components/Person'
export default {
  components: { Person },
  data() {
    return {
      id: this.$route.params.id,
      people: {}
    }
  },
  computed: {
    peopleType() {
      return this.people[this.$route.name]
    }
  },
  asmounted() {
    this.getPeople()
  },
  methods: {
    async getPeople() {
      const response = await api.moviePeople.index(this.id)
      this.peope = {
        crew: response.data.crew,
        cast: response.data.cast
      }
      return response
    }
  }
}
</script>

<style scoped>
.people {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>
