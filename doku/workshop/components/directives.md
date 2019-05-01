# Build in template directives

Vue has some build-in directives for declarative rendering

## Show/Hide

### `v-show`

Conditionaly show and hide markup in the DOM

```vue
<div v-show="showMore">more text</div>
```

### `v-if` `v-else`

Conditionaly add and remove markup from the DOM

```vue
<div v-if="checked">Yes</div>
<div v-else>No</div>
```

## Looping

How to iterate over data

### `v-for in`

iteration over an Array

```vue
<ul>
  <li v-for="item in list" :key="item.id><li>
</ul>
```

## Data Binding

### `v-bind:` or just `:`

```vue
<button v-on:click="handleClick"></button>
<button @click="handleClick"></button>
```

## Events

### `v-on:` or just `@`

```vue
<button v-on:click="handleClick"></button>
<button @click="handleClick"></button>
```


## Slots

### `v-slot:` or just `#`

```vue
<header v-slot:header></header>
<header #header"></header>
```