import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import GalleryView from "../views/GalleryView.vue";
import SkillView from "../views/SkillView.vue";
import GakutikaView from "../views/GakutikaView.vue";
import AlbaitoView from "../views/AlbaitoView.vue";
import PmappView from "../views/PmappView.vue";
import NoPageError from "../views/NoPageError.vue";
import HTMLCSSView from "../views/HTML&CSSView.vue";
import PythonView from "../views/PythonView.vue";
import JavascriptView from "../views/JavascriptView.vue";
import PHPView from "../views/PHPView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfileView,
  },
  {
    path: "/gallery",
    name: "GalleryPage",
    component: GalleryView,
  },
  {
    path: "/skills",
    name: "SkillsPage",
    component: SkillView,
  },
  {
    path: "/gakutika",
    name: "GakutikaPage",
    component: GakutikaView,
  },
  {
    path: "/albaito",
    name: "AlbaitoPage",
    component: AlbaitoView,
  },
  {
    path: "/pmapp",
    name: "PmappPage",
    component: PmappView,
  },
  {
    path: "/html&css",
    name: "HTML&CSSPage",
    component: HTMLCSSView,
  },
  {
    path: "/python",
    name: "PythonPage",
    component: PythonView,
  },
  {
    path: "/javascript",
    name: "JavaScriptPage",
    component: JavascriptView,
  },
  {
    path: "/php",
    name: "PHPPage",
    component: PHPView,
  },
  {
    path: "*",
    name: "Error",
    component: NoPageError,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
