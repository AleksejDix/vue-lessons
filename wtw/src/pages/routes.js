import Category from "@/pages/Category";
import NotFound from "@/pages/NotFound";
import Movies from "@/pages/Movies";
import Movie from "@/pages/Movie";

export default [
  {
    alias: "/",
    path: "/movies/",
    component: Movies,
    name: "movies",
    props: true
  },
  {
    path: "/movies/:category/",
    component: Category,
    name: "category",
    props: true
  },
  {
    path: "/movies/:id/",
    component: Movie,
    name: "movie",
    props: true
  },
  {
    path: "*",
    component: NotFound
  }
];
