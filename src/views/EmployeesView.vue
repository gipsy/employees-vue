<script setup lang="ts">
import { Employee }                        from "@/types"
import { ColumnsType }                     from "ant-design-vue/es/table"
import { useAuthStore, useEmployeesStore } from "@/stores"
import { watchEffect }                     from "vue"
import { storeToRefs }                     from "pinia"

const employeesStore = useEmployeesStore()

const { employees, loadingEmployees } = storeToRefs(employeesStore)

watchEffect(async (onCleanup) => {
  //const { response, cancel } = doAsyncWork(id.value)
  //// `cancel` will be called if `id` changes
  //// so that previous pending request will be cancelled
  //// if not yet completed
  ////onCleanup(cancel)
  //data.value = await response
  try {
    await employeesStore.getAllEmployees()
  } catch(error) {
    console.log(error)
  }
})

const gotToAddEmployee = () => router.push({ path: '/employee/add' })

const COLUMNS = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
];
</script>

<template>
  <a-space direction="vertical" size="middle" style="width: 100%">
    <a-button
      type="primary"
      @click="gotToAddEmployee"
    >
      <template #icon>
        <PlusCircleOutlined />
      </template>
      Add
    </a-button>
    <a-table
      :dataSource="employees"
      :columns="COLUMNS"
      :loading="loadingEmployees"
    />
  </a-space>
</template>


<style>
</style>
