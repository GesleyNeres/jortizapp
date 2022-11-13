import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken } from '@/modules/services'
import router from "@/router/index"

export const clientStore = defineStore({
    id: 'client',
    state: () => ({
        clients: [],
    }),
    getters: {
        countClients: (state) => state.clients.length
    },
    actions: {
        async loadClients() {
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    const {data} = await http.get('/clients')
                    this.clients = data
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
        }
    }
})