import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken, getLocalPaymentsPersistent, setLocalPaymentsPersistent } from '@/modules/services'
import router from "@/router/index"

export const paymentStore = defineStore({
    id: 'payment',
    state: () => ({
        payments: [],
        reports: []
    }),
    getters: {
        hasReports: (state) => {
            return state.reports.length || null
        },
        countPayments: (state) => {
            return state.payments.length || null
        },
        paymentReportSunday(){
            return this.reports.filter(el=> el.weekday === "Sunday")
        },
        paymentReportMonday(){
            return this.reports.filter(el=> el.weekday === "Monday")
        },
        paymentReportTuesday(){
            return this.reports.filter(el=> el.weekday === "Tuesday")
        },
        paymentReportWednesday(){
            return this.reports.filter(el=> el.weekday === "Wednesday")
        },
        paymentReportThursday(){
            return this.reports.filter(el=> el.weekday === "Thursday")
        },
        paymentReportFriday(){
            return this.reports.filter(el=> el.weekday === "Friday")
        },
        paymentReportSaturday(){
            return this.reports.filter(el=> el.weekday === "Saturday")
        },
        paymentReportTipsEmployee(){
            let total = 0
            this.reports.forEach(element=>{
                total+= parseFloat(element.employee_tips)
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportGasEmployee(){
            let total = 0
            this.reports.forEach(element=>{
                total+= parseFloat(element.employee_gas_price)
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalSunday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Sunday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalMonday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Monday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalTuesday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Tuesday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalWednesday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Wednesday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalThursday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Thursday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalFriday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Friday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        },
        paymentReportTotalSaturday(){
            let total = 0
            this.reports.forEach(el=>{
                if (el.weekday === "Saturday") {
                    total += parseFloat(el.employee_gains)
                }
            })
            return parseFloat(total).toFixed(2)
        }
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
        },
        async searchPayments(form_data){
            return new Promise(async (resolve, reject) => {
                try {
                    setBearerToken(getLocalToken())
                    const {data} = await http.get('/payslips/report', 
                    { 
                        params: { 
                            employeeName: form_data.employeeName, 
                            startDate: form_data.startDate, 
                            endDate: form_data.endDate } 
                    }
                    )
                    this.reports = data
                    /* setLocalPaymentsPersistent('payment', this.payments) */
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
        }
    }
})