<template>
  <div>
    <a-table :columns="columns" :dataSource="dataSource" :pagination="pagination">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-button type="link">编辑</a-button>
          <a-button type="link" danger>删除</a-button>
        </template>
      </template>
    </a-table>
    <!-- <Add v-model:open="open"></Add> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useTablePagination } from "@/composables";
import { getUserList } from "@/api/user";
// import Add from "./components/Add.vue";

// const open = ref(false);

const columns = [
  {
    title: "编号",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
    align: "center",
  },
  {
    title: "账号",
    dataIndex: "account",
    key: "account",
    align: "center",
  },
  {
    title: "角色",
    dataIndex: "role",
    key: "role",
    align: "center",
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    align: "center",
    width: 200,
  },
];

const queryForm = reactive({});
const pagination = useTablePagination(fetchData);
const dataSource = ref();
function queryData() {
  pagination.current = 1;
  fetchData();
}
function fetchData() {
  const params = {
    ...queryForm,
    pageSize: pagination.pageSize,
    current: pagination.current,
  };
  getUserList().then((res) => {
    const list = res?.list ?? [];
    dataSource.value = list;
    pagination.total = 100;
  });
}

fetchData();
</script>
