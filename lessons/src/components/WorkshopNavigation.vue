<template>
  <header class="bg-gray-800 h-16 flex items-center shadow sticky top-0 z-10">
    <nav class="px-6 text-white">
      <router-link class="flex items-center" :to="{ name: 'home' }">
        <div class="w-10">
          <img class="w-full" src="../assets/logo.png" alt="" />
        </div>
        <div class="pl-4">
          <span class="font-bold tracking-wide text-md leading-none">
            <slot name="title" />
          </span>
          <div class="text-gray-500 text-md leading-none tracking-wide">
            Workshop
          </div>
        </div>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>
