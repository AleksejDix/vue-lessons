<template>
  <div>
    <iframe
      class="w-full"
      :srcdoc="lesson[$route.name].module"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
}
</script>
