# Communication

How do components talk to each other

## Events

Listen to events

```vue
<template>
  <form @submit="sendContactForm">
    <button type="button" @click="sendContactForm">send<button>
  </form>
</template>
```

Emitting a custom event

```vue
<template>
  <form @submit="$emit('submit', payload)">
  </form>
</template>
```

```vue
<template>
  <button @submit="$emit('like', 1)"></button>
</template>
```

listening to custom Event

```vue
<template>
  <LikeButton @like="send"/>
</template>

<script>
export default {
  methods: {
    send(payload) {
      this.likes = this.likes + payload
    }
  }
}
</script>
```

How to Send data with Events

```vue
<template>
  <LikeButton @like="send"/>
</template>

<script>
export default {
  methods: {
    send(payload) {
      this.likes = this.likes + payload
    }
  }
}
</script>
```

## Props

```vue
// parent
<template>
  <LikeButton :increment="10" @like="send"/>
</template>
</script>
```

```vue
// child
<template>
   <button @submit="$emit('like', increment)"></button>
</template>

<script>
export default {
  props: ["increment"]
};
</script>

```

```vue
// child functional
<template functional>
   <button @submit="listeners.like(props.increment)"></button>
</template>
```

::: tip Task

Create a  Functional Like Button Component with `<slot>`