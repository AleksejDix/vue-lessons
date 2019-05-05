# Dynamic component

Homepage

```vue about.html
<template>
  <h1>Welcome</h1>
</template>
```

About Page

```vue
<template>
  <h1>About</h1>
</template>
```

App

```vue
<template>
  <div>
    <select v-model="currentPage">
      <option v-for="page in pages" :value="page" :key="page">{{page}}</option>
    </select>
    <component :is="currentPage"/>
  </div>
</template>

<script>
export default {
  components: {Home, About}
  data() {
    return {
      currentPage: 'home',
      pages: ['home', 'about']
    };
  },
}
</script>
```

<DynamicComponent/>