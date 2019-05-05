<template>
  <button>
    <slot name="before"></slot>
    <slot></slot>
    <slot name="after"></slot>
  </button>
</template>

<style scoped>
button {
  font-size: 2rem;
  background-color: black;
  border-radius: 0;
  color: white;
  padding: 1rem 1.5rem;
}
</style>