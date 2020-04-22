<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>
        <span>Username:</span>
        <input class="border border-black" type="text" v-model="value" />
      </label>
      <div :style="{ color: 'red' }">{{ error }}</div>
    </div>
    <button :disabled="Boolean(error)">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  computed: {
    error() {
      return this.value === this.value.toLowerCase()
        ? null
        : 'Username must be lower case'
    },
  },
  methods: {
    handleSubmit(event) {
      alert(event.target[0].value)
    },
  },
}
</script>
