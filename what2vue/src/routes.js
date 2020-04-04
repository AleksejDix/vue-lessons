import Home from '@/pages/Home'

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/favorites',
    component: () => import('@/pages/Favorites'),
    name: 'favorites'
  },
  {
    path: '/movies/discover',
    component: () => import('@/pages/Discover'),
    name: 'discover'
  },
  {
    path: '/category/:id/',
    component: () => import('@/pages/Category'),
    name: 'category'
  },
  {
    path: '/movies/:id/',
    component: () => import('@/pages/Movie'),
    children: [
      {
        path: '',
        alias: 'cast',
        component: () => import('@/pages/Humans'),
        name: 'cast'
      },
      {
        path: 'crew',
        component: () => import('@/pages/Humans'),
        name: 'crew'
      }
    ]
  },
  {
    path: '/person/:id/',
    component: () => import('@/pages/Person'),
    name: 'person'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/_404')
  },
  {
    path: '*',
    redirect: '404'
  }
]
