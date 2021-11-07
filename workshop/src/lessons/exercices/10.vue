<template>
  <div>
    <input class="border border-black" type="text" />
    <button>add fruit</button>
    <ul>
      <li>
        {{ fruits }}
        <button class="bg-blue-600 rounded">eat</button>
      </li>
    </ul>
  </div>
</template>

<script>
// you need make fruits and list reactive with composition api plugin
// https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api
// https://github.com/vuejs/composition-api

// import { ref } from '@vue/composition-api'

export default {
  setup() {
    const fruit = ''
    const list = ['apple', 'orange', 'grape', 'pear']

    function add() {
      // write the add function
    }

    function remove() {
      // write the delete function
    }

    return {
      fruit,
      list,
      add,
      remove,
    }
  },
}
</script>
