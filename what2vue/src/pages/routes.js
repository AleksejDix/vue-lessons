export default [
  {
    path: "/",
    component: () => import("@/pages/Home"),
    name: "home"
  },
  {
    path: "/movies/discover",
    component: () => import("@/pages/Discover"),
    name: "discover"
  },
  {
    path: "/category/:id/",
    component: () => import("@/pages/Category"),
    name: "category"
  },
  {
    path: "/movies/:id/",
    component: () => import("@/pages/Movie"),
    name: "movie"
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/pages/NotFound")
  }
];
