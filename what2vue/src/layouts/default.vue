<template>
  <div>
    <div class="bg-gray-800 pb-32">
      <nav class="bg-gray-800">
        <div class="">
          <div class="border-b border-gray-700 border-red">
            <div
              class="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-0 sm:px-6 lg:px-8"
            >
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <AppLogo />
                </div>
                <div class="hidden lg:block pl-10">
                  <NavigationList :navigation="navigation" />
                </div>
              </div>
              <div class="flex-1">
                <MultiSearch />
              </div>
              <div class="hidden lg:block">
                <div class="ml-4 flex items-center lg:ml-6">
                  <button
                    class="h-10 w-10 flex justify-center items-center  border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                    aria-label="Notifications"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <div v-click-outside="close" class="ml-3 relative">
                    <div>
                      <button
                        id="user-menu"
                        class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        aria-label="User menu"
                        aria-haspopup="true"
                        :aria-expanded="isOpen"
                        @click="toggle"
                      >
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
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
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Profile
                          </a>
                          <a
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            :to="{ name: 'favorites' }"
                            >Favorites{{ favoritesCount }}</a
                          >
                          <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >Log out</a
                          >
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex lg:hidden">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                  :aria-label="isMenuOpen ? 'Close main menu' : 'Main menu'"
                  :aria-expanded="isMenuOpen"
                  @click="isMenuOpen = !isMenuOpen"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      :class="{
                        hidden: isMenuOpen,
                        'inline-flex': !isMenuOpen
                      }"
                      class="inline-flex"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      :class="{
                        hidden: !isMenuOpen,
                        'inline-flex': isMenuOpen
                      }"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu
          :open="isMenuOpen"
          :navigation="navigation"
          @close="navClose"
        />
      </nav>
      <header class="py-10">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl leading-9 font-bold text-white">
            What 2 Vue Workshop App
          </h1>
        </div>
      </header>
    </div>
    <main class="-mt-32">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow px-4 py-6 sm:px-4">
          <slot></slot>
        </div>
      </div>
    </main>
    <div v-if="$slots.stickybanner" class="pb-24">
      <slot name="stickybanner"></slot>
    </div>
  </div>
</template>

<script>
import api from '@/api'

import AppLogo from '@/components/functional/Logo'
import MultiSearch from '@/components/MultiSearch'
import NavigationList from '@/components/functional/NavigationList'
import MobileMenu from '@/components/functional/MobileMenu'

export default {
  components: {
    AppLogo,
    MultiSearch,
    NavigationList,
    MobileMenu
  },
  data() {
    return {
      isOpen: false,
      isMenuOpen: false,
      navigation: [
        {
          title: 'Discover',
          name: 'discover',
          params: {},
          query: {
            page: 1,
            sort_by: 'popularity',
            sort_order: 'desc'
          }
        }
      ]
    }
  },
  computed: {
    favoritesCount() {
      return this.$store.getters.index.length
    }
  },
  mounted() {
    console.log(this.$slots)
    const cats = api.category.index()
    const catLinks = cats.map(({ name: title, id }) => ({
      title,
      name: 'category',
      params: {
        id
      },
      query: {
        page: 1
      }
    }))

    this.navigation = this.navigation.concat(catLinks)
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
    navOpen() {
      this.isMenuOpen = true
    },
    navClose() {
      this.isMenuOpen = false
    },
    navToggle() {
      if (this.isMenuOpen) {
        this.navClose()
      } else {
        this.navOpen()
      }
    }
  }
}
</script>
