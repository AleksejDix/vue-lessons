<template>
  <section class="max-w-7xl mx-auto sm:px-6 lg:px-8 owl">
    <ul class="owl">
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
