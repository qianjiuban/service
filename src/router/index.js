import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: "/",
      redirect: "/service",
      component: () => import("@/App"),
    },
    {
      path: "/:catchAll(.*)",
      component: () => import("@/views/home/404/404"),
      meta: {
        authority: 1,
        name: "404",
      },
    },
    {
      path: "/service",
      name: "售后服务",
      component: () => import("@/views/business/service/service"),
      meta: {
        title: "补卡查询",
        keepAlive: true,
      },
    },
    {
      path: "/servicecheck",
      name: "售后信息登记",
      component: () => import("@/views/business/service/servicecheck/servicecheck"),
      meta: {
        title: "售后信息登记",
        keepAlive: true,
      },
    },
    {
      path: "/servicesearch",
      name: "售后信息查询",
      component: () => import("@/views/business/service/servicesearch/servicesearch"),
      meta: {
        title: "售后信息查询",
        keepAlive: true,
      },
    },
    {
      path: "/question",
      name: "question",
      component: () => import("@/components/question"),
      meta: {
        title: "售后问题登记",
        keepAlive: true,
      },
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("@/components/detail"),
      meta: {
        title: "售后详情登记",
        keepAlive: true,
      },
    },
  ],
});

// 路由守卫
// const whiteList = ["/login", "/register"];
// router.beforeEach((to, from, next) => {
//   const token = getLocal("token");
//   if (token) {
//     if (to.path === "login") {
//       next();
//     } else {
//       // 如果有token 可以在这里写拉取用户信息的接口
//       next();
//     }
//   } else if (whiteList.findIndex((k) => to.path.indexOf(k) !== -1) != -1) {
//     next();
//   } else {
//     next("/login");
//   }
// });

export default router;
