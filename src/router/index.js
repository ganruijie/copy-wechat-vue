import Vue from "vue";
import Router from "vue-router";
let loginPage = () => import("@/components/login/login.vue");
let HelloWorld = () => import("@/components/HelloWorld.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "loginPage",
      component: loginPage,
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
