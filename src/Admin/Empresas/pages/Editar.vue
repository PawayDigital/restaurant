<template>
  <v-app>
    <Navbar />
    <EditarEmpresa />
  </v-app>
</template>
<script>
import Navbar from "@/Admin/Empresas/components/Profile/Navbar.vue";
import EditarEmpresa from "@/Admin/Empresas/components/Profile/Editar.vue";
export default {
  name: "Editar",
  components: {
    Navbar,
    EditarEmpresa,
  },
};
</script>
