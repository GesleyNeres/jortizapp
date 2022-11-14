<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-2 d-flex flex-column">
        <v-btn variant="outlined">
          <router-link :to="{ name: 'employee-list' }" class="nav-link"
            >Listar</router-link
          >
        </v-btn>

        <v-divider></v-divider>
        <v-btn variant="outlined">
          <router-link :to="{ name: 'employee-create' }" class="nav-link"
            >Criar</router-link
          >
        </v-btn>
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
