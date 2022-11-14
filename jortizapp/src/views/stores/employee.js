import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken, getLocalEmployeesPersistent, setLocalEmployeesPersistent } from '@/modules/services'
import router from "@/router/index"

export const employeeStore = defineStore({
    id: 'employee',
    state: () => ({
        employees: [],
    }),
    getters: {
        countEmployees: (state) => state.employees.length || null
    },
    actions: {
        async loadEmployees() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalEmployeesPersistent('employee')) {
                        console.log("Carregado do persistente employee")
                        this.employees = getLocalEmployeesPersistent('employee')
                    }else{
                        setBearerToken(getLocalToken())
                        const {data} = await http.get('/employees')
                        this.employees = data
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
        async saveEmployees(form_data){
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    console.log("Token ", getLocalToken())
                    const {data} = await http.post('/employees', form_data)
                    form_data.uuid = data
                    this.employees.push(form_data)
                    setLocalEmployeesPersistent('employee', this.employees)
                    resolve('Colaborador cadastrado com sucesso.')
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