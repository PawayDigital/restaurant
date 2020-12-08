<template>
  <v-app>
    <Navbar />
    <Menu1 />
  </v-app>
</template>

<script>
import Menu1 from "@/components/Menu/Menu1.vue";
import Navbar from "@/components/Menu/Navbar.vue";
export default {
  name: "Menu",
  components: {
    Navbar,
    Menu1,
  },
};
</script>

<style lang="scss" scoped></style>
