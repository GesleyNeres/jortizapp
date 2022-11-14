<template>
  <v-card class="mx-auto" >
    <v-toolbar color="" cards dark flat>
      <v-card-title class="text-h6 font-weight-regular">
        Cadastro de Colaboradores
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
      </div>
      <v-checkbox v-model="input.status" color="">
        <template v-slot:label> Colaborador ativo? </template>
      </v-checkbox>
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
  name: undefined,
  phone: undefined,
  status: true,
});

function saveEmployee(form) {
  employee
    .saveEmployees(this.input)
    .then((s) => {
      rules.output = "Colaborador salvo com sucesso!"
      rules.dialog = true;
    })
    .catch((e) => {
      rules.output = "Colaborador não pode ser salvo! Tente novamente mais tarde."
      rules.dialog = true;
    })
    .finally(() => {
      form.reset()
    });
}
</script>

<style>
</style>