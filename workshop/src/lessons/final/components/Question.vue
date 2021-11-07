<template>
  <div class="accordion border">
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed, provide, reactive } from '@vue/composition-api'
export default {
  setup() {
    const state = ref('closed')
    const isOpened = computed(() => state.value === 'opened')
    const isClosed = computed(() => state.value === 'closed')

    const open = () => (state.value = 'opened')
    const close = () => (state.value = 'closed')

    const toggle = () => (isOpened.value ? close() : open())

    provide(
      'question',
      reactive({
        isOpened,
        isClosed,
        toggle,
        open,
        close,
      })
    )
  },
}
</script>

<style scoped>
.accordion {
  background-color: #f5faff;
  color: #444;
  cursor: pointer;

  width: 100%;

  outline: none;
  font-size: 15px;
  transition: 0.4s;
}
</style>
