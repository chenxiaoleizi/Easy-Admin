<template>
  <a-form
    layout="vertical"
    :modal="formState"
    :label-col="{ style: { width: '80px' } }"
    :rules="rules"
  >
    <a-form-item label="用户名" name="username">
      <a-input v-model:value="formState.username"></a-input>
    </a-form-item>
    <a-form-item label="账号" name="account">
      <a-input v-model:value="formState.account"></a-input>
    </a-form-item>
    <a-form-item label="状态" name="state">
      <a-radio-group v-model:value="formState.status" button-style="solid">
        <a-radio-button :value="1">启用</a-radio-button>
        <a-radio-button :value="0">禁用</a-radio-button>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
const rules = {
  username: [{ required: true, message: "请输入用户名" }],
  account: [{ required: true, message: "请输入账号" }],
  status: [{ required: true }],
};

const formState = defineModel<any>("formState");
</script>
