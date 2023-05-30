<script setup lang="ts">
import { COLUMNS }            from '@/constants/form'
import { useEmployeesStore }  from "@/stores"
import { watchEffect }        from "vue"
import router                 from "@/router"

const { state, getAllEmployees } = useEmployeesStore()

watchEffect(() => {
  getAllEmployees()
})

const gotToAddEmployee = () => router.push({ path: '/employee/add' })

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
      :dataSource="state.employees"
      :columns="COLUMNS"
      :loading="state.loading"
    />
  </a-space>
</template>


<style>
</style>
