<template>
  <v-card class="mx-auto">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Controle de Pagamentos
      </v-card-title>
    </v-toolbar>
    <div class="row pa-4 pt-6">
      <div class="col-md-6">
        <img src="@/assets/jortiz.png" alt="" style="width: 110px" />
      </div>
    </div>
    <div class="row">
      <v-form ref="form" lazy-validation class="pa-4 pt-6">
        <div class="row">
          <v-col cols="4">
            <v-select
              :hint="'Colaborador quem receberá o pagamento.'"
              :items="employee.nameEmployees"
              item-title="name"
              item-value="id"
              label="Colaborador"
              @update:modelValue="
                (input.employeeName = $event.name), validateForm()
              "
              persistent-hint
              return-object
              single-line
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              label="Início"
              type="date"
              required
              v-model="input.startDate"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              label="Fim"
              type="date"
              required
              v-model="input.endDate"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              :disabled="!rules.form"
              :loading="rules.isLoading"
              @click="searchPayment()"
            >
              Salvar
            </v-btn>
          </v-col>
        </div>
      </v-form>
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
onMounted(() => {
  Promise.all([
    employee.loadEmployees(),
    client.loadClients(),
    service.loadServices(),
  ])
    .then((s) => {})
    .catch((e) => {});
});

const input = reactive({
  employeeName: undefined,
  startDate: undefined,
  endDate: undefined,
});

function searchPayment() {
  console.log("Searching for.. ", this.input);
}

const rules = reactive({
  form: false,
  isLoading: false,
  dialog: false,
})

function validateForm() {
  if (employeeName && startDate && endDate) {
    rules.form = true
  }
}
</script>

<style>
</style>