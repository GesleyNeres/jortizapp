<template>
<div>{{internal}}</div>
<div>{{input}}</div>
  <v-card class="mx-auto">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Cadastro de Pagamentos
      </v-card-title>
    </v-toolbar>
    <v-form ref="form"  lazy-validation class="pa-4 pt-6"><!-- v-model="rules.form" -->
      <div class="row">
        <v-col cols="6" offset="3">
          <v-sheet></v-sheet>
        </v-col>
        <v-col cols="3">
          <v-text-field label="Referência" type="date" required v-model="input.reportedAt" @update:modelValue="internal.date = $event, validateForm()"></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-select
            :hint="'Colaborador quem receberá o pagamento.'"
            :items="employee.nameEmployees"
            item-title="name"
            item-value="id"
            label="Colaborador"
            @update:modelValue="(input.employee = $event.id), validateForm(),internal.employee = $event.name"
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-select
            :hint="'Cliente para quem foi prestado serviço.'"
            :items="client.nameClients"
            item-title="name"
            item-value="id"
            label="Cliente"
            @update:modelValue="
            input.client = $event.id, input.service_billing = $event.total_revenue, 
            validateForm(),
            internal.client = $event.name, internal.service_billing = $event.total_revenue"
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-select
            :hint="'Serviço prestado ao cliente.'"
            :items="service.nameServices"
            item-title="name"
            item-value="id"
            label="Serviço"
            @update:modelValue="(input.service = $event.id), validateForm(),internal.service = $event.name"
            persistent-hint
            return-object
            single-line
            required
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="input.service_billing"
            prefix="$"
            label="Fatura"
            @update:modelValue="validateForm(),internal.service_billing = $event"
            required
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="12">
          <v-select
            v-model="select"
            :items="['Porcentagem de Participação', 'Horas Trabalhadas']"
            label="Método de Pagamanto"
            required
            @update:modelValue="
              (paymentMethod = $event),
                validateForm(),
                ((input.employee_service_percentage = undefined),
                (input.employee_work_hours = undefined),
                (input.employee_salary_hours = undefined)),
                ((internal.employee_service_percentage = undefined),
                (internal.employee_work_hours = undefined),
                (internal.employee_salary_hours = undefined))
            "
          ></v-select>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6" v-if="paymentMethod === 'Horas Trabalhadas'">
          <v-text-field
            v-model="input.employee_work_hours"
            label="Horas Trabalhadas"
            required
            suffix="H"
            @update:modelValue="validateForm(),internal.employee_work_hours = $event"
            
          ></v-text-field>
        </v-col>
        <v-col cols="6" v-if="paymentMethod === 'Horas Trabalhadas'">
          <v-text-field
            v-model="input.employee_salary_hours"
            label="Salário Hora"
            required
            prefix="$"
            @update:modelValue="validateForm(),internal.employee_salary_hours = $event"
            
          ></v-text-field>
        </v-col>
        <v-col cols="6" v-if="paymentMethod === 'Porcentagem de Participação'">
          <v-select
            v-model="input.employee_service_percentage"
            :items="[
              { label: '25%', value: 0.25 },
              { label: '27%', value: 0.27 },
              { label: '37%', value: 0.37 },
              { label: '75%', value: 0.75 },
            ]"
            label="Porcentagem de Participação"
            item-title="label"
            @update:modelValue="validateForm(),internal.employee_service_percentage = $event"
            required
          ></v-select>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="input.employee_tips"
            label="Tips"
            prefix="$"
            
            @update:modelValue="internal.employee_tips = $event"
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="input.employee_discounts"
            prefix="$"
            label="Desconto"
            
            @update:modelValue="internal.employee_discounts = $event"
          ></v-text-field>
        </v-col>
        <v-col cols="6" v-if="input.employee_discounts">
          <v-text-field
            v-model="input.employee_discounts_description"
            @update:modelValue="internal.employee_discounts_description = $event"
            
            label="Descrição de Desconto"
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="4">
          <v-text-field
            v-model="input.employee_miles_travelled"
            label="Milhas"
            suffix="MPG"
            
            @update:modelValue="internal.employee_miles_travelled = $event"
          ></v-text-field>
        </v-col>
        <v-col cols="4" v-if="input.employee_miles_travelled">
          <v-text-field
            v-model="input.employee_car_efficiency"
            label="Autonomia"
            suffix="MPL"
            
            @update:modelValue="internal.employee_car_efficiency = $event"
          ></v-text-field>
        </v-col>
        <v-col cols="4" v-if="input.employee_miles_travelled">
          <v-text-field
            v-model="input.employee_gas_price"
            label="Preço Combustível"
            
            @update:modelValue="internal.employee_gas_price = $event"
            prefix="$"
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            variant="underlined"
            :model-value="'$' + input_totals.employeeGains()"
            label="Ganhos do Colaborador"
            disabled
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            variant="underlined"
            :model-value="'$' + input_totals.companyGains()"
            label="Ganhos da Companhia"
            disabled
          ></v-text-field>
        </v-col>
      </div>
    </v-form>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!rules.form"
        :loading="rules.isLoading"
        color="primary"
        @click="savePayment($refs.form)"
      >
        Salvar
      </v-btn>
    </v-card-actions>
    <div class="text-center">
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
import { ref, reactive, onMounted } from "vue";
import stores from "@/stores/index.js";
const employee = stores.employeeStore();
const client = stores.clientStore();
const service = stores.serviceStore();
const payment = stores.paymentStore();

