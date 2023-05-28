import { computed, ref, toRefs } from 'vue'
import { defineStore }           from 'pinia'
import { BASE_URL }              from '../constants'
import { Employee }              from "@/types";

export const useEmployeesStore = defineStore('employees',() => {
  const employees = ref([])
  const loading = ref(false)
  const error = ref('')
  
  
  async function getAllEmployees() {
    try {
      loading.value = true
      const response = await fetch(`${BASE_URL}/employees`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await response.json()
      if (Array.isArray(data)) {
        employees.value = data
      } else {
        employees.value = []
      }
      loading.value = false
    } catch(error) {
      console.log(error)
      loading.value = false
    }
  }
  
  async function addEmployee(formData: Employee) {
    await fetch(`${BASE_URL}/employees/add`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify( formData )
    })
  }
  
  return { employees, getAllEmployees, addEmployee, loading }
})
