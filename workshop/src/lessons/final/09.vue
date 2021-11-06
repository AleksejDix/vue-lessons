<template>
  <div>
    <form @submit.prevent="add">
      <input v-model="fruit" class="border border-black" type="text" />
      <button>add item</button>
    </form>
    {{ counter }}
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
        <button class="bg-blue-600 rounded" @click="remove(item)">
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruit: '',
      list: ['apple', 'orange', 'grape', 'pear'],
      counter: null,
    }
  },
  watch: {
    list(value) {
      if (value.length === 0) {
        console.log('you have no fruits')
      }
    },
  },
  methods: {
    add() {
      this.list.push(this.fruit)
      this.fruit = ''
    },
    remove(item) {
      this.list = this.list.filter((i) => i !== item)
    },
  },
}
</script>
