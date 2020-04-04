import Home from './node_modules/@/pages/Home'

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/favorites',
    component: () => import('./node_modules/@/pages/Favorites'),
    name: 'favorites'
  },
  {
    path: '/movies/discover',
    component: () => import('./node_modules/@/pages/Discover'),
    name: 'discover'
  },
  {
    path: '/category/:id/',
    component: () => import('./node_modules/@/pages/Category'),
    name: 'category'
  },
  {
    path: '/movies/:id/',
    component: () => import('./node_modules/@/pages/Movie'),
    children: [
      {
        path: '',
        alias: 'cast',
        component: () => import('./node_modules/@/pages/MovieCredits'),
        name: 'cast'
      },
      {
        path: 'crew',
        component: () => import('./node_modules/@/pages/MovieCredits'),
        name: 'crew'
      }
    ]
  },
  {
    path: '/person/:id/',
    component: () => import('./node_modules/@/pages/Person'),
    name: 'person'
  },
  {
    path: '/profile',
    component: () => import('./node_modules/@/pages/Profile'),
    name: 'profile'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('./node_modules/@/pages/_404')
  },
  {
    path: '*',
    redirect: '404'
  }
]
