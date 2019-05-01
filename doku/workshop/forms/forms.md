# Forms in vue is a joy

Forms in vue.js are reactive

## Checkbox with v-model

<CheckboxInput/>

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

## Input with v-model

<form @submit.prevent>
  <EmailInput/>
</form>

```vue
<template>
  <div>
    <label>
      <div>email:</div>
      <input type="email" v-model="email" />
    </label>
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

```

::: tip
  Submit a newsletter form with e-mail and data privacy checkbox
  Log the form to the console.
:::