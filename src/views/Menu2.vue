<template>
  <v-app>
    <Navbar />
    <Menu />
  </v-app>
</template>

<script>
import Menu from "@/components/MenuSegundo/Menu.vue";
import Navbar from "@/components/MenuSegundo/Navbar.vue";
export default {
  name: "Menu2",
  components: {
    Navbar,
    Menu,
  },
};
</script>

<style>
@import "../assets/css/header.css";
</style>
