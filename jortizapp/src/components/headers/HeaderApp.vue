<template>
  <div>
    <v-sheet color="grey-lighten-4" class="pa-4">
      <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

      <div>{{user.user.email}}</div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item link>
        <template v-slot:prepend>
          <v-icon>mdi-home</v-icon>
        </template>
        <router-link :to="{ name: 'dashboard' }" class="nav-link">Início</router-link>
      </v-list-item>
      <v-list-item link>
        <template v-slot:prepend>
          <v-icon>mdi-office-building-marker-outline</v-icon>
        </template>
        <router-link :to="{ name: 'client-list' }" class="nav-link">Clientes</router-link>
      </v-list-item>
      <v-list-item link>
        <template v-slot:prepend>
          <v-icon>mdi-human-queue</v-icon>
        </template>
        <router-link :to="{ name: 'employee' }" class="nav-link">Colaboradores</router-link>
      </v-list-item>
      <v-list-item link>
        <template v-slot:prepend>
          <v-icon>mdi-pail</v-icon>
        </template>
        <router-link :to="{ name: 'service' }" class="nav-link">Serviços</router-link>
      </v-list-item>
      <v-list-item link>
        <template v-slot:prepend>
          <v-icon>mdi-cash-check</v-icon>
        </template>
        <router-link :to="{ name: 'payment' }" class="nav-link">Pagamentos</router-link>
      </v-list-item>
      <v-list-item link>
        <template v-slot:prepend>
          <v-icon>mdi-logout-variant</v-icon>
        </template>
        <a type="button" class="nav-link" @click="doLogout">Sair</a>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import router from "@/router/index";
import { onMounted } from "@vue/runtime-core"
import userStore from "@/stores/index";
const user = userStore.userStore();


/* Function to perform logout */
function doLogout(){
  user.doLogout()
  .then(s=>{
    router.push('/login')
  })
  .catch(e=>{
    
  })
  .finally(()=>{

  })
}

onMounted(()=>{

})

</script>

<style>
</style>