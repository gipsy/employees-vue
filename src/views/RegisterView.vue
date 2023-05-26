<template>
  <a-row justify="center">
    {{ formState }}
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
import { reactive, ref } from "vue"
import { useAuthStore } from '@/stores';

//const { user } = useUserAuthStore();

interface FormState {
  name: string;
  email: string;
  password: string;
  //confirmPassword: string;
}

const formState = reactive<FormState>({
  name: '',
  email: '',
  password: '',
  //confirmPassword: ''
})

const register = (values: any) => {
  //console.log(values)
  //console.log({...formState})
  const authStore = useAuthStore();

  //return authStore.login(username, password)
  //    .catch(error => setErrors({ apiError: error }));

  //const data = {...formState}
  try {
    authStore.register(formState)
  } catch(error) {
    console.log(error)
  }
}

</script>

<style>

</style>
