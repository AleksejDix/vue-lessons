import Vue from 'vue'
import VueRouter from 'vue-router'
import Workshop from '../views/Workshop.vue'
import Lesson from '../views/Lesson.vue'
import Worksheet from '../views/Worksheet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Workshop,
  },
  {
    path: '/lesson/:id',
    component: Lesson,
    children: [
      {
        path: '',
        name: 'exercices',
        component: Worksheet,
      },
      {
        path: 'final',
        name: 'final',
        component: Worksheet,
      },
      {
        path: 'extra',
        name: 'extra',
        component: Worksheet,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
