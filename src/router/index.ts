import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../Views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
