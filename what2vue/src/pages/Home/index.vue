<template>
  <section class="container owl py-2">
    <ul class="list-reset owl">
      <li v-for="category in categories" :key="category.id">
        <CategoryItem :category="category" />
      </li>
    </ul>
  </section>
</template>

<script>
import CategoryItem from '@/components/CategoryItem'
import api from '@/api'

export default {
  components: {
    CategoryItem
  },
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    this.categories = api.category.index()
  }
}
</script>
