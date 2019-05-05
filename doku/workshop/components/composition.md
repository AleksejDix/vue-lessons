# Component composition with slots

How can we combine components to avoid deep nesting.

## Define a slot

```vue
// SubmitButton.vue components
<template>
<button>
  <slot></slot>
</button>
</template>
```

## Using the slot

```vue
// Form.vue components
<template>
  <submit-button>
    send
  </submit-button>
</template>
```

### Named slots

```vue
// SubmitButton.vue components
<template>
<button>
  <slot name="before"></slot>
  <slot></slot>
  <slot name="after"></slot>
</button>
</template>
```

```vue
// Form.vue components
<template>
  <submit-button>
    send
    <template v-slot:after>▶</template>
  </submit-button>
</template>
```

<SubmitButton>send<template v-slot:after>▶</template></SubmitButton>
