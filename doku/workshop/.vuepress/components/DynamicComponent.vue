<template>
  <div>
    <select v-model="currentPage">
      <option v-for="page in pages" :value="page" :key="page">{{
        page
      }}</option>
    </select>
    <component :is="currentPage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: "home",
      pages: ["home", "about"]
    };
  }
};
</script>