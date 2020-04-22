<template>
  <form >
    <div>
      <label>
        <span>Username:</span>
        <input type="text"/>
      </label>
      <div :style="{ color: 'red' }">{{ error }}</div>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  // value to the data
  // use computed to get the error
  // https://vuejs.org/v2/guide/computed.html

  // use v-model to bind the the data value to the input
  // https://vuejs.org/v2/api/#v-model
  methods: {
    handleSubmit(event) {
      alert(event.target[0].value)
    },
  },
}
