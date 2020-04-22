<template>
  <div>
    <input class="border border-black" type="text" v-model="fruit" />
    <button @click="add">add item</button>
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
        <button class="bg-blue-600 rounded" @click="removeItem(item)">
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
    }
  },
  methods: {
    add() {
      this.list.push(this.fruit)
    },
    remove(item) {
      this.list = this.list.filter((i) => i !== item)
    },
  },
}
</script>
