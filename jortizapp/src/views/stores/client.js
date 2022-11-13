import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken, getLocalClientsPersistent, setLocalClientsPersistent } from '@/modules/services'
import router from "@/router/index"

export const clientStore = defineStore({
    id: 'client',
    state: () => ({
        clients: [],
    }),
    getters: {
        countClients: (state) => state.clients.length || null
    },
    actions: {
        async loadClients() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalClientsPersistent('client')) {
                        console.log("Carregado do persistente")
                        this.clients = getLocalClientsPersistent('client')
                    }else{
                        setBearerToken(getLocalToken())
                        const {data} = await http.get('/clients')
                        this.clients = data
                    }
                    resolve()
                } catch (error) {
                    const {response} = error
                    if (response) {
                        reject(response.data.error)
                    }else{
                        reject("Internal Error. Please, try again later.")
                    }
                }
            }
            )
        },
        async saveClients(form_data){
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    console.log("Token ", getLocalToken())
                    const {data} = await http.post('/clients', form_data)
                    form_data.uuid = data
                    this.clients.push(form_data)
                    setLocalClientsPersistent('client', this.clients)
                    resolve('Cliente cadastrado com sucesso.')
                } catch (error) {
                    const {response} = error
                    if (response) {
                        reject(response.data.error)
                    }else{
                        reject("Internal Error. Please, try again later.")
                    }
                }
            }
            )
        }
    }
})