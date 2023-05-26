import { defineStore } from 'pinia'
import { BASE_URL }    from "@/constants";
//import router          from "@/router";

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    //user: JSON.parse(localStorage.getItem('user')),
    user: null,
  }),
  actions: {
    //async login(password, username) {
    //
    //},
    async register(formData) {
      try {
        const data = JSON.parse(JSON.stringify(formData));
        const response = await fetch(`${BASE_URL}/user/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( data ),
        })
        console.log(response)
        this.user = response.json()
        console.log(this.user)
        //await router.push('/');
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.user = null;
      //localStorage.removeItem('user');
      //router.push('/login');
    }
  }
})


