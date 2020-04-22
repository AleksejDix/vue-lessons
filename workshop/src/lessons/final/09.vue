<template>
  <div>
    <form @submit.prevent="add">
      <input class="border border-black" type="text" v-model="fruit" />
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
    list(value, oldValue) {
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