onMounted(function(){
  Promise.all([
    employee.loadEmployees(),
    client.loadClients(),
    service.loadServices(),
  ])
    .then(function(s){
      
    })
    .catch(function(e){
      
    });
});

const rules = reactive({
  strings: (v) =>
    !!(v || "").match("^[a-z A-Z s]+$") || "Por favor, informe apenas letras.",
  numbers: (v) =>
    !!(v || "").match("^[0-9 .]+$") || "Por favor, informe apenas números.",
  required: (v) => !!v || "Este campo é mandatório.",
  form: false,
  isLoading: false,
  dialog: false,
});

let paymentMethod = ref("none");

const internal = reactive({})

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
  reportedAt: undefined,
  status: true,
});
const input_totals = reactive({
  employeeGains() {
    let hours = input.employee_work_hours;
    let salary = input.employee_salary_hours;
    let gain_sal = parseFloat(hours * salary) || 0;

    let billing = input.service_billing;
    let percentage = input.employee_service_percentage;
    let gain_per = parseFloat(billing * percentage) || 0;

    let miles = input.employee_miles_travelled;
    let efficiency = input.employee_car_efficiency;
    let gas = input.employee_gas_price;
    let gain_gas = parseFloat((miles / efficiency) * gas) || 0;

    let tips = parseFloat(input.employee_tips) || 0;
    let discounts = parseFloat(input.employee_discounts) || 0;

    let gain_total = gain_sal + gain_per + gain_gas + tips - discounts;
    let final = gain_total || 0;
    final = parseFloat(final).toFixed(2)
    internal.employee_gains = final
    input.employee_gains = final
    return final
  },
  companyGains() {
    let hours = input.employee_work_hours;
    let salary = input.employee_salary_hours;
    let gain_sal = parseFloat(hours * salary) || 0;

    let billing = parseFloat(input.service_billing) || 0;
    let percentage = input.employee_service_percentage;
    let gain_per = parseFloat(billing * percentage) || 0;

    let miles = input.employee_miles_travelled;
    let efficiency = input.employee_car_efficiency;
    let gas = input.employee_gas_price;
    let gain_gas = parseFloat((miles / efficiency) * gas) || 0;

    let discounts = parseFloat(input.employee_discounts) || 0;

    let gain_total = billing - (gain_sal + gain_per + gain_gas - discounts);
    let final = gain_total || 0;
    final = parseFloat(final).toFixed(2)
    internal.employer_gains = final
    input.employer_gains = final
    return final
  },
});

function validateForm() {
  if (
    input.reportedAt && 
    input.client &&
    input.employee &&
    input.service && 
    input.service_billing &&
    ((input.employee_salary_hours && input.employee_work_hours) ||
      input.employee_service_percentage)
  ) {
    rules.form = true;
  }
}

function savePayment(form) {
  rules.isLoading = true
  payment
    .savePayments(input, internal)
    .then(function(s){
      rules.output = "Pagamento salvo com sucesso!";
      rules.dialog = true;
    })
    .catch(function(e){
      rules.output =
        "Pagamento não pode ser salvo! Tente novamente mais tarde.";
      rules.dialog = true;
    })
    .finally(function(){
      rules.isLoading = false
      form.reset()
      rules.form =false
    });
}

function reset(){
  input.client= undefined
  input.reportedAt= undefined
  input.employee= undefined
  input.employee_car_efficiency= undefined
  input.employee_discounts= undefined
  input.employee_discounts_description= undefined
  input.employee_gains= undefined
  input.employee_gas_price= undefined
  input.employee_miles_travelled= undefined
  input.employee_salary_hours= undefined
  input.employee_service_percentage= undefined
  input.employee_tips= undefined
  input.employee_work_hours= undefined
  input.employer_gains= undefined
  input.service= undefined
  input.service_billing= undefined
  input.reportedAt= undefined
  input.status= true
}

</script>

<style scoped>

</style>