<template>
  <v-table fixed-header height="700px" class="border">
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
        <th class="text-left">Atualizado</th>
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
        <td>{{ item.update }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import stores from "@/stores/index.js";

const client = stores.clientStore();
console.log("Montando cliente...", client.countClients);

onMounted(() => {
  client.loadClients().catch((e) => {
    console.log("Error ", e);
  });
});
</script>

<style>
</style>