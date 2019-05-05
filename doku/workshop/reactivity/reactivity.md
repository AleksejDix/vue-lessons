# Vue.js Reactivity System

Vue.js 2.x works with ES5 Getters and Setters
Vue.js turns every JavaScript Object getters and setters

```js

const obj = {
  hallo: 'welt'
}
```

`this` inside vue maps to internal `data` and other functionalies of vue

```js
const obj = {
  data: {
    hallo: 'welt'
  },
  get hallo() {
    console.log(`asked for the hallo`)
    return this.data.hallo
  },
  set hallo(value) {
    console.log(`set hallo to new value: ${value}`)
    this.data.hallo = value
  }
}
```

## Vue Component Constructor

```js
const data = { hallo: 'welt' }

const vm = new Vue({
  data
})

```

::: tip task
check if this statement is true
:::

```js
data.hallo === vm.$data.hallo
```

This is all you need to know to be productive