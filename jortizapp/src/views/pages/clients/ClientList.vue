<template>
  <div v-if="!stores.clientStore().countClients">
    <v-alert variant="outlined" type="warning" prominent border="top">
      Ops. Não existem dados de <strong>clientes</strong> a serem listados.
    </v-alert>
  </div>
  <v-card class="mx-auto" v-if="stores.clientStore().countClients">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Lista de Clientes
      </v-card-title>
    </v-toolbar>
    <v-table
      fixed-header
      height="700px"
    >
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Telefone</th>
          <th class="text-left">Email</th>
          <th class="text-left">Endereço</th>
          <th class="text-left">Cidade</th>
          <th class="text-left">Estado</th>
          <th class="text-left">Total Revenue</th>
          <th class="text-left">Detalhes</th>
          <th class="text-left">Custo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in client.clients" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.state }}</td>
          <td>{{ item.total_revenue }}</td>
          <td>{{ item.details }}</td>
          <td>{{ item.cost }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { onMounted } from "vue";
import stores from "@/stores/index.js";
const client = stores.clientStore();

onMounted(() => {
  client.loadClients().catch();
});
</script>

<style>
</style>