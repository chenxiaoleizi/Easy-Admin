import { defineStore } from "pinia";

export const useKeepAliveStore = defineStore("keepAlive", {
  state() {
    return {
      includes: [] as string[],
    };
  },
  actions: {
    /**
     * 将组件名添加到 KeepAlive 组件的 includes 属性中
     * @param componentName - 组件的 name
     */
    addToIncludes(componentName: string) {
      if (!this.includes.includes(componentName)) {
        this.includes.push(componentName);
      }
    },
    /**
     * 将组件名从 KeepAlive 组件的 includes 属性中移除
     * @param componentName - 组件的 name
     */
    removeFromIncludes(componentName: string) {
      const index = this.includes.findIndex((item) => item === componentName);
      if (index > -1) {
        this.includes.splice(index, 1);
      }
    },
    /**
     * 清空 KeepAlive 组件的 includes 属性
     */
    clear() {
      this.includes = [];
    },
  },
});
