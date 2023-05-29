import { defineStore } from 'pinia'
import { BASE_URL }    from '@/constants'
import { User }                  from '@/types'
import { reactive, toRefs } from "vue";

type ResponseData = User & { token: string };

interface InitialState {
  user: User & { token: string } | null,
  isAuthorized: boolean,
  loadingAuth: boolean,
  error: string
}

const initialState: InitialState = {
  user: null,
  isAuthorized: false,
  loadingAuth: false,
  error: ''
}

export const useAuthStore = defineStore('authStore', () => {
  const state = reactive<InitialState>(initialState)
  
  async function login(formData: User) {
    state.loadingAuth = true
    console.log('login', formData)
    const res = await fetch<ResponseData, User>(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( formData )
    })
  
    const data = await res.json()
    if (data) {
      state.user = data
      localStorage.setItem('token', data.token)
      state.isAuthorized = true
    } else {
      state.error = data.error.message
    }
    state.loadingAuth = false
  }
  
  async function register(formData: User) {
    state.loadingAuth = true
    const res = await fetch<ResponseData, User>(`${BASE_URL}/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( formData )
    })
    
    const data = await res.json()
    if (data) {
      state.user = data
      localStorage.setItem('token', data.token)
      state.isAuthorized = true
    } else {
      state.error = data.error.message
    }
    state.loadingAuth = false
  }
  
  async function current() {
    const res = await fetch(`${BASE_URL}/user/current`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    const data = await res.json()
    state.user = data
    state.isAuthorized = true
    console.log(state.isAuthorized)
  }
  
  async function logout() {
    //loading.value = true
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
    console.log('logout')
    state.isAuthorized = false
    //loading.value = false
  }
  
  return {
    state,
    login,
    logout,
    register,
    current,
  }
})

//export const useAuthStore = defineStore({
//  id: 'auth',
//  state: () => {
//    return initialState
//  },
//  actions: {
//    async login(formData: User) {
//      try {
//        this.loading = true
//        const response = await fetch<ResponseLoginData, User>(`${BASE_URL}/user/login`, {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json'
//          },
//          body: JSON.stringify( formData )
//        })
//        const data = await response.json()
//        this.user = data
//        this.isAuthenticated = true
//        if (data.token) {
//          localStorage.setItem('token', data.token)
//        }
//        this.loading = false
//        await router.push({ path: '/'})
//      } catch(error) {
//        console.log(error)
//        this.loading = false
//      }
//    },
//    async register(formData: User) {
//      try {
//        this.loading = true
//        const response = await fetch<ResponseLoginData, User>(`${BASE_URL}/user/register`, {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json'
//          },
//          body: JSON.stringify( formData ),
//        })
//        const data = await response.json()
//        this.user = data
//        if (data.token) {
//          localStorage.setItem('token', data.token)
//        }
//        this.loading = false
//      } catch(error) {
//        console.log(error)
//        this.loading = false
//      }
//    },
//    async current() {
//      try {
//        this.loading = true
//        await fetch<ResponseLoginData, void>(`${BASE_URL}/current/user`, {
//          method: 'GET',
//          headers: {
//            'Authorization': `Bearer ${localStorage.getItem('token')}`
//          }
//        })
//        this.loading = false
//      } catch(error) {
//        console.log(error)
//        this.loading = false
//      }
//    },
//    logout: () => initialState,
//  },
//  getters:{
//    isAuth: (state) => state.user !== null
//  }
//})


