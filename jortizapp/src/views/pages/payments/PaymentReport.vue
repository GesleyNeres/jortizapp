<template>
  <v-card class="mx-auto p-2 printable">
    <v-toolbar cards dark flat>
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
      <v-form ref="form" lazy-validation class="col-12 pa-4 pt-6">
        <div class="row">
          <v-col cols="4">
            <v-select
              :hint="'Colaborador quem receberá o pagamento.'"
              :items="employee.nameEmployees"
              item-title="name"
              item-value="id"
              label="Colaborador"
              @update:modelValue="input.employeeName = $event.name"
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
            <button type="button" class="btn btn-primary no-print" :loading="rules.isLoading" @click="searchPayment()">Buscar</button>
          </v-col>
        </div>
      </v-form>
      <div class="col-12">
        <div class="row">
          <div class="table table-responsive">
            <table v-if="payment.hasReports" class="table table-bordered">
              <thead>
                <tr>
                  <th class="text-left">Segunda</th>
                  <th class="text-left">Terça</th>
                  <th class="text-left">Quarta</th>
                  <th class="text-left">Quinta</th>
                  <th class="text-left">Sexta</th>
                  <th class="text-left">Sábado</th>
                  <th class="text-left">Domingo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in payment.reports" :key="index">
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Monday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Tuesday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Wednesday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Thursday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Friday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Saturday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                  <td class="table-text" style="width: 14%">
                    <p v-if="item.weekday === 'Sunday'">
                      {{ item.client }}
                      <span class="text-primary"
                        >${{ item.employee_gains }}</span
                      >
                    </p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalMonday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalMonday).toFixed(2)
                      }}
                    </p>
                  </td>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalTuesday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalTuesday).toFixed(2)
                      }}
                    </p>
                  </td>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalWednesday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalWednesday).toFixed(
                          2
                        )
                      }}
                    </p>
                  </td>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalThursday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalThursday).toFixed(
                          2
                        )
                      }}
                    </p>
                  </td>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalFriday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalFriday).toFixed(2)
                      }}
                    </p>
                  </td>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalSaturday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalSaturday).toFixed(
                          2
                        )
                      }}
                    </p>
                  </td>
                  <td
                    class="table-text"
                    v-if="payment.paymentReportTotalSunday"
                  >
                    <p>
                      ${{
                        parseFloat(payment.paymentReportTotalSunday).toFixed(2)
                      }}
                    </p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row">
          <table
            class="table app-report-additional table-striped table-bordered"
            v-if="payment.paymentReportTipsEmployee > 0"
          >
            <thead>
              <tr>
                <th class="table-text-head">Cliente</th>
                <th class="table-text-head">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in payment.reports" :key="index">
                <td class="table-text" v-if="item.employee_tips > 0">
                  {{ item.client }}
                </td>
                <td class="table-text" v-if="item.employee_tips > 0">
                  $ {{ item.employee_tips }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="table-text">Total</td>
                <td v-if="payment.reports" class="table-text">
                  $ <span>{{ payment.paymentReportTipsEmployee }}</span>
                </td>
              </tr>
            </tfoot>
          </table>
          <span v-if="payment.paymentReportTipsEmployee <= 0">
            Nenhuma 'Tip' reportada.
          </span>
        </div>
        <!-- Tips -->
        <div class="row">
          <p v-if="payment.paymentReportGasEmployee > 0" class="table-text">
            Gasolina <span>$ {{ payment.paymentReportGasEmployee }}</span>
          </p>
          <p v-if="!payment.paymentReportGasEmployee <= 0">
            Nenhum custo com gasolina reportado.
          </p>
        </div>
        <!-- Gas cost -->
      </div>
    </div>
    <div class="row signature">
      <v-col cols="3" v-if="payment.paymentReportTotal">
        <span>Recebido: ${{parseFloat(payment.paymentReportTotal).toFixed(2)}} </span>
      </v-col>
      <v-col cols="4">
        <span>Assinatura:__________________________</span>
      </v-col>
      <v-col cols="3">
        <span>Data:___/___/_____</span>
      </v-col>
      <v-col cols="2">
        <button type="button" class="btn btn-primary no-print" :loading="rules.isLoading" @click="printPayment()">Imprimir</button>
      </v-col>
    </div>
    <!-- Sign and Date -->
  </v-card>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import stores from "@/stores/index.js";
const employee = stores.employeeStore();
const client = stores.clientStore();
const service = stores.serviceStore();
const payment = stores.paymentStore();

onMounted(function () {
  Promise.all([
    employee.loadEmployees(),
    client.loadClients(),
    service.loadServices(),
  ])
    .then(function(s){})
    .catch(function(e){});
});

const input = reactive({
  employeeName: undefined,
  startDate: undefined,
  endDate: undefined,
});

const rules = reactive({
  form: false,
  isLoading: false,
  dialog: false,
});

function searchPayment() {
  if (!input.employeeName || !input.startDate || !input.endDate ) {
    alert("Informe o colaborador, data de início e e fim.")
  }else{
    payment
    .searchPayments(input)
    .then()
    .catch();
  }
  
}
function printPayment(){
  window.print()
}
</script>

<style scoped>
@media print {
  * {
    font-size: 10pt !important;
    padding: 0px !important;
    margin: 0px !important;
  }
  .no-print {
    display: none !important;
  }
  .printable {
    padding: 2px;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 9999;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .signature {
    bottom: 0px;
    position: fixed;
    width: 100%;
  }
}
</style>