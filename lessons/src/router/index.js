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
    props: true,
  },
  {
    path: '/lesson/:id',
    component: Lesson,
    props: true,
    children: [
      {
        path: '',
        name: 'exercices',
        component: Worksheet,
        props: true,
      },
      {
        path: 'final',
        name: 'final',
        component: Worksheet,
        props: true,
      },
      {
        path: 'extra',
        name: 'extra',
        component: Worksheet,
        props: true,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
