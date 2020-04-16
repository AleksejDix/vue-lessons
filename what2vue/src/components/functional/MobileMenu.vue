<template functional>
  <div
    v-if="props.open"
    v-bind="data.$listeners"
    class="border-b border-gray-700 lg:hidden"
  >
    <NavigationList :navigation="props.navigation" v-on="listeners" />
  </div>
</template>
