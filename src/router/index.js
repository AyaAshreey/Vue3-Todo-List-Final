import { createRouter, createWebHistory } from "vue-router";
import TodosView from "../views/TodosView.vue";

const routes = [
  {
    path: "/",
    name: "todos",
    component: TodosView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
