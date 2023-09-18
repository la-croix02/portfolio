import { createWebHistory, createRouter } from "vue-router";


import Home from "@/pages/Home.vue";
export const routers = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/about', name: 'about', component: () => import('@/pages/About.vue')},
    {path: '/contacts', name: 'contacts', component: () => import('@/pages/Contacts.vue')},
    {path: '/works', name: 'works', component: () => import('@/pages/Works.vue')},
  ]
})