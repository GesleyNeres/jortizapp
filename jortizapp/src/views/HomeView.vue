<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <HeaderView/>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>J Ortiz - Controle de Pagamentos</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import HeaderView from "@/components/headers/HeaderApp.vue";
import router from "@/router/index"

let drawer = ref(null);
router.push('/dashboards')

</script>
<style scoped>

</style>