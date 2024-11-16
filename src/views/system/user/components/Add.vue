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

const open = ref(false);
const formState = reactive({
  username: "",
  account: "",
  status: 1,
});

function showModal() {
  open.value = true;
}

defineExpose({ showModal });
</script>
