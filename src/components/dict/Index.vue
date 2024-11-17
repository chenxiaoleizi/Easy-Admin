<template>
  <span>{{ dictItemName }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useDictStore } from "@/store/dict";
const { dictMap } = storeToRefs(useDictStore());

const props = defineProps<{ dictCode: string; dictItemKey: string }>();
const dictItemName = computed(() => {
  const dict = dictMap.value[props.dictCode] ?? { map: {} };
  const map = dict.map;
  return map[props.dictItemKey] ?? "";
});
</script>
