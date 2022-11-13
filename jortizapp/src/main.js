import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
/* import * as bootstrap from 'bootstrap' */
import * as bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import {getLocalUserPersistent, setLocalUserPersistent} from '@/modules/services/index.js'

loadFonts()

const app = createApp(App)
const pinia = createPinia()

pinia.use((context) => {
    
  if (context.store.$id == 'user') {
    
    const loginId = context.store.$id
    const fromStorage = getLocalUserPersistent(loginId)
    
    if (fromStorage) {
      context.store.$patch(fromStorage)
    }
    
    context.store.$subscribe((mutation, state) => {
        console.log("State ", state)
      setLocalUserPersistent(loginId, state)
    })
      console.log("Passando em main pinia: > ", fromStorage)
      

  }

/*   if (context.store.$id == 'client') {

      const loginId = context.store.$id

      const fromStorage = getLocalClientsPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalClientsPersistent(loginId, state.clients)
      })

  } */

/*   if (context.store.$id == 'service') {

      const loginId = context.store.$id

      const fromStorage = getLocalServicesPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalServicesPersistent(loginId, state.services)
      })

  } */

/*   if (context.store.$id == 'employee') {
      
      const loginId = context.store.$id

      const fromStorage = getLocalEmployeesPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalEmployeesPersistent(loginId, state.employees)
      })

  } */

  /* if (context.store.$id == 'payslip') {

      const loginId = context.store.$id

      const fromStorage = getLocalPayslipsPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalPayslipsPersistent(loginId, state.payslips)
      })

  }
 */
})

app.use(pinia)
app.use(bootstrap)
app.use(vuetify)
app.use(router)
app.mount('#app')
