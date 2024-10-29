<template>
  <div class="easy-table-header">
    <span class="l">
      <slot name="left"></slot>
    </span>
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<style scoped lang="less">
.easy-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 20px 8px;
  .l {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    line-height: 19px;
  }
}
</style>
