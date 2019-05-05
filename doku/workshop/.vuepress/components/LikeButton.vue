<template>
  <div>
    <button @click="increment">{{ like }} {{ likeText }}</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      like: 0 // reactive data
    };
  },
  computed: {
    likeText() {
      return this.like === 1 ? "like" : "likes";
    }
  },
  methods: {
    reset() {
      this.like = 0;
    },
    increment() {
      this.like++;
    }
  }
};
</script>

<style scoped>
button {
  font-size: 2rem;
  background: black;
  color: white;
  padding: 1rem;
  border: 0;
}
</style>
