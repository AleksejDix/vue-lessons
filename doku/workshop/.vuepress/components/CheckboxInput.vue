<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" />
      <span>checkbox</span>
    </label>
    <pre class="language-text">{{ isChecked }}</pre>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isChecked: false
    };
  }
};
</script>
