export default [
  {
    path: "/",
    component: () => import("./Home.vue"),
    name: "home"
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
    path: "*",
    name: "404",
    component: () => import("./NotFound.vue")
  }
];
