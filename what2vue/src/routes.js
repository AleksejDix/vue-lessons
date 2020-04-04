import Home from '@/pages/Home.vue'

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/favorites',
    component: () => import('@/pages/Favorites.vue'),
    name: 'favorites'
  },
  {
    path: '/movies/discover',
    component: () => import('@/pages/Discover.vue'),
    name: 'discover'
  },
  {
    path: '/category/:id/',
    component: () => import('@/pages/Category.vue'),
    name: 'category'
  },
  {
    path: '/movies/:id/',
    component: () => import('@/pages/Movie.vue'),
    children: [
      {
        path: '',
        alias: 'cast',
        component: () => import('@/pages/Humans.vue'),
        name: 'cast'
      },
      {
        path: 'crew',
        component: () => import('@/pages/Humans.vue'),
        name: 'crew'
      }
    ]
  },
  {
    path: '/person/:id/',
    component: () => import('@/pages/Person.vue'),
    name: 'person'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/_404.vue')
  },
  {
    path: '*',
    redirect: '404'
  }
]
