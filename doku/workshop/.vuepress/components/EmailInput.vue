<template>
  <div>
    <label>
      <div>email:</div>
      <input type="email" v-model="email" />
    </label>
    <pre class="language-text">{{ email }}</pre>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: ""
    };
  }
};
</script>
