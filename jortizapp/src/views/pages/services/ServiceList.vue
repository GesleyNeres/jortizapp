<template>
  <div v-if="!stores.serviceStore().countServices">
    <v-alert variant="outlined" type="warning" prominent border="top">
      Ops. Não existem dados de <strong>serviços</strong> a serem listados.
    </v-alert>
  </div>
  <v-card class="mx-auto" v-if="stores.serviceStore().countServices">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Lista de Serviços
      </v-card-title>
    </v-toolbar>
    <v-table
      fixed-header
      height="700px"
    >
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Descrição</th>
          <th class="text-left">Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in service.services" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { onMounted } from "vue";
import stores from "@/stores/index.js";
const service = stores.serviceStore();

onMounted(() => {
  service.loadServices().catch(function(e){
    console.log("Erro para carregar serviços.");
  });
});
</script>

<style>
</style>