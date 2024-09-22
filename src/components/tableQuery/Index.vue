<template>
  <div class="table-query">
    <a-space class="left" wrap>
      <slot name="left"></slot>
    </a-space>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.table-query {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.left {
  max-width: 70%;
}
</style>
