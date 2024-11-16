<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card :bordered="true">
          <a-input placeholder="请输入短信验证码">
            <template #addonAfter>
              <a-button type="primary" size="small" :disabled="isCounting" @click="handleSend">
                {{ isCounting ? `${current}s` : "发送短信验证码" }}
              </a-button>
            </template>
          </a-input>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useCountdown } from "@/composables";

const { startCountdown, isCounting, current } = useCountdown(10);
function handleSend() {
  startCountdown();
}
</script>
