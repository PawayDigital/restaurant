import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/Home/pages/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/Contact/pages/Contact.vue"),
  },
  {
    path: "*",
    name: "Error404",
    component: () => import("@/Error/pages/Error404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/Auth/Login/pages/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/Auth/Register/pages/Register.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/Admin/Empresas/pages/Profile.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/edit-profile",
    name: "EditarEmpresa",
    component: () => import("@/Admin/Empresas/pages/Editar.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/categorias",
    name: "Categoria",
    component: () => import("@/Admin/Empresas/pages/Categoria.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/carta",
    name: "Carta",
    component: () => import("@/Admin/Empresas/pages/Carta.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/:slug",
    name: "Menu",
    component: () => import("@/Admin/Menus/MenuTwo/pages/Menu.vue"),
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
