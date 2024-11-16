<template>
  <div>
    <TableQuery :query-form-state="queryForm">
      <a-form-item label="角色名" name="username">
        <a-input v-model:value="queryForm.username" placeholder="请输入角色名"></a-input>
      </a-form-item>
    </TableQuery>
    <TableHeader>
      <template #left>用户列表</template>
      <template #right>
        <a-button type="primary" @click="handleAdd">添加用户</a-button>
      </template>
    </TableHeader>
    <a-table :columns="columns" :dataSource="dataSource" :pagination="pagination">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'operation'">
          <a-button type="link" @click="handleEdit(record)">编辑</a-button>
          <a-divider type="vertical" />
          <a-button type="link" danger>删除</a-button>
        </template>
      </template>
    </a-table>
    <Add ref="addRef"></Add>
    <Edit ref="editRef"></Edit>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useTablePagination } from "@/composables/index";
import { getRoleList } from "@/api/setting/role";
import TableQuery from "@/components/table/TableQuery.vue";
import TableHeader from "@/components/table/TableHeader.vue";
import Add from "./components/Add.vue";
import Edit from "./components/Edit.vue";

const columns = [
  {
    title: "角色名称",
    dataIndex: "rolename",
    key: "rolename",
    align: "center",
  },
  {
    title: "角色状态",
    dataIndex: "state",
    key: "state",
    align: "center",
    customRender({ text }) {
      return text === 0 ? "禁用" : "启用";
    },
  },
  {
    title: "备注",
    dataIndex: "remark",
    key: "remark",
    align: "center",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];

const queryForm = reactive({
  username: "",
  account: "",
});
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
  getRoleList().then((res) => {
    const list = res?.list ?? [];
    dataSource.value = list;
    pagination.total = 100;
  });
}

const addRef = ref();
const editRef = ref();
function handleAdd() {
  addRef.value.showModal();
}
function handleEdit(record: any) {
  editRef.value.showModal(record);
}

fetchData();
</script>

<style scoped>
.table-query {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.table-query-left {
  display: flex;
  max-width: 70%;
}
</style>
