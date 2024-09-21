import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/Index.vue";

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      title: "首页",
      icon: "home",
    },
    component: Layout,
    children: [
      {
        path: "/",
        meta: {
          title: "首页",
          icon: "home",
        },
        component: () => import("@/views/home/Index.vue"),
      },
    ],
  },
];

export default dynamicRoutes;
