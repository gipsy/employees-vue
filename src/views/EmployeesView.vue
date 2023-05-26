<script setup lang="ts">
import { Employee } from "@prisma/client"
import { ColumnsType } from "ant-design-vue/es/table"
import { useEmployeesStore } from "@/stores"

const { data } = useEmployeesStore()

const COLUMNS: ColumnsType<Employee> = [
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
  <a-button type="primary">
    Add
  </a-button>
  <a-table
    :dataSource="data"
    :columns="COLUMNS"
  />
</template>


<style>

</style>
