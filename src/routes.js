import Home from "./pages/Home";
import ViewMore from "./pages/ViewMore";
import VueRouter from "vue-router";

export const routes = [
  { path: "/", component: Home },
  { path: "/view-more/:id", component: ViewMore }
];

export const router = new VueRouter({
  routes
});
