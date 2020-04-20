<template>
  <ul class="max-w-3xl mx-auto -m-2">
    <li
      v-for="(lesson, index) in lessons"
      :key="lesson.id"
      class="p-2 relative"
    >
      <div
        class="absolute bg-white"
        :style="{
          width: '2px',
          left: '43px',
          top: index === 0 ? '50%' : 0,
          bottom: index === lessons.length - 1 ? '50%' : 0,
        }"
      ></div>
      <div
        class="group rounded bg-gray-800 px-6 py-4 hover:bg-black flex items-center"
      >
        <div class="flex-1">
          <router-link
            :to="{
              name: 'exercices',
              params: {
                id: lesson.id,
              },
            }"
            class="inline-block"
          >
            <h2 class="flex items-center">
              <div
                class="rounded-full group-hover:bg-green-100 group-hover:bg-green-800 border-2 w-6 h-6 flex items-center justify-center text-xs bg-gray-800 relative z-10"
              >
                {{ lesson.id }}
              </div>
              <span
                class="pl-6 group-hover:text-green-500 font-bold text-white text-xl"
              >
                {{ lesson.title }}
              </span>
            </h2></router-link
          >
        </div>
        <div class="flex">
          <div class="p-2">
            <router-link
              :to="{
                name: 'exercices',
                params: {
                  id: lessons.id,
                },
              }"
              class="inline-block flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="text-green-500"
              >
                <path
                  class="fill-current"
                  d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"
                />
              </svg>
              <div class="p-2">
                Exercice
              </div>
            </router-link>
          </div>
          <div v-if="lesson.final" class="p-2">
            <a
              class="inline-block flex items-center"
              :href="lesson"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="text-green-500"
              >
                <path
                  class="fill-current"
                  d="M11 20v-2.08a6 6 0 0 1-4.24-3A4.02 4.02 0 0 1 2 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v5a4 4 0 0 1-4.76 3.93A6 6 0 0 1 13 17.92V20h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h4zm6.92-7H18a2 2 0 0 0 2-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 0 1 6 12V6H4v5a2 2 0 0 0 2.08 2zM8 4v8a4 4 0 1 0 8 0V4H8z"
                />
              </svg>
              <div class="p-2">
                Final
              </div>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    lessons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
