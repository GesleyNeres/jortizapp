import { defineStore } from 'pinia'
import { http, setBearerToken } from '@/http'
import { getLocalToken, getLocalApplicationPersistent} from '@/modules/services'
import router from "@/router/index"

export const applicationStore = defineStore({
    id: 'application',
    state: () => ({
        application: {},
    }),
    getters: {
        
    },
    actions: {
        async loadApplication() {
            return new Promise(async (resolve, reject) => {
                try {
                    if (getLocalApplicationPersistent('application')) {
                        this.application = getLocalApplicationPersistent('application')
                    } else {
                        setBearerToken(getLocalToken())
                        const { data } = await http.get('/application')
                        this.application = data
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
        }
    }
})