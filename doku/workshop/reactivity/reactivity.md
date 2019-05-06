# Vue.js Reactivity System

Vue.js 2.x works with ES5 getters and setters
Vue.js turns every JavaScript Object into getters and setters

```js

const obj = {
  hallo: 'welt'
}
```

`this` inside vue maps to internal `data` and other vue functionalities

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