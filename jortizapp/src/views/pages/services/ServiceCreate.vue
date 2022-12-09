vu<template>
  <v-card class="mx-auto">
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Cadastro de Serviços
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
      <v-textarea
        v-model="input.description"
        auto-grow
        variant="filled"
        color=""
        label="Descrição"
        :rules="[rules.required]"
        rows="1"
      ></v-textarea>
      <div class="row">
        <v-col cols="6">
          <v-text-field
            v-model="input.price"
            variant="filled"
            :rules="[rules.currencies, rules.required]"
            color=""
            label="Preço do Serviço"
          ></v-text-field>
        </v-col>
      </div>
      <v-checkbox v-model="input.status" color="">
        <template v-slot:label> Serviço ativo? </template>
      </v-checkbox>
    </v-form>
    <v-card-actions>
      <button vclass="btn btn-light" type="button" @click="$refs.form.reset()">
        Limpar
      </button>
      <v-spacer></v-spacer>
      <button
        type="button"
        :disabled="!rules.form"
        :loading="rules.isLoading"
        class="btn btn-primary"
        @click="saveService($refs.form)"
      >
        Salvar
      </button>
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
import {reactive } from "vue";
import stores from "@/stores/index.js";
const service = stores.serviceStore();

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
  description: undefined,
  price: undefined,
  status: true,
});

function saveService(form) {
  service
    .saveServices(input)
    .then(function(s){
      rules.output = "Serviço salvo com sucesso!";
      rules.dialog = true;
    })
    .catch(function(e){
      rules.output = "Serviço não pode ser salvo! Tente novamente mais tarde.";
      rules.dialog = true;
    })
    .finally(function(){
      form.reset();
    });
}
</script>

<style>
</style>