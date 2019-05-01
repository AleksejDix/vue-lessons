# Component Lifecycle And instance

```js
Vue({
  el: '.todoapp', // which element is connected to the component
  data: () => ({}), // reactive data of the component(must be a function)
  components: {} // register local component, which will be used in this component,
  mounted() {},
  destroyed() {}
})
```

We can hook into the component at several timeslots.

![lol](https://vuejs.org/images/lifecycle.png)

::: tip
create a component with moast user hooks: `mounted` and `destroyed`
:::