import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import Purchaseview from "../views/Purchaseview.vue"; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/Login',
      component: LoginView
    },
    {
      path: '/purchase',
      component: Purchaseview
    },
  
  
  
  ],
});

export default router;