# Components - SFC - Single File Components

Vue Components inside a vue app are created from 3 Parts

## Normal Components

1. Create an instance
1. Have a State
1. Have Lifecycle Methods

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
