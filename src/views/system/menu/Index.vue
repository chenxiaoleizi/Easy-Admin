<template>
  <div>
    <Table :table-config="tableConfig" @click-action="handleClickAction"></Table>
    <MenuModal ref="menuModalRef"></MenuModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/table/Index.vue";
import MenuModal from "./components/MenuModal.vue";
import { tableConfig } from "./config";

const menuModalRef = ref();
function handleClickAction(action: { label: string; name: string }) {
  console.log(action);
  if (action.name === "add") {
    menuModalRef.value.showModal("add");
  }
  if (action.name === "edit") {
    menuModalRef.value.showModal("edit");
  }
}
</script>
