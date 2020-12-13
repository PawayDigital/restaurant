<template>
  <v-app>
    <Navbar />
    <Table />
  </v-app>
</template>
<script>
import Navbar from "@/Admin/Empresas/components/Profile/Navbar.vue";
import Table from "@/Admin/Empresas/components/Categorys/Table.vue";
export default {
  name: "Categoria",
  components: {
    Navbar,
    Table,
  },
};
</script>

<style>
.theme--light.v-card {
  background-color: white !important;
}
</style>
