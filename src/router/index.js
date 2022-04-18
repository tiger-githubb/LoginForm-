import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Login.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta:{
      requireAuth: true
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/About.vue"),
    meta:{
      requireAuth: true
    }
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth)&& !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})
export default router;
