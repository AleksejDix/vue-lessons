<template>
  <div class="home">
    <h1 class="text-white text-center font-white text-4xl font-bold py-10">
      {{ title }}
    </h1>
    <WorkshopLessons />
  </div>
</template>

<script>
import WorkshopLessons from '@/components/WorkshopLessons'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    WorkshopLessons,
  },
  computed: {
    ...mapGetters(['title']),
  },
}
</script>
