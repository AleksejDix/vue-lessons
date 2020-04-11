<template functional>
  <div class="py-2 px-3 lg:flex lg:p-0">
    <router-link
      v-for="{ name, params, query, title } in props.navigation"
      :key="title"
      active-class="bg-gray-900"
      class="block lg:inline-block px-3 py-2 rounded-md text-sm leading-6 font-medium text-white text-gray-300 "
      :to="{ name, params, query }"
      @click.native="listeners['close']"
      >{{ title }}</router-link
    >
  </div>
</template>
