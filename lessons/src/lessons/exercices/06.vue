<template>
  <div>
    <BoxSmall />
  </div>
</template>

<script>
export default {
  components: {
    BoxSmall: {
      template: `<div
      :class="box box--small"
      :style={backgroundColor: 'lightblue'}
    >
      small lightblue box
    </div>`,
    },
  },
}
</script>
