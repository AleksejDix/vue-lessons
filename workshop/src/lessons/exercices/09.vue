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
// you need to loop over component with v-for
// https://vuejs.org/v2/guide/list.html

export default {
  data() {
    return {
      fruit: '',
      list: ['apple', 'orange', 'grape', 'pear'],
    }
  },
  methods: {
    add() {
      // write the add function
    },
    remove() {
      // write the delete function
    },
  },
}
</script>
