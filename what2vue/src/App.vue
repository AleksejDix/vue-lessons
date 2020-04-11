<template>
  <LayoutDefault>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.params.id" />
    </transition>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from './globals/layouts/default'
export default {
  components: {
    LayoutDefault
  }
}
</script>
