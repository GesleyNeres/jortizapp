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
        countClients: (state) => {
            return state.clients.length || null
        },
        nameClients: (state) => {
            const nameClients = []
            state.clients.forEach(e => {
                nameClients.push({ id: e.id, name: e.name, total_revenue: e.total_revenue })
            })
            return nameClients
        }
    },
    actions: {
        async loadClients() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalClientsPersistent('client')) {
                        this.clients = getLocalClientsPersistent('client')
                    } else {
                        setBearerToken(getLocalToken())
                        const { data } = await http.get('/clients')
                        this.clients = data
                    }
                    resolve()
                } catch (error) {
                    const { response } = error
                    if (response) {
                        reject(response.data.error)
                    } else {
                        reject("Internal Error. Please, try again later.")
                    }
                }
            }
            )
        },
        async saveClients(form_data) {
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    const { data } = await http.post('/clients', form_data)
                    form_data.uuid = data
                    this.clients.push(form_data)
                    setLocalClientsPersistent('client', this.clients)
                    resolve('Cliente cadastrado com sucesso.')
                } catch (error) {
                    const { response } = error
                    if (response) {
                        reject(response.data.error)
                    } else {
                        reject("Internal Error. Please, try again later.")
                    }
                }
            }
            )
        }
    }
})