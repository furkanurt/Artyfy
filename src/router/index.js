// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/components/Login/index.vue';
import Register from '@/components/Register/index.vue';
import Shop from '@/views/Shop.vue';
import PostDetail from '@/views/PostDetail.vue';
import Trends from '@/views/Trends.vue';
import Profile from '@/views/Profile.vue';
import Notifications from '@/views/Notifications.vue';

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    meta: {
      public: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      public: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      public: true,
    },
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    meta: {
      public: false,
    },
  },
  {
    path: '/post-detail/:id',
    name: 'PostDetail',
    component: PostDetail,
    meta: {
      public: false,
    },
  },
  {
    path: '/trends',
    name: 'Trends',
    component: Trends,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(async (to) => {
  const token = localStorage.getItem('token');
  if (!to.meta.public && token === undefined) {
    router.push('/login');
  }
});

router.beforeEach((to) => {
  const token = localStorage.getItem('token');
  if (!to.meta.public && !token) {
    router.push('/login');
  }
});

export default router;
