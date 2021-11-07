<template>
  <div v-if="question.isOpened" class="panel">
    <slot></slot>
  </div>
</template>

<script>
import { inject } from '@vue/composition-api'
export default {
  setup() {
    const question = inject('question')
    return { question }
  },
}
</script>

<style scoped>
.panel {
  padding: 0 18px;
  background: white;
}
</style>
