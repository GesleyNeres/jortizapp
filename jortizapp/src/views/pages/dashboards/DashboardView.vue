<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-4">
        <v-card class="mx-auto" variant="outlined">
          <v-img
            src="/images/clients.png"
            height="200px"
            cover
          ></v-img>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Clientes</div>
              <div class="text-h6 mb-1">Clientes da Companhia</div>
              <div class="text-caption">
                Clientes atualmente ativos
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <router-link
              :to="{ name: 'client-list' }"
              variant="outlined"
              type="button"
              class="btn btn-primary"
            >
              Clientes ativos
              <span class="badge text-bg-secondary">
                {{ application.application.clients_count }}
              </span>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-md-4">
        <v-card class="mx-auto" variant="outlined">
          <v-img
            src="/images/employees.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Colaboradores</div>
              <div class="text-h6 mb-1">Colaboradores da Companhia</div>
              <div class="text-caption">
                Colaboradores atualmente ativos
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <router-link
              :to="{ name: 'employee-list' }"
              variant="outlined"
              type="button"
              class="btn btn-primary"
              >Colaboradores ativos
              <span class="badge text-bg-secondary">
                {{ application.application.employees_count }}
              </span>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-md-4">
        <v-card class="mx-auto" variant="outlined">
          <v-img
            src="/images/services.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Serviços</div>
              <div class="text-h6 mb-1">Serviços disponíveis na Companhia</div>
              <div class="text-caption">
                Serviços atualmente ativos
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <router-link
              :to="{ name: 'service-list' }"
              variant="outlined"
              type="button"
              class="btn btn-primary"
            >
              Serviços ativos
              <span class="badge text-bg-secondary">
                {{ application.application.services_count }}
              </span>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-4">
        <v-card class="mx-auto" variant="outlined">
          <v-img
            src="/images/payments.jpg"
            height="200px"
            cover
          ></v-img>
          <v-card-item>
            <div>
              <div class="text-overline mb-1">Pagamentos</div>
              <div class="text-h6 mb-1">Pagamentos realizados pela Companhia</div>
              <div class="text-caption">
                Pagamentos ativos e relatórios
              </div>
            </div>
          </v-card-item>

          <v-card-actions>
            <router-link
              :to="{ name: 'payment-list' }"
              variant="outlined"
              type="button"
              class="btn btn-primary"
            >
              Pagamentos ativos
              <span class="badge text-bg-secondary">
                {{ application.application.payslips_count }}
              </span>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted } from "vue";
import stores from "@/stores/index.js";
const application = stores.applicationStore();

onMounted(function(){
  application.loadApplication().then().catch();
})


</script>

<style>
</style>