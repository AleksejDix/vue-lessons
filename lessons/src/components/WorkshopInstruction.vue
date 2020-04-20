<template>
  <div>
    <div class="prose owl" v-html="instruction"></div>
  </div>
</template>

<script>
export default {
  props: {
    instruction: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.prose {
  @apply py-12;
}
.prose > * + * {
  margin-top: 1.5rem;
}

.prose pre {
  @apply bg-black p-8 text-white;
}

.prose h1,
.prose h2,
.prose h3,
.prose p {
  @apply px-8;
}

.prose h1 {
  @apply text-3xl leading-tight font-black;
}

.prose h2 {
  @apply text-2xl leading-tight font-bold mt-8;
}

.prose p {
  @apply text-lg leading-normal font-medium;
}

.prose a {
  @apply underline text-green-400;
}

.prose blockquote {
  @apply border-l-2 border-green-400 ml-8;
}
</style>
