<template>
  <v-app>
    <Navbar />
    <!-- <Table /> -->
    <Profile />
  </v-app>
</template>
<script>
import Navbar from "@/components/Admin/Navbar.vue";
import Table from "@/components/Admin/Table.vue";
import Profile from "@/components/Admin/Profile.vue";
export default {
  name: "Admin",
  components: {
    Navbar,
    Table,
    Profile,
  },
};
</script>

<style>
@import "../assets/css/admin.css";
</style>
