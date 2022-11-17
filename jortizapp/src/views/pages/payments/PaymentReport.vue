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
            <v-btn
              color="primary"
              :loading="rules.isLoading"
              @click="searchPayment()"
            >
              Salvar
            </v-btn>
          </v-col>
        </div>
        <div class="row">
          <v-table fixed-header height="300px" v-if="payment.hasReports">
            <thead>
              <tr>
                <th>Index</th>
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
                <td>{{index}}</td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportMonday[index]"
                  >
                    {{ payment.paymentReportMonday[index].client }}
                    <span v-if="payment.paymentReportMonday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportMonday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportTuesday[index]"
                  >
                    {{ payment.paymentReportTuesday[index].client }}
                    <span v-if="payment.paymentReportTuesday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportTuesday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportWednesday[index]"
                  >
                    {{ payment.paymentReportWednesday[index].client }}
                    <span v-if="payment.paymentReportWednesday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportWednesday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportThursday[index]"
                  >
                    {{ payment.paymentReportThursday[index].client }}
                    <span v-if="payment.paymentReportThursday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportThursday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportFriday[index]"
                  >
                    {{ payment.paymentReportFriday[index].client }}
                    <span v-if="payment.paymentReportFriday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportFriday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportSaturday[index]"
                  >
                    {{ payment.paymentReportSaturday[index].client }}
                    <span v-if="payment.paymentReportSaturday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportSaturday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
                <td class="table-text">
                  <p
                    class="text-primary"
                    v-if="payment.paymentReportSunday[index]"
                  >
                    {{ payment.paymentReportSunday[index].client }}
                    <span v-if="payment.paymentReportSunday[index]">
                      ${{
                        parseFloat(
                          payment.paymentReportSunday[index].employee_gains
                        ).toFixed(2)
                      }}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td class="table-text" v-if="payment.paymentReportTotalMonday">
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
                      parseFloat(payment.paymentReportTotalThursday).toFixed(2)
                    }}
                  </p>
                </td>
                <td class="table-text" v-if="payment.paymentReportTotalFriday">
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
                      parseFloat(payment.paymentReportTotalSaturday).toFixed(2)
                    }}
                  </p>
                </td>
                <td class="table-text" v-if="payment.paymentReportTotalSunday">
                  <p>
                    ${{
                      parseFloat(payment.paymentReportTotalSunday).toFixed(2)
                    }}
                  </p>
                </td>
              </tr>
            </tfoot>
          </v-table>
        </div>
        <div class="row">
           <table class="table app-report-additional table-striped table-bordered">
            <thead>
              <tr>
                <th class="table-text-head">Cliente</th>
                <th class="table-text-head">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in payment.reports" :key="index">
                <td class="table-text" v-if="item.employee_tips > 0">{{ item.client }}</td>
                <td class="table-text" v-if="item.employee_tips > 0">$ {{ item.employee_tips }}</td>
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
        </div>
        <div class="row">
          <p v-if="payment.reports" class="table-text">
            Gasolina <span>$ {{ payment.paymentReportGasEmployee }}</span>
          </p>
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

const rules = reactive({
  form: false,
  isLoading: false,
  dialog: false,
});

function searchPayment() {
  payment
    .searchPayments(this.input)
    .then((s) => {
      console.log("Sucesso.. ", s);
    })
    .catch((e) => {
      console.log("Erro.. ", e);
    });
}
</script>

<style>
</style>