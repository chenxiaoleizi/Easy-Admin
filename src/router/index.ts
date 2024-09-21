import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import staticRoutes from "./static";
import dynamicRoutes from "./dynamic";
import { useUserStore } from "@/store/user";
import { usePermissionStore } from "@/store/permission";
import { message } from "ant-design-vue";

const router = createRouter({
  routes: [...dynamicRoutes],
  history: createWebHashHistory(),
});

router.beforeEach(async (to) => {
  return true;
  // const userStore = useUserStore();
  // const permissionStore = usePermissionStore();

  // if (userStore.token) {
  //   // 初始化权限
  //   if (!permissionStore.initialized) {
  //     try {
  //       await permissionStore.initPermission(router);
  //     } catch {
  //       message.error("加载权限信息出错");
  //       userStore.token = "";
  //       return "/login";
  //     }
  //   }

  //   // 已登录状态，自动跳转到登陆后的页面
  //   if (to.path === "/login") {
  //     const firstMenu = permissionStore.firstMenu;
  //     return firstMenu.path;
  //   }

  //   return true;
  // } else {
  //   // 未登录
  //   if (to.path !== "/login") return "/login";
  //   return true;
  // }
});

export default router;
