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
  {
    path: "/system",
    name: "system",
    meta: {
      title: "系统设置",
      icon: "settings",
    },
    component: Layout,
    children: [
      {
        path: "/system/userList",
        name: "userList",
        meta: {
          title: "用户列表",
          icon: "users",
        },
        component: () => import("@/views/system/user/Index.vue"),
      },
      {
        path: "/system/roleList",
        name: "roleList",
        meta: {
          title: "角色列表",
          icon: "role",
        },
        component: () => import("@/views/system/role/RoleList.vue"),
      },
      {
        path: "/system/menuList",
        name: "menuList",
        meta: {
          title: "菜单列表",
          icon: "menu",
        },
        component: () => import("@/views/system/menu/Index.vue"),
      },
      {
        path: "/system/dict",
        name: "dict",
        meta: {
          title: "字典管理",
          icon: "menu",
        },
        component: () => import("@/views/system/dict/Index.vue"),
      },
    ],
  },
];

export default dynamicRoutes;
