import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken, getLocalPaymentsPersistent, setLocalPaymentsPersistent } from '@/modules/services'
import router from "@/router/index"

export const paymentStore = defineStore({
    id: 'payment',
    state: () => ({
        payments: [],
    }),
    getters: {
        countPayments: (state) => state.payments.length || null
    },
    actions: {
        async loadPayments() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalPaymentsPersistent('payment')) {
                        this.payments = getLocalPaymentsPersistent('payment')
                    }else{
                        setBearerToken(getLocalToken())
                        const {data} = await http.get('/payslips')
                        this.payments = data
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
        async savePayments(form_data, internal_data){
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    const {data} = await http.post('/payslips', form_data)
                    internal_data.uuid = data
                    this.payments.push(internal_data)
                    setLocalPaymentsPersistent('payment', this.payments)
                    resolve('Pagamento cadastrado com sucesso.')
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