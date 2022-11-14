import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
/* import * as bootstrap from 'bootstrap' */
import * as bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import { 
    getLocalUserPersistent, setLocalUserPersistent, 
    getLocalClientsPersistent, setLocalClientsPersistent,
    getLocalServicesPersistent, setLocalServicesPersistent,
    getLocalEmployeesPersistent, setLocalEmployeesPersistent,
    getLocalPaymentsPersistent, setLocalPaymentsPersistent
} from '@/modules/services/index.js'

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
      setLocalUserPersistent(loginId, state)
    })     

  }

  if (context.store.$id == 'client') {

      const loginId = context.store.$id

      const fromStorage = getLocalClientsPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalClientsPersistent(loginId, state.clients)
      })

      console.log("Passando em main pinia como client: > ", fromStorage)
  }

  if (context.store.$id == 'service') {

      const loginId = context.store.$id

      const fromStorage = getLocalServicesPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalServicesPersistent(loginId, state.services)
      })

  }

  if (context.store.$id == 'employee') {
      
      const loginId = context.store.$id

      const fromStorage = getLocalEmployeesPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalEmployeesPersistent(loginId, state.employees)
      })

  }

  if (context.store.$id == 'payment') {

      const loginId = context.store.$id

      const fromStorage = getLocalPaymentsPersistent(loginId)

      if (fromStorage) {
          context.store.$patch(fromStorage)
      }

      context.store.$subscribe((mutation, state) => {
          setLocalPaymentsPersistent(loginId, state.payments)
      })

  }

})

app.use(pinia)
app.use(bootstrap)
app.use(vuetify)
app.use(router)
app.mount('#app')
