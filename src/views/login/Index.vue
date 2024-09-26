<template>
  <div class="login">
    <div class="login-form">
      <div class="form-title">欢迎登录</div>
      <a-form ref="formRef" layout="vertical" :model="formState" :rules="rules" autocomplete="off">
        <a-form-item name="username">
          <a-input v-model:value="formState.username" allow-clear placeholder="请输入用户名">
            <template #prefix>
              <UserOutlined style="color: #a8abb2" />
              <a-divider type="vertical" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password">
          <a-input-password v-model:value="formState.password" allow-clear placeholder="请输入密码">
            <template #prefix>
              <KeyOutlined style="color: #a8abb2" />
              <a-divider type="vertical" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" block :loading="loading" @click="handleClick"> 登录 </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { UserOutlined, KeyOutlined } from "@ant-design/icons-vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();

const rules = {
  username: [{ required: true, message: "请输入用户名!" }],
  password: [{ required: true, message: "请输入密码!" }],
};
const formRef = ref();
const loading = ref(false);
const formState = reactive({
  username: "",
  password: "",
});

async function handleClick() {
  await formRef.value.validate();

  loading.value = true;
  userStore.login(formState).finally(() => {
    loading.value = false;
  });
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("@/assets/images/planet.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form {
  width: 440px;
  background: white;
  padding: 40px;
  border-radius: 6px;
}
.form-title {
  color: #515a6e;
  font-size: 34px;
  margin-bottom: 30px;
  text-align: center;
}
</style>
