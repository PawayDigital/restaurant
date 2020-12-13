<template>
  <div>
    <v-container>
      <v-card flat tile>
        <v-app-bar app fixed dense>
          <v-img
            max-height="50"
            max-width="50"
            :lazy-src="_url + perfilimg.url"
            :src="_url + perfilimg.url"
            class="logo"
          ></v-img>
          <v-toolbar-title>{{ perfil.nombre_empresa }}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-tabs color="secundary">
            <v-tab to="/login">
              Sobre Nosotros
            </v-tab>
            <v-tab to="/login">
              Contacto
            </v-tab>
          </v-tabs>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" temporary>
          <v-container class="d-flex flex-column align-center mt-16">
            <router-link to="/" class="text-decoration-none mb-8"
              >Home</router-link
            >
            <router-link to="/contact" class="text-decoration-none mb-10"
              >Contact</router-link
            >
            <router-link to="/login" class="text-decoration-none mb-10"
              ><v-btn color="accent">Login</v-btn></router-link
            >
            <router-link to="/join" class="text-decoration-none"
              ><v-btn color="accent">Register</v-btn></router-link
            >
          </v-container>
        </v-navigation-drawer>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      drawer: false,
      perfilimg: [],
      perfil: [],
    };
  },
  mounted() {
    this.miperfilimg();
  },
  computed: {
    _url() {
      return process.env.VUE_APP_RUTA_API;
    },
  },
  methods: {
    miperfilimg() {
      const id = localStorage.getItem("id");
      axios.get(this._url + "/users/" + id).then((res) => {
        if (res.status == 200) {
          this.perfilimg = res.data.foto.imagen;
          this.perfil = res.data;
        }
      });
    },
  },
};
</script>

<style>
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-app-bar.v-app-bar--fixed {
  position: unset;
}
.v-application a {
  color: black !important;
}
.theme--light.v-card {
  background-color: transparent !important;
}
</style>
