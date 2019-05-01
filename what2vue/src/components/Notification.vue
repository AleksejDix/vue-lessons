<template>
  <div v-if="show" class="notification">
    <slot></slot>
    <button>close</button>
  </div>
</template>

<script>
export default {
  props: ["show"],
  mounted() {
    const timer = setTimeout(() => {
      this.$emit("close");
    }, 3000);
    clearTimeout(timer);
  }
};
</script>
