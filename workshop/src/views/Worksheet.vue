<template>
  <div class="text-black" v-if="lesson">
    <template v-if="isComponent">
      <component :is="lesson[$route.name].module.default" />
    </template>
    <template v-if="isHTML">
      <iframe
        class="w-full"
        :srcdoc="lesson[$route.name].module.default"
        frameborder="0"
      ></iframe>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    isComponent() {
      if (!this.lesson) return
      return this.lesson[this.$route.name].ext === 'vue'
    },
    isHTML() {
      if (!this.lesson) return
      return this.lesson[this.$route.name].ext === 'html'
    },
    ...mapGetters(['lesson']),
  },
}
</script>
