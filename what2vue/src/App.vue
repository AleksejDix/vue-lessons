<template>
  <LayoutDefault>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.params.id" />
    </transition>
    <template #stickybanner>
      <StickyBanner v-if="open" @kill="open = !open" />
    </template>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from '@/layouts/default'
import StickyBanner from '@/components/StickyBanner'
export default {
  components: {
    LayoutDefault,
    StickyBanner
  },
  data() {
    return { open: true }
  }
}
</script>
