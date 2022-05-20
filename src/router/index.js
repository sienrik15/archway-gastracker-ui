import { createRouter, createWebHistory } from "vue-router";
import Rewards from "@/views/Rewards.vue";
import Overview from "@/views/Overview.vue";
import Contract from "@/views/Contract.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/overview",
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/rewards",
    name: "Rewards",
    component: Rewards,
  },
  { path: '/contract/:id', 
    name: "Contract",
    component: Contract
  },
  { 
    path: "/:pathMatch(.*)*", 
    name: "/",
    redirect: "/overview" 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
