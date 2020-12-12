<template>
  <v-app>
    <Navbar />
    <MenuTwo />
  </v-app>
</template>

<script>
import Navbar from "@/Admin/Menus/MenuTwo/components/Navbar.vue";
import MenuTwo from "@/Admin/Menus/MenuTwo/components/MenuTwo.vue";
export default {
  name: "Menu",
  components: {
    Navbar,
    MenuTwo,
  },
};
</script>
