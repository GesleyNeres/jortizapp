<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-2 d-flex flex-column">
        <router-link
          type="button"
          :to="{ name: 'client-list' }"
          class="btn btn-light"
          variant="outlined"
          >Listar</router-link
        >

        <v-divider></v-divider>
        <router-link
          type="button"
          :to="{ name: 'client-create' }"
          class="btn btn-light"
          variant="outlined"
          >Criar</router-link
        >
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
