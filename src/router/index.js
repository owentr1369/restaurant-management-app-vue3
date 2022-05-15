import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UpdateView from "../views/UpdateView.vue";
import SignUp from "../components/SignUp.vue";
import LoginPage from "../components/LoginPage.vue";
import AddView from "../views/AddView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/update/:id",
    name: "update",
    component: UpdateView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
