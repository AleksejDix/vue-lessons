export default [
  {
    path: "/",
    component: () => import("./Home.vue"),
    name: "home"
  },
  {
    path: "/favorites",
    component: () => import("./Favorites.vue"),
    name: "favorites"
  },
  {
    path: "/movies/discover",
    component: () => import("./Discover.vue"),
    name: "discover"
  },
  {
    path: "/category/:id/",
    component: () => import("./Category.vue"),
    name: "category"
  },
  {
    path: "/movies/:id/",
    component: () => import("./Movie.vue"),
    name: "movie"
  },
  {
    path: "/404",
    name: "404",
    component: () => import("./_404.vue")
  },
  {
    path: "*",
    redirect: "404"
  }
];
