<template>
  <v-app>
    <div v-if="menu === 'menu_one'">
      <Navbar />
      <MenuOne />
    </div>
    <div v-else-if="menu === 'menu_two'">
      <NavbarTwo />
      <MenuTwo />
    </div>
  </v-app>
</template>

<script>
import axios from "axios";

import Navbar from "@/Admin/Menus/MenuOne/components/Navbar.vue";
import MenuOne from "@/Admin/Menus/MenuOne/components/MenuOne.vue";

import NavbarTwo from "@/Admin/Menus/MenuTwo/components/Navbar.vue";
import MenuTwo from "@/Admin/Menus/MenuTwo/components/MenuTwo.vue";

export default {
  name: "Menu",
  components: {
    Navbar,
    MenuOne,
    NavbarTwo,
    MenuTwo,
  },
  data() {
    return {
      menu: "",
      user: [],
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user.plantilla.nombre);
    this.menus();
  },
  methods: {
    menus() {
      axios
        .get(process.env.VUE_APP_RUTA_API + "/users/" + this.user.id)
        .then((res) => {
          this.menu = res.data.plantilla.nombre;
        });
    },
  },
};
</script>
