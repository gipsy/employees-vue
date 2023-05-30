import { defineStore } from 'pinia'
import { BASE_URL }    from '@/constants'
import { User }        from '@/types'
import { reactive }    from "vue"

type ResponseData = User & { token: string }

interface InitialState {
  user: User & { token: string } | null,
  isAuthorized: boolean,
  loading: boolean,
  errorMsg: string
}

const initialState: InitialState = {
  user: null,
  isAuthorized: false,
  loading: false,
  errorMsg: ''
}

export const useAuthStore = defineStore('authStore', () => {
  const state = reactive<InitialState>(initialState)
  
  async function login(formData: User) {
    try {
      state.loading = true
      const res = await fetch<ResponseData, User>(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( formData )
      })
      const data = await res.json()
      
      state.user = data
      localStorage.setItem( 'token', data.token )
      state.isAuthorized = true
    } catch(error) {
      state.errorMsg = error.message
    } finally {
      state.loading = false
    }
  }
  
  async function register(formData: User) {
    try {
      state.loading = true
      const res = await fetch<ResponseData, User>(`${BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( formData )
      })
      const data = await res.json()
      
      state.user = data
      localStorage.setItem('token', data.token)
      state.isAuthorized = true
    } catch(error) {
      state.errorMsg = error.message
    } finally {
      state.loading = false
    }
  }
  
  async function current() {
    try {
      state.loading = true
      const res = await fetch(`${BASE_URL}/user/current`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      const data = await res.json()
      
      state.user = data
      state.isAuthorized = true
    } catch(error) {
      state.errorMsg = error.message
    } finally {
      state.loading = false
    }
  }
  
  async function logout() {
    // TODO implement refresh token
    //const token = localStorage.getItem('token')
    //const res = await fetch(`${BASE_URL}/user/logout`, {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json'
    //  },
    //  body: token
    //})
    localStorage.removeItem('token')
    state.isAuthorized = false
  }
  
  return {
    state,
    login,
    register,
    current,
    logout,
  }
})
