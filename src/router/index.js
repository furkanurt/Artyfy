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
import Bookmark from '@/views/Bookmarks.vue';
import Basket from '@/views/Basket.vue';

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    meta: {
      public: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      public: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      public: true,
    },
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: {
      public: false,
    },
  },
  {
    path: '/shop/basket',
    name: 'basket',
    component: Basket,
    meta: {
      public: false,
    },
  },
  {
    path: '/post-detail/:id',
    name: 'postDetail',
    component: PostDetail,
    meta: {
      public: false,
    },
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: Bookmark,
    meta: {
      public: false,
    },
  },
  {
    path: '/trends',
    name: 'trends',
    component: Trends,
    meta: {
      public: false,
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      public: false,
    },
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    meta: {
      public: false,
    },
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
