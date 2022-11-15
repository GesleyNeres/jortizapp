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
        countEmployees: (state) => {
            return state.employees.length || null
        },
        nameEmployees: (state) => {
            const nameEmployees = []
            state.employees.forEach(e=>{
                nameEmployees.push({id: e.id, name: e.name})
            })
            return nameEmployees
        }
    },
    actions: {
        async loadEmployees() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalEmployeesPersistent('employee')) {
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