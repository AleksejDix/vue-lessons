# Forms in vue is a joy

Forms in vue.js are reactive

## Simple Checkbox with Bool

<FormCheckbox/>

```vue
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
```
