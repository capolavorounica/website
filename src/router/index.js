import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/smart",
      name: "smartgrid",
      component: () => import("../views/SmartView.vue"),
    },
    {
      path: "/siccita",
      name: "siccita",
      component: () => import("../views/SiccitaView.vue"),
    },
    {
      path: "/goal3",
      name: "goal3",
      component: () => import("../views/GoalThreeView.vue"),
    },
    {
      path: "/goal11",
      name: "goal11",
      component: () => import("../views/GoalElevenView.vue"),
    }
  ],
});


export default router;