<template>
  <div v-if="show" class="notification">
    <slot></slot>
    <button>close</button>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    const timer = setTimeout(() => {
      this.$emit('close')
    }, 3000)
    clearTimeout(timer)
  }
}
</script>
