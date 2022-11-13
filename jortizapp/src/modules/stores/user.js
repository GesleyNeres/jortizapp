import { defineStore } from 'pinia'
import { http } from '@/http'
import router from "@/router/index"
import { setLocalToken, deleteLocalData } from '@/modules/services'

export const userStore = defineStore({
    id: 'user',
    state: () => ({
        user: {},
    }),
    getters: {
        hasToken: (state) => !!state.user.tokens
    },
    actions: {
        async doLogin(email, password) {
            return new Promise(async (resolve, reject) => {
                try {
                    const {data} = await http.post('/auth/login',
                    {
                        email: email,
                        password: password
                    }
                    )
                    this.user = data
                    setLocalToken(this.user.tokens)
                    resolve()
                } catch (error) {
                    if (error.response.data.error) {
                        reject(error.response.data.error)
                    }else{
                        reject("Internal Error. Please, try again later.")
                    }
                }
            }
            )
        },
        async doLogout() {
            return new Promise(async (resolve, reject) => {
                try {
                    console.log("calling logout...")
                    deleteLocalData()
                    this.user = {} 
                    resolve()
                } catch (error) {
                    reject(error)
                }
            }
            )
        },
        checkToken() {
            if (this.user.tokens) {
                return Promise.resolve(this.user.tokens)
            }

            if (!this.user.tokens) {
                return Promise.reject(new Error('Invalid token.'))
            }

        },
        async loadSession() {
            return new Promise(async (resolve, reject) => {
                try {
                    const { data } = await http.get('/auth/session')
                    this.user = data
                    resolve()
                } catch (error) {
                    this.doLogout()
                    reject(error)
                }
            })
        }
    }
})