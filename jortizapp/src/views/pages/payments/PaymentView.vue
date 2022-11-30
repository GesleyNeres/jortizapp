<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col-md-2 d-flex flex-column no-print">
        
          <router-link :to="{ name: 'payment-list' }" type="button" class="btn btn-light"
            >Listar</router-link
          >
        
        <v-divider></v-divider>
        
          <router-link :to="{ name: 'payment-create' }" type="button" class="btn btn-light"
            >Criar</router-link
          >
        
        <v-divider></v-divider>
        
          <router-link :to="{ name: 'payment-report' }" type="button" class="btn btn-light"
            >Relatório</router-link
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
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
