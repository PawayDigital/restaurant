<template>
  <v-app>
    <Navbar />
    <MenuOne />
  </v-app>
</template>

<script>
import Navbar from "@/Admin/Menus/MenuOne/components/Navbar.vue";
import MenuOne from "@/Admin/Menus/MenuOne/components/MenuOne.vue";

export default {
  name: "Menu",
  components: {
    Navbar,
    MenuOne,
  },
};
</script>
