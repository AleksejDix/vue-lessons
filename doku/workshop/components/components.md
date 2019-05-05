# Components - SFC - Single File Components

Vue Components inside a vue app are created from 3 Parts

## Components anatomy SFC

<LikeButton/>

```vue
<template>
  <button @click="increment">{{like}} -{{likeText}}</button>
</template>

<script>
export default {
  name: "Like Button",
  data() {
    return {
      like: 0 // reactive data
    }
  },
  // derived values are cached and synchronous
  // should be pure functions
  computed: {
    likeText() {
      return this.like === 1 ? "like" : "likes"
    }
  },
  watch: { // async actions
    like (newValue, oldValue) {
      // some async function
      // maybe call to the REST API
    }
  },
  methods: { // actions
    increment() {
      this.like++
    }
  },
  // Lifecycle hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}
</script>

<style scoped>
button {
  /* some css */
}
</style>
```

## Normal Components

1. Create an instance
1. Have a State
1. Have Lifecycle Hooks

```vue
<template>
  <app-card>
    <app-title>{{title}}</app-title>
  </app-card>
</template>

<script>
export default {
  components: { AppCard, AppTitle },
  data() {
    return {
      title: "Vue Workshop"
    }
  }
}
</script>

<style>
</style>
```

## Functional Components

Lead Nodes in the dependency tree

```vue
<template functional>
  <h2>{{props.title}}</h2>
</template>
```

::: tip TASK
Create 2 Component in the app

1. Normal Component
2. Functional Leaf Component
:::
