<template>
  <div class="ratio" :style="{ paddingTop: percent }">
    <img class="image" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    aspectRatio: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    percent() {
      return 100 / this.aspectRatio + '%'
    }
  }
}
</script>

<style scoped>
.ratio {
  height: auto;
  width: 100%;
  position: relative;
}
.image {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
}
</style>
