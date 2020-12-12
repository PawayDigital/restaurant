<template>
  <div>
    <v-container>
      <v-card flat tile>
        <v-app-bar app fixed dense>
          <v-img
            lazy-src="@/Layouts/assets/logo/logo.svg"
            max-height="50"
            max-width="50"
            src="@/Layouts/assets/logo/logo.svg"
            class="logo"
          ></v-img>
          <v-toolbar-title>Restaurant</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-tabs color="secundary">
            <v-tab to="/">
              Menu
            </v-tab>
            <v-tab to="/contact">
              Jugos
            </v-tab>
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
export default {
  data() {
    return {
      drawer: false,
    };
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
</style>
