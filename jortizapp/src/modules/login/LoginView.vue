<template>
  <v-sheet class="appFormContainer" rounded>
    <v-card class="mx-auto px-6 py-8" width="450">
      <div>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          cover
        ></v-img>
        <v-divider></v-divider>
      </div>
      <v-form v-model="formData.form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="formData.email"
          :readonly="formData.loading"
          :rules="formData.rules.emailMatch"
          class="mb-2"
          clearable
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          :readonly="formData.loading"
          :rules="[formData.rules.required]"
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
        ></v-text-field>
        <br />

        <v-btn
          :disabled="!formData.form"
          :loading="formData.loading"
          block
          size="large"
          type="submit"
          variant="elevated"
          class="appColor"
        >
          Sign In
        </v-btn>
        <v-divider></v-divider>
        <v-alert prominent type="error" variant="outlined" v-if="formData.output">
          {{formData.output}}
        </v-alert>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script setup>
import router from "@/router/index";
import userStore from "@/stores/index";
import { ref, reactive } from "vue";

const user = userStore.userStore();

/* Function to call login api */
function onSubmit() {
  if (!formData.form) return;

  formData.loading = true;

  user
    .doLogin(formData.email, formData.password)
    .then(s=>{
      router.push('/dashboards')
    })
    .catch((e) => {
      formData.output = e
    })
    .finally(() => {
      setTimeout(()=>{
        formData.output = null
      },3000)
      formData.loading = false;
    });
}
/* Object to support form interaction */
const formData = reactive({
  form: false,
  email: null,
  password: null,
  loading: false,
  output: null,
  show: false,
  rules: {
    required: (value) => !!value || "Required.",
    emailMatch: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  },
});
</script>

<style scoped>
.appFormContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.appColor {
  background-color: blue !important;
  color: #fff !important;
}
</style>
