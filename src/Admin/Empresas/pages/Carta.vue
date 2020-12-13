<template>
  <v-app>
    <Navbar />
    <Table />
  </v-app>
</template>
<script>
import Navbar from "@/Admin/Empresas/components/Profile/Navbar.vue";
import Table from "@/Admin/Empresas/components/Carta/Table.vue";
export default {
  name: "Carta",
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
