export default [
  {
    path: '/',
    component: () => import('./Home.vue'),
    name: 'home'
  },
  {
    path: '/favorites',
    component: () => import('./Favorites.vue'),
    name: 'favorites'
  },
  {
    path: '/movies/discover',
    component: () => import('./Discover.vue'),
    name: 'discover'
  },
  {
    path: '/category/:catID/',
    component: () => import('./Category.vue'),
    name: 'category'
  },
  {
    path: '/movies/:id/',
    component: () => import('./Movie.vue'),
    children: [
      {
        path: '',
        alias: 'cast',
        component: () => import('./Humans.vue'),
        name: 'cast'
      },
      {
        path: 'crew',
        component: () => import('./Humans.vue'),
        name: 'crew'
      }
    ]
  },
  {
    path: '/person/:id/',
    component: () => import('./Person.vue'),
    name: 'person'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('./_404.vue')
  },
  {
    path: '*',
    redirect: '404'
  }
]
