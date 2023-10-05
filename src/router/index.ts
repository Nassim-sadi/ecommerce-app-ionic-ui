import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Signup from "@/views/account/signUp/Signup.vue";
import Signin from "@/views/account/signIn/Signin.vue";
import ForgotPasswordVue from "@/views/account/forgotPassword/ForgotPassword.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/forgotPassword",
    component: ForgotPasswordVue,
  },
  {
    path: "/splashScreen",
    component: () => import("@/views/splashScreen/SplashScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
