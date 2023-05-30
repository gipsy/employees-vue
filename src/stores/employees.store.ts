import { reactive, toRef, toRefs } from 'vue'
import { defineStore }             from 'pinia'
import { BASE_URL }              from '../constants'
import { Employee }              from "@/types"

interface InitialState {
  employees: Employee[] | null,
  loading: boolean,
  errorMsg: string,
}

const initialState: InitialState = {
  employees: [],
  loading: false,
  errorMsg: ''
}

export const useEmployeesStore = defineStore('employeesStore',() => {
  const state = reactive<InitialState>(initialState)
  
  async function getAllEmployees() {
    try {
      state.loading = true
      const response = await fetch(`${BASE_URL}/employees`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await response.json()
      state.employees = data
    } catch(error) {
      state.errorMsg = error.message
    } finally {
      state.loading = false
    }
  }
  
  async function addEmployee(formData: Employee) {
    try {
      state.loading = true
      await fetch(`${BASE_URL}/employees/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify( formData )
      })
    } catch(error) {
      state.errorMsg = error.message
    } finally {
      state.loading = false
    }
  }
  
  return {
    state,
    getAllEmployees,
    addEmployee
  }
})
