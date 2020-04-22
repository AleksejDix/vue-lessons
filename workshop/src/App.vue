<template>
  <div>
    <WorkshopNavigation>
      <template #title>{{ title }}</template>
    </WorkshopNavigation>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import WorkshopNavigation from '@/components/WorkshopNavigation'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    WorkshopNavigation,
  },
  computed: {
    ...mapGetters(['title']),
  },
  mounted() {
    this.workshopCreate(this.workshop)
  },
  methods: {
    ...mapActions(['workshopCreate']),
  },
}
</script>
