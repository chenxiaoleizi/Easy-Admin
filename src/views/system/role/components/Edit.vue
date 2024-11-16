<template>
  <a-modal v-model:open="open" title="添加用户">
    <div class="my-[20px]">
      <UserForm v-model:form-state="formState"></UserForm>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import UserForm from "./UserForm.vue";
import { pick } from "lodash-es";

const open = ref(false);
const formState = reactive({
  username: "",
  account: "",
  status: 1,
});

function showModal(record: any) {
  open.value = true;
  Object.assign(formState, pick(record, ["username", "account", "status"]));
}

defineExpose({ showModal });
</script>
