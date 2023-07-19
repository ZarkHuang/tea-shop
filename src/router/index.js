import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue'; // 导入 App 组件
import Home from '@/views/Home.vue';

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    redirect:'/home'
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import("../views/List.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import("../views/Cart.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () =>
      import("../views/Mine.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

export default router;