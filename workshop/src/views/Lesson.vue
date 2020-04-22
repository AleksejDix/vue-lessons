<template>
  <div class="flex">
    <div class="w-1/2">
      <WorkshopInstruction />
    </div>
    <div class="w-1/2 relative">
      <div class="grid fixed h-full w-full top-0 pt-16">
        <WorkshopTabs />
        <div class="bg-white">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkshopInstruction from '@/components/WorkshopInstruction'
import WorkshopTabs from '@/components/WorkshopTabs'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    WorkshopInstruction,
    WorkshopTabs,
  },
  computed: {
    ...mapGetters(['lessons']),
  },
  watch: {
    lessons: {
      handler() {
        this.pickLesson(this.$route.params.id)
      },
      immediate: true,
    },
  },
  methods: {
    ...mapMutations(['pickLesson', 'removeLesson']),
  },
  beforeDestroyed() {
    this.removeLesson()
  },
}
</script>

<style scoped>
.grid {
  grid-template-rows: 42px 1fr 42px;
}
</style>
