<template>
  <div class="home">
    <h1 class="text-white text-center font-white text-4xl font-bold py-10">
      {{ workshop.title }}
    </h1>
    <WorkshopLessons :lessons="workshop.lessons" />
  </div>
</template>

<script>
import WorkshopLessons from '@/components/WorkshopLessons'

export default {
  name: 'Home',
  components: {
    WorkshopLessons,
  },
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
}
</script>
