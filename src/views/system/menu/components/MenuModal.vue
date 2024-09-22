<template>
  <a-modal v-model:open="open" :title="title" @cancel="handleCancel" @ok="handleOk">
    <a-form ref="formRef" :model="formState" autocomplete="off">
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";

const emit = defineEmits(["update-data"]);
const formRef = ref();
const formState = reactive({
  username: "",
});

// model 相关
const open = ref(false);
const action = ref("add");
const title = computed(() => {
  const titleMap: Record<string, any> = {
    add: "添加菜单",
    edit: "编辑菜单",
    detail: "菜单详情",
  };
  return titleMap[action.value];
});
function showModal(inputAction = "add", data?: any) {
  open.value = true;
  action.value = inputAction;

  if (inputAction === "edit" || inputAction === "detail") {
    Object.assign(formState, data);
  }
}
function afterOk() {
  handleCancel();
  emit("update-data");
}
function handleCancel() {
  formRef.value.resetFields();
  formRef.value.clearValidate();
}
function handleOk() {
  formRef.value.validate().then(() => {
    if (action.value === "add") {
      console.log("add");
    }
    if (action.value === "edit") {
      console.log("edit");
    }

    afterOk();
  });
}

defineExpose({ showModal });
</script>
