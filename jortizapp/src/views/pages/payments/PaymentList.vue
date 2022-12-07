<template>
  <div v-if="!stores.paymentStore().countPayments">
    <v-alert variant="outlined" type="warning" prominent border="top">
      Ops. Não existem dados de <strong>pagamentos</strong> a serem listados.
    </v-alert>
  </div>
  <v-card class="mx-auto" v-if="stores.paymentStore().countPayments">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Lista de Pagamentos
      </v-card-title>
    </v-toolbar>
    <v-table
      fixed-header
      height="700px"
    >
      <thead>
        <tr>
          <th class="text-left">Colaborador</th>
          <th class="text-left">Serviço</th>
          <th class="text-left">Cliente</th>
          <th class="text-left">Valor de Fatura</th>
          <th class="text-left">Porcentagem de Serviço</th>
          <th class="text-left">Colaborador (Horas)</th>
          <th class="text-left">Colaborador (Salario)</th>
          <th class="text-left">Colaborador Descontos</th>
          <th class="text-left">Descrição de Descontos</th>
          <th class="text-left">Eficiência de Carro</th>
          <th class="text-left">Milhas Viajada</th>
          <th class="text-left">Preço Combustivel</th>
          <th class="text-left">Colaborador Tips</th>
          <th class="text-left">Colaborador Ganhos</th>
          <th class="text-left">Companhia Ganhos</th>
          <th class="text-left">Referência</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in payment.payments" :key="item.name">
          <td>{{ item.employee }}</td>
          <td>{{ item.service }}</td>
          <td>{{ item.client }}</td>
          <td>${{ item.service_billing }}</td>
          <td>{{ item.employee_service_percentage }}%</td>
          <td>{{ item.employee_work_hours }}/H</td>
          <td>${{ item.employee_salary_hours }}</td>
          <td>${{ item.employee_discounts }}</td>
          <td>{{ item.employee_discounts_description }}</td>
          <td>{{ item.employee_car_efficiency }} MPG</td>
          <td>{{ item.employee_miles_travelled }} ML</td>
          <td>${{ item.employee_gas_price }}</td>
          <td>${{ item.employee_tips }}</td>
          <td>${{ item.employee_gains }}</td>
          <td>${{ item.employer_gains }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { onMounted } from "vue";
import stores from "@/stores/index.js";

const payment = stores.paymentStore();

onMounted(() => {
  payment.loadPayments().catch(function(e){
    console.log("Erro para carregar colaboradores.");
  });
});
</script>

<style>
</style>