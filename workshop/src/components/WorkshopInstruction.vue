<template>
  <div v-if="lesson && lesson.instructions">
    <component class="prose" :is="lesson.instructions.module.default" />
  </div>
  <div v-else>
    Listen to the Teacher
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['lesson']),
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
  @apply bg-black p-8 text-white  overflow-auto;
}

.prose h1,
.prose h2,
.prose h3,
.prose p {
  @apply px-8;
}

.prose h1 {
  @apply text-4xl leading-none font-semibold;
}

.prose h2 {
  @apply text-3xl leading-tight mt-8;
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

.prose code {
  @apply bg-black rounded inline-block text-sm px-2;
}

/*
  IR_Black style (c) Vasily Mikhailitchenko <vaskas@programica.ru>
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #000;
  color: #f8f8f8;
}

.hljs-comment,
.hljs-quote,
.hljs-meta {
  color: #7c7c7c;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-tag,
.hljs-name {
  color: #96cbfe;
}

.hljs-attribute,
.hljs-selector-id {
  color: #ffffb6;
}

.hljs-string,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition {
  color: #a8ff60;
}

.hljs-subst {
  color: #daefa3;
}

.hljs-regexp,
.hljs-link {
  color: #e9c062;
}

.hljs-title,
.hljs-section,
.hljs-type,
.hljs-doctag {
  color: #ffffb6;
}

.hljs-symbol,
.hljs-bullet,
.hljs-variable,
.hljs-template-variable,
.hljs-literal {
  color: #c6c5fe;
}

.hljs-number,
.hljs-deletion {
  color: #ff73fd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>
