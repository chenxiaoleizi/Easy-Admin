import type { RouteRecord, RouteLocationNormalizedLoaded } from "vue-router";
import { defineStore } from "pinia";

export const useTabStore = defineStore("tab", {
  state() {
    return {
      tabs: [] as (RouteRecord | RouteLocationNormalizedLoaded)[],
    };
  },
  actions: {
    addTab(route: RouteRecord | RouteLocationNormalizedLoaded) {
      const index = this.tabs.findIndex((tab) => tab.path === route.path);
      if (index === -1) {
        this.tabs.push(Object.assign({}, route));
      }
    },
    remove(path: string, target: "current" | "left" | "right" | "others") {
      const index = this.tabs.findIndex((tab) => tab.path === path);
      if (index > -1) {
        switch (target) {
          case "current":
            this.tabs.splice(index, 1);
            break;
          case "left":
            this.tabs.splice(1, index - 1); // 第一个 tab 是固定的不关闭
            break;
          case "right":
            this.tabs.splice(index + 1, this.tabs.length - 1 - index);
            break;
          case "others":
            this.tabs = [this.tabs[0], this.tabs[index]];
            break;
        }
      }

      return index;
    },
    removeTab(path: string) {
      return this.remove(path, "current");
    },
    removeLeftTabs(path: string) {
      this.remove(path, "left");
    },
    removeRightTabs(path: string) {
      this.remove(path, "right");
    },
    removeOtherTabs(path: string) {
      this.remove(path, "others");
    },
    clearTab() {
      this.tabs.splice(1, this.tabs.length - 1);
    },
  },
});
