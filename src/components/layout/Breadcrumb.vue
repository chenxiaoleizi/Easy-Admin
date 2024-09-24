<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="`${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const routes = computed(() => {
  const matched = route.matched;
  return matched
    .filter((item) => !item.meta.hideInBreadcrumb)
    .map((item) => ({
      path: item.path,
      breadcrumbName: item.meta?.title,
      key: item.name,
    }));
});
</script>
