<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      mini-variant-width="100"
      class="cyan darken-1"
    >
      <v-list>
        <v-list-item>
          <v-list-item-action></v-list-item-action>
        </v-list-item>
      </v-list>
      <v-list flat>
        <v-list-item to="/">
          <v-list-item-content>
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="150"
              max-width="250"
              class="rounded"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-icon class="mb-3">business</v-icon>
            <v-list-item-subtitle align="center" color="error"
              >Sobre Nosotros</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-content>
            <v-icon class="mb-3">perm_phone_msg</v-icon>
            <v-list-item-subtitle align="center">Contacto</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
.v-application .cyan.darken-1 {
  background-color: white !important;
}
.v-list-item__subtitle {
  color: black !important;
}
.theme--dark.v-icon {
  color: black !important;
}
</style>
