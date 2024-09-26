import { defineStore } from "pinia";
import router from "@/router/index";
import { message } from "ant-design-vue";
import { login } from "@/api/user";

function setToken(token: string) {
  localStorage.setItem("token", token);
}
function getToken() {
  return localStorage.getItem("token");
}
function removeToken() {
  localStorage.removeItem("token");
}

export const useUserStore = defineStore("userStore", {
  state() {
    return {
      token: getToken() as string,
      userInfo: {
        username: "",
        avatar: "",
      },
    };
  },
  actions: {
    reset() {
      this.token = "";
      this.userInfo.username = "";
      this.userInfo.avatar = "";

      removeToken();
    },
    setToken(token: string) {
      setToken(token);
      this.token = token;
    },
    setUserInfo(userInfo: { username: string; avatar: string }) {
      Object.assign(this.userInfo, userInfo);
    },

    async login(params: any) {
      const res = await login(params);

      // 登陆成功，保存 token，用户信息
      const { token } = res;
      this.setToken(token);
      this.setUserInfo(res);

      await router.push("/");
      message.success("登录成功");
    },
    async logout() {
      this.reset();

      await router.push({ name: "login" });
      message.success("退出登录成功");
    },
  },
});
