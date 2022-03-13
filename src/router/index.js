import { createRouter, createWebHistory } from 'vue-router'
import DayBook from '@/modules/daybook/router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(
      '@/views/Home.vue'
    ),
  },
  ...DayBook,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router