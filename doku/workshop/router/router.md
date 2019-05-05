# Router

How to show different components based on the URL

[Vue Router Guide](https://router.vuejs.org/guide/#html)

```bash
vue add router
```

::: tip TASK
add router to our demo project with vue-cli
Create 2 pages: Home and Movies
:::

## Routes Lazy Loading and Code Splitting

```js
() => import("./Component.vue"),xs
```