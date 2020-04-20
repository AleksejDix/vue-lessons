<template>
  <div class="flex">
    <div class="w-1/2">
      <WorkshopInstruction
        v-if="lesson.instructions"
        :instruction="lesson.instructions.module"
      />
    </div>
    <div class="w-1/2 relative">
      <div class="grid fixed border border-black h-full w-full top-0 pt-16">
        <WorkshopTabs />
        <div class="bg-white">
          <router-view :lesson="lesson" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkshopInstruction from '@/components/WorkshopInstruction'

import WorkshopTabs from '@/components/WorkshopTabs'

export default {
  components: {
    WorkshopInstruction,
    WorkshopTabs,
  },
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      lesson: undefined,
    }
  },
  watch: {
    '$route.params.id': {
      handler(n) {
        this.getLesson(n)
      },
      immediate: true,
    },
  },
  methods: {
    getLesson(n) {
      this.lesson = this.workshop.lessons.find((lesson) => lesson.id === n)
    },
  },
}
</script>

<style scoped>
.grid {
  grid-template-rows: 42px 1fr 42px;
}
</style>
