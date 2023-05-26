//import { Employee } from '@prisma/client'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { BASE_URL } from '../constants'

//export type RootState = {
//  employees: Employee[] | null
//}

const employeesStore = ref(null)

async function useEmployees() {
  const response = await fetch(`${BASE_URL}/employees`, {
    method: 'GET',
  })
  console.log(response)
  employeesStore.value = response.json()
}

export const useEmployeesStore = defineStore(
  'employees',
  useEmployees
);

//export const useMainStore = defineStore({
//  id: 'mainStore',
//  state: () => (
//    {
//      employees: [],
//    } as RootState
//  ),
//
//  actions: {
//    async getEmployees() {
//      const data = await axios.get(`${BASE_URL}/employees`)
//      this.employees = data
//    }
//  }
//})
