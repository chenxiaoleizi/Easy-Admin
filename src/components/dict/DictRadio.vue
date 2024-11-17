<template>
  <a-radio-group :options="options" v-model:value="value" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useDictStore } from "@/store/dict";
const { dictMap } = storeToRefs(useDictStore());

const props = defineProps<{ dictCode: string }>();
const value = defineModel("value");
const options = computed(() => {
  const dict = dictMap.value[props.dictCode] ?? { options: [] };
  return dict.options ?? [];
});
</script>
