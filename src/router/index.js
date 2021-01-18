import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Details from "@/views/Details.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Main
  },
  {
    path: "/details/:id",
    name: "details",
    component: Details,
    props: true
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound
  },
  {
    path: "*",
    redirect: { name: "notFound" }
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
