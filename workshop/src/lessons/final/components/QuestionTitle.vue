<template>
  <button class="title" @click="question.toggle">
    <slot></slot>
  </button>
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
.title {
  padding: 0 18px;
  background: bisque;
  display: block;
  width: 100%;
  text-align: left;
  transition: max-height 0.2s ease-out;
}
</style>
