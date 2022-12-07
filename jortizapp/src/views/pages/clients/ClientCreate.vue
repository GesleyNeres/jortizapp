<template>
  <v-card class="mx-auto" >
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Cadastro de Clientes
      </v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="rules.form" class="pa-4 pt-6">
      <v-text-field
        v-model="input.name"
        :rules="[rules.strings, rules.required]"
        variant="filled"
        color=""
        label="Nome"
      ></v-text-field>
      <div class="row">
        <v-col cols="4">
          <v-text-field
            v-model="input.phone"
            :rules="[rules.numbers, rules.required]"
            variant="filled"
            color=""
            label="Telefone"
          ></v-text-field>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="input.email"
            :rules="[rules.email, rules.required]"
            variant="filled"
            color=""
            label="Email"
            type="email"
          ></v-text-field>
        </v-col>
      </div>
      <v-text-field
        v-model="input.address"
        variant="filled"
        :rules="[rules.addresses, rules.required]"
        color=""
        label="Endereço"
      ></v-text-field>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="input.city"
            variant="filled"
            :rules="[rules.strings, rules.required]"
            color=""
            label="Cidade"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="input.state"
            variant="filled"
            :rules="[rules.strings, rules.required]"
            color=""
            label="Estado"
          ></v-text-field>
        </v-col>
      </div>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="input.cost"
            variant="filled"
            :rules="[rules.currencies, rules.required]"
            color=""
            label="Custo"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="input.total_revenue"
            variant="filled"
            :rules="[rules.currencies, rules.required]"
            color=""
            label="Total Revenue"
          ></v-text-field>
        </v-col>
      </div>
      <v-textarea
        v-model="input.details"
        auto-grow
        variant="filled"
        color=""
        label="Detalhes"
        :rules="[rules.required]"
        rows="1"
      ></v-textarea>
      <v-checkbox v-model="input.status" color="">
        <template v-slot:label> Cliente ativo? </template>
      </v-checkbox>
    </v-form>
    <v-card-actions>
      <button type="button" class="btn btn-light" @click="$refs.form.reset()"> Limpar </button>
      <v-spacer></v-spacer>
      <button
        type="button"
        :loading="rules.isLoading"
        class="btn btn-primary"
        @click="saveClient($refs.form)"
      >
        Salvar
      </button>
    </v-card-actions>
    <div class="text-center">
      <!-- <v-btn color="primary"> Open Dialog </v-btn> -->
      <v-dialog v-model="rules.dialog" activator="parent" type="error">
        <v-card>
          <v-card-text>
            <span>{{rules.output}}</span>
          </v-card-text>
          <v-card-actions class="d-grid">
            <button type="button" class="btn btn-primary block" @click="rules.dialog = false">FECHAR</button>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import stores from "@/stores/index.js";
const client = stores.clientStore();

const rules = reactive({
  strings: (v) =>
    !!(v || "").match("^[a-z A-Z s]+$") || "Por favor, informe apenas letras.",
  addresses: (v) =>
    !!(v || "").match("^[a-z A-Z 0-9 s ,]+$") ||
    "Você pode inserir letras, números, virgulas e espaços em branco.",
  numbers: (v) =>
    !!(v || "").match("^[0-9 s]+$") || "Por favor, informe apenas números.",
  currencies: (v) =>
    !!(v || "").match("^[0-9 , .]+$") ||
    "Por favor, informe valores monetários válidos.",
  email: (v) => !!(v || "").match(/@/) || "Por favor, informe um email valido.",
  required: (v) => !!v || "Este campo é mandatório.",
  form: false,
  isLoading: false,
  dialog: false,
});

const input = reactive({
  name: undefined,
  phone: undefined,
  email: undefined,
  address: undefined,
  city: undefined,
  state: undefined,
  cost: undefined,
  total_revenue: undefined,
  details: undefined,
  status: true,
});

function saveClient(form) {
  client
    .saveClients(input)
    .then(function(s){
      rules.output = "Cliente salvo com sucesso!"
      rules.dialog = true;
    })
    .catch(function(e){
      rules.output = "Cliente não pode ser salvo! Tente novamente mais tarde."
      rules.dialog = true;
    })
    .finally(function(){
      form.reset()
    });
}
</script>

<style>
</style>