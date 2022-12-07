<template>
  <div v-if="!stores.employeeStore().countEmployees">
    <v-alert variant="outlined" type="warning" prominent border="top">
      Ops. Não existem dados de <strong>colaboradores</strong> a serem listados.
    </v-alert>
  </div>
  <v-card class="mx-auto" v-if="stores.employeeStore().countEmployees">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Lista de Colaboradores
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in employee.employees" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { onMounted } from "vue";
import stores from "@/stores/index.js";

const employee = stores.employeeStore();

onMounted(() => {
  employee.loadEmployees().catch(function(e){
    console.log("Erro para carregar colaboradores.");
  });
});
</script>

<style>
</style>