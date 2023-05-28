<script setup lang="ts">
import { reactive }     from 'vue'
import { useAuthStore } from '@/stores'
import { User }         from '@/types'
import router           from "@/router";

const formState = reactive<User>({
  name: '',
  email: '',
  password: '',
})

const login = async (values: User) => {
  const authStore = await useAuthStore()

  try {
    await authStore.login(formState)
  } catch(error) {
    //setErrors({ apiError: error })
    console.log(error)
  }
}
</script>

<template>
  <a-row justify="center">
    <a-card title="Login" style="width: 30rem">
      <a-form
        :model="formState"
        autocomplete="off"
        @finish="login"
      >
        <a-form-item>
          <a-input
            v-model:value="formState.email"
            name="email"
            placeholder="Enter your email"
          />
        </a-form-item>
        <a-form-item>
          <a-input-password
            v-model:value="formState.password"
            name="password"
            placeholder="Enter your password"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            htmlType="submit"
            :loading="false"
          >
            Login
          </a-button>
        </a-form-item>
      </a-form>
      <a-space direction="vertical" size="large">
        <a-typography-text>
          No account? <router-link to="/register">Register</router-link>
        </a-typography-text>
      </a-space>
    </a-card>
  </a-row>
</template>
<style>

</style>
