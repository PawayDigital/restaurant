<template>
  <v-app>
    <Navbar />
    <Profile />
  </v-app>
</template>
<script>
import Navbar from "@/Admin/Empresas/components/Profile/Navbar.vue";
import Profile from "@/Admin/Empresas/components/Profile/Profile.vue";
export default {
  name: "Admin",
  components: {
    Navbar,
    Profile,
  },
};
</script>
