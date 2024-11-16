<template>
  <a-form
    layout="vertical"
    :modal="formState"
    :label-col="{ style: { width: '80px' } }"
    :rules="rules"
  >
    <a-form-item label="角色名" name="roleName">
      <a-input v-model:value="formState.roleName" />
    </a-form-item>
    <a-form-item label="备注" name="remark">
      <a-textarea v-model:value="formState.remark" />
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
const rules = {
  roleName: [{ required: true, message: "请输入角色名" }],
  remark: [{ required: true, message: "请输入备注" }],
};

const formState = defineModel<any>("formState");
</script>
