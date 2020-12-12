import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "*",
    name: "Error404",
    component: () => import("@/views/Error404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("@/views/Join.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/Menu.vue"),
  },
  {
    path: "/menu-segundo",
    name: "Menu2",
    component: () => import("@/views/Menu2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("login");
    }
  }
  next();
});

export default router;
