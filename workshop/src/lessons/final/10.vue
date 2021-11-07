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
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const fruit = ref('')
    const list = ref(['apple', 'orange', 'grape', 'pear'])
    const counter = ref(null)

    watch(
      () => list.value,
      (value) => {
        if (value.length === 0) {
          console.log('you have no fruits')
        }
      }
    )

    function add() {
      list.value.push(fruit)
      fruit.value = ''
    }

    function remove(item) {
      list.value = list.value.filter((i) => i !== item)
    }

    return {
      fruit,
      list,
      counter,
      add,
      remove,
    }
  },
}
</script>
