import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../src/views/HomeView.vue";
import MyPageView from "../src/views/MyPageView.vue";
import DataBindingView from "../src/views/DataBindingView.vue";

// 4. make th whole app router-aware
Vue.use(VueRouter);

// 1. routes 안에 특정 path와 컴포넌트 맵핑
const routes = [
  //* 사용자가 해당 path에 접근하지 않더라도 이미 vue 파일을 import함
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  //* 사용자가 path에 접근하기 전까지 vue 파일에 대한 import가 일어나지 않음
  {
    path: "/about",
    name: "about",
    component: () => import("../src/views/AboutView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MyPageView,
  },
  {
    path: "/databinding",
    name: "databinding",
    component: DataBindingView,
  },
  {
    path: "/computed",
    name: "computed",
    component: () => import("../src/views/ComputedView.vue"),
  },
  {
    path: "/watch",
    name: "watch",
    component: () => import("../src/views/WatchView.vue"),
  },
  {
    path: "/nestedcomponent",
    name: "nestedcomponent",
    component: () => import("../src/views/NestedComponent.vue"),
  },
];

// 2. 라우터 생성
const router = new VueRouter({
  // 3. 해시를 제거하기 위해 라우터의 모드를 history 모드로 설정
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
