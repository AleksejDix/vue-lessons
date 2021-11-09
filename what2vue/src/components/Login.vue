<template>
  <div>
    <div v-click-outside="close" class="ml-3 relative">
      <div>
        <button
          id="user-menu"
          class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
          aria-label="User menu"
          aria-haspopup="true"
          :aria-expanded="isOpen"
          @click="toggle"
        ></button>
      </div>
      <transition
        enter-class="transform opacity-0 scale-95"
        enter-active-class="transition ease-out duration-100"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-to-class="transform opacity-0 scale-95"
        leave-class="transform opacity-100 scale-100"
      >
        <div
          v-show="isOpen"
          class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
        >
          <div class="py-1 rounded-md bg-white shadow-xs">
            <router-link
              :to="{
                name: 'profile',
              }"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click.native="close"
              >Profile
            </router-link>
            <router-link
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              :to="{ name: 'favorites' }"
              >Favorites 9999
            </router-link>
            <button
              class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log out
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div>
      <button
        class="block border-2 border-green-300 lg:inline-block px-3 py-2 rounded-md text-sm leading-6 font-medium text-green-300 hover:text-green-400 border-green-400 transition-all"
      >
        login
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    toggle() {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
    },
  },
}
</script>
