import type { App } from "vue";
import Table from "./Table.vue";
import TableQuery from "./TableQuery.vue";
import TableHeader from "./TableHeader.vue";

export default {
  install: (app: App) => {
    app.component("Table", Table);
    app.component("TableQuery", TableQuery);
    app.component("TableHeader", TableHeader);
  },
};
