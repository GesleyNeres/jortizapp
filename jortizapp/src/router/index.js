import { createRouter, createWebHistory } from 'vue-router'
import { default as modules } from '../modules/routes/index'
import { default as views } from '../views/routes/index'
import userStore from "@/stores/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...modules,
    ...views
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'login' && !userStore.userStore().hasToken) {
    try {
      await userStore.userStore().checkToken()

      next({ path: to.path })

    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && userStore.userStore().hasToken) {
      next({ name: '' })/* If error set back as dashboard */
    } else {
      next()
    }
  }

}
)

export default router
