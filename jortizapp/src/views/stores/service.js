import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken, getLocalServicesPersistent, setLocalServicesPersistent } from '@/modules/services'
import router from "@/router/index"

export const serviceStore = defineStore({
    id: 'service',
    state: () => ({
        services: [],
    }),
    getters: {
        countServices: (state) => {
            return state.services.length || null
        },
        nameServices: (state) => {
            const nameServices = []
            state.services.forEach(e=>{
                nameServices.push({id: e.id, name: e.name})
            })
            return nameServices
        }
    },
    actions: {
        async loadServices() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalServicesPersistent('service')) {
                        console.log("Carregado do persistente")
                        this.services = getLocalServicesPersistent('service')
                    }else{
                        setBearerToken(getLocalToken())
                        const {data} = await http.get('/services')
                        this.services = data
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
        async saveServices(form_data){
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    console.log("Token ", getLocalToken())
                    const {data} = await http.post('/services', form_data)
                    form_data.uuid = data
                    this.services.push(form_data)
                    setLocalServicesPersistent('service', this.services)
                    resolve('Serviço cadastrado com sucesso.')
                } catch (error) {
                    console.log("Error obtido ", error)
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