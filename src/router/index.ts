import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Item from '../views/Item.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/front',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'Item', 
    component: Item
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
