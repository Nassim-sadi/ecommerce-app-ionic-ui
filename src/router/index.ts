import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Signup from "@/views/account/signUp/Signup.vue";
import Signin from "@/views/account/signIn/Signin.vue";
import ForgotPasswordVue from "@/views/account/forgotPassword/ForgotPassword.vue";
import Home from "@/views/homeTabs/Index.vue";
import HomePage from "@/views/homeTabs/tabs/HomePage.vue";
import Wishlist from "@/views/homeTabs/tabs/WhishList.vue";
import Search from "@/views/homeTabs/tabs/Search.vue";
import ShopPage from "@/views/homeTabs/tabs/ShopPage.vue";
import Settings from "@/views/homeTabs/tabs/Settings.vue";

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

  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        component: HomePage,
      },
      {
        path: "wishlist",
        component: Wishlist,
      },
      {
        path: "shop",
        component: ShopPage,
      },
      {
        path: "search",
        component: Search,
      },
      {
        path: "settings",
        component: Settings,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
