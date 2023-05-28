<template>
  <a-row justify="center">
    <a-card title="Register" style="width: 30rem">
      <a-form
        :model="formState"
        autocomplete="off"
        @finish="register"
      >
        <a-form-item>
          <a-input
            v-model:value="formState.name"
            name="name"
            placeholder="Enter your name"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-model:value="formState.email"
            type="email"
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
          <a-input-password
            v-model:value="formState.confirmPassword"
            name="confirmPassword"
            placeholder="Repeat your password"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            htmlType="submit"
            :loading="false"
          >
            Register
          </a-button>
        </a-form-item>
      </a-form>
      <a-space direction="vertical" size="large">
        <a-typography-text>
          Already registered? <router-link to="/login">Login</router-link>
        </a-typography-text>
<!--        <ErrorMessage message={ error } />-->
      </a-space>
    </a-card>
  </a-row>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthStore }  from '@/stores'
import { User }      from '@/types'
import router            from "@/router"

type RegisterData = Omit<User, 'id'> & {confirmPassword: string}

const formState = reactive<RegisterData>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const register = (values: RegisterData) => {
  const authStore = useAuthStore()

  try {
    authStore.register(formState)
    console.log('registered')
    router.push({ path: '/' })
  } catch(error) {
    //setErrors({ apiError: error })
    console.log(error)
  }
}
</script>

<style>

</style>
