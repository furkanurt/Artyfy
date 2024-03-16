// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/components/Login/index.vue';
import Register from '@/components/Register/index.vue';
import Shop from '@/views/Shop.vue';
import PostDetail from '@/views/PostDetail.vue';

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/post-detail/:id',
    name: 'PostDetail',
    component: PostDetail,
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
