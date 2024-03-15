// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/Register/index.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isLoggedIn = () => {
  return localStorage.getItem('token');
};

const protectedRoutes = ['Home', 'Shop'];

router.beforeEach((to, from, next) => {
  const isProtected = protectedRoutes.includes(to.name);
  if (isProtected && !isLoggedIn()) {
    next({
      path: '/login',
    });
  } else next();
});

export default router;
