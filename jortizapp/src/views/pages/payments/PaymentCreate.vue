<template>
  <v-card class="mx-auto">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Cadastro de Colaboradores
      </v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="rules.form" class="pa-4 pt-6">
      <div class="row">
        <v-col cols="6">
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Colaborador"
            required
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Cliente"
            required
          ></v-select>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Serviço"
            required
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="input.service_billing"
            :counter="10"
            :rules="nameRules"
            label="Fatura"
            required
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="12">
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Método de Pagamanto"
            required
          ></v-select>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="input.employee_work_hour"
            :rules="emailRules"
            label="Horas Trabalhadas"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="input.mployee_salary_hours"
            :rules="emailRules"
            label="Salário Hora"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Porcentagem de Participação"
            required
          ></v-select>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Tips"
            required
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Desconto"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Descrição de Desconto"
            required
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="4">
          <v-text-field
            v-model="input.employee_miles_travelled"
            :rules="emailRules"
            label="Milhas"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="input.employee_car_efficiency"
            :rules="emailRules"
            label="Autonomia"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="input.employee_gas_price"
            :rules="emailRules"
            label="Preço Combustível"
            required
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Ganhos Colaborador"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Ganhos Companhia"
            required
          ></v-text-field>
        </v-col>
      </div>
    </v-form>
    <v-card-actions>
      <v-btn variant="text" @click="$refs.form.reset()"> Limpar </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!rules.form"
        :loading="rules.isLoading"
        color="primary"
        @click="saveEmployee($refs.form)"
      >
        Salvar
      </v-btn>
    </v-card-actions>
    <div class="text-center">
      <!-- <v-btn color="primary"> Open Dialog </v-btn> -->
      <v-dialog v-model="rules.dialog" activator="parent" type="error">
        <v-card>
          <v-card-text>
            <span>{{ rules.output }}</span>
          </v-card-text>
          <v-card-actions class="d-grid">
            <button
              type="button"
              class="btn btn-primary block"
              @click="rules.dialog = false"
            >
              FECHAR
            </button>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import stores from "@/stores/index.js";
const employee = stores.employeeStore();

const rules = reactive({
  strings: (v) =>
    !!(v || "").match("^[a-z A-Z s]+$") || "Por favor, informe apenas letras.",
  numbers: (v) =>
    !!(v || "").match("^[0-9 s]+$") || "Por favor, informe apenas números.",
  required: (v) => !!v || "Este campo é mandatório.",
  form: false,
  isLoading: false,
  dialog: false,
});

const input = reactive({
  client: undefined,
  reportedAt: undefined,
  employee: undefined,
  employee_car_efficiency: undefined,
  employee_discounts: undefined,
  employee_discounts_description: undefined,
  employee_gains: undefined,
  employee_gas_price: undefined,
  employee_miles_travelled: undefined,
  employee_salary_hours: undefined,
  employee_service_percentage: undefined,
  employee_tips: undefined,
  employee_work_hours: undefined,
  employer_gains: undefined,
  service: undefined,
  service_billing: undefined,
  status: true,
});

function saveEmployee(form) {
  employee
    .saveEmployees(this.input)
    .then((s) => {
      rules.output = "Colaborador salvo com sucesso!";
      rules.dialog = true;
    })
    .catch((e) => {
      rules.output =
        "Colaborador não pode ser salvo! Tente novamente mais tarde.";
      rules.dialog = true;
    })
    .finally(() => {
      form.reset();
    });
}
</script>

<style>
</style>