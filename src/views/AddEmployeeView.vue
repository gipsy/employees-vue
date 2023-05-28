<script setup lang="ts">
import { reactive }          from 'vue'
import { useEmployeesStore } from "@/stores"
import { Employee }          from "@/types"
import router                from "@/router";

type EmployeeData = Omit<Employee, 'userId'>

const formState = reactive<EmployeeData>({
  address: '',
  age: '',
  firstName: '',
  lastName: '',
})

const handleAddEmployee = (values: EmployeeData) => {
  const employeesStore = useEmployeesStore()

  try {
    employeesStore.addEmployee(formState)

    router.push('/status/created')
  } catch(error) {
    console.log(error)
  }
}
</script>

<template>
  <a-row justify="center">
    <a-card title="Add an employee" style="width: 30rem">
      <a-form
        :model="formState"
        autocomplete="off"
        @finish="handleAddEmployee"
      >
        <a-form-item>
          <a-input
              v-model:value="formState.firstName"
              name="name"
              placeholder="Enter your name"
          />
        </a-form-item>
        <a-form-item>
          <a-input
              v-model:value="formState.lastName"
              name="surename"
              placeholder="Enter your sure name"
          />
        </a-form-item>
        <a-form-item>
          <a-input
              v-model:value="formState.age"
              name="age"
              placeholder="Enter your age"
          />
        </a-form-item>
        <a-form-item>
          <a-input
              v-model:value="formState.address"
              name="address"
              placeholder="Enter your address"
          />
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            htmlType="submit"
            :loading="false"
          >
            Add
          </a-button>
        </a-form-item>
      </a-form>
      <a-space direction="vertical" size="large">
        <!--        <ErrorMessage message={ error } />-->
      </a-space>
    </a-card>
  </a-row>
</template>

